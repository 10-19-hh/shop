import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// 개인·거래 페이지와 API는 색인하지 않는다.
const PRIVATE = ["/api/", "/cart", "/checkout", "/wishlist"];

// 생성형 AI 검색·답변 크롤러(GEO)에도 공개 페이지를 허용한다.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: PRIVATE })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
