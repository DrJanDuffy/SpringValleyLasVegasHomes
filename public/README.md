# Static assets (`public/`)

Served from the site root: `https://www.springvalleylasvegashomes.com/...`

| Path | Use |
|------|-----|
| **`images/`** | Primary structure for new photos, logos, hero, OG images — see `images/README.md` |
| **`Image/`** | Legacy paths (`/Image/hero/...`) used by some components; prefer migrating to `images/` |
| **`videos/`** | Tour and marketing video files — see `videos/README.md` |
| **`.well-known/`** | Security / verification files |
| Root `robots.txt` | Static fallback only if not overridden by `app/robots.ts` in Next.js |

**Logos & branding:** `images/logos/` (PNG/SVG with transparency).  
**Social / SEO:** `images/og/` (e.g. 1200×630 for Open Graph).
