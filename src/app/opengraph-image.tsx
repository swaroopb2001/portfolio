import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#09090b",
          color: "#f4f4f5",
        }}
      >
        <div style={{ fontSize: 28, color: "#2dd4bf", fontFamily: "monospace" }}>swaroop.dev</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 12 }}>{profile.role}</div>
        <div style={{ fontSize: 26, color: "#a1a1aa", marginTop: 40 }}>
          Next.js · React · TypeScript · NestJS · GraphQL · Kafka
        </div>
      </div>
    ),
    size,
  );
}
