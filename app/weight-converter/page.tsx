import type { Metadata } from "next";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Weight Converter - Convert Kilograms, Pounds, Grams, Ounces & Stone",
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
