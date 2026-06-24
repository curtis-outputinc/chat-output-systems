/**
 * Per-IP rate limiter backed by Supabase.
 *
 * Why Supabase instead of Upstash/Vercel KV: keeps the vendor surface narrow,
 * works reliably across serverless instances (in-memory wouldn't), and the
 * data is in the same database as everything else.
 *
 * Strategy: count messages from the same IP in the last hour. If under the
 * limit, allow + record. If over, deny.
 *
 * The rate-limit table is part of the chatbot schema (see migration
 * 20260509000001_add_chatbot_v1_features.sql).
 */

import { getSupabaseService } from './supabase';

export interface RateLimitResult {
  allowed: boolean;
  /** How many requests are remaining in the current window. */
  remaining: number;
  /** Seconds until the window resets (rolling — based on oldest record in window). */
  resetSeconds?: number;
}

const WINDOW_MINUTES = 60;
const MAX_REQUESTS_PER_WINDOW = 30;

const DAILY_WINDOW_HOURS = 24;
const MAX_REQUESTS_PER_DAY = 300;

const MAX_MESSAGES_PER_CONVERSATION = 20;

export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  if (!ip || ip === 'unknown') {
    // If we can't identify the IP, fail open. The chatbot is more useful
    // than rigid; abuse without an IP is rare in practice.
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW };
  }

  const supabase = getSupabaseService();
  const windowStart = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

  const { count, error: countError } = await supabase
    .from('rate_limits')
    .select('*', { count: 'exact', head: true })
    .eq('ip', ip)
    .gte('created_at', windowStart);

  if (countError) {
    // Database hiccup — fail open. Logged elsewhere.
    console.error('rate-limit count failed', countError);
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW };
  }

  const used = count ?? 0;
  const remaining = Math.max(0, MAX_REQUESTS_PER_WINDOW - used - 1);

  if (used >= MAX_REQUESTS_PER_WINDOW) {
    // Find the oldest record in the window so we can return reset seconds.
    const { data: oldest } = await supabase
      .from('rate_limits')
      .select('created_at')
      .eq('ip', ip)
      .gte('created_at', windowStart)
      .order('created_at', { ascending: true })
      .limit(1)
      .maybeSingle();

    const oldestMs = oldest ? new Date(oldest.created_at).getTime() : Date.now();
    const resetSeconds = Math.max(
      1,
      Math.ceil((oldestMs + WINDOW_MINUTES * 60 * 1000 - Date.now()) / 1000),
    );

    return { allowed: false, remaining: 0, resetSeconds };
  }

  // Allowed — record the hit. Don't await it on the hot path; if the insert
  // fails we'll under-count slightly, which is acceptable.
  void supabase.from('rate_limits').insert({ ip }).then(({ error }) => {
    if (error) console.error('rate-limit insert failed', error);
  });

  return { allowed: true, remaining };
}

/**
 * Daily per-IP cap. Backs onto the same `rate_limits` table — every allowed
 * chat POST already inserts a row, so we just widen the window. Protects
 * against a single IP burning through hours of hourly windows in a day.
 *
 * This check is intended to run AFTER `checkRateLimit` (which is hourly).
 * It does not insert — the hourly check is what records the hit.
 */
export async function checkDailyLimit(ip: string): Promise<RateLimitResult> {
  if (!ip || ip === 'unknown') {
    return { allowed: true, remaining: MAX_REQUESTS_PER_DAY };
  }

  const supabase = getSupabaseService();
  const windowStart = new Date(Date.now() - DAILY_WINDOW_HOURS * 60 * 60 * 1000).toISOString();

  const { count, error } = await supabase
    .from('rate_limits')
    .select('*', { count: 'exact', head: true })
    .eq('ip', ip)
    .gte('created_at', windowStart);

  if (error) {
    // Fail open on DB hiccups, consistent with hourly check.
    console.error('daily-limit count failed', error);
    return { allowed: true, remaining: MAX_REQUESTS_PER_DAY };
  }

  const used = count ?? 0;
  const remaining = Math.max(0, MAX_REQUESTS_PER_DAY - used);

  if (used >= MAX_REQUESTS_PER_DAY) {
    // Pull oldest hit in the 24h window to compute reset.
    const { data: oldest } = await supabase
      .from('rate_limits')
      .select('created_at')
      .eq('ip', ip)
      .gte('created_at', windowStart)
      .order('created_at', { ascending: true })
      .limit(1)
      .maybeSingle();

    const oldestMs = oldest ? new Date(oldest.created_at).getTime() : Date.now();
    const resetSeconds = Math.max(
      1,
      Math.ceil((oldestMs + DAILY_WINDOW_HOURS * 60 * 60 * 1000 - Date.now()) / 1000),
    );

    return { allowed: false, remaining: 0, resetSeconds };
  }

  return { allowed: true, remaining };
}

export interface ConversationLimitResult {
  allowed: boolean;
  /** Current count of user messages in the conversation. */
  count: number;
  /** The hard cap (so callers can include it in error messages). */
  limit: number;
}

/**
 * Per-conversation cap on user messages. Counts rows in `messages` with
 * role='user' and the given conversation_id. Skip when no conversation_id is
 * supplied (first turn — conversation hasn't been created yet, so count is 0).
 */
export async function checkConversationLimit(
  conversationId: string | null | undefined,
): Promise<ConversationLimitResult> {
  if (!conversationId) {
    return { allowed: true, count: 0, limit: MAX_MESSAGES_PER_CONVERSATION };
  }

  const supabase = getSupabaseService();
  const { count, error } = await supabase
    .from('messages')
    .select('*', { count: 'exact', head: true })
    .eq('conversation_id', conversationId)
    .eq('role', 'user');

  if (error) {
    console.error('conversation-limit count failed', error);
    return { allowed: true, count: 0, limit: MAX_MESSAGES_PER_CONVERSATION };
  }

  const used = count ?? 0;
  return {
    allowed: used < MAX_MESSAGES_PER_CONVERSATION,
    count: used,
    limit: MAX_MESSAGES_PER_CONVERSATION,
  };
}

/**
 * Extract the visitor's IP from a Next.js request. Handles the common headers
 * Vercel sets (x-forwarded-for) plus the cf-connecting-ip fallback if Cloudflare
 * is in front. Returns 'unknown' if nothing is available.
 */
export function extractIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return headers.get('cf-connecting-ip') ?? headers.get('x-real-ip') ?? 'unknown';
}
