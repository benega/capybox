# Capybox Monorepo Baseline

This repository now contains the Task 1.0 baseline for the TV + Mobile Quiz POC:

- `apps/tv`: Next.js App Router host surface
- `apps/mobile`: Next.js App Router controller surface
- `packages/game-engine`: placeholder quiz-engine boundary for later tasks
- `packages/types`: shared Capybox contracts and surface vocabulary
- `packages/services`: shared Supabase/env plumbing

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy the shared environment values into each app:

```bash
cp .env.example apps/tv/.env.local
cp .env.example apps/mobile/.env.local
```

3. Fill in the public Supabase values for local testing:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_CAPYBOX_ROOM_CODE`

`NEXT_PUBLIC_CAPYBOX_ROOM_CODE` defaults to `CAPYBOX` for the POC if it is left blank.

4. Run each surface:

```bash
npm run dev:tv
npm run dev:mobile
```

## Validation Commands

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Notes

- The POC keeps `tv` and `mobile` as separate browser surfaces from day one.
- Supabase wiring is intentionally limited to shared public env parsing and a client factory. Realtime session behavior lands in later tasks.
- Each app owns its own `manifest.ts` to stay aligned with the project's PWA-first direction without introducing offline/service-worker behavior yet.
