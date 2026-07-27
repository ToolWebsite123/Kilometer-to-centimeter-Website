import type { Metadata } from "next";
import UnifiedConverterView from "@/components/UnifiedConverterView";
import FAQSection from "@/components/FAQSection";
import PopularConversions from "@/components/PopularConversions";

export const metadata: Metadata = {
  title: "Free Unit Converter - Length, Weight, Temperature, Volume & Time",
  description:
    "Free online multi-unit converter for Length, Weight, Temperature, Volume, and Time. Fast, accurate real-time conversions including kg to lbs, Celsius to Fahrenheit, meters to feet, and more.",
  keywords: [
    "unit converter",
    "free unit converter",
    "length converter",
    "weight converter",
    "kg to lbs",
    "temperature converter",
    "celsius to fahrenheit",
    "volume converter",
    "time converter",
  ],
};

export default function HomePage() {
  return (
    <div className="container">
      <UnifiedConverterView />
      <PopularConversions />
      <FAQSection />
    </div>
  );
}
