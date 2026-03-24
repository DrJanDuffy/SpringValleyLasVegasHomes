import "./globals.css";

import React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "lib/utils";
import AIChatWidget from "@/components/chat/AIChatWidget";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";
import SchemaScript from "@/components/SchemaScript";
import {
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { seoKeywordVariations, seoPrimaryKeyword } from "@/lib/seo";
import { realScoutConfig } from "@/lib/integrations";

const title = siteConfig.name;
const description = siteConfig.description;
const url = siteConfig.url;

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: title,
    /** Every route `title` becomes: {segment} | Spring Valley Las Vegas homes | BHHS */
    template: `%s | ${seoPrimaryKeyword} | ${siteConfig.brandName}`,
  },
  description,
  metadataBase: new URL(url),
  keywords: [
    ...seoKeywordVariations,
    "Berkshire Hathaway HomeServices",
    "Berkshire Hathaway HomeServices Nevada Properties",
    "Berkshire Hathaway HomeServices Las Vegas",
    "BHHS real estate agent",
    "Berkshire Hathaway realtor Las Vegas",
    "Dr. Jan Duffy",
    "Las Vegas real estate",
    "Henderson real estate",
    "Las Vegas homes for sale",
    "Henderson homes for sale",
    "Summerlin real estate",
    "luxury homes Las Vegas",
  ],
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
  openGraph: {
    title,
    description,
    url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: url,
  },
};

/** Mobile-friendly viewport + theme (Google / Page Experience baseline) */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Combined site-wide schemas using the schema utility
const siteWideSchemas = combineSchemas(
  generateRealEstateAgentSchema(),
  generateWebSiteSchema()
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const homebotPrefetchOrigin = (() => {
    const raw = process.env.NEXT_PUBLIC_HOMEBOT_WIDGET_URL?.trim();
    if (!raw) return null;
    try {
      return new URL(raw).origin;
    } catch {
      return null;
    }
  })();

  return (
    <html lang="en" className="scroll-smooth antialiased" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        {/* Early connections for third-party origins (reduces LCP / script latency) */}
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        {homebotPrefetchOrigin ? (
          <link rel="dns-prefetch" href={homebotPrefetchOrigin} />
        ) : null}
        {/* Site-wide JSON-LD Schema: RealEstateAgent + WebSite */}
        <SchemaScript schema={siteWideSchemas} id="site-schema" />
        {/* GA4: lazyOnload defers until the browser is idle — better Core Web Vitals than blocking the main thread */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WB5DLLZ4C6"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WB5DLLZ4C6');
          `}
        </Script>
        {/* RealScout: once globally; afterInteractive avoids blocking first paint (vs beforeInteractive) */}
        <Script
          src={realScoutConfig.widgetScriptSrc}
          type="module"
          strategy="afterInteractive"
        />
        {/* Calendly Widget Script - loaded once globally */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          "antialiased bg-white text-sm md:text-base text-slate-800",
        )}
      >
        {children}
        <AIChatWidget />
        <CalendlyBadge />
        <Analytics />
      </body>
    </html>
  );
}
