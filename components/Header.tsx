"use client";

import Link from "next/link";
import { BRAND } from "@/lib/config";
import { useStore } from "@/lib/store";

export default function Header() {
  const { wishlist, cart } = useStore();
  const count = cart.reduce((n, c) => n + c.quantity, 0);
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-widest">
          {BRAND}
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/products">전체상품</Link>
          <Link href="/wishlist">찜 {wishlist.length}</Link>
          <Link href="/cart">장바구니 {count}</Link>
        </nav>
      </div>
    </header>
  );
}
