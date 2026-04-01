---
name: make-project-overview
description: Creates the global Project Overview document (docs/project_overview.md) through a structured interview, research, and drafting workflow. Captures product vision, scope, personas, platform model, and differentiators. Use when the user asks to create or regenerate the project overview, define the product vision, or bootstrap a new project. Do not use for architecture decisions, feature specs, or task breakdowns.
---

# Project Overview Creation

## Procedures

**Step 1: Validate Prerequisites**
1. Check whether `docs/project_overview.md` already exists.
   - If it exists, ask the user whether they want to **regenerate from scratch** or **revise the existing document**. Do NOT proceed without confirmation.
   - If regenerating, read the existing document to understand what is already captured before starting the interview.
2. Check whether `docs/architecture.md` exists. If it does, read it — architectural decisions may inform product scope and constraints.
3. Check whether `AGENTS.md` exists. If it does, read it for project-level conventions and constraints.

**Step 2: Explore the Project (Mandatory)**
1. Explore the repository to understand the current state of the codebase.
2. Identify existing apps, packages, frameworks, configuration files, and README content.
3. Use discovered information to pre-fill known facts and reduce unnecessary questions.

**Step 3: Clarify Product Vision (Mandatory)**
1. Ask the user focused clarification questions organized by topic. Skip questions whose answers are already clear from the codebase or existing documents.
2. Cover all areas from the clarification checklist:
   - **Product Identity**: What is the product? One-line description. What is the core principle?
   - **Problem**: What problems does this solve? What tools or workflows does it replace?
   - **Vision**: What should the product feel like long-term? What is the aspirational north star?
   - **Audience**: Who is it for? What are the primary personas and their motivations?
   - **Core Experience**: How do users interact? What is the primary interaction model? Provide example flows.
   - **Features**: What is in the MVP? What comes next? What is the long-term feature set?
   - **Platform Model**: Is the product a standalone app, a platform, or an ecosystem? What are the layers?
   - **Data Ownership**: Who owns the data? What formats? Is portability a requirement?
   - **Business Model**: How will this make money? What is free vs paid?
   - **Privacy**: What is the privacy stance for user identity, product data, analytics, and third-party processing?
   - **Differentiators**: What makes this different from existing alternatives?
   - **Stack**: What is the intended tech stack at a high level? (Details belong in architecture.md.)
3. Do NOT proceed to Step 4 until clarification answers are received.

**Step 4: Research (Conditional)**
1. If the product operates in a domain with specific conventions, regulations, or established competitors, perform Web Searches to gather context.
2. If the user mentions specific tools or platforms as inspiration, research them to understand the positioning.
3. Skip this step if the product domain is straightforward and well-understood from the interview.

**Step 5: Plan the Document (Mandatory)**
1. Create a development plan including:
   - Section-by-section approach based on interview answers.
   - Information gaps or assumptions.
   - Areas where the codebase reality differs from stated vision.
2. Present the plan to the user for alignment before drafting.

**Step 6: Draft the Project Overview (Mandatory)**
1. Read the template at `assets/project-overview-template.md`.
2. Focus on WHAT the product is and WHY it exists. Avoid implementation details — those belong in `docs/architecture.md`.
3. Frame the document as the full product vision, not just the MVP scope. Clearly distinguish MVP from future scope inside the Features section.
4. Keep the document under 3,000 words.
5. Do NOT deviate from the template structure.
6. Write in a clear, declarative style. Minimize ambiguity. Use concrete examples where helpful.

**Step 7: Save the Document (Mandatory)**
1. Ensure the `docs/` directory exists.
2. Save the document to: `docs/project_overview.md`.

**Step 8: Sync AGENTS.md (Conditional)**
1. If `AGENTS.md` exists and references the project overview or contains product-level information (personas, scope, data model), verify consistency.
2. Propose updates to `AGENTS.md` if the new project overview changes any referenced facts.
3. Apply only changes the user approves.

**Step 9: Report Results**
1. Provide the final file path.
2. Provide a brief summary of the document.
3. Call out any areas where the document makes assumptions the user did not explicitly confirm.
4. If `docs/architecture.md` does not yet exist, recommend running the `make-architecture` skill next.

## Core Principles
- Clarify before planning; plan before drafting.
- The Project Overview defines the product vision and scope, NOT technical architecture.
- Write for both humans and AI agents — this document is the product-level source of truth that all other specs reference.
- Distinguish clearly between MVP scope and long-term vision.
- Prefer concrete statements over vague aspirations.

## Quality Checklist
- [ ] Existing `docs/project_overview.md` checked (regenerate vs revise confirmed if present).
- [ ] Codebase explored for existing state.
- [ ] `docs/architecture.md` reviewed if present.
- [ ] Clarification questions completed and answered.
- [ ] Development plan presented and approved.
- [ ] Document generated using the template.
- [ ] MVP vs future scope clearly distinguished.
- [ ] File saved to `docs/project_overview.md`.
- [ ] `AGENTS.md` consistency verified and updated if needed.
- [ ] Final path provided.

## Error Handling
- If the user provides insufficient context, ask follow-up clarification questions before proceeding.
- If the template file is missing, report the error and halt — do not generate a document without the template.
- If `docs/project_overview.md` already exists and the user has not confirmed regeneration or revision, halt and ask.
- If the output directory does not exist, create it.
