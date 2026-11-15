"use client";

import { toggleWish, useStore } from "@/lib/store";

export default function WishButton({
  productId,
  name,
  className = "",
  label = false,
}: {
  productId: string;
  name: string;
  className?: string;
  label?: boolean;
}) {
  const wished = useStore().wishlist.includes(productId);
  return (
    <button
      type="button"
      onClick={() => toggleWish(productId)}
      aria-pressed={wished}
      aria-label={`${name} ${wished ? "찜 해제" : "찜하기"}`}
      className={`inline-flex items-center justify-center gap-1 ${className}`}
    >
      <span aria-hidden className="text-lg leading-none">
        {wished ? "♥" : "♡"}
      </span>
      {label && <span>{wished ? "찜 해제" : "찜하기"}</span>}
    </button>
  );
}
