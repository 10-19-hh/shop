"use client";

import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { formatPrice, getProduct } from "@/lib/products";
import { MAX_QTY, removeFromCart, setQuantity, useStore } from "@/lib/store";

export default function CartPage() {
  const { cart } = useStore();
  const lines = cart.flatMap((c) => {
    const product = getProduct(c.productId);
    return product ? [{ ...c, product }] : [];
  });
  const total = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);

  if (lines.length === 0) {
    return (
      <div className="py-16 text-center text-sm text-neutral-500">
        <h1 className="mb-2 text-xl font-bold text-black">장바구니</h1>
        <p>장바구니가 비어 있습니다.</p>
        <Link href="/products" className="mt-3 inline-block underline">
          상품 둘러보기
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold">장바구니</h1>
      <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
        {lines.map((l) => {
          const key = { productId: l.productId, color: l.color, size: l.size };
          return (
            <li key={`${l.productId}|${l.color}|${l.size}`} className="flex gap-4 py-4">
              <Link href={`/products/${l.productId}`} className="w-20 shrink-0">
                <ProductImage product={l.product} color={l.color} className="!p-1 !text-[10px]" />
              </Link>
              <div className="flex-1 text-sm">
                <p className="font-semibold">{l.product.name}</p>
                <p className="text-neutral-500">
                  {l.color} / {l.size}
                </p>
                <p className="mt-1">{formatPrice(l.product.price * l.quantity)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="수량 줄이기"
                    disabled={l.quantity <= 1}
                    onClick={() => setQuantity(key, l.quantity - 1)}
                    className="h-7 w-7 border border-neutral-300 disabled:opacity-40"
                  >
                    −
                  </button>
                  <span aria-live="polite" className="w-6 text-center">
                    {l.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="수량 늘리기"
                    disabled={l.quantity >= MAX_QTY}
                    onClick={() => setQuantity(key, l.quantity + 1)}
                    className="h-7 w-7 border border-neutral-300 disabled:opacity-40"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(key)}
                    className="ml-3 text-xs text-neutral-500 underline"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex items-center justify-between text-lg font-bold">
        <span>총액</span>
        <span>{formatPrice(total)}</span>
      </div>
      <Link
        href="/checkout"
        className="mt-4 block w-full bg-black py-3 text-center text-sm font-semibold text-white"
      >
        주문하기
      </Link>
    </div>
  );
}
