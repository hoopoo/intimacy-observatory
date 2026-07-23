import type { EncounterRecord } from "@/types/encounter-classics";

export const MARRIAGE_IDENTITY_CATEGORY_ID = "marriage-identity-specific";

export const MARRIAGE_IDENTITY_RECORDS: EncounterRecord[] = [
  {
    slug: "marrish",
    name: "マリッシュ",
    englishName: "marrish",
    era: "2010年代から現在",
    status: "active",
    categoryId: MARRIAGE_IDENTITY_CATEGORY_ID,
    displayOrder: 1,
    timelineEraId: "matching-apps",
    summary:
      "再婚希望者、シングルマザー・ファザーなど、特定の生活背景を持つ利用者に特化した婚活マッチング。大衆型が「出会いたい」全体を対象にするのに対し、生活史の条件で候補プールを分割する。",
    interface: [
      "スマートフォンアプリ",
      "プロフィール",
      "再婚・子ども有無の属性",
      "いいね",
      "相互マッチ",
      "メッセージ",
      "本人確認",
    ],
    entryCondition:
      "再婚希望者、または子どもがいる独身者など、サービスが定める属性を自己申告して登録する。",
    timeStructure:
      "非同期型。属性に基づく候補閲覧、いいね、マッチ、メッセージが時間差で進む。",
    geographicStructure:
      "居住地や距離を手がかりに、生活圏に近い相手を探せる。",
    identityStructure:
      "再婚経験、子どもの有無、年齢、職業、結婚への意思——生活史がプロフィールの中心になる。",
    whatItPromised:
      "同じ生活背景を持つ、真剣な再婚相手との出会い。",
    whatItActuallySold:
      "属性で分割された候補プールの中で、自分と似た条件の相手が存在するという可能性。",
    whoWasVisible:
      "再婚希望、子どもあり等の属性を提示できる利用者。",
    whoRemainedInvisible:
      "初婚希望者、子どもなし希望者、属性に収まらない複雑な生活史。",
    howChanceWasProduced:
      "属性フィルターとレコメンドにより、同質性の高い候補を配信する。",
    howTrustWasProduced:
      "本人確認、属性の自己申告、運営監視、婚活という真剣さの演出。",
    howDesireWasFramed: "再婚、シングルペアレント、同じ境遇、真剣婚活。",
    paymentLogic:
      "月額課金、追加機能、可視性や接触可能性の拡張。",
    contactLogic:
      "双方がいいねを送り合ったあとで、メッセージが可能になる。",
    matchingRequirement: "相互マッチを会話開始の条件とする。",
    visibilityLogic:
      "属性の一致度、プロフィール充実度、活動頻度が発見可能性に影響する。",
    genderedPricing:
      "性別によって利用料金や無料範囲が異なる設計が採用される場合がある。",
    repetitionLogic:
      "再婚が成立しても退会を必須とせず、継続利用できる設計。",
    platformStructure:
      "生活史の属性を軸に候補プールを分割する、特化型婚活市場。",
    risks: [
      "属性情報の虚偽",
      "子ども・再婚歴の不一致",
      "プロフィールと生活の乖離",
      "目的の不一致",
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
      "再婚・シングルペアレントという明確なニッチ",
      "大衆型では埋もれやすい属性の可視化",
      "婚活という真剣さの共有",
      "同質性による安心感",
      "生活史を前提とした出会いの需要",
    ],
    whatCameBefore: [
      "結婚相談所",
      "再婚支援団体",
      "出会い系サイト",
      "Pairs",
    ],
    whatCameAfter: [
      "属性特化型の細分化",
      "AI推薦による同質性マッチ",
      "行政婚活との連携",
    ],
    whatRemainsToday: [
      "再婚・子ども有無の属性",
      "特化型候補プール",
      "婚活という語彙",
      "相互マッチ",
      "生活史の自己申告",
    ],
    observation: [
      "マリッシュは、出会いを生活史の条件で分割した。",
      "大衆型が全員を同じ候補プールに入れるのに対し、再婚・シングルペアレントは別の市場として切り出された。",
      "ここで販売されているのは、偶然ではなく、同じ境遇の中での出会いの可能性である。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: [
      "marriage-for-economic-stability",
      "japan-cohabitation-without-marriage-rise",
    ],
    relatedArticleSlugs: ["what-value-remains-in-marriage"],
    relatedEncounterSlugs: ["pairs", "youbride", "tokyo-enmusubi"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "全利用者向けの大衆型から、生活史の属性で分割された特化型へ。",
        label: "日本の大衆型マッチングを見る",
      },
    ],
  },
  {
    slug: "youbride",
    name: "ユーブライド",
    englishName: "YouBrides",
    era: "2010年代から現在",
    status: "active",
    categoryId: MARRIAGE_IDENTITY_CATEGORY_ID,
    displayOrder: 2,
    timelineEraId: "matching-apps",
    summary:
      "女性中心の婚活マッチング。結婚を前提とした真剣な出会いを、女性の安全と能動性を強調する形で提供する。",
    interface: [
      "スマートフォンアプリ",
      "プロフィール",
      "婚活ステータス",
      "いいね",
      "相互マッチ",
      "メッセージ",
      "本人確認",
    ],
    entryCondition:
      "結婚を前提とした出会いを求める利用者として、プロフィールと本人確認を経て登録する。",
    timeStructure:
      "非同期型。候補閲覧、いいね、マッチ、メッセージが時間差で進む。",
    geographicStructure:
      "居住地を手がかりに、生活圏に近い相手を探せる。",
    identityStructure:
      "年齢、職業、年収、結婚への意思、価値観——婚活市場で評価されやすい属性が中心。",
    whatItPromised:
      "結婚を前提とした、真剣で安全な出会い。",
    whatItActuallySold:
      "婚活に特化した候補プールと、女性向けに設計された接触環境。",
    whoWasVisible:
      "結婚前提、年収・職業等を提示できる利用者。",
    whoRemainedInvisible:
      "恋愛のみを求める人、婚活をしたくない人、属性に収まらない生活。",
    howChanceWasProduced:
      "婚活特化の候補プールとレコメンドによる配信。",
    howTrustWasProduced:
      "本人確認、婚活ステータス、運営監視、女性向け設計の演出。",
    howDesireWasFramed: "婚活、真剣、結婚前提、安心。",
    paymentLogic:
      "月額課金、追加機能、可視性の拡張。",
    contactLogic:
      "相互マッチ後にメッセージ。婚活という前提が接触の文脈になる。",
    matchingRequirement: "相互マッチを会話開始の条件とする。",
    visibilityLogic:
      "プロフィール充実度、活動頻度、婚活ステータスが発見可能性に影響する。",
    genderedPricing:
      "女性向け・男性向けで料金体系や機能が異なる設計。",
    repetitionLogic:
      "結婚が成立するまで、または成立後も一定期間利用可能な設計。",
    platformStructure:
      "結婚前提の利用者だけを集めた、女性中心の婚活市場。",
    risks: [
      "プロフィール情報の虚偽",
      "年収・職業の不一致",
      "婚活目的の不一致",
      "外部連絡先への誘導",
      "詐欺的な勧誘",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "女性向けサポート",
    ],
    whyItSurvived: [
      "婚活特化という明確な位置づけ",
      "女性向け設計による差別化",
      "大衆型より強い結婚前提",
      "真剣さの共有による選別",
      "婚活市場の継続的需要",
    ],
    whatCameBefore: [
      "結婚相談所",
      "お見合い",
      "Pairs",
      "Omiai",
    ],
    whatCameAfter: [
      "属性特化型の細分化",
      "AI婚活支援",
      "行政婚活",
    ],
    whatRemainsToday: [
      "婚活特化",
      "女性中心の設計",
      "結婚前提",
      "相互マッチ",
      "本人確認",
    ],
    observation: [
      "ユーブライドは、出会いを「婚活」という目的で事前に選別した。",
      "大衆型が恋活・婚活の両方を包含するのに対し、ここでは結婚前提が参加条件に近い。",
      "欲望は、結婚という語彙の中にのみ許可される。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: [
      "marriage-for-economic-stability",
      "freedom-priority-over-marriage",
    ],
    relatedArticleSlugs: [
      "what-value-remains-in-marriage",
      "singlehood-as-life-design",
    ],
    relatedEncounterSlugs: ["marrish", "pairs", "omiai", "bridal-net"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "恋活・婚活を包含する大衆型から、結婚前提の特化型へ。",
        label: "日本の大衆型マッチングを見る",
      },
    ],
  },
  {
    slug: "bridal-net",
    name: "ブライダルネット",
    englishName: "Bridal Net",
    era: "2000年代から現在",
    status: "active",
    categoryId: MARRIAGE_IDENTITY_CATEGORY_ID,
    displayOrder: 3,
    timelineEraId: "values-psych",
    summary:
      "結婚相談所ネットワークをオンライン化した、本気婚活向けサービス。アプリ型大衆型より、結婚相談所に近い厳格さとサポートを持つ。",
    interface: [
      "Web・アプリ",
      "詳細プロフィール",
      "結婚相談所連携",
      "お見合い申込",
      "カウンセラー",
      "本人確認",
      "年収・学歴",
    ],
    entryCondition:
      "結婚を強く希望し、詳細なプロフィールと書類確認を経て登録する。",
    timeStructure:
      "非同期型。お見合い申込、日程調整、対面が中心。メッセージより形式化された接触。",
    geographicStructure:
      "居住地、結婚相談所のネットワークを手がかりに、生活圏の相手を紹介する。",
    identityStructure:
      "年収、学歴、職業、家族構成、結婚への意思——結婚相談所と同様の属性が詳細に記録される。",
    whatItPromised:
      "結婚相談所レベルの真剣さで、適切な結婚相手と出会うこと。",
    whatItActuallySold:
      "結婚相談所ネットワークへのアクセスと、本気婚活という選別された環境。",
    whoWasVisible:
      "年収・学歴・結婚意思を詳細に提示できる利用者。",
    whoRemainedInvisible:
      "カジュアルな出会いを求める人、書類準備が難しい人、結婚以外の親密性を求める人。",
    howChanceWasProduced:
      "結婚相談所・システムによる紹介と、詳細条件によるマッチング。",
    howTrustWasProduced:
      "本人確認、年収証明、結婚相談所の介入、カウンセラー、運営監視。",
    howDesireWasFramed: "本気婚活、結婚相談所、お見合い、真剣。",
    paymentLogic:
      "入会金、月会費、お見合い料など、結婚相談所型の課金構造。",
    contactLogic:
      "お見合い申込と双方の同意を経て、対面またはメッセージ。カウンセラーが介在する場合がある。",
    matchingRequirement:
      "双方の同意と、条件の一致。お見合い申込が接触の形式。",
    visibilityLogic:
      "プロフィールの詳細度、条件の一致度、相談所の推薦が発見可能性に影響する。",
    genderedPricing:
      "性別によって入会条件や料金が異なる場合がある。",
    repetitionLogic:
      "結婚が成立するまで、複数のお見合いを繰り返せる設計。",
    platformStructure:
      "結婚相談所ネットワークをオンライン化した、本気婚活市場。",
    risks: [
      "年収・学歴情報の虚偽",
      "お見合い後の不一致",
      "高額な継続課金",
      "カウンセラー依存",
      "外部勧誘",
    ],
    safetyMechanisms: [
      "本人確認",
      "年収証明",
      "結婚相談所の介入",
      "カウンセラー",
      "通報",
      "運営監視",
    ],
    whyItSurvived: [
      "結婚相談所ブランドの信頼",
      "本気婚活という明確な位置づけ",
      "大衆型アプリへの不信層",
      "詳細属性による選別",
      "お見合いという形式化された接触",
    ],
    whatCameBefore: [
      "結婚相談所",
      "仲人",
      "お見合い",
      "Omiai",
    ],
    whatCameAfter: [
      "オンライン結婚相談所の一般化",
      "AI婚活支援",
      "行政婚活",
    ],
    whatRemainsToday: [
      "結婚相談所連携",
      "お見合い形式",
      "詳細プロフィール",
      "本気婚活",
      "年収・学歴の可視化",
    ],
    observation: [
      "ブライダルネットは、結婚相談所をオンライン化した。",
      "大衆型がアプリで気軽に始められるのに対し、ここでは本気婚活が参加の前提となる。",
      "出会いは、お見合いという形式に固定される。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: ["marriage-for-economic-stability"],
    relatedArticleSlugs: ["what-value-remains-in-marriage"],
    relatedEncounterSlugs: ["omiai", "youbride", "pairs", "tokyo-enmusubi"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "アプリ型大衆型から、結婚相談所型の本気婚活へ。",
        label: "日本の大衆型マッチングを見る",
      },
      {
        categoryId: "public-municipal",
        note: "民間の本気婚活から、行政運営の結婚支援へ。",
        label: "公共・行政型を見る",
      },
    ],
  },
  {
    slug: "ange",
    name: "アンジュ",
    englishName: "Ange",
    era: "2010年代から現在",
    status: "active",
    categoryId: MARRIAGE_IDENTITY_CATEGORY_ID,
    displayOrder: 4,
    timelineEraId: "values-psych",
    summary:
      "50代以上のシニア層に特化した婚活マッチング。年齢という属性で候補プールを分割し、人生後半の結婚・パートナーシップを支援する。",
    interface: [
      "スマートフォンアプリ",
      "プロフィール",
      "年齢層特化",
      "いいね",
      "相互マッチ",
      "メッセージ",
      "本人確認",
    ],
    entryCondition:
      "50代以上など、サービスが定める年齢層の独身者として登録する。",
    timeStructure:
      "非同期型。候補閲覧、いいね、マッチ、メッセージが時間差で進む。",
    geographicStructure:
      "居住地を手がかりに、同年代の生活圏の相手を探せる。",
    identityStructure:
      "年齢、職業、趣味、子どもの有無、結婚への意思——シニア婚活で共有されやすい属性。",
    whatItPromised:
      "同年代の、真剣な結婚・パートナー探し。",
    whatItActuallySold:
      "年齢で分割された候補プールの中で、同世代の相手が存在するという可能性。",
    whoWasVisible:
      "50代以上、結婚・パートナー探しを希望する利用者。",
    whoRemainedInvisible:
      "若年層、カジュアルな出会いを求める人、年齢以外の複雑な生活史。",
    howChanceWasProduced:
      "年齢フィルターとレコメンドにより、同世代の候補を配信する。",
    howTrustWasProduced:
      "本人確認、年齢層の共有、運営監視、シニア向けサポート。",
    howDesireWasFramed: "シニア婚活、同年代、第二の人生、真剣。",
    paymentLogic:
      "月額課金、追加機能、可視性の拡張。",
    contactLogic:
      "相互マッチ後にメッセージ。同年代という共有文脈が接触の前提。",
    matchingRequirement: "相互マッチを会話開始の条件とする。",
    visibilityLogic:
      "年齢層の一致、プロフィール充実度、活動頻度が発見可能性に影響する。",
    genderedPricing:
      "性別によって利用料金が異なる設計が採用される場合がある。",
    repetitionLogic:
      "パートナーが見つかるまで、または見つかった後も一定期間利用可能。",
    platformStructure:
      "年齢層を軸に候補プールを分割する、シニア特化型婚活市場。",
    risks: [
      "プロフィール情報の虚偽",
      "年齢・健康状態の不一致",
      "目的の不一致",
      "詐欺的な勧誘",
      "孤独へのつけ込み",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "シニア向けサポート",
    ],
    whyItSurvived: [
      "シニア婚活という明確なニッチ",
      "大衆型では埋もれやすい高齢独身者の可視化",
      "同世代による安心感",
      "人生後半のパートナー需要",
      "少子高齢化による市場拡大",
    ],
    whatCameBefore: [
      "シニア向けお見合い",
      "結婚相談所",
      "Pairs",
      "地域の婚活イベント",
    ],
    whatCameAfter: [
      "シニア特化型の細分化",
      "AI推薦",
      "終活・介護と連動したマッチング",
    ],
    whatRemainsToday: [
      "年齢層特化",
      "シニア婚活",
      "同世代の候補プール",
      "相互マッチ",
      "第二の人生という語彙",
    ],
    observation: [
      "アンジュは、出会いを年齢という条件で分割した。",
      "大衆型が全年齢を同じプールに入れるのに対し、50代以上は別の婚活市場として切り出された。",
      "結婚は、人生の前半だけのイベントではなくなった。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: [
      "marriage-for-economic-stability",
      "elder-targeted-ai-romance-fraud",
    ],
    relatedEncounterSlugs: ["marrish", "youbride", "pairs", "bridal-net"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "全年齢向け大衆型から、シニア層に特化した婚活市場へ。",
        label: "日本の大衆型マッチングを見る",
      },
    ],
  },
];

export const MARRIAGE_IDENTITY_USER_UNCERTAINTY = [
  "属性・生活史の自己申告の虚偽",
  "婚活目的と実際の意図の不一致",
  "年収・学歴・再婚歴の不一致",
  "特化型プール内での選択肢の限定",
  "高齢層を標的とした詐欺・勧誘",
];

export const MARRIAGE_IDENTITY_ATTRIBUTE_ITEMS = [
  {
    id: "segmentation",
    title: "属性による分割",
    paragraphs: [
      "大衆型が全利用者を同じ候補プールに入れるのに対し、特化型は再婚、年齢、子ども有無などで市場を分割する。",
      "出会いは、共有された生活史の中でのみ起こりやすくなる。",
    ],
  },
  {
    id: "marriage-first",
    title: "結婚前提",
    paragraphs: [
      "恋活・婚活を包含する大衆型に対し、ここでは結婚が接触の前提に近い。",
      "欲望は、結婚という語彙の中にのみ許可される。",
    ],
  },
  {
    id: "homogeneity",
    title: "同質性の安心",
    paragraphs: [
      "同じ境遇、同年代、同じ本気度——同質性が信頼の代わりになる。",
      "偶然より、似た条件の中での出会いが設計される。",
    ],
  },
  {
    id: "formalization",
    title: "形式化された接触",
    paragraphs: [
      "ブライダルネットのお見合いのように、接触は形式化される場合がある。",
      "自由なメッセージより、お見合い・カウンセラーという枠組み。",
    ],
  },
];

export const MARRIAGE_IDENTITY_FLOW_STEPS = [
  "婚活・再婚・シニアなど、自分の属性を確認する",
  "特化型サービスに登録する",
  "詳細プロフィールと本人確認を完了する",
  "属性に基づく候補を閲覧する",
  "いいね・お見合い申込を送る",
  "相互マッチまたは双方の同意を得る",
  "メッセージまたはお見合いで接触する",
  "結婚・パートナーシップを見据えて関係を進める",
];

export const MARRIAGE_IDENTITY_LINEAGE_STEPS = [
  "結婚相談所・仲人",
  "お見合い・自治体婚活",
  "大衆型マッチングアプリ",
  "婚活・属性特化型",
  "行政AI婚活",
];

export const MARRIAGE_IDENTITY_LINEAGE_TRANSFORMS = [
  { from: "全利用者プール", to: "属性分割プール" },
  { from: "恋活・婚活", to: "結婚前提" },
  { from: "プロフィール閲覧", to: "生活史の一致" },
  { from: "自由なメッセージ", to: "お見合い形式" },
  { from: "出会いたい", to: "再婚・シニア・本気" },
  { from: "関係の可能性", to: "結婚の可能性" },
];

export const MARRIAGE_IDENTITY_VS_MASS_MARKET = {
  marriageIdentity: {
    label: "婚活・属性特化型",
    labelEn: "Marriage and identity-specific",
    items: [
      "属性で候補プールを分割",
      "結婚前提が強い",
      "再婚・シニア・本気婚活",
      "同質性による安心",
      "ニッチな生活史の可視化",
      "参加条件が明確",
      "お見合い形式も存在",
      "大衆型より選別的",
      "結婚相談所に近い厳格さ",
      "分割された市場へのアクセスを売る",
    ],
  },
  massMarket: {
    label: "日本の大衆型",
    labelEn: "Mass-market matching",
    items: [
      "全利用者が同一プール",
      "恋活・婚活の両方",
      "全年齢・全目的",
      "ブランドと本人確認",
      "属性は自己申告程度",
      "比較的低い参加障壁",
      "相互マッチとメッセージ",
      "社会的に説明しやすい",
      "アプリで気軽に開始",
      "関係の可能性を売る",
    ],
  },
};

export const MARRIAGE_IDENTITY_DESIRE_FRAMES = [
  { frame: "再婚", description: "一度の結婚経験を共有する相手探し" },
  { frame: "シングルペアレント", description: "子どもがいる生活を前提とした出会い" },
  { frame: "本気婚活", description: "結婚相談所レベルの真剣さ" },
  { frame: "シニア", description: "人生後半のパートナー・結婚" },
  { frame: "同年代", description: "年齢層を共有する安心感" },
  { frame: "結婚前提", description: "恋愛より結婚が接触の文脈" },
];
