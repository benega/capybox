---
name: update-docs
description: Propagates accepted architectural and product decisions from completed feature specs back into the global project documents. Reviews shipped feature PRDs and Tech Specs for intentional changes, proposes updates to docs/project_overview.md, docs/architecture.md, and AGENTS.md, and applies them after user approval. Use after a feature ships or when global docs have drifted from reality. Do not use for feature spec creation, task implementation, or code review.
---

# Global Docs Update

## Procedures

**Step 1: Validate Prerequisites**
1. Confirm the feature slug has been provided (or "all" to scan every feature).
2. For a single feature, verify its spec directory exists at `.specs/tasks/prd-[feature-slug]/`.
3. Verify the global docs exist:
   - `docs/project_overview.md`
   - `docs/architecture.md`
   - `AGENTS.md`

**Step 2: Load Current State (Mandatory)**
1. Read `docs/project_overview.md` completely.
2. Read `docs/architecture.md` completely.
3. Read `AGENTS.md` completely.

**Step 3: Analyze Feature Specs (Mandatory)**
1. For the target feature (or each feature if "all"):
   a. Read the PRD at `.specs/tasks/prd-[feature-slug]/prd.md`.
   b. Read the Tech Spec at `.specs/tasks/prd-[feature-slug]/techspec.md`.
   c. Identify sections that mention intentional changes, extensions, or tensions with the global docs.
   d. Identify decisions that were made during spec or implementation that are not yet reflected in the global docs.
2. Also scan the current codebase for structural or technological realities that the docs do not yet capture.

**Step 4: Propose Changes (Mandatory)**
1. Present a categorized list of proposed updates:
   - **Project Overview updates**: changes to product scope, personas, features, platform model, or vision.
   - **Architecture updates**: changes to tech stack, data model, monorepo structure, client decisions, AI integration, or open decisions that have since been resolved.
   - **AGENTS.md updates**: changes to architecture constraints, tech stack, data model, code conventions, or guardrails that must stay in sync with the global docs.
2. For each proposed change:
   - State what the current doc says.
   - State what the new reality is.
   - Cite the source (feature spec, codebase, or user decision).
3. Do NOT apply any changes until the user approves.

**Step 5: Apply Approved Changes (Mandatory)**
1. Apply only the changes the user approved.
2. Preserve the existing structure and style of each document.
3. Update the "Open Decisions" section in `docs/architecture.md` — remove items that are now decided, add new open items if any emerged.
4. Update `AGENTS.md` to reflect any approved changes to architecture constraints, tech stack, data model, code conventions, or guardrails. `AGENTS.md` is a distilled, actionable version of the global docs — it must stay consistent with them.
5. Do NOT rewrite sections that were not approved for change.

**Step 6: Report Results**
1. Summarize what was updated in each document.
2. List any proposed changes the user declined, for future reference.
3. Call out any remaining inconsistencies between the global docs and the shipped features.

## Core Principles
- Global docs are the project-level source of truth — keep them accurate.
- Never silently change the docs; always get explicit approval.
- Preserve the document structure and writing style.
- Prefer small, precise edits over section rewrites.

## Quality Checklist
- [ ] `docs/project_overview.md` reviewed.
- [ ] `docs/architecture.md` reviewed.
- [ ] `AGENTS.md` reviewed.
- [ ] Feature spec(s) analyzed for intentional changes.
- [ ] Proposed changes presented to user with sources.
- [ ] Only approved changes applied.
- [ ] `AGENTS.md` updated to match approved global doc changes.
- [ ] "Open Decisions" section updated.
- [ ] Results summarized.

## Error Handling
- If no feature slug is provided and no specs exist, halt and report that there are no features to analyze.
- If either global doc is missing, report the missing file and halt.
- If the feature spec directory does not exist, report and halt.
- If the user declines all changes, acknowledge and close without modifying any files.
