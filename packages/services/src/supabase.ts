import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { hasSupabaseConfiguration, readPublicCapyboxEnv } from "./env";

export function createSupabaseBrowserClient(): SupabaseClient | null {
  const env = readPublicCapyboxEnv();

  if (!hasSupabaseConfiguration(env) || !env.supabaseUrl || !env.supabaseAnonKey) {
    return null;
  }

  return createClient(env.supabaseUrl, env.supabaseAnonKey, {
    auth: {
      persistSession: false
    }
  });
}
