import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Free Unit Converter",
  description: "Terms of service and usage conditions for Free Unit Converter.",
  alternates: {
    canonical: siteUrl("/terms"),
  },
  openGraph: {
    title: "Terms of Service — Free Unit Converter",
    description: "Terms of service and usage conditions for Free Unit Converter.",
    url: siteUrl("/terms"),
  },
};

export default function TermsPage() {
  return (
    <div className="container">
      <span className="editorial-tag">Legal</span>
      <h1>Terms of Service</h1>
      <p className="lead">
        Please read these terms of service carefully before using Free Unit Converter.
      </p>

      <section className="editorial-card">
        <h2>Use of Service</h2>
        <p>
          Free Unit Converter provides online measurement conversion utilities for informational purposes. All tools and calculations are provided &quot;as is&quot; without warranties of any kind.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          While we strive for high mathematical exactness and metrological accuracy, we accept no liability for any reliance placed on the calculations provided by this site.
        </p>

        <h2>Modifications</h2>
        <p>
          We reserve the right to modify or discontinue any part of the service at any time without notice.
        </p>
      </section>

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Multi-Unit Converter</Link>
      </p>
    </div>
  );
}
