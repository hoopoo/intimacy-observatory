import type { ArticleComparisonSide } from "@/types/article";
import type { ConnectedObservatory } from "@/data/confessional-intimacy";

export const MORE_CONNECTIONS_META = {
  slug: "more-connections-less-connection",
  href: "/more-connections-less-connection",
  title: "接続は増えた。親密さは増えなかった。",
  titleEn: "More Connections, Less Connection",
  subtitle: "人は、情報だけでは親密になれない。",
  subtitleEn: "Embodied Intimacy Loss",
  cardLabel: "Embodied Intimacy Loss",
  date: "2026-08-11",
  observationStatus: "observed" as const,
  categories: ["Intimacy", "Embodied Intimacy"],
  readingTime: 18,
  cardSummary:
    "接続は増えても、親密さは増えない。画面・条件・最適化が、身体を通じて立ち上がる関係の余白を薄くしている。",
  seoDescription:
    "接続は増えても親密さは増えない。声、距離、沈黙、触覚といった身体的条件が、画面・条件・最適化へ置き換えられつつある現代の親密性を観測する。",
  ogTitle: "接続は増えた。親密さは増えなかった。｜Intimacy",
  ogDescription:
    "人は情報だけでは親密になれない。接続の増加は、親密さの増加を保証しない。",
  heroImageAlt:
    "画面の光の向こうに、近い距離なのに触れ合えない二人の抽象的なシルエット",
  themes: [
    "intimacy",
    "body",
    "trust",
    "presence",
    "touch",
    "loneliness",
    "romance",
    "relationship formation",
    "nonverbal communication",
    "digital mediation",
    "身体性",
    "信頼",
    "孤独",
    "出会い",
  ],
};

export const OPENING = [
  "人はプロフィールを好きになるのではない。人は、誰かの「存在」に少しずつ反応していく。",
  "声の柔らかさ。沈黙の気まずさ。目をそらすタイミング。距離の取り方。一緒に歩く速さ。偶然触れたときの緊張。言葉にならない安心感。",
  "こうしたものは、恋愛や親密性において決定的であるにもかかわらず、デジタルな出会いの多くでは最初に削ぎ落とされる。",
  "現代社会は接続手段を増やした。しかしその多くは、「関係が始まるための身体的条件」を薄くしているのかもしれない。",
];

export const CORE_THESIS =
  "現代人は、かつてより多くの人と「接続」されている。しかしその接続の多くは、プロフィール、写真、短文、条件、メッセージ、アルゴリズムによって媒介されている。connections は増えても、connection は増えない——問題は、恋愛感情が消えたことではなく、身体を通して少しずつ関係が立ち上がるプロセスを、社会が保持しにくくなっていることにある。";

export const CONTRAST_CORE_LINE =
  "画面越しの接続は、親密性の準備にはなっても、親密性そのものを保証しない。";

export const SCREEN_MEDIATED: ArticleComparisonSide = {
  title: "画面越しに媒介された親密性",
  titleEn: "Screen-mediated intimacy",
  items: [
    "profile first / プロフィール優先",
    "image first / 画像優先",
    "text first / 文字優先",
    "searchable / 検索可能",
    "comparable / 比較可能",
    "archivable / 保存可能",
    "reviewable / 再閲可能",
    "optimizable / 最適化可能",
  ],
};

export const EMBODIED: ArticleComparisonSide = {
  title: "身体を通じて立ち上がる親密性",
  titleEn: "Embodied intimacy",
  items: [
    "presence first / 存在優先",
    "tone first / 声の調子優先",
    "rhythm first / リズム優先",
    "distance first / 距離優先",
    "silence included / 沈黙を含む",
    "ambiguity included / 曖昧さを含む",
    "not fully recordable / 完全には記録できない",
    "not fully searchable / 完全には検索できない",
    "not fully comparable / 完全には比較できない",
  ],
};

export const SENSORY_LAYERS = [
  { id: "voice", labelEn: "Voice", labelJa: "声" },
  { id: "distance", labelEn: "Distance", labelJa: "距離" },
  { id: "silence", labelEn: "Silence", labelJa: "沈黙" },
  { id: "gaze", labelEn: "Gaze", labelJa: "視線" },
  { id: "touch", labelEn: "Touch", labelJa: "触覚" },
  { id: "timing", labelEn: "Timing", labelJa: "タイミング" },
  { id: "presence", labelEn: "Presence", labelJa: "存在" },
];

export const STRUCTURAL_PARADOXES = [
  "More Profiles ≠ More Presence",
  "More Messages ≠ More Ease",
  "More Matches ≠ More Intimacy",
  "More Safety Checks ≠ More Trust",
  "More Contact Options ≠ More Relationship Formation",
  "More Connections ≠ More Connection",
];

export const SOURCE_BOUNDARY = [
  {
    id: "fact",
    label: "FACT / Reported",
    text: "マッチングアプリ、SNS、リモートワーク、独身者向け身体接触イベントなど、接点の増加と身体性の再設計が報じられている。",
  },
  {
    id: "interpretation",
    label: "Interpretation",
    text: "接続手段の増加が、身体的な安心や存在への慣れを経由する関係形成を相対的に薄くしている可能性。",
  },
  {
    id: "hypothesis",
    label: "Hypothesis",
    text: "親密性には、量より厚み・反復・偶然・身体的な安心が必要であり、最適化だけでは本体に到達しにくい。",
  },
  {
    id: "pattern",
    label: "Pattern",
    text: "Screen-mediated intimacy と Embodied intimacy の乖離——接続は増えても、connection は増えない。",
  },
];

export const CONNECTED_OBSERVATORIES: ConnectedObservatory[] = [
  {
    id: "clean-society",
    name: "Clean Society",
    title: "The Collapse of Romance Protocol",
    description:
      "信頼コスト、条件比較、プラットフォーム、Composite Friction——社会構造としての恋愛プロトコルの崩れ。",
    url: "https://clean-society.shiroand.io/collapse-of-romance-protocol",
  },
  {
    id: "intimacy-where-lovers",
    name: "Intimacy Observatory",
    title: "恋人は、どこから来るのか",
    description: "出会いインフラの変化と、関係が立ち上がる条件の移動。",
    url: "https://intimacy.shiroand.io/classics-of-encounter/where-lovers-come-from",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    title: "Intimacy Economy (candidate)",
    description: "接続、安心、身体性、評価をめぐる市場機会の候補観測。",
    url: "https://book.shiroand.io/market_signals",
  },
];

export const CLOSING_QUESTION =
  "いまの社会には、誰かと少しずつ親しくなるための身体的な余白が、まだ残っているのか。";

export const SOURCE_NOTE =
  "本稿は、The Atlantic ほかで報じられた独身者向け身体接触イベント、デジタル出会いの一般論、日本財団等の調査を補助的参照として整理した観測記事である。数値の網羅や因果の断定は目的としない。技術悪玉論、懐古主義、現代人批判には至らない。";
