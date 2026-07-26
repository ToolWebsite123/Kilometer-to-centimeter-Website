import { MetadataRoute } from "next";
import { unitPairs } from "@/lib/unit-pairs";

/**
 * Dynamic Sitemap Generator
 * Automatically lists all website routes for search engine indexing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kgtolbsconverter.org";
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/guides/70-kg-to-lbs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/1-kg-to-lbs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/kg-to-lbs-chart`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = unitPairs.map((pair) => ({
    url: `${baseUrl}/convert/${pair.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}

