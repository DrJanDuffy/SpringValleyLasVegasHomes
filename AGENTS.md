# AGENTS.md — Spring Valley Las Vegas Homes

Stack: **Next.js 14+ App Router**, **TypeScript**, **Tailwind**, **pnpm** (`packageManager` in `package.json`).

## Hosting & DNS (March 2026)

| Layer | Role |
|--------|------|
| **Vercel** | Primary production for `www.springvalleylasvegashomes.com` — use `vercel build` / `vercel deploy --prebuilt` for parity checks. Set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in the Vercel project to enable the interactive map on `/las-vegas-zip-code-map` (zip directory works without it). |
| **Cloudflare** | Optional: **DNS-only (gray cloud)** when pointing at Vercel to avoid double-proxy SSL issues. Cloudflare Pages / Workers workflows exist for alternate deploys — align project names in GitHub env vars. |
| **Git** | `main` is deploy branch. See `CONTRIBUTING.md` for pnpm, branches, and PR checklist. |

## Cursor AI

- Prefer **`pnpm`** over `npm`/`yarn` in commands and CI.
- **Do not edit** `components/idx/**` without explicit approval (MLS compliance).
- **Integrations** (`lib/integrations.ts`): **RealScout** portal URL + agent id + widget script; **Homebot** optional iframe URL; **FUB** default lead tag (`FUB_DEFAULT_LEAD_TAG`, default `spring-valley-site`). RealScout script loads once in root layout; CSP must include `em.realscout.com` and `www.realscout.com` for `script-src` and `connect-src`; Homebot uses `*.homebot.com` / `*.homebot.ai` in CSP + `frame-src`. See `.env.example` and `.env.fub.example`.
- Scoped rules live under **`.cursor/rules/`** (and user global rules). When editing `app/**/page.tsx`, follow real-estate marketing + NAP rules.
- Large folders are listed in **`.cursorignore`** to keep indexing fast; lockfiles remain tracked in git.

## Secrets

- Never commit live keys. Use `.env.example` and Vercel / GitHub **Secrets**. `.cursor/mcp.json` is gitignored.

## Quality gates before merge

`pnpm exec tsc --noEmit` → `pnpm lint` → `pnpm format:check` → `vercel build` (when validating production-like output).
