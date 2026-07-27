import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Free Unit Converter",
  description: "Privacy policy and data handling information for Free Unit Converter.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container">
      <span className="editorial-tag">Legal</span>
      <h1>Privacy Policy</h1>
      <p className="lead">
        Your privacy is important to us. This document outlines how data is handled on Free Unit Converter.
      </p>

      <section className="editorial-card">
        <h2>Data Collection & Processing</h2>
        <p>
          Free Unit Converter runs all calculations locally within your web browser using client-side JavaScript. We do not store, track, or transmit your conversion inputs or numeric values to any external server.
        </p>

        <h2>Cookies & Local Storage</h2>
        <p>
          This website does not use tracking cookies or persistent personal identifying storage.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about this privacy policy, please return to our main converter tool.
        </p>
      </section>

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Multi-Unit Converter</Link>
      </p>
    </div>
  );
}
