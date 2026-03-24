import { kcmConfig } from "@/lib/integrations";

type KcmBlogEmbedProps = {
  /** Accessible name for the embedded KCM blog (screen readers). */
  title?: string;
  className?: string;
};

/**
 * Keeping Current Matters “Simplifying the Market” personalized blog (iframe).
 * CSP must allow `https://www.simplifyingthemarket.com` in `frame-src`.
 */
export function KcmBlogEmbed({
  title = "Market articles — Simplifying the Market (Keeping Current Matters)",
  className,
}: KcmBlogEmbedProps) {
  return (
    <div
      className={
        className ??
        "mx-auto w-full max-w-[1090px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
      }
    >
      <iframe
        title={title}
        src={kcmConfig.blogEmbedUrl}
        className="block h-[min(800px,85vh)] w-full md:h-[800px]"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
