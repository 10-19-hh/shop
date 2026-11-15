import { COLOR_HEX, type Product } from "@/lib/products";

// 실제 사진이 들어오기 전까지 쓰는 플레이스홀더. 상품 색상으로 배경을 칠한다.
export default function ProductImage({
  product,
  index = 0,
  color,
  className = "",
}: {
  product: Product;
  index?: number;
  color?: string;
  className?: string;
}) {
  const bg = COLOR_HEX[color ?? product.colors[0]] ?? "#e5e5e5";
  const dark = ["블랙", "네이비", "카키", "브라운"].includes(color ?? product.colors[0]);
  return (
    <div
      role="img"
      aria-label={`${product.name} ${product.images[index] ?? ""} 이미지`}
      className={`flex aspect-[3/4] w-full items-end justify-between p-3 text-xs ${className}`}
      style={{
        background: `linear-gradient(160deg, ${bg} 0%, color-mix(in srgb, ${bg} 80%, #888) 100%)`,
        color: dark ? "#fff" : "#222",
      }}
    >
      <span>{product.images[index]}</span>
      <span className="opacity-60">{product.id.toUpperCase()}</span>
    </div>
  );
}
