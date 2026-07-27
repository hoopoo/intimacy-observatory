import type { ConnectedObservatory } from "@/data/confessional-intimacy";
import type { IntimacyLensItem } from "@/data/confessional-intimacy";

export const INTIMACY_AS_PASSPORT_META = {
  slug: "intimacy-as-passport",
  href: "/intimacy-as-passport",
  title: "親密さは、移動の許可証になる",
  titleEn: "Intimacy Becomes a Passport for Movement",
  subtitle:
    "人身取引は、暴力だけで人を動かすのではない。恋愛、家族的信頼、恩義、将来への期待が、本人を自ら移動させる。",
  date: "2026-07-28",
  observationStatus: "observed" as const,
  categories: ["Coercive Intimacy"],
  cardSummary:
    "恋愛、友情、家族的信頼、恩義。人身取引では、親密さが警戒を解き、本人を自ら移動させ、拒否しにくくする装置として使われる。",
  cardLabel: "Coercive Intimacy",
  seoDescription:
    "人身取引は暴力だけで人を動かすのではない。恋愛、友情、恩義、将来への期待が、本人を自ら移動させ、拒否しにくくする構造を観測する。",
  ogTitle: "親密さは、移動の許可証になる｜Intimacy",
  ogDescription:
    "恋愛、友情、恩義、将来への期待。親密さが警戒を解き、本人を自ら移動させ、拒否しにくくする構造を観測する。",
  heroQuote:
    "親密さが十分に形成されると、\n移動は命令に見えなくなる。",
  heroImageAlt:
    "明るい空港の待合席に並んで座る二人と、一人が手に持つ二人分の旅券",
  themes: [
    "Human Trafficking",
    "Intimacy",
    "Romance",
    "Trust",
    "Coercive Control",
    "Grooming",
    "Migration",
    "Recruitment",
    "Emotional Dependency",
    "Consent",
    "Love Fraud",
    "Forced Labor",
    "人身取引",
    "強制支配",
    "同意",
  ],
};

export const PASSPORT_LEAD = [
  "人は、信頼していない相手について行かない。",
  "知らない人から海外へ行こうと言われても、多くの人は警戒する。仕事を紹介すると言われても、住む場所を用意すると言われても、相手との関係がなければ簡単には動かない。",
  "だから、人を移動させようとする側は、最初に関係をつくる。",
  "恋人になる。友人になる。家族のように接する。相談に乗る。仕事を紹介する。困っているときに助ける。",
  "親密さが十分に形成されると、移動は命令に見えなくなる。",
  "それは、愛する人についていくこと、信頼する人の提案を受け入れること、恩を返すこと、未来を一緒につくることとして経験される。",
];

export const KEY_OBSERVATION =
  "人身取引では、親密さが人を安心させるだけでなく、自分から移動し、依存し、拒否しにくくなるための装置として使われる。";

export const INTIMACY_PATTERNS: IntimacyLensItem[] = [
  {
    id: "trust-before-movement",
    label: "Trust Before Movement",
    title: "移動の前に信頼",
    description:
      "移動や契約を提案する前に、恋愛、友情、支援を通じて信頼が形成される。",
  },
  {
    id: "care-as-control",
    label: "Care as Control",
    title: "ケアが支配へ",
    description:
      "保護、心配、愛情の言葉が、監視、隔離、書類管理、行動制限へ変わる。",
  },
  {
    id: "emotional-debt",
    label: "Emotional Debt",
    title: "感情の債務",
    description:
      "支援や贈与が恩義や罪悪感へ変換され、拒否や離脱を難しくする。",
  },
  {
    id: "future-binding",
    label: "Future Binding",
    title: "未来への拘束",
    description:
      "結婚、仕事、移住、家族支援などの将来像が、現在のリスクを受け入れさせる。",
  },
  {
    id: "consent-expansion",
    label: "Consent Expansion",
    title: "同意の拡張",
    description:
      "一度与えられた同意が、別の行為や条件にまで拡大解釈される。",
  },
  {
    id: "relationship-lock-in",
    label: "Relationship Lock-in",
    title: "関係の固定",
    description:
      "関係を離れることが、住居、収入、在留資格、家族、自己認識を同時に失うことにつながる。",
  },
];

export const INTIMACY_LENS =
  "親密さは、自由な関係をつくる力である。同時に、相手の警戒を解き、判断を委ねさせ、拒否を裏切りに変える力にもなり得る。";

export const CLOSING_QUESTION = {
  ja: "その人が相手を愛しているとき、その関係の中にある支配を、私たちはどのように見つけられるだろうか。",
  en: "When someone loves their partner, how can we recognize control within that relationship?",
};

export const CLOSING_STATEMENT = [
  "人身取引は、人を無理やり連れ去ることから始まるとは限らない。",
  "「あなたのため」という言葉によって、本人が自分からついていくところから始まることがある。",
];

export const SUPPORT_CHECKLIST = [
  "自由に断れるか",
  "一人で話せるか",
  "お金や書類を自分で管理できるか",
  "関係を離れても生活できるか",
  "相手の許可なく助けを求められるか",
  "条件が変わったときに同意を撤回できるか",
];

export const CONNECTED_OBSERVATORIES: ConnectedObservatory[] = [
  {
    id: "scam-folklore",
    name: "Scam Folklore",
    title:
      "Relationships as credentials for movement and consent.",
    description:
      "恋人、友人、支援者、雇用主という関係が、移動や同意を正当化する認証情報として使われる。",
    url: "https://scam-folklore-observatory.vercel.app",
  },
  {
    id: "body-meaning",
    name: "Body Meaning",
    title: "Judgment over the body shifts to another.",
    description:
      "親密な相手へ判断を委ねるうちに、身体の移動、労働、休息、接触を決める権利が第三者へ移る。",
    url: "https://body-meaning.shiroand.io/body-meaning",
  },
  {
    id: "clean-society",
    name: "Clean Society",
    title: "Intimate pairs move through clean public spaces.",
    description:
      "空港やホテルのような清潔な公共空間では、親密に見える関係が正常な移動として受け入れられ、内部の支配が見えにくくなる。",
    url: "https://clean-society.shiroand.io",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    title: "Cross-cutting detection and support infrastructure.",
    description:
      "恋愛詐欺、人身取引、搾取的雇用、AI人格による勧誘を横断し、親密性の悪用を検知・支援する仕組みが必要になる。",
    url: "https://book.shiroand.io/market_signals",
  },
];

export const SOURCE_NOTE =
  "本稿は、人身取引、恋愛詐欺、強制労働、デジタル勧誘に関する観測記録と支援文献を横断して整理したものである。特定の事件、組織、統計を検証済みの普遍的事実として断定しない。被害者の信頼や同意を責める表現を避け、支援の視点から記述している。";
