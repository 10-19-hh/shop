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

const CLOTHES = ["S", "M", "L", "XL"];
const SHOES = ["250", "260", "270", "280"];
const FREE = ["FREE"];

type Seed = [
  name: string,
  price: number,
  colors: string[],
  material: string,
  desc: string,
];

const SEEDS: Record<Category, { sizes: string[]; care: string; items: Seed[] }> = {
  top: {
    sizes: CLOTHES,
    care: "30도 이하 손세탁 또는 단독 세탁, 건조기 사용 금지",
    items: [
      ["베이직 코튼 티셔츠", 19000, ["화이트", "블랙", "그레이"], "코튼 100%", "매일 입기 좋은 두께감의 기본 티셔츠."],
      ["오버핏 헤비 티셔츠", 29000, ["블랙", "베이지"], "코튼 100%", "탄탄한 원단의 오버핏 실루엣."],
      ["릴랙스 옥스포드 셔츠", 45000, ["화이트", "네이비"], "코튼 100%", "단정하면서 편안한 옥스포드 셔츠."],
      ["크루넥 니트", 52000, ["그레이", "네이비", "베이지"], "울 30%, 아크릴 70%", "부드러운 촉감의 크루넥 니트."],
      ["후디 스웨트셔츠", 59000, ["그레이", "블랙"], "코튼 80%, 폴리 20%", "기모 안감의 포근한 후디."],
      ["스트라이프 롱슬리브", 33000, ["화이트", "네이비"], "코튼 100%", "깔끔한 스트라이프 긴팔 티셔츠."],
    ],
  },
  bottom: {
    sizes: CLOTHES,
    care: "뒤집어서 찬물 세탁, 진한 색은 단독 세탁",
    items: [
      ["와이드 데님 팬츠", 62000, ["블랙", "네이비"], "코튼 100%", "여유로운 핏의 와이드 데님."],
      ["스트레이트 슬랙스", 54000, ["블랙", "그레이", "베이지"], "폴리 70%, 레이온 30%", "구김이 적은 스트레이트 슬랙스."],
      ["카고 팬츠", 68000, ["카키", "블랙"], "코튼 100%", "실용적인 포켓의 카고 팬츠."],
      ["스웨트 조거 팬츠", 39000, ["그레이", "블랙"], "코튼 80%, 폴리 20%", "편안한 밴딩 조거 팬츠."],
      ["코튼 쇼츠", 29000, ["베이지", "네이비"], "코튼 100%", "여름에 가볍게 입는 쇼츠."],
      ["플리츠 롱 스커트", 48000, ["블랙", "베이지"], "폴리 100%", "움직임이 예쁜 플리츠 스커트."],
    ],
  },
  outer: {
    sizes: CLOTHES,
    care: "드라이클리닝 권장, 단독 세탁",
    items: [
      ["울 블렌드 코트", 169000, ["블랙", "브라운"], "울 50%, 폴리 50%", "차분한 롱 기장의 코트."],
      ["MA-1 블루종", 89000, ["카키", "블랙"], "나일론 100%", "가벼운 보머 스타일 블루종."],
      ["데님 트러커 재킷", 79000, ["네이비", "블랙"], "코튼 100%", "빈티지한 워싱의 재킷."],
      ["후리스 집업", 59000, ["베이지", "그레이"], "폴리 100%", "보온성 좋은 후리스."],
      ["경량 패딩 베스트", 69000, ["블랙", "네이비"], "나일론 100%", "레이어드하기 좋은 패딩 조끼."],
      ["트렌치 코트", 139000, ["베이지", "카키"], "코튼 65%, 폴리 35%", "클래식한 더블 트렌치 코트."],
    ],
  },
  shoes: {
    sizes: SHOES,
    care: "마른 천으로 닦아 관리, 직사광선 피해 보관",
    items: [
      ["캔버스 로우 스니커즈", 49000, ["화이트", "블랙"], "캔버스, 고무", "어디에나 어울리는 기본 스니커즈."],
      ["레더 미니멀 스니커즈", 99000, ["화이트", "블랙"], "천연가죽", "깔끔한 라인의 가죽 스니커즈."],
      ["러닝 스타일 스니커즈", 79000, ["그레이", "네이비"], "메쉬, EVA", "쿠션감이 좋은 데일리 러닝화."],
      ["첼시 부츠", 119000, ["블랙", "브라운"], "천연가죽", "신고 벗기 편한 첼시 부츠."],
      ["스웨이드 로퍼", 89000, ["브라운", "블랙"], "스웨이드", "단정한 스웨이드 로퍼."],
      ["슬라이드 샌들", 25000, ["블랙", "베이지"], "EVA", "가볍게 신는 슬라이드."],
    ],
  },
  accessory: {
    sizes: FREE,
    care: "물세탁 금지, 마른 천으로 닦아 관리",
    items: [
      ["울 비니", 22000, ["블랙", "그레이", "네이비"], "울 100%", "따뜻하고 부드러운 비니."],
      ["볼캡", 25000, ["블랙", "베이지", "카키"], "코튼 100%", "사이즈 조절이 되는 볼캡."],
      ["레더 카드지갑", 35000, ["블랙", "브라운"], "천연가죽", "얇고 단단한 카드지갑."],
      ["캔버스 토트백", 32000, ["베이지", "블랙"], "캔버스", "수납이 넉넉한 토트백."],
      ["울 머플러", 42000, ["그레이", "브라운", "네이비"], "울 80%, 아크릴 20%", "도톰한 울 머플러."],
      ["크로스 숄더백", 58000, ["블랙", "카키"], "나일론 100%", "가볍게 메는 크로스백."],
    ],
  },
};

const LABELS = ["정면", "측면", "디테일", "착용컷"];

function build(): Product[] {
  const list: Product[] = [];
  let n = 0;
  (Object.keys(SEEDS) as Category[]).forEach((category) => {
    const seed = SEEDS[category];
    seed.items.forEach(([name, price, colors, material, description], i) => {
      n += 1;
      const day = String((n % 28) + 1).padStart(2, "0");
      list.push({
        id: `p${String(n).padStart(2, "0")}`,
        name,
        category,
        price,
        colors,
        sizes: seed.sizes,
        images: LABELS.slice(0, 2),
        description,
        material,
        care: seed.care,
        featured: i % 3 === 0,
        createdAt: `2026-10-${day}`,
      });
    });
  });
  return list;
}

export const PRODUCTS: Product[] = build();

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);

export const formatPrice = (price: number) => `${price.toLocaleString("ko-KR")}원`;

export const categoryLabel = (c: Category) =>
  CATEGORIES.find((x) => x.id === c)?.label ?? c;
