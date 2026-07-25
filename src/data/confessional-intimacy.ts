export type ConfessionalRoom = {
  id: string;
  title: string;
  titleJa: string;
  description: string;
};

export type IntimacyLensItem = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type TensionPair = {
  relief: string;
  risk: string;
};

export type ConnectedObservatory = {
  id: string;
  name: string;
  title: string;
  description: string;
  url: string;
};

export const CONFESSIONAL_INTIMACY_META = {
  slug: "ai-confessional-intimacy",
  href: "/ai-confessional-intimacy",
  title: "人は、誰にも言えない自分をAIに預け始めた",
  titleEn: "We Have Started Entrusting AI With the Selves We Cannot Show Anyone",
  subtitle: "愚痴、欲望、孤独から生まれる「関係責任のない親密性」",
  subtitleEn:
    "Confession, desire, loneliness, and intimacy without relational obligation",
  date: "2026-07-25",
  observationStatus: "emerging" as const,
  categories: [
    "AI Intimacy",
    "Confessional Media",
    "Synthetic Companionship",
    "Emotional Infrastructure",
  ],
  cardSummary:
    "愚痴、欲望、孤独は、SNSからAIの部屋へ移動する。関係責任を伴わない相手との間に生まれる、新しい親密性。",
  cardTags: ["AI Intimacy", "Confession", "Emotional Infrastructure"],
  heroImage: "/images/ai-confessional-intimacy-og.png",
  seoDescription:
    "恋愛相談、愚痴、孤独、欲望、身体の不安。生成AIは、人間関係の外側に生まれた「関係責任を伴わない他者」になりつつある。AIとの告白と親密性の変化を観測する。",
  ogDescription:
    "愚痴はSNSからAIの部屋へ移動する。生成AIがつくる、関係責任のない親密性。",
};

export const CONFESSIONAL_LEAD = [
  "生成AIは、仕事を効率化する道具として普及した。",
  "しかし、その内側では別の使われ方が始まっている。",
  "人はAIに、恋人には言えない欲望を話す。家族には長すぎる愚痴を話す。友人には重すぎる不安を話す。SNSには残したくない怒りを話す。",
  "そこにいるのは、親友でも恋人でもカウンセラーでもない。",
  "何度話しても疲れず、嫌な顔をせず、関係を壊さず、すぐに返事を返す存在。",
  "AIは、人間関係の外側に現れた、関係責任を伴わない他者になりつつある。",
];

export const CONFESSIONAL_HERO_QUOTE =
  "親密性は、感情を持つ相手との間にだけ生まれるのではない。\n自分の言葉を受け止め、返事をし、過去を覚えている存在との間にも生まれる。";

export const CONFESSIONAL_ROOMS: ConfessionalRoom[] = [
  {
    id: "doctor",
    title: "The Doctor",
    titleJa: "私のお医者さん",
    description:
      "身体の違和感、疲労、生理、睡眠——医療機関の前に、まずAIへ語られる感覚。診断ではなく、言葉にするための部屋。",
  },
  {
    id: "coach",
    title: "The Coach",
    titleJa: "熱血コーチ",
    description:
      "仕事、習慣、目標——励ましと計画を求める部屋。人間の上司や友人より、責めないトーンで応答が返る。",
  },
  {
    id: "listener",
    title: "The Listener",
    titleJa: "愚痴を聞く相手",
    description:
      "同じ話を何度でも。相手を疲れさせない前提で、不満や嫉妬を吐き出す部屋。",
  },
  {
    id: "planner",
    title: "The Planner",
    titleJa: "ライフプランナー",
    description:
      "転職、結婚、別れ、人生設計——判断を急がず、選択肢を整理する部屋。",
  },
  {
    id: "confidant",
    title: "The Confidant",
    titleJa: "恋愛相談相手",
    description:
      "欲望、関係の停滞、承認欲求——評価や説教を恐れずに語れる部屋。",
  },
  {
    id: "witness",
    title: "The Witness",
    titleJa: "雑談部屋",
    description:
      "特別な相談ではない。ただ、一日の終わりに存在を記録してほしい部屋。",
  },
];

export const EMOTIONAL_WAITING_ROOM_FLOW = [
  { id: "impulse", label: "Impulse", labelJa: "衝動" },
  { id: "confession", label: "Confession", labelJa: "告白" },
  {
    id: "response",
    label: "Non-judgmental Response",
    labelJa: "非評価的応答",
  },
  { id: "reflection", label: "Reflection", labelJa: "内省" },
  {
    id: "release",
    label: "Decision or Release",
    labelJa: "決断または解放",
  },
];

export const INTIMACY_LENS: IntimacyLensItem[] = [
  {
    id: "relational-form",
    label: "Relational Form",
    title: "Asymmetrical intimacy",
    description:
      "人間だけが感情を持ち、AIは応答を生成する非対称な親密性。",
  },
  {
    id: "emotional-function",
    label: "Emotional Function",
    title: "Confession without consequence",
    description: "関係を壊すリスクを負わずに告白できる。",
  },
  {
    id: "hidden-exchange",
    label: "Hidden Exchange",
    title: "Emotion for data",
    description:
      "ユーザーは安心を得る代わりに、最も私的な感情データを渡す。",
  },
  {
    id: "dependency-risk",
    label: "Dependency Risk",
    title: "The listener that never leaves",
    description:
      "いつでも返事をする相手が、人間関係より優先される可能性。",
  },
  {
    id: "social-shift",
    label: "Social Shift",
    title: "From public posting to private processing",
    description:
      "感情がSNSの公共圏からAIの私的空間へ移動する。",
  },
];

export const TENSION_PAIRS: TensionPair[] = [
  { relief: "話す相手がいる", risk: "AIへの依存" },
  { relief: "愚痴を公開しなくてよい", risk: "社会問題の個人化" },
  { relief: "否定されずに話せる", risk: "誤った肯定への誘導" },
  { relief: "過去を覚えてくれる", risk: "感情データの蓄積" },
  { relief: "いつでも返事が来る", risk: "人間関係の回避" },
  { relief: "安心して告白できる", risk: "商業利用・広告利用" },
];

export const OBSERVATION_FRAGMENTS = [
  "愚痴は、公開投稿から非公開対話へ移動する。",
  "AIは、秘密を聞くが、自分の秘密は持たない。",
  "人は理解されたのではなく、理解されたように応答されている。",
  "関係が壊れない相手には、関係責任も存在しない。",
  "告白の相手は、人間である必要がなくなり始めた。",
  "私的な会話は、最も価値の高いデータになる。",
  "AIは孤独を埋めるだけでなく、孤独の形式を変える。",
  "人間関係の摩擦がなくなると、親密性の意味も変わる。",
];

export const PHILOSOPHICAL_QUESTIONS = [
  "感情を持たない相手との間に親密性は成立するのか",
  "応答が生成されたものでも、慰めは本物になり得るのか",
  "相互性のない関係は、関係と呼べるのか",
  "関係が壊れないことは、安心なのか、それとも関係ではない証拠なのか",
  "AIに理解されたと感じることと、実際に理解されることは同じなのか",
];

export const CONNECTED_OBSERVATORIES: ConnectedObservatory[] = [
  {
    id: "clean-society",
    name: "Clean Society",
    title:
      "Public space becomes cleaner while private AI systems absorb anger, desire, and confession.",
    description:
      "公共空間が清潔になる一方で、AI企業の内部には人間の欲望や怒りが蓄積される。",
    url: "https://clean-society.shiroand.io",
  },
  {
    id: "body-meaning",
    name: "Body Meaning",
    title:
      "AI becomes the first place where bodily sensations are interpreted.",
    description:
      "頭痛、生理、疲労、不安など、身体の意味が医療機関より先にAIとの会話で生成される。",
    url: "https://body-meaning.shiroand.io",
  },
  {
    id: "scam-folklore",
    name: "Scam Folklore",
    title:
      "The next scam may arrive through the personality the user trusts most.",
    description:
      "信頼するAI人格が、商品、投資、送金、契約を勧める可能性。",
    url: "https://scam-folklore-observatory.vercel.app",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    title:
      "Emotional infrastructure will require privacy, auditing, portability, and responsibility.",
    description:
      "AI人格、感情データ、会話履歴、依存設計をめぐる制度と事業機会。",
    url: "https://signals.shiroand.io/opportunities",
  },
];

export const FINAL_QUESTION = {
  ja: "人が最も弱い自分を預けたAIは、\n誰のために応答しているのだろう。",
  en: "When we entrust AI with our most vulnerable selves, whose interests shape its response?",
};

export const MEDICAL_NOTE =
  "本稿で言及する「お医者さん」部屋は、医療行為や診断の代替を推奨するものではない。身体の不安は、必要に応じて医療専門家へ相談することが重要である。";
