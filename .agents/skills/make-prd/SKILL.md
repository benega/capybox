---
name: make-prd
description: Creates Product Requirements Documents (PRDs) from feature requests following a structured workflow of clarification, planning, and drafting. Outputs a standardized PRD to the project tasks directory. Use when the user asks to create a PRD, define requirements, or document a new feature. Do not use for technical specifications, task breakdowns, or implementation planning.
---

# PRD Creation

## Procedures

**Step 1: Validate Prerequisites**
1. Confirm the feature name or description has been provided by the user.
2. Derive the slug in kebab-case for the output directory: `specs/tasks/prd-[feature-slug]/`.
3. Verify the project context documents exist:
   - `docs/project_overview.md`
   - `docs/architecture.md`

**Step 2: Load Project Context (Mandatory)**
1. Read `docs/project_overview.md` completely before asking clarification questions.
2. Read `docs/architecture.md` completely before asking clarification questions.
3. Extract the product vision, personas, scope boundaries, platform assumptions, and architecture constraints that matter for the feature.
4. Treat these two documents as the project-level source of truth. Do not ask the user to repeat information already documented there unless the feature intentionally changes it.

**Step 3: Clarify Requirements (Mandatory)**
1. Ask the user clarification questions only for feature-specific gaps that are not already answered by `docs/project_overview.md` or `docs/architecture.md`.
2. Cover all areas from the clarification checklist:
   - **Problem and Objectives**: What problem to solve, measurable goals.
   - **Users and Stories**: Primary users, user stories, main flows.
   - **Core Functionality**: Data inputs/outputs, actions.
   - **Scope and Planning**: What is NOT included, dependencies.
   - **Design and Experience**: UI/UX guidelines and accessibility.
   - **Project Alignment**: Whether the feature adds, refines, or intentionally changes anything from the project overview or architecture.
3. Do NOT proceed to Step 4 until clarification answers are received.

**Step 4: Plan the PRD (Mandatory)**
1. Create a development plan including:
   - Section-by-section approach.
   - Areas requiring research (use Web Search for business rules).
   - Assumptions and dependencies.
   - Explicit alignment with `docs/project_overview.md` and `docs/architecture.md`.
2. Present the plan to the user for alignment.

**Step 5: Draft the PRD (Mandatory)**
1. Read the template at `assets/prd-template.md`.
2. Focus on WHAT and WHY, never on HOW (implementation belongs in Tech Spec).
3. Include numbered functional requirements.
4. Keep the document under 2,000 words.
5. Do NOT deviate from the template structure.
6. Frame the feature as part of the existing Liminal product direction rather than redefining the project from scratch.
7. In high-level constraints, reflect relevant decisions from `docs/architecture.md` without turning the PRD into a tech spec.

**Step 6: Save the PRD (Mandatory)**
1. Create the directory: `specs/tasks/prd-[feature-slug]/`.
2. Save the PRD to: `specs/tasks/prd-[feature-slug]/prd.md`.

**Step 7: Report Results**
1. Provide the final file path.
2. Provide a brief summary of the PRD outcome.
3. Call out any intentional tension or change relative to `docs/project_overview.md` or `docs/architecture.md`.

## Core Principles
- Clarify before planning; plan before drafting.
- Minimize ambiguity; prefer measurable statements.
- PRD defines outcomes and constraints, NOT implementation.
- Always consider usability and accessibility.

## Quality Checklist
- [ ] `docs/project_overview.md` reviewed.
- [ ] `docs/architecture.md` reviewed.
- [ ] Clarification questions completed and answered.
- [ ] Detailed plan created.
- [ ] PRD generated using the template.
- [ ] Numbered functional requirements included.
- [ ] File saved to `specs/tasks/prd-[feature-slug]/prd.md`.
- [ ] Final path provided.

## Error Handling
- If the user provides insufficient context, ask follow-up clarification questions before proceeding.
- If either `docs/project_overview.md` or `docs/architecture.md` is missing, report the missing file and halt before drafting.
- If the template file is missing, report the error and halt — do not generate a PRD without the template.
- If the output directory already exists, confirm with the user before overwriting.
