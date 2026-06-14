/**
 * Chat-captured lead email.
 *
 * Fires when the chatbot has collected name + email (+ optional phone) inside
 * the chat conversation and emitted the SUBMIT_LEAD marker. Sends a short
 * notification to connect@output.systems so the team can follow up directly.
 *
 * Different from handoff-email.ts: handoff fires only on actual Cal.com
 * bookings. This fires on in-chat lead capture (visitor picked Option 1 of
 * the locked two-option flow).
 */

import { Resend } from 'resend';

let resendClient: Resend | null = null;

function getResend(): Resend {
  if (resendClient) return resendClient;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not set.');
  resendClient = new Resend(apiKey);
  return resendClient;
}

export interface ChatLeadPayload {
  name: string;
  email: string;
  phone?: string | null;
  conversationId?: string | null;
}

export async function sendChatLeadEmail(payload: ChatLeadPayload): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn('chat-lead: RESEND_API_KEY missing, skipping email');
    return;
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL ?? 'connect@output.systems';
  const toAddress = process.env.HANDOFF_RECIPIENT ?? 'connect@output.systems';
  // Prefer the clean insights subdomain URL when set; falls back to the legacy
  // /admin path on the chatbot host for backwards compatibility.
  const insightsUrl =
    process.env.NEXT_PUBLIC_INSIGHTS_URL ?? 'https://chat-insights.output.systems';

  const subject = `New chat lead, ${payload.name}`;

  const lines: string[] = [];
  lines.push(`Name: ${payload.name}`);
  lines.push(`Email: ${payload.email}`);
  if (payload.phone && payload.phone.trim().length > 0) {
    lines.push(`Phone: ${payload.phone}`);
  }
  lines.push('');
  lines.push('Captured directly inside the chatbot conversation, no booking yet.');
  if (payload.conversationId) {
    lines.push('');
    lines.push(`Full transcript: ${insightsUrl}/conversations/${payload.conversationId}`);
  }

  const resend = getResend();
  const result = await resend.emails.send({
    from: `Output Chatbot <${fromAddress}>`,
    to: [toAddress],
    subject,
    text: lines.join('\n'),
  });

  if (result.error) {
    console.error('chat-lead send failed', result.error);
    throw new Error(`Resend failed: ${result.error.message}`);
  }
}
