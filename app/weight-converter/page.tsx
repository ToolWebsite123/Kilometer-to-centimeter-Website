import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Weight Converter — kg to lbs & More Units",
  description:
    "Free online weight and mass converter. Convert between kilograms, pounds, grams, ounces, stone, and metric tons with instant metrological accuracy.",
  keywords: [
    "weight converter",
    "kg to lbs",
    "lbs to kg",
    "grams to ounces",
    "pounds to grams",
    "mass converter",
  ],
  alternates: {
    canonical: siteUrl("/weight-converter"),
  },
  openGraph: {
    title: "Weight Converter — kg to lbs & More Units",
    description: "Free online weight and mass converter. Convert between kilograms, pounds, grams, ounces, stone, and metric tons with instant metrological accuracy.",
    url: siteUrl("/weight-converter"),
    images: [{ url: siteUrl("/opengraph-image"), width: 1200, height: 630, alt: "Free Unit Converter" }],
  },
};

export default function WeightConverterPage() {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <UnifiedConverterView
        initialCategory="weight"
        title="Weight Converter"
      />
    </div>
  );
}
