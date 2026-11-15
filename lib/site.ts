import { BRAND } from "./config";

// 배포 주소. 실제 도메인이 정해지면 NEXT_PUBLIC_SITE_URL 하나만 설정하면 된다.
// (Vercel에서는 VERCEL_PROJECT_PRODUCTION_URL을 자동으로 사용)
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const SITE_NAME = BRAND;
export const SITE_TITLE = `${BRAND} | 데일리 웨어 의류 쇼핑`;
export const SITE_DESCRIPTION = `${BRAND}은(는) 상의·하의·아우터·신발·액세서리를 소개하는 의류 쇼핑 사이트입니다. 베이직 티셔츠부터 코트까지 30가지 데일리 웨어를 소재와 세탁 정보와 함께 확인하세요.`;

export const abs = (path: string) => `${SITE_URL}${path}`;
