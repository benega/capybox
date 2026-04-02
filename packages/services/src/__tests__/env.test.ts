import { describe, expect, it } from "vitest";

import { DEFAULT_ROOM_CODE, hasSupabaseConfiguration, readPublicCapyboxEnv } from "../env";

describe("readPublicCapyboxEnv", () => {
  it("falls back to the default room code and flags missing public Supabase values", () => {
    const env = readPublicCapyboxEnv({});

    expect(env.roomCode).toBe(DEFAULT_ROOM_CODE);
    expect(env.missingKeys).toEqual([
      "NEXT_PUBLIC_SUPABASE_URL",
      "NEXT_PUBLIC_SUPABASE_ANON_KEY"
    ]);
    expect(hasSupabaseConfiguration(env)).toBe(false);
  });

  it("accepts explicit public env values for both surfaces", () => {
    const env = readPublicCapyboxEnv({
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon-key",
      NEXT_PUBLIC_CAPYBOX_ROOM_CODE: "ROOM42"
    });

    expect(env.roomCode).toBe("ROOM42");
    expect(env.missingKeys).toEqual([]);
    expect(hasSupabaseConfiguration(env)).toBe(true);
  });
});
