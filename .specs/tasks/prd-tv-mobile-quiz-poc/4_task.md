# Task 4.0: Implement the `tv` host surface and authoritative session-state flow

<critical>Read `docs/project_overview.md`, `docs/architecture.md`, `prd.md`, and `techspec.md` before starting this task; if you do not read the required context files, your task will be invalid</critical>

## Overview

Build the `tv` app experience for the waiting lobby, active quiz, final ranking, and session-lost/reset states, with the TV acting as the authoritative owner of in-memory quiz state for the room.

## Context Alignment

This task directly implements the Capybox product model of TV as host and shared room anchor. It respects the architecture baseline by keeping the `tv` surface separate from `mobile`, and it follows the feature spec’s decision that the TV validates incoming commands through the quiz engine and rebroadcasts canonical snapshots.

<skills>
### Compliance with Standard Skills

- `frontend-design`
- `vercel-react-best-practices`
- `find-docs`
- `context7-mcp`
</skills>

<requirements>
- Render a waiting screen that clearly communicates the room is ready for mobile join.
- Display the room code and host-connected state needed for the POC join flow.
- Join the shared session channel and listen for controller commands from mobile.
- Validate `start_game` and `submit_answer` commands through the shared engine, update authoritative local state, and rebroadcast canonical snapshots.
- Render readable TV-first views for waiting, active question/options, final ranking, and session-lost/reset states.
</requirements>

## Subtasks

- [ ] 4.1 Implement the `tv` app shell, waiting lobby, and room-code display
- [ ] 4.2 Connect the surface to the shared realtime adapter and host presence flow
- [ ] 4.3 Wire authoritative state updates through the shared game engine for start and answer commands
- [ ] 4.4 Implement the in-progress and finished TV views with large-screen readability
- [ ] 4.5 Add and run unit and integration coverage for TV state handling and snapshot publication

## Implementation Details

Reference `techspec.md` sections:
- `System Architecture > Component Overview`
- `Integration Points > Supabase Realtime`
- `Integration Points > Next.js`
- `Testing Approach > Unit Tests`
- `Testing Approach > Integration Tests`
- `Technical Considerations > Key Decisions`

Do not move answer input to the TV surface; the TV is the shared display and authority, not the controller.

## Success Criteria

- The TV app opens in a clear waiting state before gameplay begins.
- The TV surface becomes the authoritative in-memory owner of session progression for the room.
- Incoming controller commands cause valid state transitions and canonical snapshot rebroadcasts.
- Waiting, active question, final ranking, and session-lost states are all visually distinct and readable from a distance.

## Task Tests

- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests (deferred to Task `7.0`; this task must leave the `tv` surface ready for the committed happy-path Playwright flow)

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING THE TASK COMPLETE</critical>

## Relevant files

- `docs/project_overview.md`
- `docs/architecture.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/prd.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/techspec.md`
- `apps/tv/app/*`
- `packages/game-engine/*`
- `packages/services/*`
- `packages/types/*`
