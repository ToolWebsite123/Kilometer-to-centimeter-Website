import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import Link from "next/link";

const description =
  "Terms of service for Free Unit Converter: the rules for using our free online unit conversion tools, our accuracy standards, acceptable use and liability limits.";

export const metadata: Metadata = {
  title: "Terms of Service — Free Unit Converter",
  description,
  alternates: {
    canonical: siteUrl("/terms"),
  },
  openGraph: {
    title: "Terms of Service — Free Unit Converter",
    description,
    url: siteUrl("/terms"),
    images: [{ url: siteUrl("/opengraph-image"), width: 1200, height: 630, alt: "Free Unit Converter" }],
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
      <p>Last updated: October 30, 2026</p>

      <section className="editorial-card">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using Free Unit Converter, you accept these terms of service in full.
          If you do not agree with any part of these terms, please do not use the site. Your
          continued use of the site after any change to these terms counts as acceptance of the
          updated terms.
        </p>

        <h2>The Service</h2>
        <p>
          Free Unit Converter provides free online measurement conversion utilities for length,
          weight, temperature, volume and time, for informational and educational purposes. The
          tools run entirely in your web browser: the values you enter are processed on your own
          device and are not sent to or stored on a server. No account or registration is
          required, and the service is provided free of charge.
        </p>

        <h2>Accuracy and No Warranty</h2>
        <p>
          All tools and calculations are provided &quot;as is&quot; without warranties of any
          kind, express or implied. We build our converters on internationally standard
          conversion factors (for example, 1 inch = exactly 2.54 centimeters and 1 pound =
          exactly 0.45359237 kilograms) and we test them carefully, but we cannot guarantee that
          every result is free of rounding differences or error. Always double-check critical
          measurements — such as those used in engineering, medicine, construction or commerce —
          against an authoritative source before relying on them.
        </p>

        <h2>Acceptable Use</h2>
        <p>
          You may use this site for personal and commercial reference. You agree not to misuse
          the service, for example by attempting to disrupt its operation, overload it with
          automated requests, misrepresent its results as your own certified measurements, or
          use it in any way that violates applicable laws.
        </p>

        <h2>External Links</h2>
        <p>
          This site may link to third-party websites for reference. We do not control those
          sites and are not responsible for their content, accuracy or privacy practices.
          Following an external link is at your own discretion.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          While we strive for high mathematical exactness and metrological accuracy, we accept
          no liability for any loss or damage arising from reliance placed on the calculations
          provided by this site, to the fullest extent permitted by law.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We reserve the right to modify or discontinue any part of the service, and to update
          these terms, at any time. When these terms change, the &quot;Last updated&quot; date
          at the top of this page will change as well.
        </p>

        <h2>Contact</h2>
        <p>
          We do not yet publish a contact email address for this site. When one becomes
          available, it will be published on this page and on our About page using the
          site&apos;s own domain, so please treat any other channel claiming to represent this
          site with caution.
        </p>
      </section>

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Multi-Unit Converter</Link>
      </p>
    </div>
  );
}
