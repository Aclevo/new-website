import { ImageResponse } from "next/og";
import { config } from "./config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #1a1a2e, #16213e)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 20 }}>{config.org.name}</div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
            textAlign: "center",
            maxWidth: "800px",
            padding: "0 40px",
          }}
        >
          {config.site.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
