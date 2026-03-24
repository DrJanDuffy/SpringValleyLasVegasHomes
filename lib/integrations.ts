/**
 * Third-party integrations — single source of truth for RealScout, Homebot, and FUB-related defaults.
 * Use NEXT_PUBLIC_* for values required in the browser (inlined at build time).
 */

/** Default RealScout agent (Dr. Jan Duffy) — override with NEXT_PUBLIC_REALSCOUT_AGENT_ID in Vercel. */
const DEFAULT_REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

export const realScoutConfig = {
  /** Base URL for “View all properties” / MLS portal (HTTPS). */
  portalUrl: (
    process.env.NEXT_PUBLIC_REALSCOUT_PORTAL_URL ?? "https://drjanduffy.realscout.com"
  ).replace(/\/$/, ""),
  agentEncodedId:
    process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID ?? DEFAULT_REALSCOUT_AGENT_ID,
  widgetScriptSrc:
    "https://em.realscout.com/widgets/realscout-web-components.umd.js",
} as const;

/** Homebot iframe URL from your Homebot dashboard (embed / widget URL). Optional. */
export const homebotConfig = {
  widgetUrl: process.env.NEXT_PUBLIC_HOMEBOT_WIDGET_URL?.trim() ?? "",
} as const;

/** Site slug for CRM tagging / source enrichment (Spring Valley Las Vegas Homes). */
export const siteIntegration = {
  domain: "springvalleylasvegashomes.com",
  /** Default FUB tag for leads from this site (override with FUB_DEFAULT_LEAD_TAG). */
  defaultLeadTag: process.env.FUB_DEFAULT_LEAD_TAG ?? "spring-valley-site",
} as const;
