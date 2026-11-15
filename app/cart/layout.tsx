import type { Metadata } from "next";

// 개인·거래 페이지는 검색 결과에 노출하지 않는다.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
