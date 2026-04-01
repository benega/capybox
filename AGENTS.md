# Capybox Agent Guide

## Project Source of Truth

- Product direction lives in `docs/project_overview.md`.
- Technical direction lives in `docs/architecture.md`.
- Feature specs live under `.specs/tasks/prd-[feature-slug]/`.
- If a task changes project-wide assumptions, update the docs as part of the work or propose the change explicitly.

## Current Repo State

- This repository currently contains project docs, skill scaffolding, and command scaffolding.
- The application codebase has not been scaffolded yet. Do not assume package scripts, frameworks, or folder contents exist unless they are present in the repo.
- When instructions mention app startup, inspect the actual repo files first and derive commands from `package.json` or workspace config instead of hardcoding them.

## Capybox Product Model

- Capybox is a social gaming platform for same-room multiplayer play.
- Primary interaction model:
  - `tv` surface = host and game screen
  - `mobile` surface = player controller
  - QR code = session join mechanism
- The product is PWA-first and optimized for frictionless join.
- The platform is intended to support multiple social game types, not just a single quiz flow.

## Planned Architecture Baseline

- Monorepo direction: Turborepo.
- Planned app surfaces:
  - `apps/tv`
  - `apps/mobile`
  - `apps/web`
- Planned shared packages:
  - `packages/ui`
  - `packages/game-engine`
  - `packages/hooks`
  - `packages/utils`
  - `packages/types`
  - `packages/services`
- Planned backend/infrastructure:
  - Supabase
  - realtime session channels
  - session, player, and event data models

## Working Conventions

- Use `tv`, `mobile`, and `web` as the default surface vocabulary in specs, QA, bug reports, and implementation notes.
- Do not use `desktop`, `landing`, `Electron`, or `Expo` terminology unless the repository later introduces those surfaces explicitly.
- Treat the TV host and mobile controller as separate UX surfaces with shared session state.
- Prefer browser-based Playwright coverage for current plans unless a future codebase introduces native shells or device-specific wrappers.
- For library or framework questions, use Context7 before relying on memory.

## Spec Workflow

- PRD: defines what and why.
- Tech Spec: defines how.
- Tasks: break the feature into incremental deliverables with explicit testing ownership.
- QA validates implemented requirements and writes findings to `bugs.md`.
- Bugfix work should add regression coverage whenever a bug is fixed.

## Documentation Expectations

- Keep language concrete and aligned to Capybox's realtime multiplayer model.
- Do not import assumptions from previous projects, especially around local-first storage, AI/BYOK architecture, or desktop-native shells.
- If docs and repository reality diverge, call it out clearly and prefer the actual repository state for implementation details.
