import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Capybox Mobile",
    short_name: "Capybox Mobile",
    description: "Mobile controller surface for the Capybox multiplayer quiz POC.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff6dd",
    theme_color: "#d96b1d"
  };
}
