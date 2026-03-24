import { homebotConfig } from "@/lib/integrations";

/**
 * Homebot valuation iframe — only renders when NEXT_PUBLIC_HOMEBOT_WIDGET_URL is set in Vercel.
 * Paste the widget/iframe URL from Homebot (Help → embed widget).
 */
export default function HomebotValuationEmbed() {
  const src = homebotConfig.widgetUrl;
  if (!src) return null;

  return (
    <section
      className="max-w-4xl mx-auto mb-12"
      aria-labelledby="homebot-valuation-heading"
    >
      <h2
        id="homebot-valuation-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center"
      >
        Instant home value estimate
      </h2>
      <p className="text-slate-600 text-center mb-6 text-sm md:text-base max-w-2xl mx-auto">
        See personalized equity and market context from Homebot—not a substitute for a broker
        price opinion or appraisal. Dr. Jan Duffy can refine with a full CMA.
      </p>
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
        <iframe
          src={src}
          title="Homebot home valuation and equity estimate"
          className="w-full min-h-[560px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="clipboard-write"
        />
      </div>
    </section>
  );
}
