# [Project Name] Architecture

## 1. Purpose

[State what this document captures: the core technical architecture decisions at the product-platform level. Clarify that this is not a feature-specific tech spec. Note what it covers and how it handles open decisions.]

---

## 2. Architecture Goals

[List the high-level goals the architecture must support. Derive these from the product vision in `docs/project_overview.md`.]

---

## 3. Core Principles

[Define the foundational architectural principles. Each should have a short title and one-sentence explanation. Examples: Web-First Delivery, API-First Design, Event-Driven Processing, Local-First Storage, Keep the MVP Simple.]

---

## 4. Product Surface Area

[List the main product surfaces (for example, web app, mobile app, desktop app, CLI, admin, API, worker, or browser extension) and their roles within the monorepo.]

---

## 5. Monorepo Strategy

### 5.1 Repository Model

[State the monorepo tool and approach.]

### 5.2 High-Level Structure

[List the top-level directory structure: `apps/*` and `packages/*` with names.]

### 5.3 Shared Packages

[Describe the package responsibilities and sharing conventions. Cover what each package owns and the principles for when to share code vs keep it platform-specific.]

---

## 6. Client and Runtime Decisions

### 6.1 Primary User Surfaces

[Describe the main user-facing surfaces, frameworks, runtimes, tooling, and any surface-specific constraints.]

### 6.2 Supporting or Internal Surfaces

[Describe any supporting surfaces such as admin apps, dashboards, internal tools, CLIs, workers, or extensions.]

### 6.3 Runtime and Delivery Model

[Describe how the chosen runtimes and delivery model map to the surfaces above.]

---

## 7. Data Architecture

### 7.1 Source of Truth

[State where the system's source-of-truth data lives and what the product will NOT use for persistence.]

### 7.2 Storage Formats

[List the primary persistence structures and formats and their roles (for example, relational tables, object storage, document collections, event logs, config files, or cached client state).]

### 7.3 Core Domain Model

[Describe the primary domain entities and runtime data model. Include an example schema or payload shape with the standard fields.]

### 7.4 Data Organization

[Describe how persistent entities are organized across backend and client layers.]

### 7.5 Preferences and Local Configuration

[Describe how local preferences, client configuration, cached state, or other local settings are stored.]

### 7.6 File Visibility

[State the principle for data visibility, portability, and ownership where applicable.]

---

## 8. Sync and State Propagation Model

### 8.1 Sync Approach

[Describe how state and data propagate through the system: realtime subscriptions, queues, polling, offline sync, cache invalidation, or replication as applicable.]

### 8.2 Architectural Implication

[List what the application is and is not responsible for regarding sync.]

---

## 9. Authentication and Accounts

### 9.1 Product Scope

[State the current authentication and identity scope.]

### 9.2 Current Decision

[List what the product does not depend on for auth.]

---

## 10. Integration Architecture

### 10.1 Core Providers and Services

[List the important external and internal services the system depends on and the role each one plays.]

### 10.2 Secrets and Credential Management

[Describe where secrets, tokens, keys, and credentials live and how they are accessed.]

### 10.3 Request and Event Flow

[Describe how requests, jobs, and events move through the system.]

### 10.4 Internal Abstraction Layer

[Describe any shared client, service, repository, SDK, or orchestration layer that isolates integrations from the rest of the codebase.]

### 10.5 Complexity Constraint

[State what the MVP should avoid in terms of integration or infrastructure complexity.]

---

## 11. Backend Architecture

### 11.1 Current Direction

[State whether a backend is required and what it looks like today.]

### 11.2 Excluded Technologies

[List technologies and services explicitly excluded from the current architecture.]

### 11.3 Future Flexibility

[Describe what could justify adding a backend later, without making it a current requirement.]

---

## 12. App Model

### 12.1 Shared System

[Describe the relationship between modules, apps, features, plugins, or bounded contexts and the shared systems they depend on.]

### 12.2 Initial App Structure

[List the initial apps, modules, or bounded contexts and their data organization.]

### 12.3 Product Behavior

[Describe how the major surfaces or modules interact at runtime.]

---

## 13. Cross-Platform or Cross-Surface Parity Direction

[Describe the parity strategy across platforms or surfaces: shared schemas, shared logic, platform-specific access layers, and acceptable intentional differences.]

---

## 14. Distribution and Supporting Surface Architecture

[Describe how marketing sites, docs sites, internal consoles, partner portals, public APIs, or other supporting surfaces relate to the core product architecture.]

---

## 15. Future Architecture Direction

[Describe future platform directions that the current architecture should leave room for, without implementing them now.]

---

## 16. Explicit Non-Goals for the Current Architecture

[List what the current architecture does NOT assume or support.]

---

## 17. Open Decisions

[List items that are still open and should be decided in later revisions. These are acknowledged unknowns, not deferred features.]

---

## 18. Summary

[One-paragraph summary of the entire architecture: what the product is, how it is built, where data lives, how the major systems interact, and what is deliberately excluded.]
