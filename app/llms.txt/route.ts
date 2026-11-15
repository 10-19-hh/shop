import { CATEGORIES, PRODUCTS, categoryLabel, formatPrice } from "@/lib/products";
import { SITE_DESCRIPTION, SITE_NAME, abs } from "@/lib/site";

// 생성형 AI가 사이트 구조를 파악하도록 돕는 요약 문서(llms.txt).
export function GET() {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "## 주요 페이지",
    `- [홈](${abs("/")}): 신상품과 추천 상품`,
    `- [전체상품](${abs("/products")}): 카테고리·가격대·사이즈·색상 필터와 정렬`,
    "",
    "## 상품",
    ...CATEGORIES.flatMap((c) => [
      "",
      `### ${c.label}`,
      ...PRODUCTS.filter((p) => p.category === c.id).map(
        (p) =>
          `- [${p.name}](${abs(`/products/${p.id}`)}): ${formatPrice(p.price)}, ${categoryLabel(p.category)}, 소재 ${p.material}, 색상 ${p.colors.join("/")}, 사이즈 ${p.sizes.join("/")}`,
      ),
    ]),
    "",
    "## 참고",
    "- 이 사이트는 데모이며 상품 정보는 예시 데이터입니다.",
    "- 장바구니, 찜, 결제 페이지는 색인 대상이 아닙니다.",
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
