import Navbar from "@/components/layouts/Navbar";
import AgentHeadshot from "@/components/shared/AgentHeadshot";
import HeroSection from "@/components/sections/HeroSection";
import BuyerEngagementStrip from "@/components/sections/BuyerEngagementStrip";
import ServiceAreaMapSection from "@/components/sections/ServiceAreaMapSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { Home as HomeIcon, TrendingUp, Shield, Users, Phone } from "lucide-react";
import SiteBylineDate from "@/components/shared/SiteBylineDate";
import { siteConfig, siteContentDates } from "@/lib/site-config";
import { homePageFaqs } from "@/lib/home-faqs";
import { defaultHomeReviews } from "@/lib/home-reviews";
import {
  generateFAQSchema,
  generateHomepageReviewJsonLd,
  generateWebPageSchema,
} from "@/lib/schema";
import { homePageTitleAbsolute } from "@/lib/seo";

const faqSchemaLd = generateFAQSchema(homePageFaqs);

const homeReviewsSchemaLd = generateHomepageReviewJsonLd(
  defaultHomeReviews.map((r) => ({
    author: r.name,
    rating: r.rating,
    reviewBody: r.text,
    datePublished: r.date,
  })),
);

const homeWebPageSchemaLd = generateWebPageSchema({
  name: homePageTitleAbsolute,
  description: siteConfig.description,
  url: "/",
  datePublished: siteContentDates.datePublished,
  dateModified: siteContentDates.dateModified,
});

export const metadata: Metadata = {
  title: {
    absolute: homePageTitleAbsolute,
  },
  description: siteConfig.description,
  openGraph: {
    title: homePageTitleAbsolute,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    title: homePageTitleAbsolute,
    description: siteConfig.description,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeReviewsSchemaLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebPageSchemaLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />

        <div
          className="border-b border-slate-200 bg-slate-50 py-2.5"
          aria-label="Page last updated"
        >
          <div className="container mx-auto px-4">
            <SiteBylineDate />
          </div>
        </div>

        <BuyerEngagementStrip />

        <RealScoutListings />

        <ServiceAreaMapSection />

        {/* Berkshire Hathaway Value Proposition Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Berkshire Hathaway HomeServices for Spring Valley Las Vegas Homes?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                When you work with a <strong>Berkshire Hathaway HomeServices</strong> agent, you
                get local guidance for <strong>Spring Valley Las Vegas homes</strong> and the wider
                valley—backed by a name synonymous with trust, ethical standards, and financial
                strength—the same principles that built Warren Buffett&apos;s empire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Trusted Brand</h3>
                <p className="text-slate-600 text-sm">
                  Backed by Warren Buffett's Berkshire Hathaway Inc.—unmatched financial stability
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Global Network</h3>
                <p className="text-slate-600 text-sm">
                  50,000+ agents worldwide for seamless referrals and relocations
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Market Expertise</h3>
                <p className="text-slate-600 text-sm">
                  Serving Las Vegas since 2008, $127M+ in closed transactions
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <HomeIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Full Service</h3>
                <p className="text-slate-600 text-sm">
                  Buying, selling, luxury, investment, relocation—we do it all
                </p>
              </div>
            </div>

            {/* Expert Quote */}
            <div className="max-w-3xl mx-auto mt-12 bg-slate-50 rounded-lg p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <AgentHeadshot
                  frameClassName="w-36 shrink-0 aspect-square sm:w-40"
                  sizes="160px"
                />
                <div>
                  <blockquote className="text-lg text-slate-700 italic mb-4">
                    "When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I
                    tell them: you're not just getting me—you're getting a global network of 50,000
                    agents, world-class marketing, and a brand that's synonymous with trust."
                  </blockquote>
                  <cite className="text-slate-900 font-semibold not-italic">
                    — Dr. Jan Duffy, BHHS Nevada Properties
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Las Vegas Real Estate Market | January 2026
              </h2>
              <p className="text-slate-300">
                Current market data from Berkshire Hathaway HomeServices Nevada Properties
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$450K</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
                <div className="text-green-400 text-sm">+4.2% YoY</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">28</div>
                <div className="text-slate-300 text-sm">Avg Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">4,850</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">2.1</div>
                <div className="text-slate-300 text-sm">Months Inventory</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/market-report"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                View Full Market Report
              </Link>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Las Vegas Neighborhoods We Serve
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Berkshire Hathaway HomeServices Nevada Properties covers all of Southern Nevada
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {(
                [
                  {
                    name: "Spring Valley",
                    detail: "Spring Valley Las Vegas homes",
                    href: "/neighborhoods/spring-valley",
                  },
                  { name: "Enterprise", detail: "Rhodes Ranch area", slug: "enterprise" },
                  { name: "Paradise", detail: "Strip & UNLV area", slug: "paradise" },
                  { name: "Summerlin", detail: "From $625K", slug: "summerlin" },
                  { name: "Henderson", detail: "From $485K", slug: "henderson" },
                  { name: "Green Valley", detail: "From $520K", slug: "green-valley" },
                  { name: "The Ridges", detail: "From $2.5M", slug: "the-ridges" },
                  { name: "Southern Highlands", detail: "From $750K", slug: "southern-highlands" },
                  { name: "North Las Vegas", detail: "From $385K", slug: "north-las-vegas" },
                  { name: "Skye Canyon", detail: "From $550K", slug: "skye-canyon" },
                  { name: "Centennial Hills", detail: "From $495K", slug: "centennial-hills" },
                  { name: "Inspirada", detail: "From $525K", slug: "inspirada" },
                  { name: "Mountains Edge", detail: "From $475K", slug: "mountains-edge" },
                ] as const
              ).map((area) => {
                const href = "href" in area ? area.href : `/neighborhoods/${area.slug}`;
                const key = "href" in area ? area.href : area.slug;
                return (
                  <Link
                    key={key}
                    href={href}
                    className="bg-slate-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors group"
                  >
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                      {area.name}
                    </h3>
                    <p className="text-sm text-slate-500">{area.detail}</p>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/neighborhoods"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View All Neighborhoods →
              </Link>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection
          faqs={homePageFaqs}
          title="Spring Valley Las Vegas Homes — FAQs"
          subtitle="Straight answers about Spring Valley real estate, homes for sale, and working with Dr. Jan Duffy's team"
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Berkshire Hathaway HomeServices?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're buying, selling, or investing in Las Vegas real estate, Dr. Jan Duffy
              is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17026648424"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 664-8424
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
          Last Updated: January 2026 | {siteConfig.name} — Berkshire Hathaway HomeServices Nevada
          Properties
        </div>
      </main>
      <Footer />
    </>
  );
}
