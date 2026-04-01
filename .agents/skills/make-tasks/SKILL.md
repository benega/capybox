---
name: make-tasks
description: Converts PRD and Tech Spec into a detailed, sequenced list of implementation tasks. Each task is a functional, incremental deliverable with its own test suite. Outputs tasks.md and individual task files. Use when the user asks to create tasks, break down work, or plan implementation from an existing PRD and Tech Spec. Do not use for PRD creation, tech spec creation, or actual code implementation.
---

# Task Creation

## Procedures

**Step 1: Validate Prerequisites**
1. Confirm the feature slug has been provided.
2. Verify the PRD exists at `.specs/tasks/prd-[feature-slug]/prd.md`. If missing, halt.
3. Verify the Tech Spec exists at `.specs/tasks/prd-[feature-slug]/techspec.md`. If missing, halt.
4. Verify the project context documents exist:
   - `docs/project_overview.md`
   - `docs/architecture.md`

**Step 2: Load Project Context (Mandatory)**
1. Read `docs/project_overview.md` completely.
2. Read `docs/architecture.md` completely.
3. Extract the product-level priorities, scope boundaries, and architectural constraints that should shape implementation sequencing.

**Step 3: Analyze PRD and Tech Spec (Mandatory)**
1. Read the PRD completely to extract requirements.
2. Read the Tech Spec completely to extract technical decisions.
3. Identify main components and their dependencies.
4. Cross-check the feature plan against `docs/project_overview.md` and `docs/architecture.md` so the tasks do not assume architecture or scope that contradicts the project baseline.

**Step 4: Generate High-Level Task List (Mandatory)**
1. Present the high-level task list to the user for approval BEFORE generating any files.
2. Organize tasks by logical deliverable.
3. Order tasks logically: dependencies before dependents, and create any required test harness before the task that first depends on it.
4. Each task MUST be a functional, incremental deliverable.
5. Each task MUST have its own set of unit and integration tests.
6. If the Tech Spec marks committed E2E coverage as required for any flow, include explicit task ownership for creating and running those E2E files. Do not leave E2E creation implicit under QA.
7. Limit to a maximum of 15 tasks (group as needed).
8. Wait for user approval before proceeding to Step 5.
9. Call out any task that exists primarily to reconcile or extend the current project architecture.

**Step 5: Generate Task Files (Mandatory)**
1. Read the tasks summary template at `assets/tasks-template.md`.
2. Read the individual task template at `assets/task-template.md`.
3. Create the summary file: `.specs/tasks/prd-[feature-slug]/tasks.md`.
4. Create individual task files: `.specs/tasks/prd-[feature-slug]/[num]_task.md`.
5. Use format X.0 for main tasks, X.Y for subtasks.
6. Do NOT repeat implementation details already in the Tech Spec — reference it instead.
7. Include `docs/project_overview.md` and `docs/architecture.md` as required reading when they materially affect the task.
8. For any task with committed E2E ownership, state whether the task must author new Playwright files, extend existing ones, or is intentionally covered later by another named task.

**Step 6: Report Results**
1. Present all generated files to the user.
2. Await confirmation before any implementation begins.

## Guidelines
- Assume the primary reader is a junior developer — be as clear as possible.
- Group tasks by logical deliverable.
- Make each main task independently completable.
- Define clear scope and deliverables for each task.
- Include tests as subtasks within each main task.
- Treat committed E2E coverage as implementation work when the Tech Spec requires it; QA validates and extends coverage, but does not own creating all primary automated flows from scratch.
- Do NOT implement anything — focus solely on task listing and detailing.

## Quality Checklist
- [ ] `docs/project_overview.md` reviewed.
- [ ] `docs/architecture.md` reviewed.
- [ ] PRD and Tech Spec analyzed.
- [ ] High-level task list approved by user.
- [ ] Task files generated using templates.
- [ ] Each task has unit and integration test subtasks.
- [ ] Required E2E ownership from the Tech Spec is reflected explicitly in the tasks.
- [ ] Files saved to `.specs/tasks/prd-[feature-slug]/`.
- [ ] Results presented to user.

## Error Handling
- If the PRD or Tech Spec is missing, halt and direct the user to the `make-prd` or `make-techspec` skill.
- If either `docs/project_overview.md` or `docs/architecture.md` is missing, report the missing file and halt before task generation.
- If the user rejects the high-level task list, revise based on feedback and re-present for approval.
- If the output directory already contains task files, confirm with the user before overwriting.
