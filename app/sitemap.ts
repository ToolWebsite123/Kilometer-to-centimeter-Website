import { MetadataRoute } from "next";
import { unitPairs } from "@/lib/unit-pairs";
import { getScaledValues } from "@/lib/scale-values";

/**
 * Dynamic Sitemap Generator for Static Export
 * Includes static routes, /convert/[slug] pages, and all scale pages.
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

  const convertRoutes: MetadataRoute.Sitemap = unitPairs.map((pair) => ({
    url: `${baseUrl}/convert/${pair.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const scaleValues = getScaledValues();

  const kgToLbsRoutes: MetadataRoute.Sitemap = scaleValues.map((val) => ({
    url: `${baseUrl}/${val}-kg-to-lbs`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const lbsToKgRoutes: MetadataRoute.Sitemap = scaleValues.map((val) => ({
    url: `${baseUrl}/${val}-lbs-to-kg`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...convertRoutes, ...kgToLbsRoutes, ...lbsToKgRoutes];
}



