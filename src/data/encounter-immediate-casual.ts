import type { EncounterRecord } from "@/types/encounter-classics";

export const IMMEDIATE_CATEGORY_ID = "immediate-casual";

export const IMMEDIATE_CASUAL_RECORDS: EncounterRecord[] = [
  {
    slug: "tinder",
    name: "Tinder",
    englishName: "Tinder",
    era: "2012年から現在",
    status: "active",
    categoryId: IMMEDIATE_CATEGORY_ID,
    displayOrder: 1,
    timelineEraId: "matching-apps",
    summary:
      "スワイプと位置情報で、近くにいる相手を即座に可視化する、即時・カジュアル型マッチングの代表例。",
    interface: [
      "スマートフォンアプリ",
      "スワイプ",
      "写真",
      "位置情報",
      "相互マッチ",
      "メッセージ",
      "距離表示",
    ],
    entryCondition:
      "アカウントを作成し、写真とプロフィールを登録して候補をスワイプする。",
    timeStructure:
      "同期型に近い。候補が次々表示され、判断は数秒で行われる。",
    geographicStructure:
      "位置情報によって、近くにいる相手が優先的に表示される。",
    identityStructure:
      "写真、短い自己紹介、距離、年齢など、最小限の情報で構成される。",
    whatItPromised: "近くにいる相手と、短時間でつながれること。",
    whatItActuallySold:
      "スワイプという判断形式と、位置情報に基づく候補配信。",
    whoWasVisible:
      "写真中心のプロフィール、距離、短い自己紹介を提示する利用者。",
    whoRemainedInvisible:
      "スワイプ前の関係意図、対面後の不一致、オフラインの生活。",
    howChanceWasProduced:
      "位置情報とアルゴリズムによる近接候補の配信。",
    howTrustWasProduced:
      "写真、相互マッチ、SNS連携、通報機能。",
    howDesireWasFramed: "出会い、カジュアル、近さ、今すぐ。",
    paymentLogic:
      "サブスクリプション、ブースト、スーパーライクなど可視性・優先表示の拡張。",
    contactLogic:
      "相互マッチ後にメッセージ。スワイプで接触前の選別が行われる。",
    matchingRequirement: "双方のスワイプによる相互マッチが必要。",
    visibilityLogic:
      "位置情報、活動時間、ブースト等の機能が表示順序に影響する。",
    genderedPricing:
      "性別によって利用条件が異なる場合がある。",
    repetitionLogic:
      "関係が終わっても、新しい候補をスワイプし続けられる。",
    platformStructure:
      "近接性と速度を軸に、候補を連続的に配信する即時判断市場。",
    risks: [
      "プロフィールの虚偽",
      "写真と実像の不一致",
      "目的の不一致",
      "対面時のトラブル",
      "外部連絡先への誘導",
      "詐欺的な勧誘",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "写真認証",
      "運営監視",
    ],
    whyItSurvived: [
      "スワイプという直感的な判断形式",
      "位置情報による近接性",
      "グローバルな認知",
      "カジュアルな出会いの需要",
      "大衆型マッチングとの差別化",
      "即時性という体験価値",
    ],
    whatCameBefore: [
      "出会い系サイト",
      "ナンパ",
      "SNS",
      "ハッピーメール",
      "Pairs",
    ],
    whatCameAfter: [
      "AI写真選別",
      "AI会話代行",
      "位置情報型デートアプリ",
      "今日会える機能",
    ],
    whatRemainsToday: [
      "スワイプ",
      "位置情報",
      "相互マッチ",
      "写真中心の判断",
      "近さ",
      "即時性",
    ],
    observation: [
      "Tinderは、出会いを「近くにいるかどうか」という地理的条件へ還元した。",
      "判断は、文章よりもスワイプの速度で行われる。",
      "大衆型が関係の可能性を売るのに対し、Tinderは近接性と速度を売る。",
    ],
    relatedLayers: ["intimacy", "body-meaning", "scam-folklore", "market-signals"],
    relatedObservationSlugs: [
      "elder-targeted-ai-romance-fraud",
      "binary-gender-ai-companion-app",
    ],
    relatedArticleSlugs: [
      "ai-girlfriend-sells-old-romance",
      "humans-are-gradient-ai-is-binary",
    ],
    relatedEncounterSlugs: ["happy-mail", "pairs", "dine"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "恋活・婚活として説明可能な大衆型から、近さと速度へ圧縮された。",
        label: "日本の大衆型マッチングを見る",
      },
      {
        categoryId: "international-cross-border",
        note: "スワイプ形式を共有しながら、グローバルプールと規範で差別化した。",
        label: "国際・越境型を見る",
      },
    ],
  },
  {
    slug: "dine",
    name: "Dine",
    englishName: "Dine",
    era: "2010年代から現在",
    status: "active",
    categoryId: IMMEDIATE_CATEGORY_ID,
    displayOrder: 2,
    timelineEraId: "matching-apps",
    summary:
      "マッチ後すぐに食事の場所と時間を設定し、会話より先に対面を前提とする即日デート型マッチング。",
    interface: [
      "スマートフォンアプリ",
      "プロフィール",
      "レストラン選択",
      "日程調整",
      "相互マッチ",
      "位置情報",
    ],
    entryCondition:
      "プロフィールを登録し、マッチ後に食事の場所と時間を提案する。",
    timeStructure:
      "マッチから対面までの時間を短く設計。今日または近日の食事が前提。",
    geographicStructure:
      "レストランと生活圏を手がかりに、実際に会える距離へ接続する。",
    identityStructure:
      "写真、短い自己紹介、食の嗜好、日程の提案で構成される。",
    whatItPromised:
      "マッチした相手と、すぐに食事をしながら会えること。",
    whatItActuallySold:
      "対面の場所と時間を先に固定する、即日デートへの導線。",
    whoWasVisible:
      "食事の提案ができ、日程を調整できる利用者。",
    whoRemainedInvisible:
      "対面後の身体性、食事以外の関係意図、日常生活。",
    howChanceWasProduced:
      "マッチとレストラン提案による、対面前提の候補接続。",
    howTrustWasProduced:
      "本人確認、レストランという公共の場、マッチの相互性。",
    howDesireWasFramed:
      "食事、会話、今日会う、カジュアルな出会い。",
    paymentLogic:
      "月額または機能課金。食事代自体は利用者負担。",
    contactLogic:
      "相互マッチ後、食事の場所と時間の提案が接触の中心になる。",
    matchingRequirement: "相互マッチが対面提案の前提。",
    visibilityLogic:
      "プロフィールと食の嗜好、活動時間がマッチングに影響する。",
    genderedPricing:
      "性別によって利用条件が異なる場合がある。",
    repetitionLogic:
      "一度の食事デート後も、新しい相手とのマッチを繰り返せる。",
    platformStructure:
      "オンライン上のマッチを、最短距離で対面へ変換する橋渡し型。",
    risks: [
      "対面時の不一致",
      "目的の虚偽",
      "公共の場とはいえ対面の安全",
      "キャンセルやドタキャン",
      "食事代をめぐるトラブル",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "公共の場での待ち合わせ",
      "運営監視",
    ],
    whyItSurvived: [
      "メッセージのやり取りを省略する設計",
      "食事という説明可能な初回接触",
      "今日会えるという即時性",
      "カジュアルさと対面のバランス",
      "大衆型の長いメッセージ期間への反動",
    ],
    whatCameBefore: [
      "Tinder",
      "Pairs",
      "合コン",
      "ナンパ",
      "出会い系サイト",
    ],
    whatCameAfter: [
      "今日会える特化型アプリ",
      "AI日程調整",
      "位置情報型即日デート",
    ],
    whatRemainsToday: [
      "即日デート",
      "食事を介した初回接触",
      "場所の先出し",
      "対面前提",
    ],
    observation: [
      "Dineは、出会いの中心をメッセージから食事の場所へ移した。",
      "会話の前に、対面の条件——いつ、どこで——が先に決まる。",
      "ここでは、関係は文章ではなく、予定表から始まる。",
    ],
    relatedLayers: ["intimacy", "body-meaning", "clean-society"],
    relatedEncounterSlugs: ["tinder", "bachelore-date", "pairs"],
  },
  {
    slug: "bachelore-date",
    name: "バチェラーデート",
    englishName: "Bachelore Date",
    era: "2010年代から現在",
    status: "active",
    categoryId: IMMEDIATE_CATEGORY_ID,
    displayOrder: 3,
    timelineEraId: "matching-apps",
    summary:
      "異性との一対一の食事やデートを、短時間で成立させることを前面に出した即時型マッチング。",
    interface: [
      "スマートフォンアプリ",
      "プロフィール",
      "デート提案",
      "日程調整",
      "相互マッチ",
      "エリア設定",
    ],
    entryCondition:
      "プロフィールを登録し、マッチ後にデートの提案と日程調整を行う。",
    timeStructure:
      "マッチからデートまでの時間を短く保つ。近日中の対面が前提。",
    geographicStructure:
      "エリア設定により、会える距離内の相手を探す。",
    identityStructure:
      "写真、年齢、職業、短い自己紹介、デートの提案内容。",
    whatItPromised:
      "異性との一対一のデートを、手軽に成立させること。",
    whatItActuallySold:
      "デートという形式に整えられた、即時的な対面可能性。",
    whoWasVisible:
      "デート提案ができ、プロフィールを整えた利用者。",
    whoRemainedInvisible:
      "デート以外の関係意図、対面後の身体性、日常生活。",
    howChanceWasProduced:
      "マッチとデート提案による、一対一の対面接続。",
    howTrustWasProduced:
      "本人確認、デートという形式、相互マッチ、通報機能。",
    howDesireWasFramed:
      "デート、食事、カジュアルな出会い、異性との一対一。",
    paymentLogic:
      "月額または機能課金。デート費用は利用者負担。",
    contactLogic:
      "相互マッチ後、デートの提案が接触の中心となる。",
    matchingRequirement: "相互マッチがデート提案の前提。",
    visibilityLogic:
      "プロフィール充実度、活動時間、エリア設定が可視性に影響する。",
    genderedPricing:
      "性別によって利用条件が異なる場合がある。",
    repetitionLogic:
      "一度のデート後も、新しい相手とのマッチを繰り返せる。",
    platformStructure:
      "一対一のデートという形式で、即時的な対面を商品化する。",
    risks: [
      "対面時の不一致",
      "目的の虚偽",
      "デート中のトラブル",
      "キャンセル",
      "金銭的なトラブル",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "公共の場での待ち合わせ推奨",
      "運営監視",
    ],
    whyItSurvived: [
      "デートという分かりやすい形式",
      "一対一の対面を前提とした設計",
      "メッセージ偏重への反動",
      "カジュアルな出会いの需要",
      "日本のデート文化との接続",
    ],
    whatCameBefore: [
      "合コン",
      "お見合い",
      "Tinder",
      "Dine",
      "出会い系サイト",
    ],
    whatCameAfter: [
      "即日デート特化型",
      "AI日程調整",
      "グループから一対一への移行",
    ],
    whatRemainsToday: [
      "一対一デート",
      "近日対面",
      "デート提案",
      "カジュアルな形式",
    ],
    observation: [
      "バチェラーデートは、出会いを「デート」という既存の形式に載せ替えた。",
      "利用者は恋活や婚活として説明しなくても、デートという言葉で接触を正当化できる。",
      "形式が先にあり、関係の定義は後からついてくる。",
    ],
    relatedLayers: ["intimacy", "clean-society", "body-meaning"],
    relatedEncounterSlugs: ["dine", "tinder", "tokyo-cale-date"],
  },
  {
    slug: "tokyo-cale-date",
    name: "東カレデート",
    englishName: "Tokyo Calendar Date",
    era: "2010年代から現在",
    status: "active",
    categoryId: IMMEDIATE_CATEGORY_ID,
    displayOrder: 4,
    timelineEraId: "matching-apps",
    summary:
      "東京を中心に、カレンダー上の空き時間と場所を手がかりに、今日会える相手を探す即時型マッチング。",
    interface: [
      "スマートフォンアプリ",
      "カレンダー",
      "空き時間",
      "エリア",
      "プロフィール",
      "相互マッチ",
      "デート提案",
    ],
    entryCondition:
      "プロフィールと空き時間を登録し、マッチ後にデートを提案する。",
    timeStructure:
      "今日または近日の空き時間を軸に、即時的な対面を設計する。",
    geographicStructure:
      "東京を中心としたエリア設定で、会える距離内に限定する。",
    identityStructure:
      "写真、空き時間、エリア、短い自己紹介、デート提案。",
    whatItPromised:
      "今週、今すぐ会える相手と、カレンダー上でデートを成立させること。",
    whatItActuallySold:
      "空き時間という現在性を、出会いの入口にした即時対面可能性。",
    whoWasVisible:
      "空き時間を公開し、デート提案ができる利用者。",
    whoRemainedInvisible:
      "カレンダー外の生活、対面後の関係、本当の関係意図。",
    howChanceWasProduced:
      "空き時間の一致、エリア、マッチによる即時対面候補の生成。",
    howTrustWasProduced:
      "本人確認、公共の場での待ち合わせ、相互マッチ。",
    howDesireWasFramed:
      "今日会う、今週会う、カジュアル、東京での出会い。",
    paymentLogic:
      "月額または機能課金。",
    contactLogic:
      "空き時間の公開と、マッチ後のデート提案が接触の中心。",
    matchingRequirement: "相互マッチがデート提案の前提。",
    visibilityLogic:
      "空き時間の新しさ、エリア、プロフィールが可視性に影響する。",
    genderedPricing:
      "性別によって利用条件が異なる場合がある。",
    repetitionLogic:
      "週ごとに空き時間を更新し、新しい対面を繰り返せる。",
    platformStructure:
      "カレンダーと地理的限定で、出会いを「今会える」問題に還元する。",
    risks: [
      "対面時の不一致",
      "空き時間と実際の都合のズレ",
      "目的の虚偽",
      "対面の安全",
      "キャンセル",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "公共の場での待ち合わせ",
    ],
    whyItSurvived: [
      "空き時間という現在性",
      "東京という地理的限定",
      "今日会えるという明確な約束",
      "カレンダーという既存の時間管理ツールとの接続",
      "メッセージ偏重への反動",
    ],
    whatCameBefore: [
      "Tinder",
      "Dine",
      "バチェラーデート",
      "合コン",
      "ナンパ",
    ],
    whatCameAfter: [
      "位置情報型即日デート",
      "AIスケジュール調整",
      "リアルタイム行動推薦",
    ],
    whatRemainsToday: [
      "空き時間",
      "今日会える",
      "エリア限定",
      "カレンダー連動",
      "即時対面",
    ],
    observation: [
      "東カレデートは、出会いをカレンダーの空き時間へ還元した。",
      "相手の属性よりも、今週いつ会えるかが先に問われる。",
      "時間の現在性が、プロフィールの完全性に取って代わる。",
    ],
    relatedLayers: ["intimacy", "body-meaning", "market-signals"],
    relatedEncounterSlugs: ["bachelore-date", "dine", "tinder", "telephone-club"],
  },
];

export const IMMEDIATE_USER_UNCERTAINTY = [
  "プロフィールの虚偽",
  "写真と実像の不一致",
  "対面時の目的の不一致",
  "位置情報の精度",
  "スワイプ前に読み取れない関係意図",
];

export const IMMEDIATE_SWIPE_ITEMS = [
  {
    id: "speed",
    title: "速度",
    paragraphs: [
      "大衆型マッチングがプロフィールを読む時間を与えるのに対し、スワイプ型は判断を数秒へ圧縮する。",
      "候補は次々と表示され、利用者は拒否か承認かを即座に選ぶ。",
    ],
  },
  {
    id: "photo",
    title: "写真",
    paragraphs: [
      "文章より先に、身体が写真として提示される。",
      "スワイプの判断は、属性の比較よりも視覚的印象に依存する。",
    ],
  },
  {
    id: "proximity",
    title: "近接性",
    paragraphs: [
      "位置情報によって、相手との距離が常に表示される。",
      "出会いは、価値観の一致よりも、近くにいるかどうかへ還元され得る。",
    ],
  },
  {
    id: "pre-rejection",
    title: "接触前の拒否",
    paragraphs: [
      "老舗出会い系が接触後に判断するのに対し、スワイプ型は接触前に拒否できる。",
      "拒否は安全になったが、偶然は起きにくくなった。",
    ],
  },
];

export const IMMEDIATE_PROXIMITY_STEPS = [
  "位置情報を許可する",
  "近くの候補が表示される",
  "写真を見てスワイプする",
  "相互マッチを待つ",
  "メッセージを送る",
  "今日会うか提案する",
  "場所と時間を決める",
  "対面する",
];

export const IMMEDIATE_LINEAGE_STEPS = [
  "掲示板型出会い",
  "プロフィールカード",
  "スワイプ型マッチング",
  "位置情報型",
  "即日デート型",
];

export const IMMEDIATE_LINEAGE_TRANSFORMS = [
  { from: "地域検索", to: "位置情報" },
  { from: "プロフィール閲覧", to: "スワイプ" },
  { from: "メッセージのやり取り", to: "今日会う提案" },
  { from: "関係の可能性", to: "近さと速度" },
  { from: "恋活・婚活", to: "カジュアル" },
  { from: "月額アクセス", to: "ブーストと優先表示" },
];

export const IMMEDIATE_VS_MASS_MARKET = {
  immediate: {
    label: "即時・カジュアル型",
    labelEn: "Immediate and casual",
    items: [
      "近さと速度が先",
      "写真とスワイプで判断",
      "位置情報が中心",
      "今日会える設計",
      "カジュアルな目的",
      "メッセージより対面",
      "社会的説明が弱い",
      "接触前の拒否が多い",
      "関係より瞬間",
      "近接性と現在性を売る",
    ],
  },
  massMarket: {
    label: "大衆型マッチング",
    labelEn: "Mass-market matching",
    items: [
      "価値観と相性が先",
      "プロフィールを読んで判断",
      "居住地・属性が中心",
      "関係を見据えた設計",
      "恋活・婚活として説明",
      "メッセージで関係構築",
      "社会的に説明しやすい",
      "相互マッチ後に接触",
      "関係の可能性",
      "候補プールへの参加を売る",
    ],
  },
};

export const IMMEDIATE_CASUAL_FRAMES = [
  { frame: "近さ", description: "物理的距離を出会いの第一条件にする" },
  { frame: "今すぐ", description: "対面までの時間を最短にする" },
  { frame: "カジュアル", description: "恋活・婚活として説明しなくてよい接触" },
  { frame: "食事", description: "デートを食事という形式に載せる" },
  { frame: "一対一", description: "グループではなく個人間の対面" },
  { frame: "空き時間", description: "カレンダーの隙間を出会いの入口にする" },
];
