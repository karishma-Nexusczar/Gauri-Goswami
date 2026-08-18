import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const pages = ["", "/about", "/academics", "/research", "/kathak", "/gallery", "/contact", "/legal-career/credentials"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: `https://gaurigoswami.com${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.8 }));
}
