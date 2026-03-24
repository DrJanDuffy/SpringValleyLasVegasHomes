"use client";

import { realScoutConfig } from "@/lib/integrations";

/**
 * RealScout `<realscout-simple-search>` — script loads once in root layout.
 * `custom-placeholder` maps to the widget’s `customPlaceholder` prop (verified in RealScout UMD bundle).
 */
export function getRealScoutSimpleSearchMarkup(): string {
  return `<realscout-simple-search agent-encoded-id="${escapeAttr(realScoutConfig.agentEncodedId)}" custom-placeholder="${escapeAttr(realScoutConfig.simpleSearchPlaceholder)}"></realscout-simple-search>`;
}

export default function RealScoutSimpleSearch() {
  return (
    <div className="realscout-wrapper realscout-simple-search-bar w-full max-w-[500px] mx-auto py-2">
      <div dangerouslySetInnerHTML={{ __html: getRealScoutSimpleSearchMarkup() }} />
    </div>
  );
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}
