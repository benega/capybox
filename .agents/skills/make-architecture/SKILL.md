---
name: make-architecture
description: Creates the global Architecture document (docs/architecture.md) through structured codebase analysis, technical interview, research, and drafting. Captures platform decisions, monorepo strategy, data model, integration boundaries, and client/backend architecture. Use when the user asks to create or regenerate the architecture document, define technical direction, or bootstrap a new project's technical foundation. Do not use for feature-specific tech specs, task breakdowns, or direct code implementation.
---

# Architecture Document Creation

## Procedures

**Step 1: Validate Prerequisites**
1. Check whether `docs/architecture.md` already exists.
   - If it exists, ask the user whether they want to **regenerate from scratch** or **revise the existing document**. Do NOT proceed without confirmation.
   - If regenerating, read the existing document to understand what is already captured.
2. Verify that `docs/project_overview.md` exists and read it completely. The architecture must align with the product vision.
   - If missing, halt and recommend running the `make-project-overview` skill first. Architecture decisions require a defined product direction.
3. Check whether `AGENTS.md` exists. If it does, read it for project-level conventions and constraints.

**Step 2: Deep Project Analysis (Mandatory)**
1. Explore the repository thoroughly to discover the current technical reality:
   - Monorepo structure, build tools, and package manager
   - Apps and packages with their frameworks and dependencies
   - Configuration files (tsconfig, eslint, vite, next, mobile/web runtimes, infra configs, etc.)
   - Existing data models, schemas, and storage patterns
   - Integration code and dependencies (auth, storage, realtime, AI, payments, external APIs, etc.)
   - Test setup and testing frameworks
   - CI/CD configuration if present
2. Map the discovered structure against what `docs/project_overview.md` describes.
3. Identify gaps between the stated vision and the current codebase.

**Step 3: Research (Mandatory)**
1. Use Context7 MCP to resolve technical questions about frameworks and libraries discovered in the codebase.
2. Perform at least 3 Web Searches to validate architectural patterns, compare alternatives, or gather best practices relevant to the tech stack.
3. Complete all research BEFORE asking clarification questions.

**Step 4: Clarify Technical Decisions (Mandatory)**
1. Ask the user focused clarification questions organized by topic. Skip questions whose answers are already clear from the codebase, project overview, or research.
2. Cover all areas from the clarification checklist:
   - **Monorepo & Build**: Package manager, build tool, monorepo orchestrator, workspace structure.
   - **Client Platforms**: Primary user surfaces, runtimes, and any internal or supporting surfaces.
   - **Data Architecture**: Core entities, schemas, persistence model, and storage boundaries.
   - **Sync / State Propagation**: Realtime, offline, cache, queueing, replication, or eventual consistency stance where applicable.
   - **Authentication & Identity**: Required or not? Account model, session model, tenant model, and identity scope.
   - **Integrations**: Core providers, external APIs, internal adapters, and request/event flow.
   - **Backend**: Required or not? What is explicitly excluded?
   - **Module / Platform Model**: How modules, apps, features, or plugins relate to shared systems.
   - **Cross-Platform / Cross-Surface Parity**: What is shared, what is surface-specific, and what can intentionally diverge.
   - **Testing**: Testing framework, strategy, and scope for the current phase.
   - **Non-Goals**: What does the architecture explicitly NOT include?
   - **Open Decisions**: What is intentionally left undecided?
3. Do NOT proceed to Step 5 until clarification answers are received.

**Step 5: Plan the Document (Mandatory)**
1. Create a development plan including:
   - Section-by-section approach based on analysis, research, and interview answers.
   - Information gaps or assumptions.
   - Areas where the codebase reality differs from the stated direction.
   - Tensions between the product overview and technical constraints.
2. Present the plan to the user for alignment before drafting.

**Step 6: Draft the Architecture Document (Mandatory)**
1. Read the template at `assets/architecture-template.md`.
2. Focus on HOW the product is built, not WHAT it is or WHY (those belong in `docs/project_overview.md`).
3. Ground every section in the codebase reality and user decisions. Do not invent architectural decisions the user has not confirmed.
4. Clearly mark open decisions in Section 17 instead of assuming answers.
5. Keep the document under 3,000 words.
6. Do NOT deviate from the template structure.
7. Write in a declarative, precise style. State decisions clearly. Avoid hedging on decided items.
8. Align with `docs/project_overview.md` — the architecture serves the product vision.

**Step 7: Save the Document (Mandatory)**
1. Ensure the `docs/` directory exists.
2. Save the document to: `docs/architecture.md`.

**Step 8: Sync AGENTS.md (Conditional)**
1. If `AGENTS.md` exists and references architecture decisions (tech stack, data model, constraints, conventions), verify consistency.
2. Propose updates to `AGENTS.md` if the new architecture document changes any referenced facts.
3. Apply only changes the user approves.

**Step 9: Report Results**
1. Provide the final file path.
2. Provide a brief summary of the architecture decisions captured.
3. Call out any open decisions that need future resolution.
4. Call out any tensions between the product overview and the architecture.
5. If feature specs already exist under `.specs/tasks/`, note that they should be reviewed for consistency with the new architecture document.

## Core Principles
- Clarify before planning; plan before drafting.
- The Architecture document defines HOW, not WHAT or WHY. Product vision belongs in `docs/project_overview.md`.
- Ground decisions in the actual codebase, not aspirational assumptions.
- Write for both humans and AI agents — this document is the technical source of truth that all feature specs reference.
- Explicitly mark open decisions rather than assuming answers.
- Prefer simple, evolutionary architecture over premature complexity.

## Quality Checklist
- [ ] Existing `docs/architecture.md` checked (regenerate vs revise confirmed if present).
- [ ] `docs/project_overview.md` read and used as input.
- [ ] Deep codebase analysis completed.
- [ ] Technical research completed (Context7 + Web Search).
- [ ] Clarification questions completed and answered.
- [ ] Development plan presented and approved.
- [ ] Document generated using the template.
- [ ] All sections grounded in confirmed decisions or marked as open.
- [ ] File saved to `docs/architecture.md`.
- [ ] `AGENTS.md` consistency verified and updated if needed.
- [ ] Open decisions listed in Section 17.
- [ ] Final path provided.

## Error Handling
- If `docs/project_overview.md` does not exist, halt and recommend running `make-project-overview` first.
- If the user provides insufficient context, ask follow-up clarification questions before proceeding.
- If the template file is missing, report the error and halt — do not generate a document without the template.
- If `docs/architecture.md` already exists and the user has not confirmed regeneration or revision, halt and ask.
- If the output directory does not exist, create it.
- If Context7 MCP is unavailable, fall back to Web Search for technical documentation.
