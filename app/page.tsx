import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { BRAND } from "@/lib/config";
import { getProducts } from "@/lib/data";
import { CATEGORIES } from "@/lib/products";

export default async function Home() {
  const PRODUCTS = await getProducts();
  const newest = [...PRODUCTS]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 8);
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="space-y-12">
      <section className="flex aspect-[16/9] min-h-56 flex-col items-center justify-center bg-neutral-900 px-4 text-center text-white">
        <h1 className="text-3xl font-bold tracking-widest sm:text-5xl">{BRAND}</h1>
        <p className="mt-3 text-sm text-neutral-300">꾸밈없이 오래 입는 데일리 웨어</p>
        <Link href="/products" className="mt-6 bg-white px-6 py-2 text-sm font-semibold text-black">
          전체 상품 보기
        </Link>
      </section>

      <nav aria-label="카테고리" className="grid grid-cols-5 gap-2 text-center text-sm">
        {CATEGORIES.map((c) => (
          <Link
            key={c.id}
            href={`/products?category=${c.id}`}
            className="border border-neutral-200 py-3 hover:bg-neutral-100"
          >
            {c.label}
          </Link>
        ))}
      </nav>

      <section>
        <h2 className="mb-4 text-lg font-bold">신상품</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {newest.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold">추천</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ul>
      </section>
    </div>
  );
}
