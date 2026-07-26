import type { Metadata } from "next";
import Converter from "@/components/Converter";
import ConversionChart from "@/components/ConversionChart";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1 Kg to Lbs — Base Conversion Factor & Formula",
  description:
    "1 kg is equal to 2.20462262185 lbs. Explore the baseline ratio between kilograms and pounds, history of the standard, and interactive calculation tool.",
  keywords: ["1 kg to lbs", "1 kilogram in pounds", "how many lbs in 1 kg", "1kg to lbs factor"],
};

export default function Guide1KgPage() {
  return (
    <div className="container">
      <span className="editorial-tag">Fundamental Unit Standard</span>
      <h1>1 Kg to Lbs Converter & Base Standard</h1>
      <p className="lead">
        <strong>1 kilogram (kg) is equal to 2.20462262185 pounds (lbs).</strong> This primary relationship forms the basis of all metric to imperial mass conversions.
      </p>

      {/* Converter pre-filled with 1 kg */}
      <Converter initialKg={1} title="Base Unit Converter (1 kg)" />

      <section className="editorial-card">
        <h2>The Core Conversion Constant</h2>
        <p>
          The fundamental conversion factor between the International System of Units (SI) kilogram and the imperial avoirdupois pound is legally defined by international treaty:
        </p>
        <p style={{ fontFamily: "var(--font-mono)", background: "var(--paper)", padding: "1rem", border: "1px solid var(--line)" }}>
          1 pound (lb) = <strong>0.45359237 kilograms (kg) exactly</strong><br />
          1 kilogram (kg) = 1 ÷ 0.45359237 = <strong>2.20462262185 pounds (lbs)</strong>
        </p>

        <h3>Historical Background of the Standard</h3>
        <p>
          Prior to July 1, 1959, different English-speaking countries maintained slight discrepancies in their definition of the pound. The International Yard and Pound Agreement ratified by the United States, United Kingdom, Canada, Australia, New Zealand, and South Africa established the exact unified standard of 0.45359237 kg per pound, which remains in force today worldwide.
        </p>
      </section>

      {/* Low range reference chart */}
      <ConversionChart
        startKg={1}
        endKg={20}
        step={1}
        title="1 to 20 Kilograms Conversion Chart"
        subtitle="Step-by-step conversion table for the first 20 kilograms."
      />

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Kg to Lbs Converter</Link>
      </p>
    </div>
  );
}
