# Task 2.0: Implement shared quiz contracts, fixed seed content, and the quiz game engine

<critical>Read `docs/project_overview.md`, `docs/architecture.md`, `prd.md`, and `techspec.md` before starting this task; if you do not read the required context files, your task will be invalid</critical>

## Overview

Create the shared TypeScript contracts and pure quiz engine that define the POC’s state model, message shapes, fixed five-question content, scoring, ranking, and round progression rules.

## Context Alignment

This task supports Capybox’s platform direction by putting shared game behavior in packages rather than duplicating logic inside a single surface. It keeps the POC narrow by using checked-in seed content and in-memory state while still matching the long-term architecture of shared `types` and `game-engine` packages described in the architecture docs and this feature’s tech spec.

<skills>
### Compliance with Standard Skills

- `find-docs`
- `context7-mcp`
</skills>

<requirements>
- Define the shared contracts for quiz questions, player identity, session commands, and session snapshots in `packages/types`.
- Add exactly five checked-in quiz questions for the POC in a shared module.
- Implement the pure quiz engine for start, answer submission, question advancement, score calculation, duplicate-answer rejection, and final ranking.
- Design state and message contracts so later persistence or QR join work can extend them without rewriting the quiz flow.
- Keep the engine free of UI and Supabase concerns.
</requirements>

## Subtasks

- [ ] 2.1 Define the shared TypeScript models for quiz state, commands, snapshots, and room/player identity
- [ ] 2.2 Add the fixed 5-question seed content used by the POC
- [ ] 2.3 Implement the game engine state transitions for waiting, in-progress, and finished phases
- [ ] 2.4 Add score calculation, ranking, question advancement, and duplicate answer protections
- [ ] 2.5 Create and run unit and integration coverage for the shared contracts and engine behavior

## Implementation Details

Reference `techspec.md` sections:
- `Implementation Design > Main Interfaces`
- `Implementation Design > Data Models`
- `Testing Approach > Unit Tests`
- `Testing Approach > Integration Tests`

Keep the implementation pure and deterministic so the TV surface can become the authoritative caller in later tasks.

## Success Criteria

- Shared contracts compile cleanly and can be consumed by both surfaces and the realtime adapter.
- The POC quiz content contains exactly five questions.
- The game engine correctly handles start, answer acceptance, duplicate-answer rejection, round completion, and final ranking.
- The shared engine can be tested independently of the UI and network layers.

## Task Tests

- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests (not applicable for this package-level task; primary cross-surface flow coverage is owned by Task `7.0`)

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING THE TASK COMPLETE</critical>

## Relevant files

- `docs/project_overview.md`
- `docs/architecture.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/prd.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/techspec.md`
- `packages/types/*`
- `packages/game-engine/*`
