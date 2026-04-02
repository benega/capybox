# Task 3.0: Build the shared Supabase realtime session adapter

<critical>Read `docs/project_overview.md`, `docs/architecture.md`, `prd.md`, and `techspec.md` before starting this task; if you do not read the required context files, your task will be invalid</critical>

## Overview

Implement the shared realtime service layer that joins a session channel, manages presence, routes commands, and publishes canonical state snapshots for both `tv` and `mobile`.

## Context Alignment

This task preserves the Capybox realtime multiplayer model from the project docs while honoring the POC’s intentional simplification: Realtime-only session state with no persistent `sessions`, `players`, or `events` tables yet. It keeps the dependency on Supabase aligned with the architecture baseline and prepares both surfaces to share one consistent session protocol.

<skills>
### Compliance with Standard Skills

- `find-docs`
- `context7-mcp`
</skills>

<requirements>
- Build a shared browser-oriented Supabase client factory and realtime adapter in `packages/services`.
- Support joining `session:{roomCode}` with role-aware presence payloads for `tv` and `mobile`.
- Support `command` and `state` broadcast events, including self-delivery behavior required by the TV flow.
- Expose a clear interface for joining rooms, sending commands, publishing state, and registering command/state handlers.
- Handle invalid or disconnected realtime states in a way the apps can surface cleanly later.
</requirements>

## Subtasks

- [ ] 3.1 Create the shared Supabase client factory and environment-driven configuration
- [ ] 3.2 Implement channel join, presence, and room lifecycle handling for `session:{roomCode}`
- [ ] 3.3 Implement command publishing and canonical state snapshot broadcasting
- [ ] 3.4 Add serialization/parsing and routing helpers for shared session message handling
- [ ] 3.5 Create and run mocked unit and integration tests for presence, routing, and state publication flows

## Implementation Details

Reference `techspec.md` sections:
- `Implementation Design > Main Interfaces`
- `Implementation Design > Communication Interfaces`
- `Integration Points > Supabase Realtime`
- `Testing Approach > Unit Tests`
- `Testing Approach > Integration Tests`

Do not put TV-only authority rules or mobile UI branching in this package; it should remain a thin shared adapter.

## Success Criteria

- Both surfaces can depend on one shared realtime abstraction rather than duplicating channel logic.
- Presence and broadcast contracts match the shared types from Task `2.0`.
- The adapter supports the TV’s need to publish canonical snapshots and the mobile’s need to send controller commands.
- Mocked tests cover message routing and presence behavior without requiring a live Supabase project.

## Task Tests

- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests (not applicable for this package-level task; committed browser E2E remains owned by Task `7.0`)

<critical>ALWAYS CREATE AND RUN THE TASK TESTS BEFORE CONSIDERING THE TASK COMPLETE</critical>

## Relevant files

- `docs/project_overview.md`
- `docs/architecture.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/prd.md`
- `.specs/tasks/prd-tv-mobile-quiz-poc/techspec.md`
- `packages/services/*`
- `packages/types/*`
