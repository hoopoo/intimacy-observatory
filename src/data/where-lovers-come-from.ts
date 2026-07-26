import type { ArticleComparisonSide } from "@/types/article";

export const WHERE_LOVERS_COME_FROM_HREF =
  "/classics-of-encounter/where-lovers-come-from";

export const WHERE_LOVERS_META = {
  title: "恋人は、どこから来るのか",
  titleEn: "Where Lovers Come From",
  subtitle: "お見合い、職場結婚、友人紹介からアルゴリズムへ",
  description:
    "お見合い、職場結婚、友人紹介、合コン、SNS、マッチングアプリ。人と人を恋人として接続してきた社会の仕組みは、家族や会社からプラットフォームとアルゴリズムへ移りつつある。",
  ogDescription:
    "出会いの方法ではなく、親密性を成立させるインフラの変化を観測する。",
  recorded: "Recorded Jul 2026",
  stateLabel: "State of intimacy: Reconfigured",
};

export type EmbeddedEncounter = {
  id: string;
  title: string;
  description: string;
  roles: string;
};

export type EncounterTypeCard = {
  id: string;
  number: string;
  titleEn: string;
  title: string;
  body: string;
  examples?: string;
  classicalLink: string;
  note?: string;
};

export type RegionalComparison = {
  id: string;
  region: string;
  title: string;
  body: string;
};

export type RelatedLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const HERO_LEAD =
  "人は、完全に一人で恋人を探してきたわけではない。家族、会社、学校、地域、友人。かつて社会の中には、人と人を出会わせ、相手の身元を確かめ、交際から結婚までを支える仕組みが埋め込まれていた。現在、その役割はプラットフォームとアルゴリズムへ移りつつある。";

export const EMBEDDED_ENCOUNTERS: EmbeddedEncounter[] = [
  {
    id: "omiai",
    title: "お見合い",
    description:
      "家族や仲人が候補者を探し、身元を確認し、会う場所を整え、結婚意思の確認までを支えた。",
    roles: "Search / Verification / Mediation",
  },
  {
    id: "workplace",
    title: "職場結婚",
    description:
      "会社という長期的な共同体の中で、勤務態度、評判、人間関係、生活の安定性を互いに観察できた。",
    roles: "Repeated contact / Reputation / Trust",
  },
  {
    id: "introduction",
    title: "友人・親族の紹介",
    description:
      "共通の知人が、相手の人柄や身元を暗黙に保証した。",
    roles: "Social proof / Context / Safety",
  },
  {
    id: "community",
    title: "学校・地域・サークル",
    description:
      "同じ時間と場所を共有し、日常的な行動を見ながら関係を形成した。",
    roles: "Shared time / Familiarity / Belonging",
  },
];

export const ENCOUNTER_TYPES: EncounterTypeCard[] = [
  {
    id: "search",
    number: "01",
    titleEn: "Search",
    title: "検索型",
    body: "年齢、地域、職業、趣味、価値観、写真などの条件から相手を探す。",
    examples: "Pairs / Tinder / Bumble / Hinge / with",
    classicalLink: "結婚相談所・身上書の更新",
  },
  {
    id: "recommendation",
    number: "02",
    titleEn: "Recommendation",
    title: "推薦型",
    body: "利用者自身が探すのではなく、プラットフォームが相性のよい相手を提示する。",
    classicalLink: "仲人のアルゴリズム化",
  },
  {
    id: "observation",
    number: "03",
    titleEn: "Observation",
    title: "観測型",
    body: "SNSの投稿、写真、交友関係、言葉遣い、生活のリズムを長期間見てから接触する。",
    examples: "Instagram / TikTok / X / Threads / Bluesky",
    classicalLink: "学校・職場・地域での日常観察の代替",
  },
  {
    id: "community",
    number: "04",
    titleEn: "Community",
    title: "共同体型",
    body: "ゲーム、Discord、VR空間、ファンダム、推し活など、共通の活動から関係が始まる。",
    examples: "Discord / VRChat / Roblox / Online Games",
    classicalLink: "サークル・青年団・趣味の会の更新",
  },
  {
    id: "declared-intent",
    number: "05",
    titleEn: "Declared Intent",
    title: "目的明示型",
    body: "最初から結婚や長期交際の意思を示し、条件と意向を確認したうえで接続する。",
    examples: "婚活アプリ / 結婚相談所 / 自治体マッチング",
    classicalLink: "お見合いの再デジタル化",
  },
  {
    id: "ai-assisted",
    number: "06",
    titleEn: "AI Assisted",
    title: "AI介在型",
    body: "AIがプロフィールを作成し、写真を選び、メッセージを考え、相手を評価し、交際後の感情まで分析する。",
    classicalLink: "恋愛相談者・仲人・友人のAI化",
    note: "ここでは、人間同士の関係のあいだに、プラットフォームだけでなく、常時応答する助言者が入る。",
  },
];

export const OMIAI_BEFORE_AFTER: {
  before: ArticleComparisonSide;
  after: ArticleComparisonSide;
} = {
  before: {
    title: "Integrated system",
    titleEn: "Before",
    items: [
      "候補者を探す",
      "身元を確認する",
      "相性を判断する",
      "会う場所を設定する",
      "交際を見守る",
      "結婚意思を確認する",
      "家族同士を接続する",
    ],
  },
  after: {
    title: "Distributed system",
    titleEn: "After",
    items: [
      "候補探索：マッチングアプリ",
      "推薦：アルゴリズム",
      "身元確認：本人認証・SNS検索",
      "相性判断：診断・AI",
      "連絡：DM・メッセージアプリ",
      "評判確認：検索・共通の知人",
      "デート支援：レビュー・位置情報",
      "結婚支援：相談所・専門サービス",
    ],
  },
};

export const TRUST_COMPARISON: {
  left: ArticleComparisonSide;
  right: ArticleComparisonSide;
} = {
  left: {
    title: "Social trust",
    titleEn: "Social trust",
    items: ["家族", "仲人", "会社", "学校", "友人", "地域"],
  },
  right: {
    title: "Platform trust",
    titleEn: "Platform trust",
    items: [
      "本人確認",
      "認証バッジ",
      "プロフィール",
      "SNS履歴",
      "レビュー",
      "行動データ",
    ],
  },
};

export const EXPANSION_UNCERTAINTY: {
  expansion: ArticleComparisonSide;
  uncertainty: ArticleComparisonSide;
} = {
  expansion: {
    title: "Expansion",
    titleEn: "Expansion",
    items: [
      "地域を越えた出会い",
      "所属を越えた出会い",
      "少数的な嗜好や属性の接続",
      "自分のペースでの探索",
      "交際目的の明示",
    ],
  },
  uncertainty: {
    title: "Uncertainty",
    titleEn: "Uncertainty",
    items: [
      "身元の不透明化",
      "写真と身体の乖離",
      "交際意思の偽装",
      "ロマンス詐欺",
      "AI生成人格",
      "感情的依存を利用した課金",
    ],
  },
};

export const REGIONAL_COMPARISONS: RegionalComparison[] = [
  {
    id: "japan",
    region: "Japan",
    title: "お見合い・会社・友人からプラットフォームへ",
    body: "お見合いの縮小後、職場や友人紹介が主要な経路となったが、現在はそれらも弱まりつつある。",
  },
  {
    id: "us-eu",
    region: "United States / Europe",
    title: "友人・地域・教会からオンラインへ",
    body: "個人の選択を重視する恋愛文化の中でも、友人や地域共同体の仲介がオンラインへ置き換えられている。",
  },
  {
    id: "india",
    region: "India and other arranged-marriage cultures",
    title: "お見合い文化そのものがデジタル化する",
    body: "家族、宗教、地域、階層、学歴などの条件が、結婚情報サービスの検索項目として再構成される。",
  },
];

export const INTIMACY_QUESTIONS = [
  "人と人を恋人として接続する権限を、現在は誰が持っているのか。",
  "プロフィール情報は、共同体の評判に代わることができるのか。",
  "相手を探す範囲が広がるほど、選べなくなることはないか。",
  "AIが相手を選び、メッセージを書き、関係を助言するとき、その恋愛は誰のものなのか。",
  "社会的な仲介者を失った若者は、失敗や拒絶をどこで受け止めるのか。",
  "出会いの効率化は、親密性を豊かにするのか。それとも評価と選別を強めるのか。",
];

export const RELATED_PAGES: RelatedLink[] = [
  {
    label: "Classics of Encounter",
    href: "/classics-of-encounter",
  },
  {
    label: "婚活・属性特化型",
    href: "/classics-of-encounter/marriage-identity-specific",
  },
  {
    label: "日本の大衆型マッチング",
    href: "/classics-of-encounter/mass-market-matching",
  },
  {
    label: "テレクラ",
    href: "/classics-of-encounter/telephone-club",
  },
  {
    label: "Pairs",
    href: "/classics-of-encounter/pairs",
  },
  {
    label: "身体のない女に、人はなぜ課金するのか",
    href: "/articles/ai-generated-intimacy",
  },
  {
    label: "人は、誰にも言えない自分をAIに預け始めた",
    href: "/ai-confessional-intimacy",
  },
];

export const CROSS_OBSERVATORY_LINKS = [
  {
    id: "scam-folklore",
    name: "Scam Folklore",
    href: "https://scam-folklore-observatory.vercel.app",
  },
  {
    id: "body-meaning",
    name: "Body Meaning",
    href: "https://body-meaning.shiroand.io/body-meaning",
  },
  {
    id: "clean-society",
    name: "Clean Society",
    href: "https://clean-society.shiroand.io",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    href: "https://book.shiroand.io/market_signals",
  },
];
