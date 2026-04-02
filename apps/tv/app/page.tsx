import { INITIAL_SESSION_PHASE, POC_QUESTION_COUNT } from "@capybox/game-engine";
import { DEFAULT_ROOM_CODE, hasSupabaseConfiguration, readPublicCapyboxEnv } from "@capybox/services";
import { SURFACE_LABELS } from "@capybox/types";

const shellStyle = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "3rem"
} as const;

const panelStyle = {
  width: "min(100%, 72rem)",
  padding: "2rem",
  borderRadius: "2rem",
  border: "1px solid var(--tv-panel-border)",
  background: "var(--tv-panel)",
  backdropFilter: "blur(16px)",
  boxShadow: "0 24px 80px rgba(0, 0, 0, 0.28)"
} as const;

export default function TvPage() {
  const env = readPublicCapyboxEnv();
  const roomCode = env.roomCode || DEFAULT_ROOM_CODE;

  return (
    <main style={shellStyle}>
      <section style={panelStyle}>
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--tv-accent)"
          }}
        >
          {SURFACE_LABELS.tv}
        </p>
        <h1 style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", marginBottom: "1rem" }}>
          Waiting for the first controller
        </h1>
        <p style={{ maxWidth: "40rem", color: "var(--tv-muted)", fontSize: "1.15rem" }}>
          This scaffold leaves the TV ready to host a {POC_QUESTION_COUNT}-question quiz round. The
          realtime room code is already reserved so later tasks can wire the host/controller flow on
          top of stable app and package boundaries.
        </p>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginTop: "2rem"
          }}
        >
          <article
            style={{
              padding: "1.25rem",
              borderRadius: "1.25rem",
              border: "1px solid var(--tv-panel-border)",
              background: "rgba(255, 255, 255, 0.04)"
            }}
          >
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>Room code</strong>
            <span style={{ fontSize: "2rem", letterSpacing: "0.18em" }}>{roomCode}</span>
          </article>

          <article
            style={{
              padding: "1.25rem",
              borderRadius: "1.25rem",
              border: "1px solid var(--tv-panel-border)",
              background: "rgba(255, 255, 255, 0.04)"
            }}
          >
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>Bootstrap phase</strong>
            <span style={{ fontSize: "1.25rem", textTransform: "capitalize" }}>
              {INITIAL_SESSION_PHASE.replace("_", " ")}
            </span>
          </article>

          <article
            style={{
              padding: "1.25rem",
              borderRadius: "1.25rem",
              border: "1px solid var(--tv-panel-border)",
              background: "rgba(255, 255, 255, 0.04)"
            }}
          >
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>Supabase status</strong>
            <span style={{ fontSize: "1.25rem" }}>
              {hasSupabaseConfiguration(env) ? "Configured" : "Awaiting public env values"}
            </span>
          </article>
        </div>
      </section>
    </main>
  );
}
