"use client";

import { cn } from "@/lib/utils";
import { realScoutConfig } from "@/lib/integrations";

/**
 * RealScout `<realscout-simple-search>` — script loads once in root layout.
 * `custom-placeholder` maps to the widget’s `customPlaceholder` prop (verified in RealScout UMD bundle).
 */
export function getRealScoutSimpleSearchMarkup(): string {
  return `<realscout-simple-search agent-encoded-id="${escapeAttr(realScoutConfig.agentEncodedId)}" custom-placeholder="${escapeAttr(realScoutConfig.simpleSearchPlaceholder)}"></realscout-simple-search>`;
}

type RealScoutSimpleSearchProps = {
  /** Merged with default wrapper classes (e.g. hero uses wider max-width). */
  className?: string;
};

export default function RealScoutSimpleSearch({ className }: RealScoutSimpleSearchProps) {
  return (
    <div
      className={cn(
        "realscout-wrapper realscout-simple-search-bar w-full max-w-[500px] mx-auto py-2",
        className,
      )}
    >
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
