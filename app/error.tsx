"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <span className="editorial-tag">Error</span>
      <h1 style={{ marginTop: "1rem" }}>Something went wrong!</h1>
      <p className="lead" style={{ maxWidth: "600px", margin: "1rem auto 2rem" }}>
        An unexpected error occurred.
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: "0.75rem 1.5rem",
          background: "var(--moss)",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
        }}
      >
        Try again
      </button>
    </div>
  );
}
