# Supabase Baseline Notes

Task 1.0 intentionally stops at shared public environment plumbing.

## Expected Public Values

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_CAPYBOX_ROOM_CODE`

## Scope for This Task

- No tables or SQL migrations yet
- No auth flows yet
- No realtime channel adapter yet

The goal of this folder at the scaffold stage is to document that the TV and mobile surfaces will share the same Supabase project and the same manual POC room code, while later tasks implement the actual Realtime session behavior.
