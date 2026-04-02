# Task 5.0: Implement the `mobile` controller surface and session command flow

<critical>Read `docs/project_overview.md`, `docs/architecture.md`, `prd.md`, and `techspec.md` before starting this task; if you do not read the required context files, your task will be invalid</critical>

## Overview

Build the `mobile` app experience for room-code join, host-presence-aware connection, start control, answer submission, and final result display using the shared realtime adapter and TV-published state snapshots.

## Context Alignment

This task implements the controller side of Capybox’s two-screen model: personal input on mobile and shared display on TV. It stays aligned with the feature PRD by using manual room-code entry only as a temporary POC shortcut while still preserving session-based interaction between the two surfaces.

<skills>
### Compliance with Standard Skills

- `frontend-design`
- `vercel-react-best-practices`
- `find-docs`
- `context7-mcp`
</skills>

<requirements>
- Render a join flow that accepts a room code and handles invalid or unavailable rooms recoverably.
- Persist a stable `playerId` in browser storage for refresh resilience within the POC constraints.
- Use presence to confirm the TV host is online before allowing the main controller flow.
- Send `start_game` and `submit_answer` commands through the shared realtime adapter.
- Render the current question/options and final outcome from canonical state snapshots without making the mobile authoritative.
</requirements>

## Subtasks

- [ ] 5.1 Implement the room-code join screen and recoverable error states
- [ ] 5.2 Add stable local `playerId` creation and browser storage reuse
- [ ] 5.3 Connect mobile join/start/answer actions to the shared realtime adapter
- [ ] 5.4 Render the controller views for waiting-to-start, active question, answer submission, and final result
- [ ] 5.5 Add and run unit and integration coverage for join logic, command publishing, and snapshot-driven rendering

## Implementation Details

Reference `techspec.md` sections:
- `System Architecture > Component Overview`
- `Implementation Design > Data Models`
- `Integration Points > Supabase Realtime`
- `Integration Points > Error handling`
- `Testing Approach > Unit Tests`
- `Testing Approach > Integration Tests`

Do not let the mobile app own canonical game progression; it should publish commands and render the latest accepted snapshot from the TV.

## Success Criteria

- A user can enter the room code on mobile and join the active TV session.
- The mobile app respects host presence and surfaces invalid room or disconnected-session problems clearly.
- The player can start the game and submit answers from mobile.
- The mobile views stay synchronized to the TV-owned session state through snapshots.

## Task Tests

- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests (deferred to Task `7.0`; this task must leave the `mobile` surface ready for the committed happy-path and invalid-room Playwright flows)

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING THE TASK COMPLETE</critical>

## Relevant files

- `docs/project_overview.md`
- `docs/architecture.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/prd.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/techspec.md`
- `apps/mobile/app/*`
- `packages/services/*`
- `packages/types/*`
