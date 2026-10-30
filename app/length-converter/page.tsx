import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Length Converter — km, cm, m, Feet & Miles",
  description:
    "Free online length converter. Instantly convert between centimeters, meters, kilometers, inches, feet, yards, and miles with real-time accuracy.",
  keywords: [
    "length converter",
    "cm to inches",
    "meters to feet",
    "inches to cm",
    "feet to meters",
    "km to miles",
    "distance converter",
  ],
  alternates: {
    canonical: siteUrl("/length-converter"),
  },
  openGraph: {
    title: "Length Converter — km, cm, m, Feet & Miles",
    description: "Free online length converter. Instantly convert between centimeters, meters, kilometers, inches, feet, yards, and miles with real-time accuracy.",
    url: siteUrl("/length-converter"),
  },
};

export default function LengthConverterPage() {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <UnifiedConverterView
        initialCategory="length"
        title="Length Converter"
      />
    </div>
  );
}
