/**
 * Legacy custom image loader (previously wired in next.config.cloudflare.js).
 * Cloudflare Image **Delivery** now uses full `https://imagedelivery.net/<hash>/<id>/<variant>`
 * URLs from {@link cfImageUrl} / {@link resolveCfOrLocal} in {@link site-media} with `next/image`
 * `unoptimized` where appropriate — see [lib/cf-image-delivery.ts](cf-image-delivery.ts).
 *
 * Kept as a no-op passthrough for any tooling that still imports this path.
 */
export default function cloudflareImageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  return src;
}
