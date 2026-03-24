/**
 * Google Maps Platform — Neighborhood Discovery (interactive map + Places) and optional 3D Area Explorer.
 *
 * Maps Solutions iframe (curated POIs for Spring Valley): override with NEXT_PUBLIC_NEIGHBORHOOD_DISCOVERY_IFRAME_URL.
 * @see https://developers.google.com/maps/documentation/javascript/solution-channels
 *
 * 3D Area Explorer demo: override with NEXT_PUBLIC_GOOGLE_3D_EXPLORER_DEMO_URL
 * @see https://developers.google.com/maps/architecture/3d-area-explorer
 */

/** Default hosted Neighborhood Discovery HTML from Google Maps Solutions (Spring Valley area). */
const DEFAULT_NEIGHBORHOOD_DISCOVERY_IFRAME_URL =
  "https://storage.googleapis.com/maps-solutions-v9iuebxrqf/neighborhood-discovery/85xo/neighborhood-discovery.html";

/**
 * URL for the Neighborhood Discovery iframe (Maps JavaScript + Places inside Google-hosted HTML).
 */
export function getNeighborhoodDiscoveryIframeUrl(): string {
  return (
    process.env.NEXT_PUBLIC_NEIGHBORHOOD_DISCOVERY_IFRAME_URL?.trim() ||
    DEFAULT_NEIGHBORHOOD_DISCOVERY_IFRAME_URL
  );
}

/** Default map center — Spring Valley / west valley (approximate). */
export const springValley3dExplorerCenter = {
  lat: 36.108,
  lng: -115.245,
} as const;

export const google3dAreaExplorerLinks = {
  /** Hosted Admin app — choose location, curate POIs, export starter code */
  admin: "https://goo.gle/3d-area-explorer-admin",
  docs: "https://developers.google.com/maps/architecture/3d-area-explorer",
  github: "https://github.com/googlemaps-samples/js-3d-area-explorer",
} as const;

function demoBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_3D_EXPLORER_DEMO_URL?.trim() ||
    "https://js-3d-area-explorer-demo-dev-t6a6o7lkja-uc.a.run.app"
  );
}

export type NeighborhoodDiscoveryDemoOptions = {
  lat?: number;
  lng?: number;
  /** Places API place types for nearby highlights */
  poiTypes?: string[];
  searchRadiusMeters?: number;
  /** Max POI count (Places caps apply per type) */
  density?: number;
  cameraSpeed?: number;
};

/**
 * Builds the official demo URL with hash config (restaurants, parks, schools, etc.).
 */
export function buildNeighborhoodDiscoveryDemoUrl(
  options?: NeighborhoodDiscoveryDemoOptions,
): string {
  const lat = options?.lat ?? springValley3dExplorerCenter.lat;
  const lng = options?.lng ?? springValley3dExplorerCenter.lng;
  const poiTypes = options?.poiTypes ?? ["restaurant", "park", "school"];
  const searchRadius = options?.searchRadiusMeters ?? 3500;
  const density = options?.density ?? 20;
  const cameraSpeed = options?.cameraSpeed ?? 0.45;

  const params = new URLSearchParams();
  params.set("location.coordinates.lat", String(lat));
  params.set("location.coordinates.lng", String(lng));
  params.set("camera.orbitType", "dynamic-orbit");
  params.set("camera.speed", String(cameraSpeed));
  params.set("poi.searchRadius", String(searchRadius));
  params.set("poi.density", String(density));
  for (const t of poiTypes) {
    params.append("poi.types", t);
  }

  const base = demoBaseUrl().replace(/\/$/, "");
  return `${base}/#${params.toString()}`;
}
