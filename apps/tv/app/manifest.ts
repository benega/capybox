import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Capybox TV",
    short_name: "Capybox TV",
    description: "TV host surface for the Capybox multiplayer quiz POC.",
    start_url: "/",
    display: "standalone",
    background_color: "#061014",
    theme_color: "#10262a"
  };
}
