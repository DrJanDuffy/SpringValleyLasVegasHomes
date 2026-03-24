/**
 * SEO / GEO / AEO — primary topic cluster for Spring Valley Las Vegas homes.
 * Used by metadata, layout, hero, and internal linking copy.
 */

/** Primary topic (natural phrasing for titles and H1) */
export const seoPrimaryKeyword = "Spring Valley Las Vegas homes";

/** Semantic variations for meta keywords and entity reinforcement (not keyword stuffing) */
export const seoKeywordVariations = [
  "Spring Valley Las Vegas homes",
  "Spring Valley Las Vegas real estate",
  "homes for sale Spring Valley Las Vegas",
  "Spring Valley NV homes",
  "Spring Valley Las Vegas houses",
  "west Las Vegas homes",
  "Spring Valley neighborhood Las Vegas",
  "Dr. Jan Duffy Spring Valley",
  "Berkshire Hathaway Spring Valley Las Vegas",
] as const;

/** Homepage hero — one H1 topic cluster; visible copy matches metadata intent */
export const heroSeo = {
  headlinePrimary: "Spring Valley Las Vegas Homes",
  headlineSecondary: "Las Vegas Valley & Henderson",
  intro:
    "Search Spring Valley Las Vegas homes and explore real estate across the west valley with Dr. Jan Duffy's team at Berkshire Hathaway HomeServices Nevada Properties—buying, selling, and local market guidance you can trust.",
} as const;

/**
 * Homepage `<title>` — absolute (avoids double-appending the root template).
 * Tuned for SERP length while keeping the primary topic + agent + role.
 */
export const homePageTitleAbsolute =
  "Spring Valley Las Vegas Homes | Dr. Jan Duffy, REALTOR® | Berkshire Hathaway";
