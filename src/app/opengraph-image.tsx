import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#ffffff",
        color: "#0b0b0c",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>{site.name}</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 96, letterSpacing: -3, lineHeight: 1.05 }}>
        <span style={{ color: "#8a8a93" }}>{site.headline[0]}</span>
        <span>{site.headline[1]}</span>
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#6b6b73" }}>{site.role}</div>
    </div>,
    size,
  );
}
