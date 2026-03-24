# Contributing & Git workflow

This repo uses **pnpm** (`packageManager` in `package.json`). Prefer `pnpm` over `npm`/`yarn` so the lockfile stays consistent.

## Before opening a PR

1. `pnpm exec tsc --noEmit`
2. `pnpm lint`
3. `pnpm format:check` (or `pnpm format` to write)
4. Production checks: prefer `vercel build` when validating deploy parity (see project rules).

## Branches

- **`main`** — production-ready history; deploy from here.
- **`feature/<short-topic>`** — new work (e.g. `feature/zip-map-seo`).
- **`fix/<issue>`** — bugfixes.

Rebase or merge from `main` regularly to avoid drift.

## Commits

Use clear, imperative subjects (optional [Conventional Commits](https://www.conventionalcommits.org/) style):

- `feat: add Enterprise neighborhood page`
- `fix: correct listing canonical URL`
- `chore: update gitignore for turbo cache`
- `deps: bump next` (often via Dependabot)

## Do not commit

- Secrets, `.env*`, API keys — use `.env.example` and platform env (see `security-env` rules).
- Local tool folders: `.vercel`, `.next`, `.turbo`, `.wrangler` (see `.gitignore`).
- Large binaries: use CDN/static hosting or Git LFS if you must version them.

## GitHub

- **CODEOWNERS** — default reviewer paths (`.github/CODEOWNERS`).
- **Dependabot** — `.github/dependabot.yml`; auto-merge workflow where enabled.
- **Pull requests** — use `.github/PULL_REQUEST_TEMPLATE.md`.

## Line endings

Repository uses **LF**. `.gitattributes` enforces normalization; on Windows, set `git config core.autocrlf input` (or rely on EditorConfig + Git attributes).
