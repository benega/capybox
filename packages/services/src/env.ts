export const DEFAULT_ROOM_CODE = "CAPYBOX";

export interface PublicCapyboxEnv {
  readonly supabaseUrl: string | null;
  readonly supabaseAnonKey: string | null;
  readonly roomCode: string;
  readonly missingKeys: readonly string[];
}

function normalize(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export function readPublicCapyboxEnv(env: NodeJS.ProcessEnv = process.env): PublicCapyboxEnv {
  const supabaseUrl = normalize(env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseAnonKey = normalize(env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const roomCode = normalize(env.NEXT_PUBLIC_CAPYBOX_ROOM_CODE) ?? DEFAULT_ROOM_CODE;
  const missingKeys = [
    supabaseUrl ? null : "NEXT_PUBLIC_SUPABASE_URL",
    supabaseAnonKey ? null : "NEXT_PUBLIC_SUPABASE_ANON_KEY"
  ].filter((value): value is string => value !== null);

  return {
    supabaseUrl,
    supabaseAnonKey,
    roomCode,
    missingKeys
  };
}

export function hasSupabaseConfiguration(config: PublicCapyboxEnv): boolean {
  return config.missingKeys.length === 0;
}
