export type CuriosityOutlet = {
  id: string;
  number: number;
  titleEn: string;
  titleJa: string;
  tagline: string;
};

export type BoundaryCheck = {
  id: string;
  title: string;
  items: string[];
};

export const CURIOSITY_OUTLETS_META = {
  slug: "curiosity-outlets",
  href: "/curiosity-outlets",
  title: "好奇心の出口",
  titleEn: "The Outlets of Curiosity",
  subtitle: "人はなぜ、創作し、恋をし、商品をつくるのか",
  subtitleEn:
    "Why Curiosity Becomes Creation, Intimacy, Business, and Exploitation",
  date: "2026-07-26",
  observationStatus: "observed" as const,
  categories: [
    "AI Intimacy",
    "Curiosity",
    "Personality",
    "Simulated Romance",
    "Creator Economy",
    "Emotional Commerce",
  ],
  cardSummary:
    "好奇心は、創作、探索、擬似恋愛、自己変身、消費、ビジネス、詐欺へ分岐する。出口を誰が設計しているかを観測する。",
  seoDescription:
    "人間の好奇心は、創作、探索、擬似恋愛、自己変身、消費、ビジネス、詐欺へ分岐する。AI時代の親密性を、「好奇心の出口を誰が設計しているか」という視点から観測する。",
  ogTitle: "好奇心の出口｜Intimacy Observatory",
  ogDescription:
    "好奇心から創作する人がいる。恋をする人がいる。商品をつくる人がいる。そして、他人の好奇心につけ込む人がいる。",
  themes: [
    "curiosity",
    "openness",
    "big-five",
    "ai-companion",
    "simulated-intimacy",
    "creator-economy",
    "emotional-commerce",
    "romance-scam",
    "identity",
    "desire",
    "好奇心",
    "開放性",
    "擬似恋愛",
    "感情課金",
  ],
};

export const CURIOSITY_LEAD = [
  "人は、知らないものに惹かれる。",
  "まだ会ったことのない人。経験したことのない関係。普段の自分とは違う身体。言葉にしたことのない欲望。自分でも気づいていない人格。",
  "その好奇心は、ある人を創作へ向かわせる。ある人を恋愛へ向かわせる。ある人を擬似恋愛やAI人格へ向かわせる。",
  "そして、ある人は、他人の好奇心を商品にする。さらに別の誰かは、その好奇心につけ込み、金銭や個人情報を奪う。",
  "好奇心は、一つの入口から始まり、複数の出口へ分岐する。",
];

export const CURIOSITY_OUTLETS: CuriosityOutlet[] = [
  {
    id: "creation",
    number: 1,
    titleEn: "Creation",
    titleJa: "創作",
    tagline: "世界をつくる",
  },
  {
    id: "exploration",
    number: 2,
    titleEn: "Exploration",
    titleJa: "探索",
    tagline: "関係を試す",
  },
  {
    id: "simulated-intimacy",
    number: 3,
    titleEn: "Simulated Intimacy",
    titleJa: "擬似恋愛",
    tagline: "応答を求める",
  },
  {
    id: "self-transformation",
    number: 4,
    titleEn: "Self-Transformation",
    titleJa: "自己変身",
    tagline: "別の自分になる",
  },
  {
    id: "consumption",
    number: 5,
    titleEn: "Consumption",
    titleJa: "消費",
    tagline: "体験へ課金する",
  },
  {
    id: "business",
    number: 6,
    titleEn: "Business",
    titleJa: "ビジネス",
    tagline: "出口を設計する",
  },
  {
    id: "scam",
    number: 7,
    titleEn: "Scam",
    titleJa: "詐欺",
    tagline: "出口を偽装する",
  },
];

export const BOUNDARY_CHECKS: BoundaryCheck[] = [
  {
    id: "transparency",
    title: "Transparency",
    items: [
      "相手がAIか人間か開示されているか",
      "何に課金しているのか分かるか",
      "演出された関係であることが示されているか",
    ],
  },
  {
    id: "control",
    title: "Control",
    items: [
      "課金上限を設定できるか",
      "会話履歴を削除できるか",
      "関係を自由に終了できるか",
    ],
  },
  {
    id: "dependency",
    title: "Dependency",
    items: [
      "嫉妬や罪悪感で課金を促していないか",
      "離脱すると関係が壊れるように演出していないか",
      "利用者の脆弱性を意図的に利用していないか",
    ],
  },
  {
    id: "data",
    title: "Data",
    items: [
      "性的嗜好や会話履歴が保護されているか",
      "他用途に転用されていないか",
      "第三者へ販売されていないか",
    ],
  },
];

export const CONNECTED_OBSERVATORIES = [
  {
    id: "body-meaning",
    name: "Body Meaning",
    description:
      "別の身体や人格を試すことは、自己変身としての好奇心である。",
    url: "https://body-meaning.shiroand.io/body-meaning",
  },
  {
    id: "scam-folklore",
    name: "Scam Folklore",
    description: "親密さや好奇心を偽装した詐欺を観測する。",
    url: "https://scam-folklore-observatory.vercel.app",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    description:
      "AI親密性、感情課金、人格認証、年齢確認、依存監査などの市場機会を観測する。",
    url: "https://book.shiroand.io/market_signals",
  },
];

export const CTA_LINKS = [
  {
    label: "Explore Intimacy",
    href: "/observations",
    external: false,
  },
  {
    label: "Visit Scam Folklore",
    href: "https://scam-folklore-observatory.vercel.app",
    external: true,
  },
  {
    label: "View Market Signals",
    href: "https://book.shiroand.io/market_signals",
    external: true,
  },
];

export const RELATED_ARTICLES = [
  {
    label: "身体のない女に、人はなぜ課金するのか",
    href: "/articles/ai-generated-intimacy",
  },
  {
    label: "人は、誰にも言えない自分をAIに預け始めた",
    href: "/ai-confessional-intimacy",
  },
  {
    label: "恋人は、どこから来るのか",
    href: "/classics-of-encounter/where-lovers-come-from",
  },
  {
    label: "最も自分を理解する存在が、最も自分を操作する",
    href: "/articles/the-one-who-understands-you-most",
  },
];
