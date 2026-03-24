/** Pacific (Las Vegas) display for byline dates — align with JSON-LD timezones. */

const PACIFIC = "America/Los_Angeles";

/** Long date only (no prefix) for pairing with `<time>` inside labeled sentences. */
export function formatPacificLongDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: PACIFIC,
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

/** Full byline prefix + date (e.g. for standalone lines). */
export function formatSiteLastUpdatedLabel(iso: string): string {
  return `Last updated: ${formatPacificLongDate(iso)}`;
}

/**
 * Value for `<time dateTime="...">` — use the same ISO string as JSON-LD when already valid.
 */
export function timeDateTimeAttribute(iso: string): string {
  return iso.trim();
}
