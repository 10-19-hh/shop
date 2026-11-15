import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: PageProps<"/products/[id]">) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
