"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, COLOR_HEX, PRICE_RANGES, type Product } from "@/lib/products";

const SORTS = [
  { id: "new", label: "신상품순" },
  { id: "price-asc", label: "낮은 가격순" },
  { id: "price-desc", label: "높은 가격순" },
];
const SIZES = ["S", "M", "L", "XL", "250", "260", "270", "280", "FREE"];
const COLORS = Object.keys(COLOR_HEX);

function Chips({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-14 shrink-0 text-xs font-semibold text-neutral-500">{title}</span>
      {[{ id: "", label: "전체" }, ...options].map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={value === o.id}
          onClick={() => onChange(o.id)}
          className={`border px-3 py-1 text-xs ${
            value === o.id ? "border-black bg-black text-white" : "border-neutral-300"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function ProductList({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const category = params.get("category") ?? "";
  const price = params.get("price") ?? "";
  const size = params.get("size") ?? "";
  const color = params.get("color") ?? "";
  const sort = params.get("sort") ?? "new";

  const set = (key: string, v: string) => {
    const next = new URLSearchParams(params.toString());
    if (v && !(key === "sort" && v === "new")) next.set(key, v);
    else next.delete(key);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const range = PRICE_RANGES.find((r) => r.id === price);
  const items = products.filter(
    (p) =>
      (!category || p.category === category) &&
      (!range || (p.price >= range.min && p.price < range.max)) &&
      (!size || p.sizes.includes(size)) &&
      (!color || p.colors.includes(color)),
  ).sort((a, b) =>
    sort === "price-asc"
      ? a.price - b.price
      : sort === "price-desc"
        ? b.price - a.price
        : b.createdAt.localeCompare(a.createdAt),
  );

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold">전체상품</h1>
      <div className="mb-6 space-y-2">
        <Chips title="카테고리" options={CATEGORIES} value={category} onChange={(v) => set("category", v)} />
        <Chips title="가격대" options={PRICE_RANGES} value={price} onChange={(v) => set("price", v)} />
        <Chips
          title="사이즈"
          options={SIZES.map((s) => ({ id: s, label: s }))}
          value={size}
          onChange={(v) => set("size", v)}
        />
        <Chips
          title="색상"
          options={COLORS.map((c) => ({ id: c, label: c }))}
          value={color}
          onChange={(v) => set("color", v)}
        />
      </div>

      <div className="mb-4 flex items-center justify-between text-sm">
        <span>{items.length}개 상품</span>
        <label className="flex items-center gap-2">
          <span className="sr-only">정렬</span>
          <select
            value={sort}
            onChange={(e) => set("sort", e.target.value)}
            className="border border-neutral-300 px-2 py-1"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {items.length === 0 ? (
        <p className="py-16 text-center text-sm text-neutral-500">조건에 맞는 상품이 없습니다.</p>
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
