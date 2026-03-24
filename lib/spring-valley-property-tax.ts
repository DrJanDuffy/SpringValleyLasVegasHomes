/**
 * Spring Valley, NV — illustrative property tax estimates for buyer education only.
 * Nevada tax bills use taxable assessed value, tax caps, exemptions, and district-specific levies.
 */

/** Third-party effective rate estimate (not a government guarantee). */
export const SPRING_VALLEY_EFFECTIVE_RATE_DECIMAL = 0.0048;

export const springValleyEffectiveRatePercentDisplay = "0.48%";

/** Example home value used in marketing copy and default calculator (illustrative). */
export const springValleyTaxExampleMarketValue = 325_985;

export const effectiveRateCitation = {
  title:
    "These Nevada cities made the top 10 list for low real estate taxes (SmartAsset data)",
  publisher: "Reno Gazette Journal",
  url: "https://www.rgj.com/story/news/data/2025/01/07/these-nevada-cities-made-the-top-10-list-for-low-real-estate-taxes/77434069007/",
  accessedYear: 2026,
} as const;

/** Official Clark County resources (verify periodically). */
export const clarkCountyTaxResources = {
  assessorHome: "https://assessor.clarkcountynv.gov/",
  countyGovernment: "https://www.clarkcountynv.gov/",
} as const;

export const propertyTaxDisclaimerShort =
  "This calculator multiplies an estimated market value by a published effective rate for illustration only. Your actual Clark County tax bill is based on assessed value, abatements, tax caps, and district rates—not a simple percentage of purchase price or Zestimate. Not tax or legal advice; consult a CPA, attorney, or the Clark County Assessor.";

export const propertyTaxDisclaimerMedium =
  "Nevada property taxes depend on taxable assessed value (not necessarily market value or list price), the 3% annual cap on increases for owner-occupied primary residences (where applicable), exemptions, and overlapping tax districts. Third-party “effective rates” compare typical bills to home values across a region—they help with ballpark comparisons but are not your official bill.";

/**
 * Illustrative annual tax: marketValue × effective rate, rounded to nearest dollar.
 */
export function estimateAnnualPropertyTaxIllustrative(marketValue: number): number {
  if (!Number.isFinite(marketValue) || marketValue <= 0) return 0;
  return Math.round(marketValue * SPRING_VALLEY_EFFECTIVE_RATE_DECIMAL);
}

export function estimateMonthlyFromAnnual(annual: number): number {
  if (!Number.isFinite(annual) || annual <= 0) return 0;
  return Math.round(annual / 12);
}
