---
name: run-bugfix
description: Reads documented bugs from bugs.md, analyzes root causes, implements fixes with regression tests, validates frontend fixes with surface-aware Playwright workflows and `playwright-cli` when applicable, and validates the full test suite. Prioritizes fixes by severity (high to low). Updates bugs.md with correction status and generates a final bugfix report. Use when the user asks to fix bugs, resolve issues, or run the bugfix workflow for a feature. Do not use for new feature implementation, code review, or QA testing.
---

# Bug Fix Execution

## Procedures

**Step 1: Context Analysis (Mandatory)**
1. Read `docs/project_overview.md` to understand the product model and scope boundaries.
2. Read `docs/architecture.md` to understand the architectural constraints and technical direction.
3. Read the bugs file at `.specs/tasks/prd-[feature-slug]/bugs.md` and extract ALL documented bugs.
4. Read the PRD at `.specs/tasks/prd-[feature-slug]/prd.md` to understand affected requirements.
5. Read the Tech Spec at `.specs/tasks/prd-[feature-slug]/techspec.md` to understand relevant technical decisions.
6. Review project rules for compliance in fixes.
7. Do NOT skip this step — full context understanding is fundamental for quality fixes.

**Step 2: Plan Fixes (Mandatory)**
1. For each bug, generate a planning summary:
   - Bug ID, Surface, Severity (High/Medium/Low), Affected Component.
   - Root Cause analysis.
   - Files to modify.
   - Fix strategy description.
   - Planned regression tests (unit, integration, E2E).
2. Use Context7 MCP to analyze documentation of involved languages, frameworks, and libraries.

**Step 3: Implement Fixes (Mandatory)**
1. Fix bugs in severity order: High first, then Medium, then Low.
2. For each bug follow this sequence:
   a. Locate and read the affected code.
   b. Reason about the flow causing the bug.
   c. Implement the root-cause fix — no superficial workarounds.
   d. Run `npm run typecheck` after each fix.
   e. Run existing tests to ensure no regressions.

**Step 4: Create Regression Tests (Mandatory)**
1. For each fixed bug, create tests that:
   - Simulate the original bug scenario (test must fail if the fix is reverted).
   - Validate the correct behavior with the fix applied.
   - Cover related edge cases.
2. Choose test type based on bug nature:
   - **Unit test**: Bug in isolated function/method logic.
   - **Integration test**: Bug in module communication (e.g., controller + service).
   - **E2E test**: Bug visible in the UI or full flow.
3. Match E2E coverage to the affected surface:
   - **TV host**: browser-based Playwright and `playwright-cli` coverage with widescreen host viewports.
   - **Mobile controller**: browser-based Playwright and `playwright-cli` coverage with mobile-sized viewports.
   - **Web**: browser-based Playwright and `playwright-cli` coverage for any shared browser surface.
4. When a bug affects a user-visible critical flow, prefer a committed regression test file over a one-off exploratory session. Use `playwright-cli` to reproduce, inspect, and debug the issue, then codify the regression in Playwright when the surface supports it.

**Step 5: Visual Validation with Playwright (Mandatory for frontend bugs)**
1. For bugs affecting the UI:
   a. Determine the affected surface first: `tv`, `mobile`, or `web`.
   b. Use the `playwright-cli` skill for browser automation and command reference.
   c. For TV host flows, open the local host URL and use a widescreen viewport.
   d. For mobile controller flows, open the local mobile URL and use a phone-sized viewport.
   e. For shared web flows, open the relevant local browser URL for the feature being tested.
   f. Use `playwright-cli snapshot` to verify page state for browser-based flows.
   g. Reproduce the flow that caused the bug with the appropriate Playwright commands.
   h. Use `playwright-cli screenshot --filename=<descriptive-name>.png` or Playwright screenshots to capture evidence of the fix.

**Step 6: Final Test Execution (Mandatory)**
1. Run ALL project tests: `npm test`.
2. Verify ALL pass with 100% success.
3. Run type checking: `npm run typecheck`.
4. The task is NOT complete if any test fails.

**Step 7: Update bugs.md (Mandatory)**
1. For each fixed bug, append to its entry:
   - **Status:** Fixed.
   - **Applied fix:** Brief description.
   - **Regression tests:** List of created tests.
   - **Validation surface:** `tv`, `mobile`, or `web`.
   - **Validation mode:** `playwright-cli browser` or `manual limitation`.

**Step 8: Generate Final Report**
1. Read the report template at `assets/bugfix-report-template.md`.
2. Fill in all sections with actual results.

## Error Handling
- If bugs.md does not exist, halt and report to the user.
- If a bug requires significant architectural changes, document the justification before proceeding.
- If new bugs are discovered during fixes, document them in bugs.md.
- If a bug depends on camera access, smart-TV browser behavior, or other device-specific constraints that cannot be fully reproduced locally, document the limitation and validate the nearest supported browser flow instead of fabricating coverage.
- Begin implementation immediately after planning — do not wait for approval.
