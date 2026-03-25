import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/** PWA-lite manifest — name/theme for add-to-home-screen and browser UI tint */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Spring Valley Homes",
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
