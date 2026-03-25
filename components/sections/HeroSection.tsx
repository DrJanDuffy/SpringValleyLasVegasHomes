"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { agentStats } from "@/lib/site-config";
import { heroSeo } from "@/lib/seo";
import RealScoutSimpleSearch from "@/components/realscout/RealScoutSimpleSearch";
import HeroBackgroundCarousel from "@/components/sections/HeroBackgroundCarousel";

type HeroSectionProps = {
  headlinePrimary?: string;
  headlineSecondary?: string;
  intro?: string;
};

export default function HeroSection({
  headlinePrimary = heroSeo.headlinePrimary,
  headlineSecondary = heroSeo.headlineSecondary,
  intro = heroSeo.intro,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <HeroBackgroundCarousel />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block">{headlinePrimary}</span>
          <span className="block text-blue-400 mt-1">{headlineSecondary}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">{intro}</p>

        <p className="mb-3 max-w-xl text-center text-sm font-medium text-white/95 md:text-base">
          Search live MLS homes by city, zip, or neighborhood—results update as you type.
        </p>
        <RealScoutSimpleSearch className="mb-4 max-w-2xl py-0" />

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{agentStats.transactionsClosed}+</span>
            <span>Properties Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Since {agentStats.servingSince}</span>
            <span>Serving Las Vegas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{agentStats.averageRating}★</span>
            <span>Average Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 ${
          prefersReducedMotion ? "" : "animate-bounce"
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
