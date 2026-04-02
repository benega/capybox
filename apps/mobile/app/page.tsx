import { createBootstrapQuizState, POC_QUESTION_COUNT } from "@capybox/game-engine";
import { DEFAULT_ROOM_CODE, hasSupabaseConfiguration, readPublicCapyboxEnv } from "@capybox/services";
import { SURFACE_LABELS } from "@capybox/types";

const shellStyle = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "1.5rem"
} as const;

const panelStyle = {
  width: "min(100%, 28rem)",
  padding: "1.5rem",
  borderRadius: "1.75rem",
  border: "1px solid var(--mobile-border)",
  background: "var(--mobile-card)",
  boxShadow: "0 20px 50px rgba(71, 48, 12, 0.14)"
} as const;

export default function MobilePage() {
  const env = readPublicCapyboxEnv();
  const bootstrapState = createBootstrapQuizState();
  const roomCode = env.roomCode || DEFAULT_ROOM_CODE;

  return (
    <main style={shellStyle}>
      <section style={panelStyle}>
        <p
          style={{
            margin: 0,
            fontSize: "0.85rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--mobile-accent)"
          }}
        >
          {SURFACE_LABELS.mobile}
        </p>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "0.75rem" }}>Join the room</h1>
        <p style={{ marginTop: 0, color: "var(--mobile-muted)", lineHeight: 1.6 }}>
          The controller scaffold is ready for the later join, start, and answer flow. For now it
          confirms the shared room code, the quiz size, and whether local public Supabase values are
          available.
        </p>

        <div
          style={{
            display: "grid",
            gap: "0.875rem",
            marginTop: "1.5rem"
          }}
        >
          <div
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              border: "1px solid var(--mobile-border)",
              background: "rgba(255, 255, 255, 0.55)"
            }}
          >
            <strong>Room code</strong>
            <p style={{ marginBottom: 0, fontSize: "1.5rem", letterSpacing: "0.14em" }}>{roomCode}</p>
          </div>

          <div
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              border: "1px solid var(--mobile-border)",
              background: "rgba(255, 255, 255, 0.55)"
            }}
          >
            <strong>Bootstrap state</strong>
            <p style={{ marginBottom: 0, textTransform: "capitalize" }}>
              {bootstrapState.phase.replace("_", " ")}
            </p>
          </div>

          <div
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              border: "1px solid var(--mobile-border)",
              background: "rgba(255, 255, 255, 0.55)"
            }}
          >
            <strong>Question count</strong>
            <p style={{ marginBottom: 0 }}>{POC_QUESTION_COUNT} questions seeded for the POC</p>
          </div>

          <div
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              border: "1px solid var(--mobile-border)",
              background: "rgba(255, 255, 255, 0.55)"
            }}
          >
            <strong>Supabase status</strong>
            <p style={{ marginBottom: 0 }}>
              {hasSupabaseConfiguration(env) ? "Configured" : "Awaiting public env values"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
