import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Free Unit Converter — Standards & Precision",
  description:
    "Learn about our editorial multi-unit converter, metrological standards, and mathematical accuracy commitment.",
  keywords: ["about unit converter", "weight conversion standards", "metrology standards", "conversion math accuracy"],
};

export default function AboutPage() {
  return (
    <div className="container">
      <span className="editorial-tag">Documentation & Standards</span>
      <h1>About Free Unit Converter</h1>
      <p className="lead">
        We provide a fast, zero-bloat, distraction-free utility for converting measurement values across Length, Weight, Temperature, Volume, and Time with mathematical exactness.
      </p>

      <section className="editorial-card">
        <h2>Our Precision Commitment</h2>
        <p>
          Unlike generic online converters cluttered with advertisements, heavy scripts, and imprecise approximations, this website is built with strict adherence to international metrological definitions.
        </p>
        <p>
          All calculations are processed using pure, open mathematical functions based on official standard ratios (such as the <strong>1959 International Yard and Pound Agreement</strong>, standard metric prefixes, and thermodynamic temperature offsets).
        </p>

        <h2>Technical Architecture</h2>
        <ul>
          <li><strong>Lightweight & Fast:</strong> Zero external UI framework bloat. Built purely with Next.js App Router, TypeScript, and vanilla CSS Modules.</li>
          <li><strong>Real-Time Two-Way Conversion:</strong> Instant calculations as you type in either direction without requiring form submission.</li>
          <li><strong>Static HTML Export:</strong> Fully static pre-rendered site delivering sub-second load times and offline performance.</li>
          <li><strong>Privacy First:</strong> All conversions execute locally in your web browser. No user data or input values are transmitted or logged.</li>
        </ul>

        <h2>Definitions & Standards</h2>
        
        <h3>Mass & Weight (Kilograms & Pounds)</h3>
        <p>
          Standardized legally worldwide under the 1959 treaty, 1 avoirdupois pound is equal to exactly 0.45359237 kilograms (or 1 kg = 2.20462262185 lbs).
        </p>

        <h3>Temperature (Celsius, Fahrenheit & Kelvin)</h3>
        <p>
          Temperature scales combine multiplicative scaling with additive offsets due to different baseline zero points (0 °C = 32 °F = 273.15 K).
        </p>

        <h2>Contact & Inquiries</h2>
        <p>
          For suggestions or feedback regarding our calculations, please return to our main converter.
        </p>
      </section>

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Multi-Unit Converter</Link>
      </p>
    </div>
  );
}
