export type Category = "top" | "bottom" | "outer" | "shoes" | "accessory";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  colors: string[];
  sizes: string[];
  images: string[]; // 플레이스홀더 이미지 라벨 (2~4장)
  description: string;
  material: string;
  care: string;
  featured: boolean;
  createdAt: string;
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "top", label: "상의" },
  { id: "bottom", label: "하의" },
  { id: "outer", label: "아우터" },
  { id: "shoes", label: "신발" },
  { id: "accessory", label: "액세서리" },
];

export const COLOR_HEX: Record<string, string> = {
  블랙: "#1a1a1a",
  화이트: "#f5f5f2",
  그레이: "#9a9a9a",
  베이지: "#d8c8aa",
  네이비: "#1f2a44",
  카키: "#6b6b4a",
  브라운: "#7a5a3c",
};

export const PRICE_RANGES = [
  { id: "0-30000", label: "3만원 이하", min: 0, max: 30000 },
  { id: "30000-60000", label: "3~6만원", min: 30000, max: 60000 },
  { id: "60000-100000", label: "6~10만원", min: 60000, max: 100000 },
  { id: "100000-", label: "10만원 이상", min: 100000, max: Infinity },
];

export const formatPrice = (price: number) => `${price.toLocaleString("ko-KR")}원`;

export const categoryLabel = (c: Category) =>
  CATEGORIES.find((x) => x.id === c)?.label ?? c;
