import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <span className="editorial-tag">404 — Page Not Found</span>
      <h1 style={{ marginTop: "1rem" }}>Page Not Found</h1>
      <p className="lead" style={{ maxWidth: "600px", margin: "1rem auto 2rem" }}>
        The conversion page or resource you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          background: "var(--moss)",
          color: "#ffffff",
          textDecoration: "none",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
        }}
      >
        ← Return to Unit Converter Homepage
      </Link>
    </div>
  );
}
