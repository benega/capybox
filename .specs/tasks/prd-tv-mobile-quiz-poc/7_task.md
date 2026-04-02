# Task 7.0: Author and run committed Playwright E2E coverage for the POC flows

<critical>Read `docs/project_overview.md`, `docs/architecture.md`, `prd.md`, and `techspec.md` before starting this task; if you do not read the required context files, your task will be invalid</critical>

## Overview

Create the committed Playwright coverage required by the tech spec for the two-surface happy path and invalid room-code flow, and run the suite against the implemented POC.

## Context Alignment

This task converts the feature’s committed validation requirements into explicit implementation ownership rather than leaving them to later QA. It protects the Capybox core loop by proving the single-player same-room flow works end to end across separate `tv` and `mobile` browser surfaces.

<skills>
### Compliance with Standard Skills

- `playwright-cli`
- `vercel-react-best-practices`
</skills>

<requirements>
- Author at least one Playwright test file that runs the `tv` + `mobile` happy path in a desktop page plus mobile-emulated page.
- Validate the full committed happy path: waiting screen, room-code join, game start, five answer submissions, and final ranking.
- Author committed automated coverage for invalid room-code handling on `mobile`.
- Configure any test helpers, fixtures, or startup flow needed to run the multi-surface POC reliably.
- Run the committed E2E suite and document any remaining gaps or instability.
</requirements>

## Subtasks

- [ ] 7.1 Set up Playwright support for running `tv` and `mobile` together in one test flow
- [ ] 7.2 Author a happy-path E2E file covering waiting, join, start, five answers, and final ranking
- [ ] 7.3 Author or extend E2E coverage for invalid room-code handling on mobile
- [ ] 7.4 Run the committed E2E suite and stabilize timing or fixture issues required for reliable execution
- [ ] 7.5 Record any intentional remaining test gaps that are outside the PRD/tech spec scope

## Implementation Details

Reference `techspec.md` sections:
- `Testing Approach > E2E Tests`
- `Development Sequencing > Technical Dependencies`
- `Known Risks`

This task owns new Playwright files for the committed flows. QA can extend coverage later, but it does not own creating these baseline automated flows from scratch.

## Success Criteria

- The required happy-path and invalid-room flows are covered by committed Playwright tests.
- The tests exercise both `tv` and `mobile` surfaces in a way that matches the POC product model.
- The suite runs reliably enough to serve as baseline regression coverage for later changes.
- Any remaining gaps are documented explicitly instead of being left implicit.

## Task Tests

- [ ] Unit tests (not applicable; this task’s primary output is browser E2E coverage rather than new unit-level logic)
- [ ] Integration tests (only if helper modules introduced for E2E setup warrant them)
- [ ] E2E tests (required; owned by this task, including authoring new Playwright files and running the committed flows)

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING THE TASK COMPLETE</critical>

## Relevant files

- `docs/project_overview.md`
- `docs/architecture.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/prd.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/techspec.md`
- Playwright config and test files created for the POC
- `apps/tv/*`
- `apps/mobile/*`
