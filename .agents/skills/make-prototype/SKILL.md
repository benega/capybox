---
name: make-prototype
description: Creates screen prototypes in Pencil (.pen files) by analyzing the project context, proposing a visual direction (colors, fonts, aesthetic tone), confirming choices with the user, and designing screens using the Pencil MCP tools. Outputs prototype files to docs/prototypes/. Use when the user asks to create prototypes, wireframes, screen mockups, or visual explorations for a feature or the product. Do not use for final production UI implementation, code generation, or tech specs.
---

# Prototype Creation

## Prerequisites
- The Pencil MCP server must be enabled and available.
- The `frontend-design` skill must be loaded and followed for all visual decisions.

## Procedures

**Step 1: Context Analysis (Mandatory)**
1. Read `docs/project_overview.md` to understand the product vision, personas, and scope.
2. Read `docs/architecture.md` to understand client platforms, data model, and interaction model.
3. If a PRD exists for the feature being prototyped, read it at `.specs/tasks/prd-[feature-slug]/prd.md`.
4. If a Tech Spec exists, read it at `.specs/tasks/prd-[feature-slug]/techspec.md`.
5. Identify target platforms (`tv`, `mobile`, `web`, or a combination) from the architecture and PRD.
6. Summarize the screens and flows that need to be prototyped.
7. Do NOT skip this step — full product understanding shapes every design decision.

**Step 2: Load Frontend Design Skill (Mandatory)**
1. Read the `frontend-design` skill at `.agents/skills/frontend-design/SKILL.md`.
2. Follow ALL of its Design Thinking and Frontend Aesthetics Guidelines throughout the prototype.
3. Complete the Design Thinking exercise from that skill before proposing any visual direction:
   - **Purpose**: What problem does this interface solve? Who uses it?
   - **Tone**: Commit to a BOLD aesthetic direction — not generic, not safe.
   - **Constraints**: Platform targets, data model, interaction patterns.
   - **Differentiation**: What makes this interface UNFORGETTABLE?
4. The `frontend-design` skill governs ALL visual choices in the prototype. Every color, font, and layout decision must pass its guidelines.

**Step 3: Propose Visual Direction (Mandatory)**
1. Based on the project context and the Design Thinking exercise, propose a complete visual direction:
   - **Aesthetic tone**: The overall feel (e.g., editorial-luxury, soft-organic, brutalist-minimal, retro-futuristic). Justify why it fits the product.
   - **Color palette**: Primary, secondary, accent, background, surface, and text colors. Provide hex values. Explain the reasoning.
   - **Typography**: A display/heading font and a body font. Must be distinctive and characterful — never generic (no Inter, Roboto, Arial, system fonts). Explain why these fonts fit the tone.
   - **Spacing & density**: Generous whitespace vs. controlled density. Justify the choice.
   - **Signature elements**: One or two distinctive visual details (e.g., grain overlays, geometric accents, asymmetric layouts, distinctive border treatments).
2. Present this proposal clearly to the user as a structured summary.
3. Ask the user to confirm, adjust, or reject the visual direction.
4. Do NOT proceed to screen design until the user explicitly approves the direction.
5. If the user requests changes, revise the proposal and ask for confirmation again.

**Step 4: Pencil Setup (Mandatory)**
1. Call `get_editor_state` with `include_schema: true` to load the .pen file schema.
2. Call `get_guidelines` first without arguments to inspect available guides and styles.
3. Call `get_guidelines` again with the most relevant guide or style for the approved direction, such as `web-app` or `mobile-app`.
4. Determine the prototype file path: `docs/prototypes/[feature-slug].pen` (or `docs/prototypes/product.pen` for general product prototypes).
5. Call `open_document` with `new` if the file does not exist, or with the file path if it does.

**Step 5: Define Design Variables (Mandatory)**
1. Using the approved visual direction from Step 3, call `set_variables` to establish the design tokens:
   - Color variables for the full palette (primary, secondary, accent, background, surface, text, etc.).
   - Typography variables if supported.
2. These variables ensure consistency across all prototype screens.

**Step 6: Create Prototype Screens (Mandatory)**
1. For each screen identified in Step 1:
   a. Call `find_empty_space_on_canvas` to position the new screen.
   b. Use `batch_design` to create the screen structure (max 25 operations per call).
   c. Apply the approved color palette, typography, and spacing from Step 3.
   d. Follow the Pencil guidelines loaded in Step 4.
   e. Follow the `frontend-design` skill aesthetics for layout composition, spatial relationships, and visual details.
   f. Name each screen frame clearly (for example, "Lobby - TV", "Join - Mobile", "Results - TV").
   g. Use `G` operations for placeholder images where needed.
2. Build screens incrementally — structure first, then content, then polish.
3. Keep each `batch_design` call to 25 operations maximum.

**Step 7: Visual Validation (Mandatory)**
1. After completing each screen, call `get_screenshot` to capture and inspect it.
2. Analyze the screenshot for:
   - Layout alignment and spacing consistency.
   - Color palette adherence to the approved direction.
   - Typography hierarchy and readability.
   - Overall aesthetic coherence with the `frontend-design` skill guidelines.
   - Any visual glitches, overlaps, or misalignments.
3. If issues are found, fix them with additional `batch_design` calls and re-screenshot.
4. Call `snapshot_layout` with `problemsOnly: true` to catch layout issues.

**Step 8: Export Screens (Mandatory)**
1. Collect all screen frame node IDs.
2. Call `export_nodes` to export each screen as PNG to `docs/prototypes/`.
3. Confirm exported file paths to the user.

**Step 9: Present Final Prototype**
1. Summarize all created screens with their names and purposes.
2. List the file path of the .pen file and the exported PNGs.
3. Remind the user that the visual direction (colors, fonts, tone) is captured in the .pen file variables and can be carried forward to implementation.

## Quality Checklist
- [ ] Project overview and architecture were read before any design work.
- [ ] `frontend-design` skill was loaded and its Design Thinking exercise was completed.
- [ ] Visual direction was proposed with colors, fonts, tone, and signature elements.
- [ ] User explicitly confirmed the visual direction before screen design began.
- [ ] Pencil guidelines were loaded before creating screens.
- [ ] Design variables (colors, typography) were set in the .pen file.
- [ ] Every screen was visually validated with `get_screenshot`.
- [ ] Layout problems were checked with `snapshot_layout`.
- [ ] Screens were exported as PNGs to `docs/prototypes/`.
- [ ] No generic AI aesthetics were used (per `frontend-design` skill).

## Error Handling
- If the Pencil MCP server is unavailable, halt and inform the user.
- If no PRD or Tech Spec exists, proceed with the project overview and architecture as the sole context.
- If the user rejects the visual direction multiple times, ask clarifying questions about their preferences before proposing again.
- If a `batch_design` call fails, inspect the error, adjust operations, and retry.
- If `get_screenshot` reveals persistent issues after two fix attempts, document the issue and move to the next screen.
