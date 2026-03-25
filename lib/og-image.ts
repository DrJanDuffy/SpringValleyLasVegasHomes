import type { Metadata } from "next";

/**
 * Shared Open Graph + Twitter image fields from one absolute URL (matches JSON-LD primaryImageOfPage).
 * Prefer **1200×630** for link previews when the asset allows; root default share image is `app/opengraph-image.tsx`.
 */
export function ogTwitterImageFields(
  absoluteUrl: string,
  options?: { width?: number; height?: number; alt?: string },
): Pick<Metadata, "openGraph" | "twitter"> {
  const image = {
    url: absoluteUrl,
    ...(options?.width != null && { width: options.width }),
    ...(options?.height != null && { height: options.height }),
    ...(options?.alt != null && options.alt.length > 0 && { alt: options.alt }),
  };
  return {
    openGraph: {
      images: [image],
    },
    twitter: {
      images: [absoluteUrl],
    },
  };
}
