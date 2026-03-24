"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  type ZipEntry,
  type ZipRegion,
  zipData,
  zipCoords,
  regionColors,
} from "@/lib/las-vegas-zip-data";

const badgeClass: Record<ZipEntry["badge"], string> = {
  "badge-lv": "bg-blue-100 text-blue-800",
  "badge-henderson": "bg-emerald-100 text-emerald-800",
  "badge-nlv": "bg-amber-100 text-amber-800",
  "badge-summerlin": "bg-violet-100 text-violet-800",
  "badge-boulder": "bg-red-100 text-red-800",
  "badge-sw": "bg-pink-100 text-pink-800",
};

function regionLabel(region: ZipRegion): string {
  return region
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

declare global {
  interface Window {
    __lasVegasZipInitMap?: () => void;
    __lasVegasZipMap?: google.maps.Map;
    __lasVegasZipMarkers?: Record<string, google.maps.Marker>;
  }
}

export default function LasVegasZipCodeMap() {
  const mapElRef = useRef<HTMLDivElement>(null);
  const [activeRegion, setActiveRegion] = useState<ZipRegion | "all">("all");
  const [query, setQuery] = useState("");
  const [mapFailed, setMapFailed] = useState(false);
  const mapsLoadedRef = useRef(false);
  const scriptElRef = useRef<HTMLScriptElement | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const showMap = Boolean(apiKey?.trim()) && !mapFailed;

  const filtered = useMemo(() => {
    let list = zipData;
    if (activeRegion !== "all") {
      list = list.filter((z) => z.region === activeRegion);
    }
    const q = query.toLowerCase().trim();
    if (q) {
      list = list.filter(
        (z) =>
          z.zip.includes(q) ||
          z.area.toLowerCase().includes(q) ||
          z.neighborhoods.toLowerCase().includes(q) ||
          z.region.replace(/-/g, " ").includes(q),
      );
    }
    return list;
  }, [activeRegion, query]);

  const resetFilters = useCallback(() => {
    setQuery("");
    setActiveRegion("all");
  }, []);

  useEffect(() => {
    if (!showMap) return;
    if (scriptElRef.current) return;

    const init = () => {
      const el = mapElRef.current;
      if (!el || !window.google?.maps) return;
      if (mapsLoadedRef.current) return;

      const vegas = { lat: 36.115, lng: -115.1728 };
      const map = new google.maps.Map(el, {
        zoom: 10.5,
        center: vegas,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          position: google.maps.ControlPosition.TOP_RIGHT,
        },
        streetViewControl: false,
        fullscreenControl: true,
        styles: [
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          { featureType: "transit", stylers: [{ visibility: "off" }] },
          { featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "on" }] },
          { featureType: "administrative.neighborhood", stylers: [{ visibility: "on" }] },
          { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#d4eaf7" }] },
        ],
      });
      window.__lasVegasZipMap = map;

      const infoWindow = new google.maps.InfoWindow();
      const markers: Record<string, google.maps.Marker> = {};

      zipData.forEach((z) => {
        const coords = zipCoords[z.zip];
        if (!coords) return;

        const color = regionColors[z.region] || "#3A8DDE";

        const circle = new google.maps.Circle({
          strokeColor: color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.15,
          map,
          center: coords,
          radius: 2200,
        });

        const marker = new google.maps.Marker({
          position: coords,
          map,
          label: {
            text: z.zip,
            color: "#0A2540",
            fontSize: "11px",
            fontWeight: "700",
          },
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 0,
          },
        });

        markers[z.zip] = marker;

        const content = `
            <div style="padding:8px;min-width:200px;font-family:system-ui,sans-serif;">
                <div style="font-size:20px;font-weight:800;color:#0A2540;margin-bottom:4px;">${z.zip}</div>
                <div style="font-size:14px;font-weight:600;color:#4a4a4a;margin-bottom:6px;">${z.area}</div>
                <div style="font-size:12px;color:#6b7280;margin-bottom:10px;">${z.neighborhoods}</div>
                <a href="/search?zip=${z.zip}"
                   style="display:inline-block;background:#2563eb;color:white;padding:6px 14px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">
                    Search homes in ${z.zip} →
                </a>
            </div>
        `;

        const openInfo = () => {
          infoWindow.setContent(content);
          infoWindow.setPosition(coords);
          infoWindow.open(map);
        };

        marker.addListener("click", openInfo);
        circle.addListener("click", openInfo);
      });

      window.__lasVegasZipMarkers = markers;
      mapsLoadedRef.current = true;
    };

    window.__lasVegasZipInitMap = () => {
      try {
        init();
      } catch {
        setMapFailed(true);
      }
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey!)}&callback=__lasVegasZipInitMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => setMapFailed(true);
    scriptElRef.current = script;
    document.head.appendChild(script);

    return () => {
      window.__lasVegasZipInitMap = undefined;
      script.remove();
      scriptElRef.current = null;
      mapsLoadedRef.current = false;
      window.__lasVegasZipMap = undefined;
      window.__lasVegasZipMarkers = undefined;
    };
  }, [showMap, apiKey]);

  const onCardClick = (zip: string, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    const map = window.__lasVegasZipMap;
    const markers = window.__lasVegasZipMarkers;
    const marker = markers?.[zip];
    if (map && marker && window.google?.maps?.event) {
      map.panTo(marker.getPosition()!);
      map.setZoom(13);
      window.google.maps.event.trigger(marker, "click");
    }
  };

  return (
    <>
      <section className="relative z-10 mx-auto max-w-7xl px-4 -mt-6">
        <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:flex-row sm:items-center sm:gap-3">
          <input
            type="text"
            id="zipSearch"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by zip code, city, or neighborhood name..."
            aria-label="Search zip codes"
            className="min-h-[44px] flex-1 rounded-lg border-2 border-slate-200 px-4 text-base outline-none transition-colors focus:border-blue-600"
          />
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-lg border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
          >
            Show all
          </button>
        </div>
      </section>

      <section className="relative mx-auto mt-6 max-w-7xl px-4">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base font-bold text-slate-900">Interactive zip code map</h3>
            <div className="hidden flex-wrap gap-4 text-xs text-slate-500 md:flex">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3A8DDE]" /> Las Vegas
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#059669]" /> Henderson
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D97706]" /> North Las Vegas
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7C3AED]" /> Summerlin
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#DC2626]" /> Boulder City
              </span>
            </div>
          </div>
          {showMap ? (
            <div ref={mapElRef} className="h-[380px] w-full md:h-[560px]" id="las-vegas-zip-map-canvas" />
          ) : (
            <div className="flex min-h-[380px] flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-sky-200 md:min-h-[560px]">
              <MapPin className="mb-4 h-16 w-16 text-slate-400" aria-hidden />
              <p className="text-base font-semibold text-slate-700">Interactive map</p>
              <p className="mt-2 max-w-md px-4 text-center text-sm text-slate-500">
                {mapFailed
                  ? "The map could not load. Check your Google Maps API key and browser console."
                  : "Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable the interactive map. The directory below works without a key."}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-4">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold text-slate-900">Complete zip code directory</h3>
          <span className="text-sm text-slate-500">
            {filtered.length === 0
              ? "No results"
              : `Showing ${filtered.length} zip code${filtered.length !== 1 ? "s" : ""}`}
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {(
            [
              ["all", "All areas"],
              ["las-vegas", "Las Vegas"],
              ["henderson", "Henderson"],
              ["north-las-vegas", "North Las Vegas"],
              ["summerlin", "Summerlin"],
              ["southwest", "Southwest"],
              ["boulder-city", "Boulder City"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              data-region={id}
              onClick={() => setActiveRegion(id)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                activeRegion === id
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-400",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((z) => (
            <div
              key={z.zip}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onCardClick(z.zip, e as unknown as React.MouseEvent);
              }}
              onClick={(e) => onCardClick(z.zip, e)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="text-2xl font-extrabold text-slate-900">{z.zip}</span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                    badgeClass[z.badge],
                  )}
                >
                  {regionLabel(z.region)}
                </span>
              </div>
              <p className="mb-1 font-semibold text-slate-800">{z.area}</p>
              <p className="text-sm leading-snug text-slate-500">{z.neighborhoods}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <Link
                  href={`/search?zip=${z.zip}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  Search homes
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            <p>No zip codes match your search. Try a different zip code or neighborhood name.</p>
          </div>
        )}
      </section>
    </>
  );
}
