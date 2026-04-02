# Task 1.0: Scaffold the Capybox POC monorepo baseline for `apps/tv`, `apps/mobile`, and shared packages

<critical>Read `docs/project_overview.md`, `docs/architecture.md`, `prd.md`, and `techspec.md` before starting this task; if you do not read the required context files, your task will be invalid</critical>

## Overview

Create the greenfield workspace baseline required by the POC: Turborepo structure, `tv` and `mobile` Next.js apps, shared packages, shared TypeScript/tooling configuration, and environment variable plumbing for Supabase and the fixed room code.

## Context Alignment

This task converts the planned architecture from `docs/architecture.md` into an actual repo structure while preserving the product model in `docs/project_overview.md`: separate `tv` and `mobile` browser surfaces with shared code and a realtime multiplayer baseline. It is also the main architecture-reconciliation task for this feature because the repository currently contains specs and docs but not the planned application scaffold.

<skills>
### Compliance with Standard Skills

- `vercel-react-best-practices`
- `find-docs`
- `context7-mcp`
</skills>

<requirements>
- Scaffold a Turborepo-compatible workspace layout that includes `apps/tv`, `apps/mobile`, `packages/game-engine`, `packages/types`, and `packages/services`.
- Use Next.js App Router conventions for both apps, including `app/layout.tsx`, `app/page.tsx`, and route metadata.
- Add the shared TypeScript, linting, workspace, and package configuration needed for later tasks to build on stable boundaries.
- Add per-surface manifest ownership consistent with the project’s PWA-first direction, while deferring service worker/offline behavior.
- Define environment variable handling for Supabase URL/key and the shared POC room code without introducing production credential assumptions.
</requirements>

## Subtasks

- [x] 1.1 Create the workspace, app, and package directory structure defined by the feature tech spec
- [x] 1.2 Add shared workspace configuration, TypeScript settings, and package wiring for cross-package imports
- [x] 1.3 Scaffold both Next.js apps with required App Router root files and basic surface metadata
- [x] 1.4 Add environment configuration and developer setup notes for Supabase and the fixed room code
- [x] 1.5 Create and run baseline validation for workspace bootstrapping and app/package resolution

## Implementation Details

Reference `techspec.md` sections:
- `System Architecture > Component Overview`
- `Integration Points > Next.js`
- `Development Sequencing > Build Order`
- `Development Sequencing > Technical Dependencies`

Do not define quiz logic, realtime message contracts, or surface-specific game behavior here beyond the minimum placeholder structure needed for later tasks.

## Success Criteria

- The repository contains the planned `apps/tv`, `apps/mobile`, and shared package paths required by the feature.
- Both apps have valid App Router roots and can serve as independent surfaces for later implementation.
- Shared package imports resolve cleanly under the workspace configuration.
- Environment setup is documented enough for another developer to start the remaining tasks without guessing project structure.

## Task Tests

- [x] Unit tests
- [x] Integration tests
- [ ] E2E tests (deferred to Task `7.0`; this task should not own primary user-flow Playwright coverage, but it must leave both surfaces bootable for later E2E work)

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING THE TASK COMPLETE</critical>

## Relevant files

- `docs/project_overview.md`
- `docs/architecture.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/prd.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/techspec.md`
- `apps/tv/*`
- `apps/mobile/*`
- `packages/game-engine/*`
- `packages/types/*`
- `packages/services/*`
- Workspace root config files created for the monorepo
