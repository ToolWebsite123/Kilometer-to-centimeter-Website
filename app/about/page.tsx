import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kg to Lbs Converter — Standards & Precision",
  description:
    "Learn about our editorial single-purpose weight conversion tool, international standards (1959 treaty), and math accuracy commitment.",
  keywords: ["about kg to lbs", "weight conversion standards", "avoirdupois pound definition", "metric mass conversion"],
};

export default function AboutPage() {
  return (
    <div className="container">
      <span className="editorial-tag">Documentation & Standards</span>
      <h1>About Kg to Lbs Converter</h1>
      <p className="lead">
        We provide a fast, zero-bloat, distraction-free utility for converting mass values between kilograms and pounds with mathematical exactness.
      </p>

      <section className="editorial-card">
        <h2>Our Precision Commitment</h2>
        <p>
          Unlike generic online converters cluttered with advertisements, heavy scripts, and imprecise approximations, this website is built with strict adherence to international metrological definitions.
        </p>
        <p>
          All calculations are processed using pure, open mathematical functions based on the <strong>1959 International Yard and Pound Agreement</strong>, which fixed the avoirdupois pound to exactly <code>0.45359237 kilograms</code>.
        </p>

        <h2>Technical Architecture</h2>
        <ul>
          <li><strong>Lightweight & Fast:</strong> Zero external UI framework bloat. Built purely with Next.js App Router, TypeScript, and vanilla CSS Modules.</li>
          <li><strong>Real-Time Two-Way Conversion:</strong> Instant calculations as you type in either direction without requiring form submission.</li>
          <li><strong>Static HTML Export:</strong> Fully static pre-rendered site delivering sub-second load times and offline performance.</li>
          <li><strong>Privacy First:</strong> All conversions execute locally in your web browser. No user data or weight inputs are transmitted or logged.</li>
        </ul>

        <h2>Contact & Inquiries</h2>
        <p>
          For suggestions, metrology inquiries, or feedback regarding our calculations, please visit our main tool or explore our reference guides.
        </p>
      </section>

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Kg to Lbs Converter</Link>
      </p>
    </div>
  );
}
