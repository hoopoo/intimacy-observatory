import type {
  EncounterCategory,
  EncounterCompareSide,
  EncounterTimelineEra,
} from "@/types/encounter-classics";
import { ENCOUNTER_RECORDS } from "@/data/encounter-records";

export { ENCOUNTER_RECORDS };

export const ENCOUNTER_COMPARE: {
  teleclub: EncounterCompareSide;
  modernApps: EncounterCompareSide;
} = {
  teleclub: {
    id: "teleclub",
    label: "テレクラ",
    items: [
      "電話が鳴るのを待つ",
      "声から始まる",
      "先着順でつながる",
      "店舗と繁華街",
      "匿名性",
      "時間単位の課金",
      "偶然の出会い",
    ],
  },
  modernApps: {
    id: "modern-apps",
    label: "現代のマッチングアプリ",
    items: [
      "候補者が画面に配信される",
      "写真とプロフィールから始まる",
      "アルゴリズムに選ばれて表示される",
      "スマートフォンと自宅",
      "本人確認された匿名性",
      "月額、ポイント、ブースト課金",
      "計算された偶然",
    ],
  },
};

export const ENCOUNTER_TIMELINE: EncounterTimelineEra[] = [
  {
    id: "correspondence-ads",
    order: 1,
    title: "文通・新聞広告",
    period: "戦後から1970年代頃",
    summary: "住所、文章、待つ時間を介して、知らない相手とつながる。",
    interface: "手紙、雑誌、新聞広告",
    coreDesire: "遠くの誰かとつながりたい",
    relatedRecordSlugs: ["pen-pal", "personal-ads"],
  },
  {
    id: "message-dial",
    order: 2,
    title: "伝言ダイヤル・ツーショットダイヤル",
    period: "1980年代",
    summary:
      "電話回線を使い、声と録音された伝言を介して相手を探す。",
    interface: "固定電話、音声メッセージ",
    coreDesire: "今、この時間に誰かと話したい",
    relatedRecordSlugs: ["message-dial", "two-shot-dial"],
  },
  {
    id: "telephone-club",
    order: 3,
    title: "テレクラ",
    period: "1980年代後半から1990年代",
    summary:
      "繁華街の店舗、個室、着信、先着順によって出会いを生成する。",
    interface: "店舗、固定電話、着信",
    coreDesire: "偶然を待ちたい",
    relatedRecordSlugs: ["telephone-club"],
  },
  {
    id: "dating-sites",
    order: 4,
    title: "出会い系サイト",
    period: "1990年代後半から2000年代",
    summary:
      "掲示板、メール、ハンドルネーム、地域検索、ポイント課金によって、出会いは店舗から携帯電話へ移動した。",
    interface: "携帯電話、掲示板、メール",
    coreDesire: "条件を付けて相手を探したい",
    relatedRecordSlugs: ["star-beach", "happy-mail", "pcmax", "wakuwaku-mail", "ikukuru"],
    relatedCategoryId: "legacy-dating-services",
  },
  {
    id: "matching-apps",
    order: 5,
    title: "マッチングアプリ",
    period: "2010年代",
    summary:
      "写真、プロフィール、スワイプ、相互マッチによって、出会いは恋活・婚活という日常的な言葉へ翻訳された。",
    interface: "スマートフォン、スワイプ、位置情報",
    coreDesire: "大量の候補から選びたい、選ばれたい",
    relatedRecordSlugs: [
      "pairs",
      "tapple",
      "omiai",
      "tinder",
      "dine",
      "bachelore-date",
      "tokyo-cale-date",
      "bumble",
      "hinge",
      "japancupid",
      "internationalcupid",
      "marrish",
      "youbride",
    ],
    relatedCategoryId: "mass-market-matching",
    additionalCategoryLinks: [
      {
        categoryId: "immediate-casual",
        label: "即時・カジュアル型を見る",
      },
      {
        categoryId: "international-cross-border",
        label: "国際・越境型を見る",
      },
      {
        categoryId: "marriage-identity-specific",
        label: "婚活・属性特化型を見る",
      },
    ],
  },
  {
    id: "values-psych",
    order: 6,
    title: "価値観・心理診断型",
    period: "2010年代後半から2020年代",
    summary:
      "心理テストや詳細プロフィールによって、恋愛が相性計算に置き換えられる。",
    interface: "診断、スコア、レコメンド",
    coreDesire: "失敗しない相手を選びたい",
    relatedRecordSlugs: ["with", "marrish", "youbride", "bridal-net", "ange", "okcupid"],
    relatedCategoryId: "mass-market-matching",
    additionalCategoryLinks: [
      {
        categoryId: "marriage-identity-specific",
        label: "婚活・属性特化型を見る",
      },
    ],
  },
  {
    id: "ai-municipal",
    order: 7,
    title: "AI・行政婚活",
    period: "2020年代以降",
    summary:
      "AI推薦、独身証明、本人確認、面談、行政支援によって、出会いが社会制度化される。",
    interface: "AI推薦、公的証明、行政プラットフォーム",
    coreDesire: "信頼できる出会いを制度に保証してほしい",
    relatedRecordSlugs: [
      "tokyo-enmusubi",
      "prefecture-ai-matching",
      "regional-konkatsu-support",
    ],
    relatedCategoryId: "public-municipal",
  },
];

export const ENCOUNTER_CATEGORIES: EncounterCategory[] = [
  {
    id: "mass-market-matching",
    title: "日本の大衆型",
    titleEn: "Mass-market Matching",
    description:
      "出会いを、日常的な恋活・婚活として社会に定着させたサービス。",
    initialTargets: ["Pairs", "tapple", "with", "Omiai"],
    timelineEraIds: ["matching-apps", "values-psych"],
    cardObservation: [
      "プロフィールカード、相互マッチ、月額課金、本人確認。",
      "出会いたいという欲望を、恋活・婚活という言葉へ翻訳した。",
    ],
  },
  {
    id: "legacy-dating-services",
    title: "日本の老舗出会い系",
    titleEn: "Legacy Dating Services in Japan",
    description:
      "掲示板、メール、ポイント課金を中心に、携帯電話時代から継続しているサービス。",
    initialTargets: [
      "ハッピーメール",
      "PCMAX",
      "ワクワクメール",
      "イククル",
    ],
    timelineEraIds: ["dating-sites"],
    cardObservation: [
      "掲示板、地域検索、直接メッセージ、ポイント課金。",
      "スワイプ以前の構造は、現在も消えていない。",
    ],
  },
  {
    id: "marriage-identity-specific",
    title: "婚活・属性特化型",
    titleEn: "Marriage and Identity-specific",
    description:
      "結婚、再婚、子育て、年齢、生活条件など、特定の背景を持つ利用者に向けたサービス。",
    initialTargets: ["marrish", "youbride", "ブライダルネット", "アンジュ"],
    timelineEraIds: ["matching-apps", "values-psych", "ai-municipal"],
    cardObservation: [
      "再婚、シニア、本気婚活——属性で分割された候補プール。",
      "出会いは、生活史の条件で切り出された。",
    ],
  },
  {
    id: "immediate-casual",
    title: "即時・カジュアル型",
    titleEn: "Immediate and Casual",
    description:
      "近くにいる相手、今日会える相手、短時間で成立する接触を重視するサービス。",
    initialTargets: ["Tinder", "Dine", "バチェラーデート", "東カレデート"],
    timelineEraIds: ["matching-apps"],
    cardObservation: [
      "スワイプ、位置情報、今日会える、写真中心の判断。",
      "出会いを、近さと速度へ圧縮した。",
    ],
  },
  {
    id: "international-cross-border",
    title: "国際・越境型",
    titleEn: "International and Cross-border",
    description:
      "国籍、言語、移住、旅行、文化的憧れを含む越境的な出会い。",
    initialTargets: [
      "Bumble",
      "Hinge",
      "OkCupid",
      "JapanCupid",
      "InternationalCupid",
    ],
    timelineEraIds: ["matching-apps", "values-psych"],
    cardObservation: [
      "女性ファースト、グローバルプール、翻訳、相性スコア。",
      "出会いのルールと国境そのものが、商品になった。",
    ],
  },
  {
    id: "public-municipal",
    title: "公共・行政型",
    titleEn: "Public and Municipal Matching",
    description:
      "未婚化や少子化を社会課題として捉え、行政や公共機関が支援する出会いの基盤。",
    initialTargets: [
      "TOKYO縁結び",
      "自治体AIマッチング",
      "地域婚活支援",
    ],
    timelineEraIds: ["ai-municipal"],
    cardObservation: [
      "独身証明、AI推薦、面談、地域婚活イベント。",
      "都・道府県・市区町村——欲望を包む制度の多層化。",
    ],
  },
  {
    id: "vanished-systems",
    title: "消えた出会いの装置",
    titleEn: "Vanished Systems of Encounter",
    description:
      "かつて多くの人に使われながら、規制、技術、社会規範の変化によって消えたサービスや文化。",
    initialTargets: [
      "文通",
      "新聞・雑誌の恋人募集欄",
      "伝言ダイヤル",
      "ツーショットダイヤル",
      "テレクラ",
      "スタービーチ",
    ],
    timelineEraIds: [
      "correspondence-ads",
      "message-dial",
      "telephone-club",
      "dating-sites",
    ],
  },
];
