import type { SessionPhase, SurfaceBootstrapSummary } from "@capybox/types";

export const POC_QUESTION_COUNT = 5;
export const INITIAL_SESSION_PHASE: SessionPhase = "waiting";

export function createBootstrapQuizState(roomCode = "CAPYBOX"): SurfaceBootstrapSummary {
  return {
    roomCode,
    phase: INITIAL_SESSION_PHASE,
    questionCount: POC_QUESTION_COUNT
  };
}
