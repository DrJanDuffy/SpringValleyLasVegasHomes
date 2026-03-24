import Link from "next/link";
import { MapPin, Search, Home, BookOpen } from "lucide-react";

/**
 * Compact buyer-first links immediately below the hero — search, neighborhoods, zip map, buyer guide.
 */
export default function BuyerEngagementStrip() {
  const items = [
    {
      href: "#featured-properties",
      label: "Browse listings",
      sub: "Jump to homes for sale",
      icon: Search,
    },
    {
      href: "/neighborhoods/spring-valley",
      label: "Spring Valley",
      sub: "Homes & local guide",
      icon: Home,
    },
    {
      href: "/las-vegas-zip-code-map",
      label: "Search by zip",
      sub: "Map & directory",
      icon: MapPin,
    },
    {
      href: "/buyers",
      label: "Buyer resources",
      sub: "Financing & process",
      icon: BookOpen,
    },
  ] as const;

  return (
    <section
      className="border-b border-slate-200 bg-slate-50/90 backdrop-blur-sm"
      aria-label="Quick links for home buyers"
    >
      <div className="container mx-auto px-4 py-6 md:py-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4 md:mb-6">
          Start your home search
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {items.map(({ href, label, sub, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center text-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span className="mb-2 rounded-full bg-blue-50 p-2.5 text-blue-600 group-hover:bg-blue-100">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-semibold text-slate-900 text-sm md:text-base">{label}</span>
              <span className="mt-0.5 text-xs text-slate-500">{sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
