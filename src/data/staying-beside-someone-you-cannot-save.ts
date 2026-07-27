import type { ConnectedObservatory } from "@/data/confessional-intimacy";
import type { IntimacyLensItem } from "@/data/confessional-intimacy";

export type RelationshipTensionAxis = {
  id: string;
  left: string;
  right: string;
  description: string;
};

export type ObservationSummaryItem = {
  id: string;
  label: string;
  labelEn: string;
  value: string;
};

export const STAYING_BESIDE_META = {
  slug: "staying-beside-someone-you-cannot-save",
  href: "/staying-beside-someone-you-cannot-save",
  title: "救えない人のそばにいる",
  titleEn: "Staying Beside Someone You Cannot Save",
  subtitle: "親密さが解決にならないとき",
  subtitleEn: "When Intimacy Is Not a Solution",
  date: "2026-07-28",
  observationStatus: "observed" as const,
  categories: ["Intimacy"],
  readingTime: 20,
  cardSummary:
    "救えない相手と、それでも関係を続ける親密さ。ケアと管理、支援と依存、支える側の疲労を観測する。",
  cardDescription:
    "『みいちゃんと山田さん』を起点に、救えない相手と関係を続ける親密さを考察する。ケアと管理、支援と依存、支える側の疲労を観測する。",
  seoDescription:
    "『みいちゃんと山田さん』を起点に、救えない相手と関係を続ける親密さを考察する。ケアと管理、支援と依存、保護と自由、支える側の疲労、制度に代わる非公式ケアをIntimacyの視点から観測する。",
  ogTitle: "救えない人のそばにいる｜Intimacy",
  ogDescription:
    "誰かを心配することと、その人を救えることは同じではない。救えないことを知りながら、それでも切断しきれない関係を観測する。",
  heroImageAlt:
    "夜の街で近い距離を歩きながら、互いに触れることのできない二人の後ろ姿を描いた抽象イメージ",
  themes: [
    "Care",
    "Friendship",
    "Dependency",
    "Rescue",
    "Vulnerability",
    "Boundaries",
    "Night Work",
    "Loneliness",
    "Responsibility",
    "Animation",
    "ケア",
    "依存",
    "救済",
    "境界線",
  ],
};

export const STAYING_BESIDE_LEAD = [
  "誰かを心配することと、その人を救えることは同じではない。",
  "『みいちゃんと山田さん』で描かれる関係には、明確な解決がない。",
  "山田さんは、みいちゃんを気にかける。放っておけない。危険から遠ざけたいと思う。",
  "けれど、仕事、生活、家族、判断、依存、暴力といった複数の問題を、一人の親密さだけで解決することはできない。",
  "それでも、人はそばにいる。",
  "その関係は失敗なのか。",
  "Intimacyが観測するのは、救済に成功した関係ではない。救えないことを知りながら、それでも切断しきれない関係である。",
];

export const CENTER_QUESTION =
  "人は、救えない相手と、どのように関係を続けるのか。\nそして、救えない関係にも意味はあるのか。";

export const KEY_OBSERVATION =
  "社会制度へ接続できない人ほど、友人、同僚、恋人などの非公式な関係へ支援が集中する。その結果、親密さは感情的な関係であるだけでなく、福祉、危機介入、生活支援を代替する非公式インフラになる。";

export const SIGNAL =
  "福祉や医療へ接続できない脆弱な人々を、身近な個人関係が支えるケースが可視化されている。物語やSNSでは、それが友情や献身として称賛される一方、支える側の疲労、依存、境界線、制度の不在は見えにくい。";

export const IMPLICATIONS = [
  "非公式ケア提供者への支援が必要になる",
  "友人や同僚が利用できる危機対応ガイドの需要が高まる",
  "支える側の燃え尽きや罪悪感へのケアが必要になる",
  "親密さと支配の境界を扱う教育が重要になる",
  "AI相談サービスと公的支援の接続設計が必要になる",
  "作品視聴後の相談先や支援情報の提示が求められる",
  "「救う人」を美化しすぎない表現監修が必要になる",
];

export const INTIMACY_LENS_ITEMS: IntimacyLensItem[] = [
  {
    id: "attention",
    label: "Attention",
    title: "気づき",
    description: "相手の変化や危険に気づき、気にかけること。",
  },
  {
    id: "care",
    label: "Care",
    title: "ケア",
    description: "相手の安全や生活を支えようとすること。",
  },
  {
    id: "rescue",
    label: "Rescue",
    title: "救済",
    description: "相手の問題を自分が解決しようとすること。",
  },
  {
    id: "dependency",
    label: "Dependency",
    title: "依存",
    description: "関係がなければ生活や自己認識が維持できない状態。",
  },
  {
    id: "control",
    label: "Control",
    title: "管理",
    description: "安全を理由に、相手の選択や行動を制限すること。",
  },
  {
    id: "boundary",
    label: "Boundary",
    title: "境界",
    description: "関係を壊さずに、自分が引き受けられる範囲を示すこと。",
  },
  {
    id: "grief",
    label: "Grief",
    title: "喪失感",
    description: "救えなかったという感覚と、その後も続く自己責任化。",
  },
];

export const RELATIONSHIP_TENSION_AXES: RelationshipTensionAxis[] = [
  {
    id: "care-control",
    left: "Care",
    right: "Control",
    description: "安全を願う行為が、相手の選択を奪う可能性。",
  },
  {
    id: "support-dependency",
    left: "Support",
    right: "Dependency",
    description: "支援が、関係なしでは生きられない状態を強める可能性。",
  },
  {
    id: "protection-autonomy",
    left: "Protection",
    right: "Autonomy",
    description: "危険を避けることと、本人の意思を尊重することの緊張。",
  },
  {
    id: "presence-exhaustion",
    left: "Presence",
    right: "Exhaustion",
    description: "そばに居続けることによって、支える側が消耗する可能性。",
  },
  {
    id: "responsibility-guilt",
    left: "Responsibility",
    right: "Guilt",
    description: "実際の責任を超えて、自分を責め続ける状態。",
  },
  {
    id: "rescue-acceptance",
    left: "Rescue",
    right: "Acceptance",
    description: "問題を解決しようとすることと、解決できない現実を受け入れること。",
  },
];

export const OBSERVATION_SUMMARY: ObservationSummaryItem[] = [
  {
    id: "observed-relationship",
    label: "Observed Relationship",
    labelEn: "観測された関係",
    value:
      "一人では解決できない問題を抱えた相手と、それでも関係を続ける親密さ。",
  },
  {
    id: "hidden-burden",
    label: "Hidden Burden",
    labelEn: "見えない負担",
    value:
      "友人や同僚が、福祉、危機介入、生活支援を非公式に背負う。",
  },
  {
    id: "central-tension",
    label: "Central Tension",
    labelEn: "中心の緊張",
    value: "相手を守ることと、相手の自由を奪わないこと。",
  },
  {
    id: "cannot-promise",
    label: "What Cannot Be Promised",
    labelEn: "約束できないもの",
    value: "救済、回復、安全、関係の継続。",
  },
  {
    id: "may-remain",
    label: "What May Still Remain",
    labelEn: "残りうるもの",
    value:
      "一時的な安心、記憶、名前を呼ばれた経験、完全ではない孤独。",
  },
  {
    id: "what-to-watch",
    label: "What to Watch",
    labelEn: "注視すべきこと",
    value:
      "声優演技、関係の親子化、救済者の美化、視聴者の罪悪感、支援情報の有無。",
  },
];

export const CONNECTED_OBSERVATORIES: ConnectedObservatory[] = [
  {
    id: "clean-society",
    name: "Clean Society",
    title: "漫画だから読めた現実が、アニメになるとき",
    description:
      "制度からこぼれた人を、夜の経済や個人的な関係へ押し出す社会構造。",
    url: "https://body-meaning.shiroand.io/body-meaning/observations/miichan-yamada-animation-invisible-reality",
  },
  {
    id: "body-meaning",
    name: "Body Meaning",
    title: "みいちゃんの身体は、誰のものだったのか",
    description:
      "本人の身体が、商品、保護対象、リスク、キャラクターとして意味づけられる構造。",
    url: "https://body-meaning.shiroand.io/body-meaning/observations/miichan-body-commodity-protection-character",
  },
  {
    id: "scam-folklore",
    name: "Scam Folklore",
    title: "Trust exploited through intimacy",
    description:
      "孤独や依存、信頼関係を利用して、相手の判断や同意を操作する構造。",
    url: "https://scam-folklore-observatory.vercel.app",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    title: "Informal care infrastructure demand",
    description:
      "非公式ケア、支援者の負担、AI相談、公的制度への接続に生まれる需要。",
    url: "https://book.shiroand.io/market_signals",
  },
];

export const SOURCE_NOTE =
  "本稿は、漫画『みいちゃんと山田さん』の2027年アニメ化決定を起点に、作品内の関係性を観測的に読み解いたものである。登場人物の診断、特定の出来事の再現、作品外の個人への言及は行わない。親密さや個人の献身だけで社会問題が解決できるという結論には至らない。";
