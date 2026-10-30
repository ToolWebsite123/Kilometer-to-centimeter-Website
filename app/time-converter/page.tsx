import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Time Converter — Hours, Days & Years",
  description:
    "Free online time unit converter. Fast, accurate conversions between seconds, milliseconds, minutes, hours, days, weeks, months, years, decades, and centuries.",
  keywords: [
    "time converter",
    "hours to seconds",
    "seconds to hours",
    "days to hours",
    "years to days",
    "time calculator",
  ],
  alternates: {
    canonical: siteUrl("/time-converter"),
  },
  openGraph: {
    title: "Time Converter — Hours, Days & Years",
    description: "Free online time unit converter. Fast, accurate conversions between seconds, milliseconds, minutes, hours, days, weeks, months, years, decades, and centuries.",
    url: siteUrl("/time-converter"),
    images: [{ url: siteUrl("/opengraph-image"), width: 1200, height: 630, alt: "Free Unit Converter" }],
  },
};

export default function TimeConverterPage() {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <UnifiedConverterView
        initialCategory="time"
        title="Time Converter"
      />
    </div>
  );
}
