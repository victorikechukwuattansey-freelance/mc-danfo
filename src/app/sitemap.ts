import type { MetadataRoute } from "next";
import { siteData } from "@/data/site";
import { campaignRoutes, staticRoutes } from "@/data/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const { site } = siteData;
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...campaignRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
