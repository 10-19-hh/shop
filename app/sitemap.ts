import type { MetadataRoute } from "next";
import { PHOTOS } from "@/lib/photos";
import { getProducts } from "@/lib/data";
import { abs } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const PRODUCTS = await getProducts();
  const newest = PRODUCTS.map((p) => p.createdAt).sort().at(-1);
  const latest = newest ? new Date(newest) : new Date();

  return [
    { url: abs("/"), lastModified: latest, changeFrequency: "weekly", priority: 1 },
    { url: abs("/products"), lastModified: latest, changeFrequency: "weekly", priority: 0.9 },
    { url: abs("/faq"), lastModified: latest, changeFrequency: "monthly", priority: 0.5 },
    // 카테고리 필터 페이지는 canonical이 /products 이므로 사이트맵에 넣지 않는다.
    ...PRODUCTS.map((p) => ({
      url: abs(`/products/${p.id}`),
      lastModified: new Date(p.createdAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: (PHOTOS[p.id] ?? []).map((ph) => abs(ph.src)),
    })),
  ];
}
