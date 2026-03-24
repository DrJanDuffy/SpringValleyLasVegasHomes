/**
 * Cloudflare Image Delivery — official URL shape:
 * https://imagedelivery.net/<account_hash>/<image_id>/<variant_name>
 *
 * Account hash is public (appears in every image URL). Do not put API tokens or Account ID in client code.
 *
 * Strategy: use **full delivery URLs** from {@link resolveCfOrLocal} in components. For `next/image`
 * with `imagedelivery.net` src, use **`unoptimized`** so Cloudflare variants are not re-processed
 * by Next.js’s optimizer (avoids double compression).
 */

const DEFAULT_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

export function getCfAccountHash(): string {
  return (
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH?.trim() || DEFAULT_ACCOUNT_HASH
  );
}

export function cfImageUrl(imageId: string, variant: string): string {
  const hash = getCfAccountHash();
  const id = imageId.trim();
  const v = variant.trim() || "public";
  return `https://imagedelivery.net/${hash}/${id}/${v}`;
}

export function isCfDeliveryUrl(src: string): boolean {
  return src.startsWith("https://imagedelivery.net/");
}
