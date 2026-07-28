"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
          <h1 style={{ marginTop: "2rem" }}>Something went wrong!</h1>
          <p className="lead">{error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.75rem 1.5rem",
              background: "var(--moss)",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              marginTop: "1rem",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
