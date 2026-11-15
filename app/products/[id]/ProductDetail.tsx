"use client";

import Link from "next/link";
import { useState } from "react";
import ProductImage from "@/components/ProductImage";
import WishButton from "@/components/WishButton";
import { addToCart } from "@/lib/store";
import { categoryLabel, formatPrice, type Product } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  const [image, setImage] = useState(0);
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState("");
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    if (!size) return;
    addToCart({ productId: product.id, color, size });
    setAdded(true);
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <ProductImage product={product} index={image} color={color} />
        <div className="mt-2 flex gap-2">
          {product.images.map((label, i) => (
            <button
              key={label}
              type="button"
              aria-label={`${label} 이미지 보기`}
              aria-pressed={image === i}
              onClick={() => setImage(i)}
              className={`w-16 border-2 ${image === i ? "border-black" : "border-transparent"}`}
            >
              <ProductImage product={product} index={i} color={color} className="!p-1 !text-[10px]" />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs text-neutral-500">{categoryLabel(product.category)}</p>
          <h1 className="mt-1 text-xl font-bold">{product.name}</h1>
          <p className="mt-2 text-lg font-semibold">{formatPrice(product.price)}</p>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-semibold">색상: {color}</legend>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={color === c}
                onClick={() => setColor(c)}
                className={`border px-3 py-1 text-sm ${
                  color === c ? "border-black bg-black text-white" : "border-neutral-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-sm font-semibold">사이즈</legend>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={size === s}
                onClick={() => setSize(s)}
                className={`min-w-12 border px-3 py-1 text-sm ${
                  size === s ? "border-black bg-black text-white" : "border-neutral-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="space-y-2">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onAdd}
              disabled={!size}
              className="flex-1 bg-black py-3 text-sm font-semibold text-white disabled:bg-neutral-300"
            >
              장바구니 담기
            </button>
            <WishButton
              productId={product.id}
              name={product.name}
              label
              className="border border-neutral-300 px-4 text-sm"
            />
          </div>
          {!size && <p className="text-xs text-neutral-500">사이즈를 선택해 주세요.</p>}
          {added && (
            <p role="status" className="text-sm">
              장바구니에 담았습니다.{" "}
              <Link href="/cart" className="underline">
                장바구니 보기
              </Link>
            </p>
          )}
        </div>

        <dl className="space-y-3 border-t border-neutral-200 pt-4 text-sm">
          <div>
            <dt className="font-semibold">상품 설명</dt>
            <dd className="mt-1 text-neutral-700">{product.description}</dd>
          </div>
          <div>
            <dt className="font-semibold">소재</dt>
            <dd className="mt-1 text-neutral-700">{product.material}</dd>
          </div>
          <div>
            <dt className="font-semibold">세탁 정보</dt>
            <dd className="mt-1 text-neutral-700">{product.care}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
