# Task 6.0: Add failure handling, responsiveness, and accessibility hardening across both surfaces

<critical>Read `docs/project_overview.md`, `docs/architecture.md`, `prd.md`, and `techspec.md` before starting this task; if you do not read the required context files, your task will be invalid</critical>

## Overview

Harden the POC experience so the two-screen flow remains understandable and usable under expected POC failure modes and browser constraints, with special attention to TV readability and mobile touch interaction quality.

## Context Alignment

This task reinforces the product principles in `docs/project_overview.md`: frictionless first, social-first design, and fast same-room sessions. It also addresses the explicit UX and technical risk guidance in the feature docs by making the TV easy to read from a distance and the mobile interface easy to use as a controller.

<skills>
### Compliance with Standard Skills

- `frontend-design`
- `vercel-react-best-practices`
- `playwright-cli`
</skills>

<requirements>
- Add clear, recoverable UI for invalid room code, missing host presence, realtime disconnect, and session-lost/reset cases.
- Improve responsive layout and spacing for mobile controller use and large-viewport TV readability.
- Validate color contrast, touch target sizing, and simple state communication across waiting, active, and finished screens.
- Keep the visual relationship between shared TV context and personal mobile control obvious at every phase.
- Use exploratory `playwright-cli` checks where useful during implementation, without replacing the committed E2E task.
</requirements>

## Subtasks

- [ ] 6.1 Implement recoverable UI states for invalid room code, missing host, disconnect, and session reset scenarios
- [ ] 6.2 Refine TV large-viewport readability and state transitions for waiting, playing, and finished views
- [ ] 6.3 Refine mobile touch targets, layout spacing, and answer-selection clarity for controller use
- [ ] 6.4 Perform exploratory accessibility and visual validation with `playwright-cli` and fix identified issues
- [ ] 6.5 Add and run unit and integration coverage for error-state rendering and surface-specific view-state behavior

## Implementation Details

Reference `techspec.md` sections:
- `User Experience`
- `Integration Points > Error handling`
- `Testing Approach > E2E Tests`
- `Known Risks`

Use this task for hardening and clarity, not for inventing new flows that expand scope beyond the PRD.

## Success Criteria

- Expected POC failure states are surfaced with clear recovery paths instead of ambiguous blank/error screens.
- The TV surface remains readable at large viewport sizes.
- The mobile surface presents comfortable touch targets and obvious actions.
- Exploratory accessibility and visual checks have been performed and any major issues addressed before final E2E work.

## Task Tests

- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests (deferred to Task `7.0`; this task may use exploratory `playwright-cli`, but committed automated flows remain owned by Task `7.0`)

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING THE TASK COMPLETE</critical>

## Relevant files

- `docs/project_overview.md`
- `docs/architecture.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/prd.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/techspec.md`
- `apps/tv/app/*`
- `apps/mobile/app/*`
- Any shared styling or UI primitives introduced for both surfaces
