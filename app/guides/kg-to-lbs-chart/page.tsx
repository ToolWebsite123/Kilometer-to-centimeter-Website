import type { Metadata } from "next";
import Converter from "@/components/Converter";
import ConversionChart from "@/components/ConversionChart";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kilograms to Pounds Conversion Chart (1-100 kg Table)",
  description:
    "Complete reference chart for converting kilograms to pounds from 1 kg to 100 kg. High precision values for shipping, fitness, and science.",
  keywords: ["kg to lbs chart", "kilograms to pounds table", "weight conversion table", "kg lbs lookup"],
};

export default function GuideChartPage() {
  return (
    <div className="container">
      <span className="editorial-tag">Reference Table</span>
      <h1>Master Kilograms to Pounds Conversion Chart</h1>
      <p className="lead">
        A complete, high-precision reference table converting kilograms (1 kg to 100 kg) into avoirdupois pounds with exact and rounded values.
      </p>

      {/* Embedded interactive converter */}
      <Converter initialKg={50} title="Interactive Weight Converter" />

      {/* Full 1 - 100 kg Chart */}
      <ConversionChart
        startKg={1}
        endKg={100}
        step={1}
        title="1 kg to 100 kg Full Lookup Table"
        subtitle="Search or paginate through values from 1 kg up to 100 kg."
      />

      <section className="editorial-card">
        <h2>How to Read and Use This Chart</h2>
        <p>
          This conversion chart is designed for professionals in logistics, aviation, weightlifting, and medicine who need instant verification of metric weights.
        </p>
        <ul>
          <li><strong>Exact Column:</strong> Shows the conversion carried to four decimal places using the international factor 2.20462262185.</li>
          <li><strong>2 Decimals Column:</strong> Standard practical rounding used in commercial weighing and personal fitness tracking.</li>
        </ul>
      </section>

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Kg to Lbs Converter</Link>
      </p>
    </div>
  );
}
