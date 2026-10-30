import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Temperature Converter — °C, °F & Kelvin",
  description:
    "Free online temperature scale converter. Instantly convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K) with exact offset formulas.",
  keywords: [
    "temperature converter",
    "celsius to fahrenheit",
    "fahrenheit to celsius",
    "celsius to kelvin",
    "temp calculator",
  ],
  alternates: {
    canonical: siteUrl("/temperature-converter"),
  },
  openGraph: {
    title: "Temperature Converter — °C, °F & Kelvin",
    description: "Free online temperature scale converter. Instantly convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K) with exact offset formulas.",
    url: siteUrl("/temperature-converter"),
    images: [{ url: siteUrl("/opengraph-image"), width: 1200, height: 630, alt: "Free Unit Converter" }],
  },
};

export default function TemperatureConverterPage() {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <UnifiedConverterView
        initialCategory="temperature"
        title="Temperature Converter"
      />
    </div>
  );
}
