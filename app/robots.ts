import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.luminetis.com/sitemap.xml",
    host: "https://www.luminetis.com",
  };
}
