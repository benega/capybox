# Product Requirements Document (PRD) Template

## Overview

TV + Mobile Quiz POC is a proof-of-concept feature for Capybox that validates the core same-room multiplayer loop using a TV web app as the shared game screen and a mobile web app as the controller. The POC focuses on a simple quiz experience with 5 questions, where the TV shows the shared game state and the mobile device is used to join, start the round, and submit answers.

The problem this POC solves is uncertainty around the most important Capybox interaction: whether a browser-based TV surface and a browser-based mobile surface can feel connected, responsive, and understandable in the same room. This feature is valuable because it proves the product’s central promise before broader platform work continues.

## Project Context Alignment

This feature directly advances Capybox’s core product vision of instant same-room social play using TV as host and mobile as controller. It supports the primary experience flow described in `docs/project_overview.md`, where a shared TV experience is controlled from phones, and it reinforces the platform strategy of starting with simple multiplayer games and realtime interactions.

For this POC, the feature intentionally simplifies one project-level assumption: instead of QR-code joining, players join through manual room code entry. This is a temporary validation shortcut for local use and does not change the long-term QR-first direction of the product. The feature also narrows the initial multiplayer scope to one player for demonstration purposes while still preserving the broader Capybox platform framing.

## Goals

- Prove that the TV and mobile web apps can maintain a shared realtime game session in the same room.
- Prove that the mobile device can act as the primary control surface for joining, starting, and answering in a quiz round.
- Allow a single player to complete a full 5-question quiz round from join to final ranking without operator intervention outside the defined flow.
- Demonstrate a clear and understandable two-screen experience where the TV presents shared context and the phone handles personal input.

Success indicators for the POC:
- A user can join the TV session from mobile using a manual room code.
- A user can start the game from mobile and see the TV transition into gameplay.
- Each answer selected on mobile is reflected correctly in the shared game progression.
- The round completes reliably and ends on a final ranking screen.

## User Stories

- As the host/operator, I want the TV to show a waiting screen before the game starts so that it is obvious the session is ready for players to connect.
- As a player, I want to join the game from my phone using a room code so that I can connect without scanning a QR code during this POC.
- As a player, I want to start the game from my phone once connected so that the phone clearly acts as a controller and not just a passive companion screen.
- As a player, I want to see the current quiz question and answer options on both the TV and my phone so that I always understand the shared game state.
- As a player, I want to select my answer on my phone so that the input feels personal and controller-driven.
- As the host/operator, I want the TV to advance through a complete 5-question round so that I can validate the end-to-end experience.
- As a player, I want to see a final ranking at the end of the round so that the experience has a clear outcome and feels like a complete game loop.

## Core Features

- Waiting Lobby
  - The TV app presents a pre-game landing state that clearly indicates the session is available and waiting for mobile players to connect.
  - This matters because the TV is the anchor for the shared same-room experience.
- Manual Join Flow
  - The mobile app allows a player to enter a room code and connect to the TV session.
  - This matters because it provides a simple POC-friendly alternative to QR join while preserving the concept of session-based entry.
- Mobile Start Control
  - After joining, the mobile app can send the start action that begins the quiz on the TV.
  - This matters because it validates the phone-as-controller mechanic central to Capybox.
- Shared Quiz Round
  - The game consists of a fixed set of 5 quiz questions for the POC.
  - Questions and answer options are visible on the TV and on the mobile app.
  - This matters because it creates a simple, testable shared game format.
- Mobile Answer Submission
  - The player selects answers on the phone, not on the TV.
  - This matters because it reinforces the role separation between shared display and personal control.
- Final Ranking
  - The round ends with a final ranking shown on the TV and available on mobile.
  - This matters because it gives the POC a full start-to-finish game loop.

Functional Requirements:
1. The TV app must display a landing/waiting screen before gameplay begins.
2. The waiting screen must communicate that the session is ready for mobile devices to connect.
3. The mobile app must allow a player to enter a room code and attempt to join the active TV session.
4. The system must support a single-player POC flow from join to game completion.
5. Once connected, the mobile app must allow the player to trigger the start of the quiz round.
6. When the mobile app triggers start, the TV app must transition from the waiting state into the game state.
7. The POC quiz must contain exactly 5 questions.
8. Each quiz question must present selectable answer options.
9. The TV app must display the active question and its answer options during gameplay.
10. The mobile app must display the active question and its answer options during gameplay.
11. The player must be able to select an answer from the mobile app for each question.
12. The game must progress through all 5 questions in order and complete the round.
13. The system must keep TV and mobile views synchronized to the same stage of the round.
14. At the end of the round, the TV app must display a final ranking.
15. The mobile app must display the final outcome of the round consistent with the TV result.

## User Experience

The primary users for this POC are the project owner acting as both host/operator and player during validation. The experience should still feel like a real Capybox session, with the TV acting as the room’s shared visual anchor and the phone acting as the personal control device.

Main flow:
- Open the TV app and land on a waiting screen.
- Open the mobile app, enter the room code, and join the session.
- Start the game from the mobile app.
- View each question on both screens.
- Select answers on the mobile app.
- Finish the 5-question round and view the final ranking.

UX requirements:
- The TV experience should prioritize readability from a distance with clear status changes between waiting, active question, and final ranking states.
- The mobile experience should prioritize fast, obvious taps for answer selection and start control.
- The relationship between the two screens should remain clear at every step so users understand what belongs on the shared display versus the controller.
- Accessibility should include readable text contrast, large enough interactive touch targets on mobile, and simple screen states that reduce confusion.

## High-Level Technical Constraints

- The feature must align with Capybox’s web-first product direction and planned `tv` and `mobile` app surfaces.
- The feature must respect the project’s realtime multiplayer architecture direction, even though this PRD does not prescribe implementation details.
- The experience should preserve session-based interaction between TV and mobile rather than relying on disconnected local-only views.
- The POC should maintain the Capybox product model of TV as host and mobile as controller.
- The feature should be designed with browser-based usage in mind, including TV readability and mobile responsiveness.
- The temporary use of manual room code entry is allowed for this POC, but it should be treated as a short-term validation constraint rather than a new long-term product requirement.

## Out of Scope

- QR code generation or QR-based joining
- Multiplayer support beyond the single-player POC target
- Game library browsing or choosing between multiple game types
- Account creation, profile management, or long-term identity
- Monetization, subscriptions, or premium content
- Non-quiz game modes
- Content management tools for authoring quiz questions
- Audio, advanced animation, or polished production presentation requirements
- Native app shells or non-browser controller experiences
