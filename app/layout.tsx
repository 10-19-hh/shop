import type { Metadata } from "next";
import Header from "@/components/Header";
import { BRAND } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${BRAND} | 의류 쇼핑`,
  description: "결제 없는 의류 쇼핑 페이지 데모",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
        <footer className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
          © {BRAND} · 결제가 없는 데모 사이트입니다
        </footer>
      </body>
    </html>
  );
}
