"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function WishlistView({ products }: { products: Product[] }) {
  const { wishlist } = useStore();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold">찜 목록</h1>
      {items.length === 0 ? (
        <div className="py-16 text-center text-sm text-neutral-500">
          <p>찜한 상품이 없습니다.</p>
          <Link href="/products" className="mt-3 inline-block underline">
            상품 둘러보기
          </Link>
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ul>
      )}
    </div>
  );
}
