# AGENTS.md — Spring Valley Las Vegas Homes

Stack: **Next.js 14+ App Router**, **TypeScript**, **Tailwind**, **pnpm** (`packageManager` in `package.json`).

## Hosting & DNS (March 2026)

| Layer | Role |
|--------|------|
| **Vercel** | Primary production for `www.springvalleylasvegashomes.com` — use `vercel build` / `vercel deploy --prebuilt` for parity checks. |
| **Cloudflare** | Optional: **DNS-only (gray cloud)** when pointing at Vercel to avoid double-proxy SSL issues. Cloudflare Pages / Workers workflows exist for alternate deploys — align project names in GitHub env vars. |
| **Git** | `main` is deploy branch. See `CONTRIBUTING.md` for pnpm, branches, and PR checklist. |

## Cursor AI

- Prefer **`pnpm`** over `npm`/`yarn` in commands and CI.
- **Do not edit** `components/idx/**` without explicit approval (MLS compliance).
- **RealScout**: load script once in root layout; CSP must include `em.realscout.com` and `www.realscout.com` for `script-src` and `connect-src`.
- Scoped rules live under **`.cursor/rules/`** (and user global rules). When editing `app/**/page.tsx`, follow real-estate marketing + NAP rules.
- Large folders are listed in **`.cursorignore`** to keep indexing fast; lockfiles remain tracked in git.

## Secrets

- Never commit live keys. Use `.env.example` and Vercel / GitHub **Secrets**. `.cursor/mcp.json` is gitignored.

## Quality gates before merge

`pnpm exec tsc --noEmit` → `pnpm lint` → `pnpm format:check` → `vercel build` (when validating production-like output).
