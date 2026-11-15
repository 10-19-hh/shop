import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/config";

export const alt = `${BRAND} 의류 쇼핑`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 한글 폰트를 번들하지 않으므로 브랜드명(영문)만 그린다.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
          color: "#fff",
          fontSize: 140,
          letterSpacing: 24,
          fontWeight: 700,
        }}
      >
        {BRAND}
      </div>
    ),
    size,
  );
}
