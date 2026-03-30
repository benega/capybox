# [Project Name] Architecture

## 1. Purpose

[State what this document captures: the core technical architecture decisions at the product-platform level. Clarify that this is not a feature-specific tech spec. Note what it covers and how it handles open decisions.]

---

## 2. Architecture Goals

[List the high-level goals the architecture must support. Derive these from the product vision in `docs/project_overview.md`.]

---

## 3. Core Principles

[Define the foundational architectural principles. Each should have a short title and one-sentence explanation. Examples: Local-First, User-Owned Data, Single-User First, No Required Backend, AI as a Native Layer, Keep the MVP Simple.]

---

## 4. Product Surface Area

[List the main product surfaces (e.g., desktop app, mobile app, landing page) and their roles within the monorepo.]

---

## 5. Monorepo Strategy

### 5.1 Repository Model

[State the monorepo tool and approach.]

### 5.2 High-Level Structure

[List the top-level directory structure: `apps/*` and `packages/*` with names.]

### 5.3 Shared Packages

[Describe the package responsibilities and sharing conventions. Cover what each package owns and the principles for when to share code vs keep it platform-specific.]

---

## 6. Client Platform Decisions

### 6.1 Desktop App

[Framework choices, runtime, tooling, and platform-specific behaviors.]

### 6.2 Mobile App

[Framework choices, runtime, and file access model. Note any open platform-specific decisions.]

### 6.3 Landing Page

[Framework, deployment model, and relationship to the product app architecture.]

---

## 7. Data Architecture

### 7.1 Source of Truth

[State where user data lives and what the product will NOT use for persistence.]

### 7.2 Storage Formats

[List the file formats and their roles (e.g., Markdown for content, JSON for config).]

### 7.3 Content File Model

[Describe the file model for the primary content type (e.g., one-note-per-file with YAML frontmatter). Include a frontmatter schema example and the standard fields.]

### 7.4 Data Organization

[Describe the top-level folder structure for user data (e.g., `/notes`, `/apps/*`).]

### 7.5 Preferences and Local Configuration

[Describe how preferences are stored, the format, and the default path.]

### 7.6 File Visibility

[State the principle for file visibility and portability.]

---

## 8. Sync Model

### 8.1 Sync Approach

[Describe how data sync works (user-managed vs application-managed).]

### 8.2 Architectural Implication

[List what the application is and is not responsible for regarding sync.]

---

## 9. Authentication and Accounts

### 9.1 Product Scope

[State the current auth scope (e.g., single-user, no accounts).]

### 9.2 Current Decision

[List what the product does not depend on for auth.]

---

## 10. AI Architecture

### 10.1 Provider Strategy

[List AI providers and the key management model (e.g., BYOK).]

### 10.2 Key Storage

[Describe where and how AI keys are stored.]

### 10.3 Request Flow

[Describe how AI requests travel (e.g., direct client-to-provider).]

### 10.4 AI Integration Layer

[Name the orchestration framework and list the capabilities it should support.]

### 10.5 Complexity Constraint

[State what the MVP should avoid in terms of AI infrastructure complexity.]

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

[Describe the relationship between apps and the shared data layer.]

### 12.2 Initial App Structure

[List the initial apps and their data organization.]

### 12.3 Product Behavior

[Describe how the chat and structured interfaces interact with apps.]

---

## 13. Cross-Platform Parity Direction

[Describe the parity strategy between desktop and mobile: shared schemas, shared logic, platform-specific access layers.]

---

## 14. Landing Page Architecture

[Describe the landing page's role, its independence from the product architecture, and its deployment model.]

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

[One-paragraph summary of the entire architecture: what the product is, how it is built, where data lives, how AI works, and what is deliberately excluded.]
