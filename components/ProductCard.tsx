import Link from "next/link";
import ProductImage from "./ProductImage";
import WishButton from "./WishButton";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className="relative">
      <Link href={`/products/${product.id}`} className="block">
        <ProductImage product={product} />
        <p className="mt-2 truncate text-sm">{product.name}</p>
        <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
      </Link>
      <WishButton
        productId={product.id}
        name={product.name}
        className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/90 text-black"
      />
    </li>
  );
}
