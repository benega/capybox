# Technical Specification Template

## Executive Summary

This POC should be implemented as a greenfield Turborepo workspace with two browser-first Next.js apps: `apps/tv` for the shared host screen and `apps/mobile` for the controller. Both surfaces connect to the same Supabase Realtime channel keyed by a single manual room code. The TV app is the authoritative game-state owner for the session, while the mobile app sends join, start, and answer commands and renders the current shared state locally.

To keep the first implementation narrow, the spec uses Supabase Realtime Broadcast + Presence for synchronization and defers persistent session/event storage. Quiz content lives in versioned seed data inside the repo, shared through `packages/game-engine` and `packages/types`. This intentionally reduces the baseline architecture for speed while preserving the long-term host/controller and realtime channel model.

## Project Context Alignment

This solution advances the Capybox core loop in `docs/project_overview.md`: TV as host, mobile as controller, same-room play, and realtime synchronization. It aligns with `docs/architecture.md` by keeping separate `tv` and `mobile` surfaces, Next.js/React/TypeScript as the frontend stack, and Supabase as the realtime backend.

The main intentional deviation is onboarding: this POC replaces QR join with a shared manual room code and defers Postgres-backed `sessions`, `players`, and `events` persistence. That tradeoff is acceptable for a one-user proof of concept, but the channel naming, message contracts, and shared packages should be designed so persistence and QR join can be added later without rewriting the quiz flow.

## System Architecture

### Component Overview

- `apps/tv`: Next.js App Router app for the waiting lobby, question display, and final ranking. Owns authoritative in-memory game state for the active room.
- `apps/mobile`: Next.js App Router app for room-code join, start control, answer submission, and final result display.
- `packages/game-engine`: Pure quiz state machine for start, answer acceptance, scoring, question advancement, and completion.
- `packages/types`: Shared room, message, and quiz TypeScript contracts used by both apps.
- `packages/services`: Supabase client factory and thin realtime adapter used by both apps.
- `packages/ui`: Optional shared primitives for buttons, cards, and typography if reuse becomes immediate.
- `infra/supabase`: Realtime configuration notes and optional future migrations; no table persistence is required for the first cut.

Each Next.js app should follow App Router conventions with a required `app/layout.tsx` root layout, a route-level `app/page.tsx`, and metadata/manifest files owned per surface.

High-level data flow: the TV joins `session:{roomCode}` and publishes host presence. The mobile joins the same channel, submits controller commands by broadcast, and listens for state snapshots. The TV validates each command through the game engine, updates local state, and rebroadcasts a canonical session snapshot.

## Implementation Design

### Main Interfaces

```typescript
interface QuizEngine {
  start(questions: QuizQuestion[]): GameState
  submitAnswer(state: GameState, input: AnswerInput): GameState
  next(state: GameState): GameState
}
```

```typescript
interface SessionRealtimeClient {
  joinRoom(roomCode: string, role: "tv" | "mobile", userId: string): Promise<void>
  sendCommand(command: SessionCommand): Promise<void>
  publishState(state: SessionSnapshot): Promise<void>
  onCommand(handler: (command: SessionCommand) => void): void
  onState(handler: (state: SessionSnapshot) => void): void
}
```

### Data Models

- `QuizQuestion`: `{ id, prompt, options[], correctOptionId }`
- `PlayerIdentity`: `{ playerId, displayName, role: "mobile" }`
- `GameState`: `{ phase: "waiting" | "in_progress" | "finished", questionIndex, answersByPlayer, scores, ranking }`
- `SessionCommand`:
  - `join_request`
  - `start_game`
  - `submit_answer`
- `SessionSnapshot`: `{ roomCode, hostConnected, phase, question, options, scores, ranking, updatedAt }`

Essential local persistence:
- Mobile stores `playerId` in browser storage to remain stable during refreshes.
- TV stores no durable game data; a refresh resets the POC session.

Quiz content source:
- Store exactly 5 questions in a checked-in seed module under `packages/game-engine` or `packages/types`.
- Do not put quiz authoring or remote content loading into the first implementation.

### Communication Interfaces

- Realtime channel `session:{roomCode}`
  - Presence payload: `{ role, playerId, displayName, joinedAt }`
  - Broadcast event `command`: carries `SessionCommand`
  - Broadcast event `state`: carries `SessionSnapshot`
- App route state
  - `apps/tv`: single-screen state container for waiting, playing, finished
  - `apps/mobile`: join screen before subscribe, controller screen after subscribe

## Integration Points

- Supabase Realtime
  - Use a shared browser client from `@supabase/supabase-js`.
  - Use Presence to detect whether the TV host is online before allowing the mobile flow to proceed.
  - Use Broadcast for low-latency commands and state snapshots; enable self-delivery on the TV channel so local and remote state handling are identical.
- Next.js
  - Use the App Router for both apps.
  - Provide a required root layout in each app and use Next.js metadata exports for surface title/description.
  - Add a basic `manifest.ts` for both surfaces to stay consistent with the project’s PWA direction, but defer service worker/offline work.
- Error handling
  - Invalid room code: mobile stays on join state with a recoverable error.
  - Missing TV host presence: mobile cannot start.
  - Realtime disconnect: both apps show a session lost state and allow manual refresh.

## Testing Approach

### Unit Tests

- `packages/game-engine`: state transitions, score calculation, duplicate answer rejection, round completion, final ranking order.
- `packages/services`: message serialization/parsing and command routing with mocked Supabase channel objects.
- `apps/mobile` and `apps/tv`: state reducers/selectors and view-state mapping.

### Integration Tests

- TV state container + realtime adapter + game engine working together for `start_game` and `submit_answer`.
- Mobile join flow + presence detection + command publishing with a mocked realtime layer.
- Shared type-contract tests to ensure both apps accept the same snapshot shape.

### E2E Tests

- Committed automated flow: `tv` + `mobile` happy path in one Playwright test file using `playwright-cli browser` with one desktop page for TV and one mobile-emulated page for controller. Validate waiting screen, room-code join, start, five answers, and final ranking.
- Committed automated flow: `mobile` invalid room-code handling using `playwright-cli browser`.
- Exploratory/visual checks: use `playwright-cli` to inspect TV readability at large viewport and mobile touch target spacing against WCAG 2.5.8 guidance.
- Temporary gap: no committed `web` surface E2E because `web` is out of scope for this POC. E2E for `web` becomes mandatory once a browser-based landing or marketing/join surface is introduced outside `tv` and `mobile`.

## Development Sequencing

### Build Order

1. Scaffold monorepo apps/packages and shared TypeScript config, because every later step depends on stable package boundaries.
2. Implement `packages/types` and `packages/game-engine`, because the realtime and UI layers need fixed contracts.
3. Implement `packages/services` Supabase realtime adapter, because both surfaces depend on the same channel behavior.
4. Build `apps/tv` waiting/game/finished states, then `apps/mobile` join/controller states.
5. Add Playwright happy-path coverage, then polish failure states and responsiveness.

### Technical Dependencies

- Supabase project with Realtime enabled
- Environment variables for Supabase URL/key and the shared POC room code
- Playwright setup for desktop + mobile-emulated browser testing

## Technical Considerations

### Key Decisions

- Use separate `apps/tv` and `apps/mobile` instead of one responsive app, because the product model already defines separate surfaces and the test plan needs two independently routable clients.
- Make the TV authoritative for quiz state, because it keeps conflict resolution simple and mirrors the long-term host model.
- Use a shared fixed room code entered manually on mobile and displayed on TV, because it satisfies the POC requirement while preserving the future join abstraction.
- Keep observability lightweight with structured client logs per session and optional broadcast event timestamps rather than introducing a persistent event log immediately.

### Architecture Alignment

- Realtime/session model: aligned through a single session channel and host/controller message flow.
- Monorepo shape: aligned with the planned `apps/tv`, `apps/mobile`, `packages/game-engine`, `packages/types`, and `packages/services`.
- Backend/auth: partially aligned. Supabase remains the backend, but QR auth and durable Postgres session storage are intentionally deferred.
- Required amendment: document that the first POC can run on Realtime-only session state; persistent `sessions`, `players`, and `events` become necessary when multi-player, recovery after refresh, analytics, or QR join are added.

### Known Risks

- TV refresh or disconnect destroys authoritative in-memory state. Mitigation: accept for POC and show a reset path.
- Public/shared room code is not secure. Mitigation: scope usage to local personal testing only.
- Realtime ordering issues can cause stale state on mobile. Mitigation: TV always broadcasts full canonical snapshots with monotonically increasing `updatedAt` or `version`.
- TV browser compatibility may vary. Mitigation: target Chromium-class browser behavior first and validate with large desktop viewport tests.

### Compliance with Standard Skills

- `vercel-react-best-practices`: applies to Next.js/React app boundaries and client-component usage.
- `playwright-cli`: required for two-surface browser validation during implementation and QA.
- `run-qa`: relevant once implementation exists and the POC needs formal validation.
- `shadcn`: optional for simple controls; plain Tailwind components are acceptable if shared UI needs stay minimal.
- `frontend-design`: useful during implementation for clear TV/mobile role separation, but not required to complete this spec.

### Relevant and dependent files

- `docs/project_overview.md`
- `docs/architecture.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/prd.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/techspec.md`
- Planned new paths: `apps/tv`, `apps/mobile`, `packages/game-engine`, `packages/types`, `packages/services`, `infra/supabase`
