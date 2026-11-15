import Image from "next/image";
import { PHOTOS } from "@/lib/photos";
import { COLOR_HEX, type Product } from "@/lib/products";

// 실제 사진이 있으면 사진을, 없으면 상품 색상으로 칠한 플레이스홀더를 보여 준다.
export default function ProductImage({
  product,
  index = 0,
  color,
  className = "",
  priority = false,
}: {
  product: Product;
  index?: number;
  color?: string;
  className?: string;
  priority?: boolean;
}) {
  const label = `${product.name} ${product.images[index] ?? ""} 이미지`;
  const photo = PHOTOS[product.id]?.[index];

  if (photo) {
    return (
      <div className={`relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 ${className}`}>
        <Image
          src={photo.src}
          alt={label}
          fill
          sizes="(min-width: 640px) 25vw, 50vw"
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const bg = COLOR_HEX[color ?? product.colors[0]] ?? "#e5e5e5";
  const dark = ["블랙", "네이비", "카키", "브라운"].includes(color ?? product.colors[0]);
  return (
    <div
      role="img"
      aria-label={label}
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
