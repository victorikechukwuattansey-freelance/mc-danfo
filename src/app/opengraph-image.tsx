import { ImageResponse } from "next/og";
import { siteData } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MC Danfo — The Original Music-Comedy Storyteller";

/**
 * Auto-generated Open Graph image (PNG) — yellow brand panel with black
 * display type. Replaces automatically when the copy in /data/site.ts changes.
 */
export default async function OpengraphImage() {
  const domain = siteData.site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFC300",
          fontFamily: "sans-serif",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "24px",
              background: "#0A0A0A",
              color: "#FFC300",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "44px",
            }}
          >
            MD
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#0A0A0A" }}>
            MC DANFO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#0A0A0A",
              letterSpacing: "-2px",
              lineHeight: 1.05,
            }}
          >
            The Original Music-Comedy
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#0B3D2E",
              letterSpacing: "-2px",
              lineHeight: 1.05,
            }}
          >
            Storyteller
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: "26px",
            fontWeight: 600,
            color: "#0A0A0A",
          }}
        >
          <span>Lagos, Nigeria</span>
          <span style={{ opacity: 0.6 }}>•</span>
          <span>Bookings: {domain}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
