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
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
