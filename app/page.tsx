import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import Link from "next/link";
import UnifiedConverterView from "@/components/UnifiedConverterView";

const title = "Kilometer to Centimeter Converter — km to cm";
const description =
  "Convert kilometers to centimeters instantly: 1 km = 100,000 cm. Free length converter plus weight, temperature, volume and time tools with reference charts.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "kilometer to centimeter",
    "km to cm",
    "centimeter to kilometer",
    "unit converter",
    "free unit converter",
    "length converter",
    "weight converter",
    "temperature converter",
    "volume converter",
    "time converter",
  ],
  alternates: {
    canonical: siteUrl("/"),
  },
  openGraph: {
    title,
    description,
    url: siteUrl("/"),
  },
};

const commonKmToCm: { km: string; cm: string }[] = [
  { km: "0.5", cm: "50,000" },
  { km: "1", cm: "100,000" },
  { km: "2", cm: "200,000" },
  { km: "5", cm: "500,000" },
  { km: "10", cm: "1,000,000" },
  { km: "42.195", cm: "4,219,500" },
];

export default function HomePage() {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <UnifiedConverterView
        initialCategory="length"
        initialFromUnit="km"
        initialToUnit="cm"
        title="Kilometer to Centimeter Converter"
        lead="Convert kilometers to centimeters instantly — 1 kilometer is exactly 100,000 centimeters — or switch tabs for weight, temperature, volume and time conversions."
      >
        <section className="editorial-card">
          <h2>Kilometers to Centimeters — The Quick Answer</h2>
          <p>
            One kilometer contains exactly <strong>100,000 centimeters</strong>. The
            conversion is exact by definition: 1 kilometer = 1,000 meters and
            1 meter = 100 centimeters, so you multiply the number of kilometers
            by 100,000 to get centimeters:
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--paper)",
              padding: "1rem",
              border: "1px solid var(--line)",
            }}
          >
            Centimeters = Kilometers × 100,000
          </p>
          <p>Common kilometer to centimeter conversions:</p>
          <ul>
            {commonKmToCm.map((row) => (
              <li key={row.km}>
                {row.km} km = {row.cm} cm
                {row.km === "42.195" ? " (a marathon)" : ""}
              </li>
            ))}
          </ul>
          <p>
            Use the dedicated{" "}
            <Link href="/length/km-to-cm">kilometers to centimeters</Link> page
            for the full 1–1,000 km reference chart, or the reverse{" "}
            <Link href="/length/cm-to-km">centimeters to kilometers</Link>{" "}
            converter to go the other way. Every other conversion lives on its
            own hub: <Link href="/length-converter">Length</Link>,{" "}
            <Link href="/weight-converter">Weight</Link>,{" "}
            <Link href="/temperature-converter">Temperature</Link>,{" "}
            <Link href="/volume-converter">Volume</Link> and{" "}
            <Link href="/time-converter">Time</Link>.
          </p>
        </section>
      </UnifiedConverterView>
    </div>
  );
}
