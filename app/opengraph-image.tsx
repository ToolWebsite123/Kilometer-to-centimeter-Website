import { ImageResponse } from "next/og";

export const alt = "Free Unit Converter — Kilometer to Centimeter Converter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#132a24",
          color: "#f6f3ec",
          padding: "64px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: "6px",
            color: "#b5892b",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Free Unit Converter
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>
          Kilometer to Centimeter
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>
          Converter
        </div>
        <div style={{ fontSize: 34, color: "#d8d2c2", marginTop: 32 }}>
          1 km = 100,000 cm · Length · Weight · Temperature · Volume · Time
        </div>
      </div>
    ),
    { ...size }
  );
}
