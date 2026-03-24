import { getNeighborhoodDiscoveryIframeUrl } from "@/lib/neighborhood-3d-explorer";

type NeighborhoodDiscoveryEmbedProps = {
  className?: string;
};

/**
 * Embeds Google Maps Solutions Neighborhood Discovery (curated places + interactive map).
 * Hosted on Google Cloud Storage; override URL via NEXT_PUBLIC_NEIGHBORHOOD_DISCOVERY_IFRAME_URL.
 */
export default function NeighborhoodDiscoveryEmbed({
  className = "",
}: NeighborhoodDiscoveryEmbedProps) {
  const src = getNeighborhoodDiscoveryIframeUrl();

  return (
    <div className={className}>
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg min-h-[min(85vh,920px)] h-[min(85vh,920px)]">
        <iframe
          src={src}
          title="Neighborhood discovery map — Spring Valley area restaurants, schools, parks, and more"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="fullscreen"
        />
      </div>
      <p className="mt-3 text-center text-sm text-slate-500">
        Interactive map by Google Maps Platform. If it doesn&apos;t load,{" "}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline"
        >
          open neighborhood discovery in a new tab
        </a>
        .
      </p>
    </div>
  );
}
