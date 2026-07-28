import type { Metadata } from "next";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Temperature Converter - Convert Celsius, Fahrenheit & Kelvin",
  description:
    "Free online temperature scale converter. Instantly convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K) with exact offset formulas.",
  keywords: [
    "temperature converter",
    "celsius to fahrenheit",
    "fahrenheit to celsius",
    "celsius to kelvin",
    "temp calculator",
  ],
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
