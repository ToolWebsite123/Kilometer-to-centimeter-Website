import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import Link from "next/link";

const title = "Privacy Policy — Free Unit Converter";
const description =
  "How Free Unit Converter handles data: conversions run locally in your browser, which cookies are used, and how future advertising would be disclosed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: siteUrl("/privacy-policy"),
  },
  openGraph: {
    title,
    description,
    url: siteUrl("/privacy-policy"),
    images: [{ url: siteUrl("/opengraph-image"), width: 1200, height: 630, alt: "Free Unit Converter" }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container">
      <span className="editorial-tag">Legal</span>
      <h1>Privacy Policy</h1>
      <p className="lead">
        Your privacy is important to us. This document outlines how data is handled on Free Unit Converter.
      </p>
      <p>
        <strong>Last updated: October 30, 2026</strong>
      </p>

      <section className="editorial-card">
        <h2>Data Collection &amp; Processing</h2>
        <p>
          Free Unit Converter runs all calculations locally within your web browser using client-side JavaScript. We do not store, track, or transmit your conversion inputs or numeric values to any external server, and the site offers no user accounts or sign-ups, so we never collect names, passwords, or other account information.
        </p>
        <p>
          Like almost every website, our hosting provider (Cloudflare Pages) automatically processes standard technical request data — such as your IP address, browser type, and the pages requested — in server logs for security and reliability purposes. We do not use those logs to identify or profile individual visitors.
        </p>

        <h2>Cookies &amp; Local Storage</h2>
        <p>
          This website does not set tracking cookies and does not use persistent storage to identify you personally. Your browser may cache the site&apos;s static files (pages, styles, and scripts) so they load faster on repeat visits; clearing your browser cache removes them at any time.
        </p>

        <h2>Third-Party Advertising</h2>
        <p>
          This website currently displays no advertising and sets no advertising cookies.
        </p>
        <p>
          If advertising — such as Google AdSense — is added in the future, third-party vendors, including Google, may use cookies to serve ads based on your prior visits to this and other websites. You would be able to opt out of personalised advertising through Google&apos;s Ads Settings and through industry opt-out pages such as aboutads.info. This policy will be updated before any advertising is introduced.
        </p>

        <h2>Contact Information</h2>
        <p>
          We do not currently publish an email address for this website. A contact address will be published on this page together with the site&apos;s own domain, and this section will be updated as soon as it is available. Please do not send personal information through any unofficial channel claiming to represent this site.
        </p>
      </section>

      <p style={{ marginTop: "2rem" }}>
        ← <Link href="/">Return to Main Multi-Unit Converter</Link>
      </p>
    </div>
  );
}
