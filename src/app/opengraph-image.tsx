import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FAF8F4",
          color: "#1A1A1A",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C4A24D",
            fontFamily: "monospace",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 112, fontWeight: 600, marginTop: 24, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 20, color: "#4A4A4A" }}>
          {siteConfig.title}
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 40, fontStyle: "italic", color: "#C4A24D" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
