import { Suspense } from "react";
import ProductList from "./ProductList";

export const metadata = { title: "전체상품" };

export default function ProductsPage() {
  return (
    <Suspense fallback={<p className="py-10 text-center text-sm">불러오는 중...</p>}>
      <ProductList />
    </Suspense>
  );
}
