import { describe, expect, it } from "vitest";
import { buildKcmFeedJsonLdGraph, buildKcmItemListJsonLd } from "./kcm-rss";

describe("buildKcmItemListJsonLd", () => {
  it("emits ListItem urls pointing at third-party article links", () => {
    const pageUrl = "https://www.example.com/market-insights/kcm-blog";
    const ld = buildKcmItemListJsonLd(
      [
        {
          title: "Test Article",
          link: "https://www.simplifyingthemarket.com/es/2026/03/23/example",
          pubDate: "Mon, 23 Mar 2026 10:30:00 +0000",
          excerpt: "Hello",
        },
      ],
      pageUrl,
    );
    expect(ld["@type"]).toBe("ItemList");
    expect(ld.itemListElement).toHaveLength(1);
    expect(ld.itemListElement[0]).toMatchObject({
      "@type": "ListItem",
      position: 1,
      url: "https://www.simplifyingthemarket.com/es/2026/03/23/example",
      name: "Test Article",
    });
  });
});

describe("buildKcmFeedJsonLdGraph", () => {
  it("pairs WebPage mainEntity with ItemList @id", () => {
    const pageUrl = "https://www.example.com/market-insights/kcm-blog";
    const g = buildKcmFeedJsonLdGraph(
      [
        {
          title: "A",
          link: "https://example.com/a",
          excerpt: "x",
        },
      ],
      pageUrl,
    );
    expect(g["@graph"]).toHaveLength(2);
    const webPage = g["@graph"].find((n: { "@type"?: string }) => n["@type"] === "WebPage");
    const itemList = g["@graph"].find((n: { "@type"?: string }) => n["@type"] === "ItemList");
    expect(webPage?.mainEntity).toEqual({ "@id": `${pageUrl}#kcm-itemlist` });
    expect(itemList?.["@id"]).toBe(`${pageUrl}#kcm-itemlist`);
  });
});
