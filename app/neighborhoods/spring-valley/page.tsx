import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, MapPin, Home, School, Car, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateNeighborhoodSchema,
  combineSchemas,
} from "@/lib/schema";
import { agentInfo, officeInfo } from "@/lib/site-config";
import { metaDescriptionWithKeyword, seoPrimaryKeyword } from "@/lib/seo";

export const metadata: Metadata = {
  title: "West Valley Neighborhood Guide",
  description: metaDescriptionWithKeyword(
    "West Las Vegas neighborhood guide: home styles, commutes, and how to compare listings in Clark County with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
    true,
  ),
  keywords: [
    "Spring Valley Las Vegas homes",
    "Spring Valley NV real estate",
    "west Las Vegas homes",
    "Spring Valley neighborhood",
    "homes for sale Spring Valley Las Vegas",
  ],
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Neighborhoods", url: "/neighborhoods" },
  { name: "Spring Valley", url: "/neighborhoods/spring-valley" },
];

const springValleyFaqs = [
  {
    question: "What are Spring Valley Las Vegas homes like?",
    answer:
      "Spring Valley Las Vegas homes include single-family houses, townhomes, and condos across a large unincorporated area on the west side of the Las Vegas Valley. You will find everything from mid-century properties to newer infill builds, with price points that often differ by block and HOA. Searching Spring Valley Las Vegas homes by ZIP and subdivision helps compare apples to apples.",
  },
  {
    question: "Is Spring Valley the same as Spring Valley Ranch?",
    answer:
      "People often use “Spring Valley” for the broader west valley area. Smaller named pockets and subdivisions can have different HOA rules and price trends. When you tour Spring Valley Las Vegas homes, we review the specific community name, HOA budget, and recent comps—not just the mailing address.",
  },
  {
    question: "How is the commute from Spring Valley to the Strip or Summerlin?",
    answer:
      "Many Spring Valley locations offer a practical commute to employment centers along I-15, the 215 Beltway, and Charleston Boulevard corridors. Exact drive times depend on your street and time of day. We map morning and evening routes when you are narrowing Spring Valley Las Vegas homes by workplace.",
  },
  {
    question: "Who can help me buy or sell Spring Valley Las Vegas homes?",
    answer: `Dr. Jan Duffy and the team at Berkshire Hathaway HomeServices Nevada Properties represent buyers and sellers across Spring Valley and the Las Vegas Valley. Call ${agentInfo.phone} or email ${agentInfo.email}. Office: ${officeInfo.address.full}.`,
  },
];

const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateNeighborhoodSchema({
    name: "Spring Valley",
    slug: "spring-valley",
    description:
      "Large west Las Vegas Valley community in Clark County, Nevada—Spring Valley Las Vegas homes span diverse neighborhoods from mid-century to newer construction.",
    latitude: 36.107,
    longitude: -115.245,
    containedIn: "Las Vegas",
  }),
  generateFAQSchema(springValleyFaqs),
);

export default function SpringValleyPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="spring-valley-schema" />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">
                Neighborhoods
              </Link>
              {" / "}
              <span className="text-slate-900">Spring Valley</span>
            </nav>
          </div>

          <header className="max-w-4xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 mb-3">
              {seoPrimaryKeyword}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Spring Valley Las Vegas Homes &amp; West Valley Real Estate
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Spring Valley is one of the most searched areas for{" "}
              <strong>Spring Valley Las Vegas homes</strong>—a broad, established west valley
              community with diverse housing, mature neighborhoods, and convenient access to
              employment corridors. Use this guide to orient your search, then explore live listings
              or talk with Dr. Jan Duffy about timing, offers, and pricing.
            </p>
          </header>

          <section className="max-w-4xl mx-auto mb-14 prose prose-slate">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Where is Spring Valley in Las Vegas?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Spring Valley refers to a large section of unincorporated Clark County on the west side
              of the Las Vegas Valley—generally west of the Strip and spanning many residential pockets.
              Because the name covers a wide geography, <strong>Spring Valley Las Vegas homes</strong>{" "}
              can feel very different from one ZIP or subdivision to the next. That is why we pair map
              search with neighborhood-level detail before you write an offer.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              What types of properties will I find?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Buyers exploring Spring Valley Las Vegas homes often consider single-family homes with
              pools, renovated mid-century properties, and low-maintenance townhomes—depending on budget
              and lifestyle. Investment buyers may look at duplex opportunities where allowed. We help
              you align property type with HOA rules, insurance considerations, and your long-term
              plans—whether you are upsizing, relocating, or buying your first home.
            </p>
          </section>

          <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <Home className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Housing variety</h3>
              <p className="text-sm text-slate-600">
                Diverse product types across Spring Valley mean your search should be filtered by price,
                beds, baths, and HOA—not just the word “Spring Valley.”
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <Car className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Central access</h3>
              <p className="text-sm text-slate-600">
                Many locations balance west valley living with commute options toward the 215, I-15,
                and major employment hubs.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <School className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Schools &amp; services</h3>
              <p className="text-sm text-slate-600">
                School assignments and services vary by address. We point you to official sources and
                local contacts as part of due diligence.
              </p>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Spring Valley Las Vegas homes — FAQs
            </h2>
            <div className="space-y-4">
              {springValleyFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-slate-200 rounded-lg p-5 bg-white"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-10 text-center">
            <MapPin className="h-10 w-10 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-3">Talk with Dr. Jan Duffy about Spring Valley</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a clear plan for touring Spring Valley Las Vegas homes, pricing strategy, and
              contract timelines—backed by Berkshire Hathaway HomeServices Nevada Properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
              >
                <Phone className="h-4 w-4 mr-2" />
                {agentInfo.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Schedule a consultation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              {officeInfo.name} · {officeInfo.address.full}
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Explore more Las Vegas neighborhoods
            </h2>
            <p className="text-center text-slate-600 mb-6">
              Compare <strong>Spring Valley Las Vegas homes</strong> with{" "}
              <Link href="/neighborhoods/summerlin" className="text-blue-600 hover:underline">
                Summerlin
              </Link>
              ,{" "}
              <Link href="/neighborhoods/green-valley" className="text-blue-600 hover:underline">
                Green Valley
              </Link>
              , or{" "}
              <Link href="/neighborhoods" className="text-blue-600 hover:underline">
                view all neighborhoods
              </Link>
              .
            </p>
          </section>

          <RealScoutListings />
        </div>
      </main>
      <Footer />
    </>
  );
}
