import { describe, it, expect } from "vitest";
import { getRealScoutSimpleSearchMarkup } from "./RealScoutSimpleSearch";
import { realScoutConfig } from "@/lib/integrations";

describe("getRealScoutSimpleSearchMarkup", () => {
  it("outputs one realscout-simple-search element aligned with integrations config", () => {
    const html = getRealScoutSimpleSearchMarkup();
    expect(html).toMatch(/^<realscout-simple-search\s/);
    expect(html).toContain(
      `agent-encoded-id="${realScoutConfig.agentEncodedId}"`,
    );
    expect(html).toContain(
      `custom-placeholder="${realScoutConfig.simpleSearchPlaceholder}"`,
    );
    expect(html).toMatch(/<\/realscout-simple-search>$/);
    expect(html.match(/<realscout-simple-search/g)?.length).toBe(1);
  });
});
