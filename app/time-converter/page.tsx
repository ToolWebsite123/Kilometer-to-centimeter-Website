import type { Metadata } from "next";
import UnifiedConverterView from "@/components/UnifiedConverterView";

export const metadata: Metadata = {
  title: "Time Converter - Convert Seconds, Minutes, Hours, Days, Weeks & Years",
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
