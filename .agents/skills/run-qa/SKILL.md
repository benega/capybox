---
name: run-qa
description: Validates feature implementation against PRD, Tech Spec, and Tasks through surface-aware E2E testing with Playwright, `playwright-cli`, accessibility verification (WCAG 2.2), and visual analysis. Documents all bugs found with screenshot evidence and generates a comprehensive QA report. Use when the user asks to run QA, validate a feature, or test implementation completeness. Do not use for code review, bug fixing, or task implementation.
---

# QA Execution

## Procedures

**Step 1: Documentation Analysis (Mandatory)**
1. Read `docs/project_overview.md` to understand the product model and scope boundaries.
2. Read `docs/architecture.md` to understand the architectural constraints and technical direction.
3. Read the PRD at `.specs/tasks/prd-[feature-slug]/prd.md` and extract ALL numbered functional requirements.
4. Read the Tech Spec at `.specs/tasks/prd-[feature-slug]/techspec.md` and verify implemented technical decisions.
5. Read Tasks at `.specs/tasks/prd-[feature-slug]/tasks.md` and verify completion status of each task.
6. Create a verification checklist based on the requirements.
7. Do NOT skip this step — understanding requirements is fundamental for QA.

**Step 2: Surface Detection and Environment Preparation (Mandatory)**
1. Determine which product surface is in scope before testing:
   - `apps/tv`: TV host surface shown on a browser or smart TV.
   - `apps/mobile`: mobile controller surface opened from the QR join flow.
   - `apps/web`: any shared browser surface such as landing, support, or session entry pages.
2. Choose the correct Playwright workflow for that surface:
   - **TV host**: Use browser automation with a widescreen viewport. Validate session creation, QR visibility, lobby states, and host game controls.
   - **Mobile controller**: Use browser automation with a phone-sized viewport. Validate join, naming, readiness, controller actions, reconnect, and error states.
   - **Web**: Use browser automation appropriate to the feature, such as marketing pages or session entry flows.
3. Start or verify the correct app runtime by inspecting the repository's current scripts or dev tooling. Do not hardcode script names that are not present in the project.
4. Discover the actual local URL from terminal output instead of hardcoding it.
5. For browser-based flows, open the application with `playwright-cli open http://localhost:<port>` or `playwright-cli goto http://localhost:<port>`.
6. Confirm the page loaded correctly with `playwright-cli snapshot`.

**Step 3: E2E Tests with Playwright (Mandatory)**
1. Run any committed Playwright E2E specs required by the Tech Spec before starting exploratory validation. If the Tech Spec requires committed E2E coverage and no such tests exist, document that as a testing gap and fail the affected requirement unless the spec explicitly allowed a temporary limitation.
2. Match the execution method to the surface under test:
   - **TV host**: Use committed Playwright browser tests for critical host flows and `playwright-cli` for exploratory validation.
   - **Mobile controller**: Use committed Playwright browser tests for critical join and controller flows and `playwright-cli` for exploratory validation.
   - **Web**: Use Playwright browser tests and `playwright-cli` as appropriate to the feature.
3. For browser-based exploratory flows, use `playwright-cli snapshot` before interacting so element refs and page state are current.
4. For each functional requirement from the PRD:
   a. Navigate to the feature.
   b. Execute the expected flow.
   c. Verify the result.
   d. Capture screenshot evidence.
   e. Mark as PASSED or FAILED.
5. Use the appropriate `playwright-cli` commands for browser exploratory flows, such as `click`, `fill`, `type`, `select`, `check`, `press`, `goto`, `console`, and `network`.
6. Capture visual evidence with `playwright-cli screenshot --filename=<descriptive-name>.png` or Playwright screenshots when needed for reports.

**Step 4: Accessibility Verification (Mandatory)**
1. Verify for each screen/component:
   - Keyboard navigation works (Tab, Enter, Escape).
   - Interactive elements have descriptive labels.
   - Images have appropriate alt text.
   - Color contrast is adequate.
   - Forms have labels associated to inputs.
   - Error messages are clear and accessible.
2. Use `playwright-cli press Tab`, `playwright-cli press Enter`, and `playwright-cli press Escape` to test keyboard navigation.
3. Use `playwright-cli snapshot` to verify labels and semantic structure.
4. Use `playwright-cli eval` when needed to inspect attributes such as `aria-label`, `role`, and `alt`.
5. Follow WCAG 2.2 standard.
6. For multiplayer flows, verify that labels, countdowns, and turn-state feedback remain understandable on both host and controller surfaces.

**Step 5: Visual Verification (Mandatory)**
1. Capture screenshots of main screens with `playwright-cli screenshot` or Playwright screenshots for Electron tests.
2. Verify layouts in different states (empty, with data, error).
3. Document visual inconsistencies found.
4. Verify responsiveness if applicable:
   - tv host: use large landscape viewports
   - mobile controller: use mobile-sized browser viewports
   - web: use the viewport sizes appropriate to the feature

**Step 6: Bug Documentation**
1. For each bug found, document with:
   - Bug ID, Surface, Description, Severity (High/Medium/Low), Screenshot, Reproduction path.
2. Save bugs to `.specs/tasks/prd-[feature-slug]/bugs.md`.
3. If a blocking bug is found, document and report immediately.

**Step 7: Generate QA Report (Mandatory)**
1. Read the report template at `assets/qa-report-template.md`.
2. Fill in all sections with actual results.
3. Set status to APPROVED only when ALL PRD requirements are verified and functioning.
4. Record the tested surface and automation mode for each verified flow:
   - `playwright-cli browser`
   - `manual limitation`
5. Distinguish committed test execution from exploratory validation in the report notes whenever both were used for the same flow.

## Error Handling
- If the application is not running, instruct the user to start the correct surface before retrying:
  - use the repository's current TV host dev command
  - use the repository's current mobile controller dev command
  - use the repository's current web-surface dev command
- If `playwright-cli` is unavailable, report the error and suggest using the local fallback via `npx playwright-cli` or installing/configuring the CLI before retrying.
- If a feature requires hardware, camera, smart-TV browser quirks, or cross-device pairing behavior that cannot be fully reproduced locally, document the limitation explicitly instead of overstating coverage.
- If a blocking bug prevents testing subsequent features, document it and continue with testable areas.
