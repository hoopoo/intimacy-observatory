import type { EncounterRecord } from "@/types/encounter-classics";

export const MASS_MARKET_CATEGORY_ID = "mass-market-matching";

export const MASS_MARKET_ENCOUNTER_RECORDS: EncounterRecord[] = [
  {
    slug: "pairs",
    name: "Pairs",
    englishName: "Pairs",
    era: "2012年から現在",
    status: "active",
    categoryId: MASS_MARKET_CATEGORY_ID,
    displayOrder: 1,
    timelineEraId: "matching-apps",
    summary:
      "出会いたいという欲望を、価値観・趣味・将来設計という社会的に説明しやすい言葉へ翻訳した、日本最大級の大衆型マッチングアプリの一つ。",
    interface: [
      "スマートフォンアプリ",
      "プロフィールカード",
      "写真",
      "いいね",
      "相互マッチ",
      "メッセージ",
      "本人確認",
      "検索・レコメンド",
    ],
    entryCondition:
      "アカウントを作成し、プロフィールと写真を登録し、本人確認を経て利用する。",
    timeStructure:
      "非同期型。候補の閲覧、いいね、マッチ、メッセージが時間差で進む。",
    geographicStructure:
      "居住地や距離を手がかりに、生活圏に近い相手を探せる。",
    identityStructure:
      "写真、年齢、職業、居住地、趣味、結婚への意思、自己紹介文などで構成される。",
    whatItPromised:
      "価値観や生活感覚の合う、真剣な交際相手との出会い。",
    whatItActuallySold:
      "大量の登録者の中に、自分に合う誰かが存在するという可能性。",
    whoWasVisible:
      "写真、プロフィール、結婚への意思を提示できる利用者。",
    whoRemainedInvisible:
      "プロフィールに表現しにくい身体感覚、生活の癖、沈黙、声、匂い、対面時の違和感。",
    howChanceWasProduced:
      "条件検索とレコメンドによって、偶然に見える候補を画面上に配信する。",
    howTrustWasProduced:
      "本人確認、プロフィール、共通の趣味、メッセージ履歴、運営監視。",
    howDesireWasFramed: "恋活、婚活、価値観、将来設計、真剣な交際。",
    paymentLogic:
      "月額課金、追加機能、可視性や接触可能性の拡張。",
    contactLogic:
      "双方がいいねを送り合ったあとで、メッセージが可能になる。",
    matchingRequirement:
      "相互マッチを会話開始の条件とする。",
    visibilityLogic:
      "プロフィール充実度、活動頻度、検索条件、レコメンドアルゴリズムが発見可能性を左右する。",
    genderedPricing:
      "性別によって利用料金や無料範囲が異なる設計が採用される場合がある。",
    repetitionLogic:
      "関係が成立しても退会を必須とせず、継続利用できる設計。",
    platformStructure:
      "候補者プールの中から相互選択によって関係が始まる、大衆型マッチング市場。",
    risks: [
      "プロフィール情報の虚偽",
      "写真と実像の不一致",
      "目的の不一致",
      "外部連絡先への誘導",
      "金銭的な勧誘",
      "対面時のトラブル",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "ガイドライン",
      "不適切利用への対応",
    ],
    whyItSurvived: [
      "恋活・婚活という社会的に説明しやすい枠組み",
      "相互マッチによる接触前の選別",
      "大規模な利用者基盤",
      "アプリストア経由の信頼",
      "本人確認による安心感の演出",
      "出会い系サイトからの利用者移行",
    ],
    whatCameBefore: [
      "結婚相談所",
      "出会い系サイト",
      "ハッピーメール",
      "趣味サークル",
      "合コン",
    ],
    whatCameAfter: [
      "AI推薦",
      "相性診断の高度化",
      "行政婚活との連携",
      "会話支援機能",
    ],
    whatRemainsToday: [
      "プロフィールカード",
      "相互マッチ",
      "月額課金",
      "本人確認",
      "価値観の自己申告",
      "恋活・婚活という語彙",
    ],
    observation: [
      "Pairsは、出会いたいという欲望を、価値観、趣味、将来設計という社会的に説明しやすい言葉へ翻訳した。",
      "ここで販売されているのは、単なるプロフィール閲覧ではない。膨大な候補の中に、自分にも適切な相手が存在するという希望である。",
      "老舗出会い系が接触の可能性を売るのに対し、Pairsは関係の可能性を売る。",
    ],
    relatedLayers: ["intimacy", "body-meaning", "market-signals", "clean-society"],
    relatedObservationSlugs: [
      "marriage-for-economic-stability",
      "freedom-priority-over-marriage",
      "japan-cohabitation-without-marriage-rise",
    ],
    relatedArticleSlugs: [
      "what-value-remains-in-marriage",
      "singlehood-as-life-design",
    ],
    relatedEncounterSlugs: ["tapple", "happy-mail", "with", "tokyo-enmusubi", "tinder"],
    crossCategoryLinks: [
      {
        categoryId: "legacy-dating-services",
        note: "掲示板とポイント課金の時代から、プロフィールカードと相互マッチへ。",
        label: "日本の老舗出会い系を見る",
      },
      {
        categoryId: "immediate-casual",
        note: "恋活・婚活として説明可能な形式から、近さと速度へ圧縮された。",
        label: "即時・カジュアル型を見る",
      },
      {
        categoryId: "public-municipal",
        note: "民間の恋活・婚活市場から、行政が運営する結婚支援インフラへ。",
        label: "公共・行政型を見る",
      },
      {
        categoryId: "marriage-identity-specific",
        note: "全利用者向け大衆型から、生活史で分割された特化型婚活市場へ。",
        label: "婚活・属性特化型を見る",
      },
    ],
  },
  {
    slug: "tapple",
    name: "tapple",
    englishName: "tapple",
    era: "2014年から現在",
    status: "active",
    categoryId: MASS_MARKET_CATEGORY_ID,
    displayOrder: 2,
    timelineEraId: "matching-apps",
    summary:
      "タグと趣味の一致を前面に出し、会話の入口を設計した大衆型マッチングアプリ。",
    interface: [
      "スマートフォンアプリ",
      "プロフィール",
      "趣味タグ",
      "いいね",
      "相互マッチ",
      "メッセージ",
      "会話テンプレート",
    ],
    entryCondition:
      "プロフィールと趣味タグを登録し、候補を閲覧・いいねする。",
    timeStructure:
      "非同期型。タグ一致を手がかりに、マッチ後に会話が始まる。",
    geographicStructure:
      "居住地や距離を条件に、生活圏内の相手を探せる。",
    identityStructure:
      "写真、趣味タグ、短い自己紹介、年齢、職業などで構成される。",
    whatItPromised:
      "共通の趣味や関心から、自然に会話が始まる相手との出会い。",
    whatItActuallySold:
      "タグ付けされた自己説明と、会話開始のテンプレート。",
    whoWasVisible:
      "趣味タグ、写真、短いプロフィールを提示する利用者。",
    whoRemainedInvisible:
      "タグに収まらない関心、会話のリズム、対面時の身体性。",
    howChanceWasProduced:
      "タグ一致とレコメンドによる候補配信。",
    howTrustWasProduced:
      "本人確認、共通タグ、メッセージ履歴、プロフィールの継続。",
    howDesireWasFramed:
      "恋活、趣味、会話から始まる関係、共通の関心。",
    paymentLogic:
      "月額課金、いいね・メッセージ等の接触拡張。",
    contactLogic:
      "相互マッチ後にメッセージが可能。タグが会話の入口になる。",
    matchingRequirement: "双方のいいねによる相互マッチが必要。",
    visibilityLogic:
      "タグの数と一致度、プロフィール更新、活動頻度が可視性に影響する。",
    genderedPricing:
      "性別によって利用条件が異なる場合がある。",
    repetitionLogic:
      "一度の出会い後も、新しいタグと候補の中で利用を続けられる。",
    platformStructure:
      "趣味という説明可能な共通項を介して、大衆的なマッチング市場を形成する。",
    risks: [
      "タグと実際の関心の不一致",
      "プロフィールの虚偽",
      "会話が始まらないマッチ",
      "目的の不一致",
      "外部サービスへの誘導",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "ガイドライン",
    ],
    whyItSurvived: [
      "趣味という会話の入口",
      "恋活として説明しやすい設計",
      "タグによる自己説明の簡略化",
      "Pairsと差別化された体験",
      "若年層を含む大衆的な認知",
    ],
    whatCameBefore: [
      "出会い系サイト",
      "趣味サークル",
      "SNS",
      "Pairs",
    ],
    whatCameAfter: [
      "AIによる会話開始支援",
      "相性タグの自動生成",
      "コミュニティ型マッチング",
    ],
    whatRemainsToday: [
      "趣味タグ",
      "会話テンプレート",
      "相互マッチ",
      "プロフィールカード",
      "月額課金",
    ],
    observation: [
      "tappleは、出会いの前段を「趣味の一致」という説明可能な形式に整えた。",
      "会話が始まりやすいこと自体が、商品価値になっている。",
      "欲望をタグへ圧縮することで、利用者は自分が何を求めているかを言語化しやすくなる。",
    ],
    relatedLayers: ["intimacy", "market-signals", "clean-society"],
    relatedObservationSlugs: ["freedom-priority-over-marriage"],
    relatedArticleSlugs: ["what-value-remains-in-marriage"],
    relatedEncounterSlugs: ["pairs", "with"],
  },
  {
    slug: "with",
    name: "with",
    englishName: "with",
    era: "2010年代から現在",
    status: "active",
    categoryId: MASS_MARKET_CATEGORY_ID,
    displayOrder: 3,
    timelineEraId: "values-psych",
    summary:
      "心理テストと相性診断を前面に出し、出会いを「相性の良い相手探し」として設計した大衆型マッチング。",
    interface: [
      "スマートフォンアプリ",
      "心理テスト",
      "相性スコア",
      "プロフィール",
      "いいね",
      "相互マッチ",
      "メッセージ",
    ],
    entryCondition:
      "心理テストに回答し、プロフィールを登録して候補を閲覧する。",
    timeStructure:
      "診断結果の提示、候補閲覧、マッチ、会話という段階的な非同期型。",
    geographicStructure:
      "居住地を手がかりに、生活圏内の相手を探せる。",
    identityStructure:
      "写真、診断結果、性格タイプ、価値観、自己紹介文で構成される。",
    whatItPromised:
      "相性の良い、価値観が合う交際相手との出会い。",
    whatItActuallySold:
      "心理テストに基づく相性スコアと、失敗しない相手選びへの期待。",
    whoWasVisible:
      "診断結果とプロフィールを公開する利用者。",
    whoRemainedInvisible:
      "診断結果に収まらない感情、対面時の身体性、関係の複雑さ。",
    howChanceWasProduced:
      "相性スコア、診断タイプの一致、レコメンドによる候補配信。",
    howTrustWasProduced:
      "心理テスト、相性スコア、本人確認、メッセージの継続。",
    howDesireWasFramed:
      "相性、価値観、心理タイプ、失敗しない恋活。",
    paymentLogic:
      "月額課金、追加機能、接触機会の拡張。",
    contactLogic:
      "相互マッチ後にメッセージ。相性スコアが会話前の手がかりになる。",
    matchingRequirement: "双方のいいねによる相互マッチが必要。",
    visibilityLogic:
      "診断結果の公開、プロフィール充実度、相性スコアが候補提示に影響する。",
    genderedPricing:
      "性別によって利用条件が異なる場合がある。",
    repetitionLogic:
      "相性という枠組みの中で、複数の候補との接触を繰り返せる。",
    platformStructure:
      "心理診断を介して、出会いを相性計算の問題として再定義する。",
    risks: [
      "診断結果と実際の相性の不一致",
      "スコアへの過信",
      "プロフィールの虚偽",
      "目的の不一致",
      "対面時の落差",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "ガイドライン",
    ],
    whyItSurvived: [
      "相性という説明可能な選び方",
      "失敗への不安への応答",
      "心理テストという参加体験",
      "価値観型マッチングとの差別化",
      "恋活・婚活市場の拡大",
    ],
    whatCameBefore: [
      "結婚相談所",
      "占い・相性診断",
      "Pairs",
      "出会い系サイト",
    ],
    whatCameAfter: [
      "AI相性予測",
      "より詳細な心理プロファイリング",
      "行政婚活との連携",
    ],
    whatRemainsToday: [
      "心理テスト",
      "相性スコア",
      "価値観マッチング",
      "相互マッチ",
      "失敗しない選び方",
    ],
    observation: [
      "withは、出会いを「相性の問題」として再定義した。",
      "利用者は相手の写真だけでなく、診断結果という数値化された自己説明を見る。",
      "ここでは、欲望は相性スコアという言語へ翻訳される。",
    ],
    relatedLayers: [
      "intimacy",
      "market-signals",
      "clean-society",
      "body-meaning",
    ],
    relatedEncounterSlugs: ["pairs", "tapple", "tokyo-enmusubi"],
  },
  {
    slug: "omiai",
    name: "Omiai",
    englishName: "Omiai",
    era: "2010年代から現在",
    status: "active",
    categoryId: MASS_MARKET_CATEGORY_ID,
    displayOrder: 4,
    timelineEraId: "matching-apps",
    summary:
      "結婚を前提とした交際を前面に出し、出会いを「お見合い」の延長として設計した大衆型マッチング。",
    interface: [
      "スマートフォンアプリ",
      "プロフィール",
      "結婚への意思",
      "いいね",
      "相互マッチ",
      "メッセージ",
      "本人確認",
    ],
    entryCondition:
      "結婚への意思を含むプロフィールを登録し、本人確認を経て利用する。",
    timeStructure:
      "非同期型。結婚前提の候補閲覧、マッチ、交際へ進む。",
    geographicStructure:
      "居住地や距離を条件に、生活圏内の相手を探せる。",
    identityStructure:
      "写真、年齢、職業、年収、結婚への意思、家族観、自己紹介文で構成される。",
    whatItPromised:
      "結婚を見据えた、真剣な交際相手との出会い。",
    whatItActuallySold:
      "結婚前提という選別済みの候補プールへのアクセス。",
    whoWasVisible:
      "結婚への意思を明示し、プロフィールを整えた利用者。",
    whoRemainedInvisible:
      "結婚以外の目的、プロフィールに書けない生活背景、対面時の身体性。",
    howChanceWasProduced:
      "結婚前提の条件検索とレコメンドによる候補配信。",
    howTrustWasProduced:
      "本人確認、結婚への意思の自己申告、メッセージの継続、運営監視。",
    howDesireWasFramed:
      "婚活、結婚、真剣交際、将来設計。",
    paymentLogic:
      "月額課金、追加機能、接触機会の拡張。",
    contactLogic:
      "相互マッチ後にメッセージ。結婚前提が接触の前提条件になる。",
    matchingRequirement: "双方のいいねによる相互マッチが必要。",
    visibilityLogic:
      "プロフィール充実度、結婚への意思、活動頻度が可視性に影響する。",
    genderedPricing:
      "性別によって利用条件が異なる場合がある。",
    repetitionLogic:
      "結婚相手が見つかるまで、または交際中も、利用を継続できる。",
    platformStructure:
      "結婚という目的で候補プールを事前に選別した、大衆型婚活市場。",
    risks: [
      "結婚意思の虚偽",
      "プロフィール情報の不一致",
      "目的の不一致",
      "対面時のトラブル",
      "外部連絡先への誘導",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "ガイドライン",
    ],
    whyItSurvived: [
      "婚活という社会的に確立したカテゴリ",
      "結婚前提による候補の選別",
      "お見合いという既存の文化参照",
      "真剣さの自己申告",
      "大衆型マッチング市場の中でのポジション",
    ],
    whatCameBefore: [
      "お見合い",
      "結婚相談所",
      "仲人",
      "出会い系サイト",
      "Pairs",
    ],
    whatCameAfter: [
      "行政婚活",
      "AI婚活支援",
      "本人確認の強化",
      "独身証明連携",
    ],
    whatRemainsToday: [
      "結婚前提",
      "婚活という語彙",
      "相互マッチ",
      "プロフィールカード",
      "月額課金",
    ],
    observation: [
      "Omiaiは、出会いを「お見合い」のデジタル版として設計した。",
      "サービス名そのものが、結婚という目的を先に宣言する。",
      "ここでは、利用者は恋愛を探すのではなく、結婚を探すと自己申告する。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: ["marriage-for-economic-stability"],
    relatedArticleSlugs: ["what-value-remains-in-marriage"],
    relatedEncounterSlugs: ["pairs", "tokyo-enmusubi"],
  },
];

export const MASS_MARKET_USER_UNCERTAINTY = [
  "プロフィールの虚偽",
  "写真と実像の不一致",
  "結婚・交際目的の不一致",
  "相手の生活背景が分からないこと",
  "アルゴリズムの不透明性",
];

export const MASS_MARKET_PROFILE_ITEMS = [
  {
    id: "card",
    title: "プロフィールカード",
    paragraphs: [
      "老舗出会い系の掲示板が「今、何をしたいか」を書く場所だったのに対し、大衆型マッチングは「どのような人間か」を書く場所になった。",
      "写真、年齢、職業、趣味、結婚への意思——利用者は自分を一枚のカードに圧縮する。",
    ],
  },
  {
    id: "mutual",
    title: "相互マッチ",
    paragraphs: [
      "双方がいいねを送り合って初めて会話が始まる。",
      "接触前の拒否が可能になり、老舗出会い系の一方向接触とは異なる選別構造が生まれた。",
    ],
  },
  {
    id: "subscription",
    title: "月額アクセス",
    paragraphs: [
      "ポイント課金型が行動ごとに課金するのに対し、大衆型は一定期間のアクセス権を購入する。",
      "課金の単位が、接触の回数から、候補プールへの参加期間へ移った。",
    ],
  },
  {
    id: "translation",
    title: "欲望の翻訳",
    paragraphs: [
      "出会いたいという欲望は、恋活、婚活、価値観、趣味、将来設計へ翻訳される。",
      "利用者は自分の欲望を、周囲に説明可能な言葉へ変換してからサービスに入る。",
    ],
  },
];

export const MASS_MARKET_LINEAGE_STEPS = [
  "出会い系サイト",
  "プロフィール検索",
  "スマートフォンアプリ",
  "大衆型マッチング",
  "価値観・心理診断型",
];

export const MASS_MARKET_LINEAGE_TRANSFORMS = [
  { from: "掲示板投稿", to: "プロフィールカード" },
  { from: "直接メッセージ", to: "相互マッチ後の会話" },
  { from: "ポイント課金", to: "月額アクセス" },
  { from: "今の目的", to: "継続的な人物像" },
  { from: "地域検索", to: "レコメンドと条件検索" },
  { from: "接触の可能性", to: "関係の可能性" },
];

export const MASS_MARKET_SUBSCRIPTION_STEPS = [
  "候補プールに参加する",
  "プロフィールカードを閲覧する",
  "いいねを送る",
  "相互マッチを待つ",
  "メッセージを送る",
  "会話を継続する",
  "対面へ移る",
  "関係を更新するか、利用を続ける",
];

export const MASS_MARKET_VS_LEGACY = {
  massMarket: {
    label: "大衆型マッチング",
    labelEn: "Mass-market matching",
    items: [
      "プロフィールカードから始まる",
      "相互選択後に接触する",
      "マッチ成立が会話の条件",
      "継続的な人物像を登録する",
      "月額または機能課金",
      "属性と相性が重要",
      "恋活・婚活として目的を整理する",
      "社会的に説明しやすい",
      "接触前の選別が多い",
      "関係の可能性を売る",
    ],
  },
  legacy: {
    label: "老舗出会い系",
    labelEn: "Legacy dating services",
    items: [
      "掲示板や検索から始まる",
      "一方向から接触できる",
      "マッチ成立は必須ではない",
      "今の目的を投稿する",
      "行動ごとのポイント課金",
      "地域と現在性が重要",
      "恋愛以外の目的も混在する",
      "境界が曖昧",
      "接触量が多くなりやすい",
      "接触の可能性を売る",
    ],
  },
};

export const MASS_MARKET_DESIRE_FRAMES = [
  { frame: "恋活", description: "交際相手を探す日常的な活動としての出会い" },
  { frame: "婚活", description: "結婚を前提とした相手探し" },
  { frame: "価値観", description: "生活感覚や将来設計の一致" },
  { frame: "趣味", description: "共通の関心から始まる関係" },
  { frame: "相性", description: "心理テストや診断に基づく適合性" },
  { frame: "真剣交際", description: "遊びではない関係の自己申告" },
];
