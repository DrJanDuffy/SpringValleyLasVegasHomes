"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { isCfDeliveryUrl } from "@/lib/cf-image-delivery";
import { heroSeo } from "@/lib/seo";
import { heroBackgroundSrcs } from "@/lib/site-media";
import { getRealScoutSimpleSearchMarkup } from "@/components/realscout/RealScoutSimpleSearch";

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
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  const images = heroBackgroundSrcs;

  useEffect(() => {
    // Don't animate if user prefers reduced motion
    if (prefersReducedMotion) return;

    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion, images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              prefersReducedMotion 
                ? '' 
                : 'transition-opacity duration-1000'
            } ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Spring Valley Las Vegas homes and Las Vegas Valley real estate — hero ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "low"}
              unoptimized={isCfDeliveryUrl(src)}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

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
        <div className="realscout-wrapper mb-4 w-full max-w-2xl">
          <div
            dangerouslySetInnerHTML={{
              __html: getRealScoutSimpleSearchMarkup(),
            }}
          />
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">500+</span>
            <span>Properties Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Since 2008</span>
            <span>Serving Las Vegas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">4.9★</span>
            <span>Average Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 ${
          prefersReducedMotion ? '' : 'animate-bounce'
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
