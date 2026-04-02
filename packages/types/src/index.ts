export const SURFACE_ROLES = ["tv", "mobile"] as const;

export type SurfaceRole = (typeof SURFACE_ROLES)[number];

export const SURFACE_LABELS: Record<SurfaceRole, string> = {
  tv: "TV host surface",
  mobile: "Mobile controller surface"
};

export type SessionPhase = "waiting" | "in_progress" | "finished";

export interface SurfaceBootstrapSummary {
  readonly roomCode: string;
  readonly phase: SessionPhase;
  readonly questionCount: number;
}
