import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Volume Converter — Liters, Gallons & Cups",
  description:
    "Free online volume unit converter. Easily convert between liters, gallons, milliliters, fluid ounces, cups, pints, quarts, cubic meters, and cubic feet.",
  keywords: [
    "volume converter",
    "liters to gallons",
    "gallons to liters",
    "ml to liters",
    "cups to ml",
    "liquid converter",
  ],
  alternates: {
    canonical: siteUrl("/volume-converter"),
  },
  openGraph: {
    title: "Volume Converter — Liters, Gallons & Cups",
    description: "Free online volume unit converter. Easily convert between liters, gallons, milliliters, fluid ounces, cups, pints, quarts, cubic meters, and cubic feet.",
    url: siteUrl("/volume-converter"),
    images: [{ url: siteUrl("/opengraph-image"), width: 1200, height: 630, alt: "Free Unit Converter" }],
  },
};

export default function VolumeConverterPage() {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <UnifiedConverterView
        initialCategory="volume"
        title="Volume Converter"
      />
    </div>
  );
}
