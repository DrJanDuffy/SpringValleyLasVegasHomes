"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { isCfDeliveryUrl } from "@/lib/cf-image-delivery";
import { heroBackgroundSrcs } from "@/lib/site-media";

/**
 * Isolated slideshow so parent HeroSection does not re-render on slide changes—
 * avoids tearing down &lt;realscout-simple-search&gt; on every tick.
 */
export default function HeroBackgroundCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const images = heroBackgroundSrcs;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion, images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            prefersReducedMotion ? "" : "transition-opacity duration-1000"
          } ${index === currentImage ? "opacity-100" : "opacity-0"}`}
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
  );
}
