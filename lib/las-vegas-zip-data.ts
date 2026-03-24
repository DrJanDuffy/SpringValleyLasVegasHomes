/**
 * Las Vegas Valley zip directory + approximate map centroids (not legal boundaries).
 * Used by /las-vegas-zip-code-map and shared with the client map component.
 */

export type ZipRegion =
  | "las-vegas"
  | "henderson"
  | "north-las-vegas"
  | "summerlin"
  | "southwest"
  | "boulder-city";

export type ZipBadge =
  | "badge-lv"
  | "badge-henderson"
  | "badge-nlv"
  | "badge-summerlin"
  | "badge-boulder"
  | "badge-sw";

export interface ZipEntry {
  zip: string;
  area: string;
  region: ZipRegion;
  badge: ZipBadge;
  neighborhoods: string;
}

export const zipData: ZipEntry[] = [
  { zip: "89101", area: "Downtown Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Fremont Street, Arts District, Symphony Park, Historic Westside" },
  { zip: "89102", area: "West Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Rancho Circle, Scotch 80s, McNeil Estates, Alta Drive Corridor" },
  { zip: "89103", area: "Spring Valley", region: "las-vegas", badge: "badge-lv", neighborhoods: "Spring Valley, The Signature, Aruba, Flamingo corridor" },
  { zip: "89104", area: "East Central Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Huntridge, Beverly Green, John S. Park, UNLV-adjacent" },
  { zip: "89106", area: "West Las Vegas / Rancho", region: "las-vegas", badge: "badge-lv", neighborhoods: "Historic Westside, Rancho area, Washington corridor" },
  { zip: "89107", area: "Central West Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Angel Park, Charleston Heights, Desert Shores-adjacent" },
  { zip: "89108", area: "Northwest Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Lone Mountain, Centennial Hills-adjacent, Elkhorn area" },
  { zip: "89109", area: "The Strip / Convention Center", region: "las-vegas", badge: "badge-lv", neighborhoods: "Las Vegas Boulevard, Convention Center, Turnberry Towers" },
  { zip: "89110", area: "East Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Sunrise Manor, Boulder Highway corridor, Sam's Town area" },
  { zip: "89113", area: "South Las Vegas", region: "southwest", badge: "badge-sw", neighborhoods: "Southern Highlands entry, Fort Apache corridor" },
  { zip: "89115", area: "Northeast Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Nellis corridor, Sunrise Manor north" },
  { zip: "89117", area: "West Las Vegas / The Lakes", region: "las-vegas", badge: "badge-lv", neighborhoods: "The Lakes, Desert Shores, Canyon Gate Country Club" },
  { zip: "89118", area: "South Central Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Dean Martin corridor, industrial/commercial, Decatur Meadows" },
  { zip: "89119", area: "Southeast Las Vegas / Airport", region: "las-vegas", badge: "badge-lv", neighborhoods: "Hughes Center, Paradise, McCarran-adjacent, UNLV" },
  { zip: "89120", area: "Southeast Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Tropicana corridor east, Patrick area, Winchester" },
  { zip: "89121", area: "East Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Flamingo East, Boulder corridor, Desert Inn area" },
  { zip: "89122", area: "East Las Vegas / Sunrise Manor", region: "las-vegas", badge: "badge-lv", neighborhoods: "Sunrise Manor, Russell Road corridor, Sahara East" },
  { zip: "89123", area: "South Las Vegas / Silverado Ranch", region: "las-vegas", badge: "badge-lv", neighborhoods: "Silverado Ranch, Bermuda corridor, South Point area" },
  { zip: "89124", area: "Blue Diamond / Rural SW", region: "las-vegas", badge: "badge-lv", neighborhoods: "Blue Diamond, Mountain Springs, rural southwest Clark County" },
  { zip: "89128", area: "Summerlin North", region: "summerlin", badge: "badge-summerlin", neighborhoods: "The Trails, Pueblo, Sun City Summerlin" },
  { zip: "89129", area: "Summerlin Northwest", region: "summerlin", badge: "badge-summerlin", neighborhoods: "The Paseos, The Willows, Tournament Hills" },
  { zip: "89134", area: "Summerlin Central", region: "summerlin", badge: "badge-summerlin", neighborhoods: "The Hills, The Hills South, Red Rock Country Club" },
  { zip: "89135", area: "Summerlin West", region: "summerlin", badge: "badge-summerlin", neighborhoods: "The Ridges, Reverence, Sterling Ridge, Bear's Best" },
  { zip: "89138", area: "Summerlin West / Stonebridge", region: "summerlin", badge: "badge-summerlin", neighborhoods: "Stonebridge, Summerlin Centre, Downtown Summerlin" },
  { zip: "89144", area: "Summerlin South", region: "summerlin", badge: "badge-summerlin", neighborhoods: "The Canyons, TPC Summerlin, Garden Glen" },
  { zip: "89139", area: "South Las Vegas", region: "southwest", badge: "badge-sw", neighborhoods: "Cactus corridor, Bermuda south" },
  { zip: "89141", area: "Southern Highlands", region: "southwest", badge: "badge-sw", neighborhoods: "Southern Highlands, Rhodes Ranch, Mountain's Edge-adjacent" },
  { zip: "89145", area: "West Las Vegas / Peccole Ranch", region: "las-vegas", badge: "badge-lv", neighborhoods: "Peccole Ranch, Painted Desert, Queensridge" },
  { zip: "89146", area: "Spring Valley West", region: "las-vegas", badge: "badge-lv", neighborhoods: "Spring Valley, The Willows, Rainbow corridor" },
  { zip: "89147", area: "Southwest Las Vegas", region: "southwest", badge: "badge-sw", neighborhoods: "Mountain's Edge, Enterprise, Fort Apache corridor" },
  { zip: "89148", area: "Southwest Las Vegas / Enterprise", region: "southwest", badge: "badge-sw", neighborhoods: "Enterprise, Coronado Ranch, Inspirada-adjacent" },
  { zip: "89178", area: "Mountain's Edge / Southwest", region: "southwest", badge: "badge-sw", neighborhoods: "Mountain's Edge, Cactus Valley, Southern Highlands south" },
  { zip: "89179", area: "South Las Vegas / Rural SW", region: "southwest", badge: "badge-sw", neighborhoods: "Rural southwest, Sloan area, Jean corridor" },
  { zip: "89130", area: "Northwest Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Lone Mountain, El Capitan, Kyle Canyon corridor" },
  { zip: "89131", area: "Centennial Hills", region: "las-vegas", badge: "badge-lv", neighborhoods: "Centennial Hills, Providence, Iron Mountain Ranch" },
  { zip: "89143", area: "Northwest Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "Tule Springs, Centennial Hills west" },
  { zip: "89149", area: "Northwest Las Vegas / Skye Canyon", region: "las-vegas", badge: "badge-lv", neighborhoods: "Skye Canyon, Park Highlands, Floyd Lamb Park area" },
  { zip: "89166", area: "Skye Canyon / Far Northwest", region: "las-vegas", badge: "badge-lv", neighborhoods: "Skye Canyon, Upper Northwest, new construction corridor" },
  { zip: "89030", area: "Downtown North Las Vegas", region: "north-las-vegas", badge: "badge-nlv", neighborhoods: "Historic Downtown NLV, Carey Avenue corridor" },
  { zip: "89031", area: "North Las Vegas / Aliante", region: "north-las-vegas", badge: "badge-nlv", neighborhoods: "Aliante, El Dorado, Deer Springs" },
  { zip: "89032", area: "North Las Vegas Central", region: "north-las-vegas", badge: "badge-nlv", neighborhoods: "Craig Road corridor, Cheyenne North, Losee area" },
  { zip: "89033", area: "North Las Vegas East", region: "north-las-vegas", badge: "badge-nlv", neighborhoods: "North 5th corridor, NLV east residential" },
  { zip: "89081", area: "North Las Vegas / Tropical", region: "north-las-vegas", badge: "badge-nlv", neighborhoods: "Tropical corridor, NLV industrial, La Madre Foothills" },
  { zip: "89084", area: "North Las Vegas / Tule Springs", region: "north-las-vegas", badge: "badge-nlv", neighborhoods: "Tule Springs, Avery Park, NLV new construction" },
  { zip: "89085", area: "North Las Vegas / Valley Vista", region: "north-las-vegas", badge: "badge-nlv", neighborhoods: "Valley Vista, North NLV, Ann Road corridor" },
  { zip: "89086", area: "North Las Vegas / Far North", region: "north-las-vegas", badge: "badge-nlv", neighborhoods: "Far north NLV, Apex Industrial" },
  { zip: "89002", area: "Henderson / Anthem", region: "henderson", badge: "badge-henderson", neighborhoods: "Anthem, Black Mountain, Mission Hills, Madeira Canyon" },
  { zip: "89005", area: "Boulder City", region: "boulder-city", badge: "badge-boulder", neighborhoods: "Boulder City, Lake Mead area, Hoover Dam corridor" },
  { zip: "89011", area: "Henderson / Lake Las Vegas", region: "henderson", badge: "badge-henderson", neighborhoods: "Lake Las Vegas, Cadence, Calico Ridge, Tuscany" },
  { zip: "89012", area: "Henderson / MacDonald Ranch", region: "henderson", badge: "badge-henderson", neighborhoods: "MacDonald Ranch, Green Valley South, Seven Hills, Roma Hills" },
  { zip: "89014", area: "Henderson / Green Valley", region: "henderson", badge: "badge-henderson", neighborhoods: "Green Valley, Whitney Ranch, Gibson Springs" },
  { zip: "89015", area: "Downtown Henderson", region: "henderson", badge: "badge-henderson", neighborhoods: "Downtown Henderson, Water Street District, Pittman" },
  { zip: "89044", area: "Henderson / Inspirada", region: "henderson", badge: "badge-henderson", neighborhoods: "Inspirada, Henderson South, Coyote Springs corridor" },
  { zip: "89052", area: "Henderson / Green Valley Ranch", region: "henderson", badge: "badge-henderson", neighborhoods: "Green Valley Ranch, Paseo Verde, Stephanie Street corridor" },
  { zip: "89074", area: "Henderson / Green Valley South", region: "henderson", badge: "badge-henderson", neighborhoods: "Green Valley South, Pecos corridor, Valle Verde" },
  { zip: "89142", area: "East Las Vegas / Sunrise", region: "las-vegas", badge: "badge-lv", neighborhoods: "Sunrise Manor east, Desert Inn east, Nellis AFB area" },
  { zip: "89156", area: "East Las Vegas", region: "las-vegas", badge: "badge-lv", neighborhoods: "East Las Vegas, Frenchman Mountain area" },
  { zip: "89158", area: "South Strip", region: "las-vegas", badge: "badge-lv", neighborhoods: "South Strip corridor, Mandalay Bay area" },
  { zip: "89161", area: "Las Vegas Southwest", region: "southwest", badge: "badge-sw", neighborhoods: "Southwest outskirts, Blue Diamond Road corridor" },
  { zip: "89169", area: "Las Vegas Strip / East", region: "las-vegas", badge: "badge-lv", neighborhoods: "Convention Center area, Strip corridor" },
  { zip: "89183", area: "South Henderson", region: "henderson", badge: "badge-henderson", neighborhoods: "Henderson south, St. Rose corridor" },
];

export const zipCoords: Record<string, { lat: number; lng: number }> = {
  "89101": { lat: 36.1716, lng: -115.1391 },
  "89102": { lat: 36.1619, lng: -115.1908 },
  "89103": { lat: 36.126, lng: -115.2087 },
  "89104": { lat: 36.1775, lng: -115.1195 },
  "89106": { lat: 36.19, lng: -115.17 },
  "89107": { lat: 36.1875, lng: -115.2175 },
  "89108": { lat: 36.2125, lng: -115.2275 },
  "89109": { lat: 36.1285, lng: -115.1523 },
  "89110": { lat: 36.185, lng: -115.0675 },
  "89113": { lat: 36.0605, lng: -115.261 },
  "89115": { lat: 36.215, lng: -115.0675 },
  "89117": { lat: 36.1425, lng: -115.28 },
  "89118": { lat: 36.085, lng: -115.205 },
  "89119": { lat: 36.0975, lng: -115.1475 },
  "89120": { lat: 36.105, lng: -115.105 },
  "89121": { lat: 36.1325, lng: -115.075 },
  "89122": { lat: 36.155, lng: -115.035 },
  "89123": { lat: 36.05, lng: -115.1375 },
  "89124": { lat: 36.02, lng: -115.41 },
  "89128": { lat: 36.2125, lng: -115.2825 },
  "89129": { lat: 36.2375, lng: -115.2925 },
  "89130": { lat: 36.25, lng: -115.2375 },
  "89131": { lat: 36.275, lng: -115.2375 },
  "89134": { lat: 36.1925, lng: -115.3125 },
  "89135": { lat: 36.1675, lng: -115.3475 },
  "89138": { lat: 36.2025, lng: -115.3375 },
  "89139": { lat: 36.0425, lng: -115.17 },
  "89141": { lat: 36.0225, lng: -115.225 },
  "89142": { lat: 36.1575, lng: -115.06 },
  "89143": { lat: 36.26, lng: -115.2825 },
  "89144": { lat: 36.17, lng: -115.3125 },
  "89145": { lat: 36.1675, lng: -115.26 },
  "89146": { lat: 36.145, lng: -115.235 },
  "89147": { lat: 36.0975, lng: -115.28 },
  "89148": { lat: 36.0625, lng: -115.29 },
  "89156": { lat: 36.1925, lng: -115.025 },
  "89158": { lat: 36.0825, lng: -115.1725 },
  "89161": { lat: 36.03, lng: -115.32 },
  "89166": { lat: 36.31, lng: -115.305 },
  "89169": { lat: 36.13, lng: -115.135 },
  "89178": { lat: 36.01, lng: -115.265 },
  "89179": { lat: 35.96, lng: -115.26 },
  "89183": { lat: 36.0175, lng: -115.1175 },
  "89030": { lat: 36.2175, lng: -115.1175 },
  "89031": { lat: 36.2475, lng: -115.1625 },
  "89032": { lat: 36.2275, lng: -115.1475 },
  "89033": { lat: 36.23, lng: -115.11 },
  "89081": { lat: 36.2575, lng: -115.1225 },
  "89084": { lat: 36.27, lng: -115.1625 },
  "89085": { lat: 36.285, lng: -115.18 },
  "89086": { lat: 36.305, lng: -115.1475 },
  "89002": { lat: 36.005, lng: -115.005 },
  "89005": { lat: 35.9789, lng: -114.8327 },
  "89011": { lat: 36.06, lng: -114.98 },
  "89012": { lat: 36.0175, lng: -115.065 },
  "89014": { lat: 36.0575, lng: -115.0775 },
  "89015": { lat: 36.03, lng: -115.01 },
  "89044": { lat: 35.97, lng: -115.1 },
  "89052": { lat: 36.0375, lng: -115.1 },
  "89074": { lat: 36.04, lng: -115.05 },
  "89149": { lat: 36.27, lng: -115.2975 },
};

export const regionColors: Record<ZipRegion, string> = {
  "las-vegas": "#3A8DDE",
  henderson: "#059669",
  "north-las-vegas": "#D97706",
  summerlin: "#7C3AED",
  southwest: "#EC4899",
  "boulder-city": "#DC2626",
};

/** Distinct region keys used in tabs (order matters for UI). */
export const regionTabOrder: ZipRegion[] = [
  "las-vegas",
  "henderson",
  "north-las-vegas",
  "summerlin",
  "southwest",
  "boulder-city",
];

export const lasVegasZipStats = {
  zipCount: zipData.length,
  regionCount: regionTabOrder.length,
} as const;
