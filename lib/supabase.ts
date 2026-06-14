import { createClient, SupabaseClient } from '@supabase/supabase-js';

let serviceClient: SupabaseClient | null = null;

/**
 * Server-only Supabase client. Uses the service role key, bypasses RLS.
 * Never expose to the browser.
 */
export function getSupabaseService(): SupabaseClient {
  if (serviceClient) return serviceClient;

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set.');
  }

  serviceClient = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return serviceClient;
}

/** Slug for the `tenants` row that represents this brand in Supabase. Insert
 *  a row with `slug = 'ai-output'` into the new ai-output-systems Supabase
 *  project before the chatbot can log conversations and leads. */
export const OUTPUT_TENANT_SLUG = 'ai-output';
