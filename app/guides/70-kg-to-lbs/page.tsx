import type { Metadata } from "next";
import Converter from "@/components/Converter";
import ConversionChart from "@/components/ConversionChart";
import PopularConversions from "@/components/PopularConversions";
import Link from "next/link";

export const metadata: Metadata = {
  title: "70 Kg to Lbs — How Much is 70 Kilograms in Pounds?",
  description:
    "70 kg is equal to 154.32 lbs. Learn the exact formula to convert 70 kilograms to pounds, see body weight contexts, and use our pre-filled calculator.",
  keywords: ["70 kg to lbs", "70 kilograms in pounds", "70kg to lbs", "70 kg in lbs"],
};

export default function Guide70KgPage() {
  return (
    <div className="container">
      <span className="editorial-tag">Weight Guide</span>
      <h1>70 Kg to Lbs Converter & Guide</h1>
      <p className="lead">
        <strong>70 kilograms (kg) is equal to 154.3235835 pounds (lbs).</strong> 70 kg is a common benchmark for human body weight in clinical health and fitness tracking.
      </p>

      {/* Converter pre-filled with 70 kg */}
      <Converter initialKg={70} title="Convert 70 Kilograms to Pounds" />

      <section className="editorial-card">
        <h2>Mathematical Breakdown: 70 kg in lbs</h2>
        <p>
          To calculate how many pounds are in 70 kilograms, multiply 70 by the official conversion constant <code>2.20462262185</code>:
        </p>
        <p style={{ fontFamily: "var(--font-mono)", background: "var(--paper)", padding: "1rem", border: "1px solid var(--line)" }}>
          70 kg × 2.20462262185 = <strong>154.3235835 lbs</strong>
        </p>
        <p>
          When rounded to two decimal places for medical, athletic, or general use, <strong>70 kg = 154.32 lbs</strong> (or approximately 154 lbs 5.2 oz).
        </p>

        <h3>Practical Context of 70 Kilograms</h3>
        <p>
          In healthcare and physiology research, 70 kg is historically referenced as the standardized mass for an average adult (&quot;Reference Man&quot;). It serves as the baseline parameter for calculating metabolic rates, pharmaceutical dosages, and daily fluid requirements.
        </p>
      </section>

      {/* Surrounding Context Chart (60 kg to 80 kg) */}
      <ConversionChart
        startKg={60}
        endKg={80}
        step={1}
        title="Surrounding Weight Chart (60 kg – 80 kg)"
        subtitle="Quick reference for weights around 70 kilograms in 1 kg steps."
      />

      {/* Popular Weight & Mass Conversions */}
      <PopularConversions />

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Kg to Lbs Converter</Link>
      </p>
    </div>
  );
}

