import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luminetis",
    short_name: "Luminetis",
    description: "Engineering that makes you visible.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F2EC",
    theme_color: "#E8A22B",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/logos/logomark-colour.svg", sizes: "512x512", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
