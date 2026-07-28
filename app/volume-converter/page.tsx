import type { Metadata } from "next";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Volume Converter - Convert Liters, Gallons, Milliliters, Cups & Quarts",
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
