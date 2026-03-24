import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { MapPin, Search, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { realScoutConfig } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "Search homes by zip code",
  description:
    "Find Las Vegas Valley MLS listings by zip code. Open the live search on RealScout or contact Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${siteConfig.url}/search`,
  },
};

function isValidZip(zip: string | undefined): zip is string {
  return typeof zip === "string" && /^\d{5}$/.test(zip);
}

type SearchPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const raw = searchParams?.zip;
  const zipParam = Array.isArray(raw) ? raw[0] : raw;
  const validZip = isValidZip(zipParam) ? zipParam : null;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-slate-700">Search by zip</span>
          </nav>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            <Search className="h-3.5 w-3.5" aria-hidden />
            MLS search hub
          </div>

          <h1 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {validZip ? `Homes near zip ${validZip}` : "Search Las Vegas homes"}
          </h1>
          <p className="mb-8 text-lg text-slate-600">
            Live MLS listings for the Las Vegas Valley are hosted on{" "}
            <strong className="text-slate-800">RealScout</strong>. Use the button below to open the
            search experience, then enter your city or zip in the search box if needed.
          </p>

          {validZip && (
            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
              <p className="flex items-start gap-2 text-sm font-medium">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>
                  You opened this page for zip <strong>{validZip}</strong>. On RealScout, type{" "}
                  <strong>{validZip}</strong> (or the city name) in the search field to focus results
                  in that area.
                </span>
              </p>
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={`${realScoutConfig.portalUrl}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Open MLS search (RealScout)
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href={validZip ? `/contact?zip=${validZip}` : "/contact"}
              className="inline-flex items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:border-blue-500 hover:text-blue-700"
            >
              Contact {agentInfo.name.split(" ")[0]}
            </Link>
            <Link
              href="/las-vegas-zip-code-map"
              className="inline-flex items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:border-blue-500 hover:text-blue-700"
            >
              Las Vegas zip code map
            </Link>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Prefer a direct line? Call{" "}
            <a href={agentInfo.phoneTel} className="font-medium text-blue-600 hover:underline">
              {agentInfo.phone}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
