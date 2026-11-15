import type { Metadata } from "next";
import { Suspense } from "react";
import JsonLd from "@/components/JsonLd";
import { getProducts } from "@/lib/data";
import type { Product } from "@/lib/products";
import { SITE_NAME, abs } from "@/lib/site";
import ProductList from "./ProductList";

const DESCRIPTION = `${SITE_NAME}의 전체 상품입니다. 상의, 하의, 아우터, 신발, 액세서리를 카테고리·가격대·사이즈·색상으로 골라 보세요.`;

export const metadata: Metadata = {
  title: "전체상품",
  description: DESCRIPTION,
  // 필터·정렬 쿼리가 붙은 주소는 모두 이 주소로 합쳐 중복 색인을 막는다.
  alternates: { canonical: "/products" },
  openGraph: { title: "전체상품", description: DESCRIPTION, url: "/products" },
};

const buildJsonLd = (PRODUCTS: Product[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${SITE_NAME} 전체상품`,
  url: abs("/products"),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(`/products/${p.id}`),
      name: p.name,
    })),
  },
});

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <JsonLd data={buildJsonLd(products)} />
      <Suspense fallback={<p className="py-10 text-center text-sm">불러오는 중...</p>}>
        <ProductList products={products} />
      </Suspense>
    </>
  );
}
