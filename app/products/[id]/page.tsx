import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { PHOTOS } from "@/lib/photos";
import { getProduct, getProducts } from "@/lib/data";
import { categoryLabel, formatPrice } from "@/lib/products";
import { SITE_NAME, abs } from "@/lib/site";
import ProductDetail from "./ProductDetail";

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps<"/products/[id]">): Promise<Metadata> {
  const { id } = await params;
  const p = await getProduct(id);
  if (!p) return { title: "상품을 찾을 수 없습니다", robots: { index: false } };

  const title = `${p.name} - ${categoryLabel(p.category)}`;
  const description = `${p.name} ${formatPrice(p.price)}. ${p.description} 소재: ${p.material}. 색상: ${p.colors.join(", ")}. 사이즈: ${p.sizes.join(", ")}.`;
  const images = (PHOTOS[p.id] ?? []).map((ph) => ({ url: ph.src, alt: p.name }));

  return {
    title,
    description,
    alternates: { canonical: `/products/${p.id}` },
    openGraph: { type: "website", title, description, url: `/products/${p.id}`, images },
    twitter: { card: "summary_large_image", title, description, images: images.map((i) => i.url) },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[id]">) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  const url = abs(`/products/${product.id}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: product.name,
        description: `${product.description} 소재: ${product.material}. 세탁: ${product.care}.`,
        sku: product.id,
        category: categoryLabel(product.category),
        material: product.material,
        color: product.colors.join(", "),
        image: (PHOTOS[product.id] ?? []).map((ph) => abs(ph.src)),
        brand: { "@type": "Brand", name: SITE_NAME },
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "KRW",
          price: product.price,
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": abs("/#organization") },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: abs("/") },
          { "@type": "ListItem", position: 2, name: "전체상품", item: abs("/products") },
          { "@type": "ListItem", position: 3, name: product.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ProductDetail product={product} />
    </>
  );
}
