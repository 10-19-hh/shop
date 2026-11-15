import { cacheLife } from "next/cache";
import type { Category, Product } from "@/lib/products";
import { supabase } from "@/lib/supabase";

type Row = {
  id: string;
  name: string;
  category: Category;
  price: number;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  material: string;
  care: string;
  featured: boolean;
  created_at: string;
};

const toProduct = (r: Row): Product => ({
  id: r.id,
  name: r.name,
  category: r.category,
  price: r.price,
  colors: r.colors,
  sizes: r.sizes,
  images: r.images,
  description: r.description,
  material: r.material,
  care: r.care,
  featured: r.featured,
  createdAt: r.created_at,
});

// 상품 전체(30개 내외)를 한 번에 읽어 캐시한다. 모든 화면이 이 함수를 공유한다.
export async function getProducts(): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .order("id");
  if (error) throw new Error(`상품 조회 실패: ${error.message}`);
  return (data as Row[]).map(toProduct);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return (await getProducts()).find((p) => p.id === id);
}
