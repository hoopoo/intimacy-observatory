import type { EncounterRecord } from "@/types/encounter-classics";

export const INTERNATIONAL_CATEGORY_ID = "international-cross-border";

export const INTERNATIONAL_ENCOUNTER_RECORDS: EncounterRecord[] = [
  {
    slug: "bumble",
    name: "Bumble",
    englishName: "Bumble",
    era: "2014年から現在",
    status: "active",
    categoryId: INTERNATIONAL_CATEGORY_ID,
    displayOrder: 1,
    timelineEraId: "matching-apps",
    summary:
      "女性が最初のメッセージを送る設計など、越境的な規範を持ち込んだ国際型マッチング。グローバルな候補プールと、出会いのルールそのものを商品化する。",
    interface: [
      "スマートフォンアプリ",
      "スワイプ",
      "写真",
      "プロフィール",
      "相互マッチ",
      "女性ファーストメッセージ",
      "BFF・Bizzモード",
      "位置情報",
      "本人確認",
    ],
    entryCondition:
      "アカウントを作成し、写真とプロフィールを登録。マッチ後、女性（または指定された側）が最初のメッセージを送る。",
    timeStructure:
      "スワイプは即時。マッチ後、女性側にメッセージ送信の時間制限が設けられる場合がある。",
    geographicStructure:
      "位置情報と設定により、生活圏または越境的な候補プールが表示される。",
    identityStructure:
      "写真、短い自己紹介、自己申告の価値観、職業。国籍や言語は明示されないことも多い。",
    whatItPromised: "より安全で、尊重に基づく出会いの場。",
    whatItActuallySold:
      "インターフェース上の規範（誰が最初に話すか）と、グローバルな候補プールへのアクセス。",
    whoWasVisible:
      "写真、プロフィール、自己申告の価値観を提示する利用者。",
    whoRemainedInvisible:
      "国境を越えた生活の差、言語のズレ、ビザや移住の条件、対面時の身体性。",
    howChanceWasProduced:
      "位置・設定・レコメンドによる候補配信。グローバルブランドとしての認知。",
    howTrustWasProduced:
      "本人確認、女性ファースト設計、通報、写真認証、ブランドが示す「尊重」の規範。",
    howDesireWasFramed: "尊重、安全、国際的な出会い、自分らしい関係。",
    paymentLogic:
      "サブスクリプション、スーパースワイプ、スポットライトなど可視性・優先表示の拡張。",
    contactLogic:
      "相互マッチ後、女性（異性愛デートモードでは）が最初のメッセージを送る。男性は返信を待つ。",
    matchingRequirement: "双方のスワイプによる相互マッチが必要。",
    visibilityLogic:
      "スポットライト、ブースト、活動時間が表示順序に影響する。",
    genderedPricing:
      "モードと地域によって、誰が最初に話すか・誰が課金対象かが設計上異なる。",
    repetitionLogic:
      "関係が終わっても、新しい候補をスワイプし続けられる。BFF・Bizzなど用途別モードも存在。",
    platformStructure:
      "グローバルな候補プールと、接触前の規範（女性ファースト）を組み合わせた越境型マッチング市場。",
    risks: [
      "プロフィールの虚偽",
      "写真と実像の不一致",
      "言語・文化の誤解",
      "国境を越えた詐欺",
      "目的の不一致",
      "対面時のトラブル",
    ],
    safetyMechanisms: [
      "本人確認",
      "女性ファーストメッセージ",
      "通報",
      "ブロック",
      "写真認証",
      "運営監視",
    ],
    whyItSurvived: [
      "女性ファーストという差別化された規範",
      "グローバルブランドとしての認知",
      "Tinder以降の「尊重」ニーズへの応答",
      "BFF・Bizzなど用途拡張",
      "日本の大衆型・即時型との差別化",
    ],
    whatCameBefore: [
      "Tinder",
      "国際出会い系",
      "留学・移住ネットワーク",
      "Pairs",
      "OkCupid",
    ],
    whatCameAfter: [
      "AI会話代行",
      "越境詐欺の高度化",
      "リアルタイム翻訳付きマッチング",
      "行政・制度連携型の越境支援",
    ],
    whatRemainsToday: [
      "女性ファースト",
      "スワイプ",
      "グローバル候補プール",
      "尊重というブランド語彙",
      "用途別モード",
    ],
    observation: [
      "Bumbleは、出会いのルールそのものを商品の一部として設計した。",
      "誰が最初に話すか——その順序が、信頼の言語になっている。",
      "大衆型が国内の関係市場を作ったのに対し、Bumbleは越境的な規範とグローバルプールを売る。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals", "scam-folklore"],
    relatedObservationSlugs: [
      "queer-couples-legal-gap-cohabitation",
      "long-distance-national-couple-visitation",
    ],
    relatedEncounterSlugs: ["tinder", "pairs", "hinge", "okcupid"],
    crossCategoryLinks: [
      {
        categoryId: "immediate-casual",
        note: "スワイプと位置情報を共有しながら、近さより規範と越境性で差別化した。",
        label: "即時・カジュアル型を見る",
      },
      {
        categoryId: "mass-market-matching",
        note: "国内の恋活・婚活市場から、グローバルな候補プールへ視野が広がった。",
        label: "日本の大衆型マッチングを見る",
      },
    ],
  },
  {
    slug: "hinge",
    name: "Hinge",
    englishName: "Hinge",
    era: "2010年代から現在",
    status: "active",
    categoryId: INTERNATIONAL_CATEGORY_ID,
    displayOrder: 2,
    timelineEraId: "matching-apps",
    summary:
      "「削除されるために設計された」デートアプリ。会話のきっかけ（プロンプト）と、関係性を前提とした設計で、スワイプ型の即時性に、越境的な「真剣さ」の規範を持ち込んだ。",
    interface: [
      "スマートフォンアプリ",
      "プロフィール",
      "プロンプト（会話のきっかけ）",
      "いいね・コメント",
      "相互マッチ",
      "メッセージ",
      "本人確認",
    ],
    entryCondition:
      "アカウントを作成し、写真とプロンプト付きプロフィールを登録する。",
    timeStructure:
      "非同期型。特定のプロフィール項目へのコメントから会話が始まりやすい。",
    geographicStructure:
      "居住地設定により、生活圏または越境的な候補が表示される。",
    identityStructure:
      "写真、プロンプトへの回答、自己紹介——会話可能な属性として設計される。",
    whatItPromised: "消えるためではなく、残る関係のための出会い。",
    whatItActuallySold:
      "会話のきっかけと、グローバルブランドが示す「真剣なデート」の規範。",
    whoWasVisible: "プロンプトと写真で自己を文章化できる利用者。",
    whoRemainedInvisible:
      "言語の壁の向こうのニュアンス、対面での身体性、カジュアルな出会いを求める人。",
    howChanceWasProduced:
      "プロンプトへの反応とレコメンドによる候補配信。",
    howTrustWasProduced:
      "本人確認、プロンプト設計、通報、ブランドの「Designed to be deleted」という語彙。",
    howDesireWasFramed: "真剣なデート、会話、関係性、国際的な出会い。",
    paymentLogic: "サブスクリプション、ローズ等の優先表示・接触拡張。",
    contactLogic:
      "プロフィールの特定項目へのいいね・コメントから会話開始。相互関心が前提。",
    matchingRequirement: "双方の関心表明後にメッセージが可能。",
    visibilityLogic: "プロンプトの質、活動頻度、プレミアム機能が可視性に影響。",
    genderedPricing: "地域・性別により料金体系が異なる場合がある。",
    repetitionLogic: "関係終了後も新しい候補へ。ただしブランドは「削除」を促す。",
    platformStructure:
      "会話のきっかけを中心に、関係性志向の越境型マッチング市場。",
    risks: [
      "プロフィールの虚偽",
      "プロンプトと実像の乖離",
      "言語・文化の誤解",
      "目的の不一致",
      "国境を越えた詐欺",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "安全ガイドライン",
    ],
    whyItSurvived: [
      "Tinder疲れへの応答",
      "会話設計による差別化",
      "「真剣さ」のブランド",
      "グローバル展開",
      "大衆型・即時型との差別化",
    ],
    whatCameBefore: ["Tinder", "OkCupid", "Pairs", "Bumble"],
    whatCameAfter: ["AI会話支援", "ビデオデート", "翻訳統合"],
    whatRemainsToday: [
      "プロンプト",
      "Designed to be deleted",
      "会話起点の設計",
      "関係性志向",
    ],
    observation: [
      "Hingeは、出会いを「会話のきっかけ」へ設計し直した。",
      "スワイプだけでは足りない——プロンプトが、越境的な自己紹介の形式になった。",
      "削除されるために設計された——その言葉自体が、新しい規範である。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: ["long-distance-national-couple-visitation"],
    relatedEncounterSlugs: ["bumble", "tinder", "okcupid", "pairs"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "国内大衆型のプロフィールカードから、会話プロンプト型の越境設計へ。",
        label: "日本の大衆型マッチングを見る",
      },
    ],
  },
  {
    slug: "okcupid",
    name: "OkCupid",
    englishName: "OkCupid",
    era: "2000年代から現在",
    status: "active",
    categoryId: INTERNATIONAL_CATEGORY_ID,
    displayOrder: 3,
    timelineEraId: "values-psych",
    summary:
      "質問と回答にもとづく相性計算を特徴とする、国際起源のマッチングサービス。価値観・政治・生活習慣を数値化し、越境的な「相性」という言語で出会いを組み立てる。",
    interface: [
      "Web・アプリ",
      "質問票",
      "相性スコア",
      "詳細プロフィール",
      "メッセージ",
      "検索",
      "本人確認",
    ],
    entryCondition: "アカウント作成後、多数の質問に回答しプロフィールを構築する。",
    timeStructure:
      "非同期型。質問回答とプロフィール閲覧に時間を要する。",
    geographicStructure:
      "居住地・距離・国を手がかりに、国内または越境の候補を検索できる。",
    identityStructure:
      "質問回答、自己申告の価値観、政治・生活習慣——数値化可能な属性。",
    whatItPromised: "価値観の合う相手との、意味のある出会い。",
    whatItActuallySold:
      "相性スコアという計算可能な親近性と、グローバルな候補プール。",
    whoWasVisible: "質問に答え、価値観を明示できる利用者。",
    whoRemainedInvisible:
      "数値化しにくい身体性、言語の微妙な差、質問に収まらない生活。",
    howChanceWasProduced:
      "相性スコアと検索条件による候補配信。",
    howTrustWasProduced:
      "質問回答の透明性、本人確認、通報、長年のブランド。",
    howDesireWasFramed: "相性、価値観、意味のある出会い、国際的なマッチング。",
    paymentLogic: "サブスクリプション、ブースト、高度検索。",
    contactLogic: "メッセージまたはいいね。相性スコアが接触前の判断材料。",
    matchingRequirement: "双方の関心またはメッセージ開始の設計による。",
    visibilityLogic: "相性スコア、活動頻度、プレミアムが可視性に影響。",
    genderedPricing: "性別・地域により料金が異なる場合がある。",
    repetitionLogic: "関係終了後も、質問回答を更新しながら候補を探索できる。",
    platformStructure:
      "価値観の数値化と相性計算を軸にした、越境型マッチング市場。",
    risks: [
      "自己申告の虚偽",
      "相性スコアへの過信",
      "政治・価値観の不一致",
      "国境を越えた詐欺",
      "カテゴリ固定化",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "コミュニティガイドライン",
    ],
    whyItSurvived: [
      "相性計算という差別化",
      "LGBTQ+フレンドリーな設計の歴史",
      "グローバルな認知",
      "価値観診断型への系譜",
      "with等国内サービスとの類似需要",
    ],
    whatCameBefore: ["出会い系サイト", "心理テスト", "文通", "with"],
    whatCameAfter: ["AI相性診断", "価値観型国内アプリ", "行政AI婚活"],
    whatRemainsToday: [
      "質問と相性スコア",
      "価値観の数値化",
      "詳細プロフィール",
      "越境検索",
    ],
    observation: [
      "OkCupidは、出会いを「相性スコア」という計算可能な親近性へ変換した。",
      "withが国内でやったことを、OkCupidは国境を越えてやった。",
      "答えた質問の数だけ、相手の輪郭が見える——そう約束された。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: ["freedom-priority-over-marriage"],
    relatedEncounterSlugs: ["with", "bumble", "hinge", "japancupid"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "国内の価値観・心理診断型（with）と、国際起源の相性計算型。",
        label: "日本の大衆型マッチングを見る",
      },
    ],
  },
  {
    slug: "japancupid",
    name: "JapanCupid",
    englishName: "JapanCupid",
    era: "2000年代から現在",
    status: "active",
    categoryId: INTERNATIONAL_CATEGORY_ID,
    displayOrder: 4,
    timelineEraId: "matching-apps",
    summary:
      "日本と海外の利用者を結ぶ、越境恋愛・結婚を明示的に目的としたマッチングサービス。国籍・文化・移住の文脈で、出会いが設計される。",
    interface: [
      "Web・アプリ",
      "詳細プロフィール",
      "国籍・言語",
      "検索・フィルター",
      "メッセージ",
      "翻訳機能",
      "本人確認",
    ],
    entryCondition:
      "日本関連の出会いを求める利用者として、国籍・言語・プロフィールを登録する。",
    timeStructure: "非同期型。時差と言語を挟んだメッセージのやり取り。",
    geographicStructure:
      "日本在住・日本出身・日本文化への関心など、日本を軸に候補が検索される。",
    identityStructure:
      "国籍、言語、移住意向、文化的背景——越境性がプロフィールの中心。",
    whatItPromised: "日本と世界を結ぶ、真剣な国際恋愛・結婚。",
    whatItActuallySold:
      "日本を媒介とした越境候補プールと、翻訳を介した接触の可能性。",
    whoWasVisible:
      "国籍・言語・日本への関心を明示する利用者。",
    whoRemainedInvisible:
      "ビザ条件、経済格差、文化摩擦、翻訳では伝わらない身体性。",
    howChanceWasProduced:
      "国籍・言語・関心による検索とレコメンド。",
    howTrustWasProduced:
      "本人確認、プロフィール審査、通報、Cupid Mediaネットワーク。",
    howDesireWasFramed: "国際恋愛、異文化結婚、日本、越境。",
    paymentLogic: "サブスクリプション、メッセージ制限解除、プレミアム検索。",
    contactLogic:
      "メッセージ。翻訳機能が接触の媒介になる場合がある。",
    matchingRequirement: "双方の関心表明またはメッセージ送信条件による。",
    visibilityLogic: "プレミアム会員、プロフィール完成度、活動頻度。",
    genderedPricing: "性別により無料範囲・料金が非対称な設計。",
    repetitionLogic: "関係が終わっても、新しい越境候補を探索できる。",
    platformStructure:
      "日本を軸にした、明示的な越境恋愛・結婚市場。",
    risks: [
      "国籍・経歴の虚偽",
      "翻訳による誤解",
      "ビザ目的との不一致",
      "国境を越えた詐欺・勧誘",
      "文化摩擦",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "詐欺防止ガイド",
    ],
    whyItSurvived: [
      "日本特化という明確なニッチ",
      "国際結婚・恋愛の継続需要",
      "Cupid Mediaのネットワーク",
      "在日外国人・海外在住日本人の需要",
      "国内アプリにない越境明示性",
    ],
    whatCameBefore: ["国際結婚仲介", "文通", "InternationalCupid", "出会い系"],
    whatCameAfter: ["リアルタイム翻訳アプリ", "AI翻訳マッチング", "Bumble"],
    whatRemainsToday: [
      "日本特化",
      "国籍・言語",
      "翻訳",
      "越境結婚の語彙",
    ],
    observation: [
      "JapanCupidは、出会いを「日本」を媒介とした越境接触として設計した。",
      "国内大衆型は国籍をプロフィールの一部にすぎない。ここでは、越境性が前提になる。",
      "翻訳があれば語れる——だが、生活の差までは翻訳されない。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals", "scam-folklore"],
    relatedObservationSlugs: ["long-distance-national-couple-visitation"],
    relatedEncounterSlugs: ["internationalcupid", "bumble", "okcupid"],
    crossCategoryLinks: [
      {
        categoryId: "marriage-identity-specific",
        note: "国際結婚という属性特化と、越境型プールの交差。",
        label: "婚活・属性特化型を見る",
      },
    ],
  },
  {
    slug: "internationalcupid",
    name: "InternationalCupid",
    englishName: "InternationalCupid",
    era: "2000年代から現在",
    status: "active",
    categoryId: INTERNATIONAL_CATEGORY_ID,
    displayOrder: 5,
    timelineEraId: "matching-apps",
    summary:
      "国籍・地域を明示的に越えた出会いを目的とした、Cupid Media系の国際マッチング。移住・旅行・文化的好奇を含む、グローバルな候補プールを提供する。",
    interface: [
      "Web・アプリ",
      "詳細プロフィール",
      "国籍・地域検索",
      "メッセージ",
      "翻訳",
      "本人確認",
      "Cupid Mediaネットワーク",
    ],
    entryCondition:
      "国際的な出会いを求め、国籍・地域・言語をプロフィールに登録する。",
    timeStructure:
      "非同期型。時差と距離を前提としたメッセージ中心。",
    geographicStructure:
      "世界中の候補を、国籍・地域・移住意向で検索できる。",
    identityStructure:
      "国籍、言語、移住・旅行意向、文化——越境が自己紹介の中心。",
    whatItPromised: "世界のどこかにいる、相性の合う相手との出会い。",
    whatItActuallySold:
      "グローバルな越境候補プールへのアクセスと、翻訳を介した接触。",
    whoWasVisible: "国籍・移住意向を明示する利用者。",
    whoRemainedInvisible:
      "ビザ・経済・文化の差、詐欺、対面後の生活の現実。",
    howChanceWasProduced: "地域・国籍検索とレコメンド。",
    howTrustWasProduced:
      "本人確認、Cupid Mediaブランド、通報、詐欺防止情報。",
    howDesireWasFramed: "国際恋愛、異文化、移住、グローバル。",
    paymentLogic: "サブスクリプション、メッセージ解除、プレミアム。",
    contactLogic: "メッセージ。翻訳が接触の媒介。",
    matchingRequirement: "双方の関心または有料メッセージ条件。",
    visibilityLogic: "プレミアム、プロフィール完成度。",
    genderedPricing: "性別による非対称な無料範囲。",
    repetitionLogic: "複数国・複数候補を並行探索できる設計。",
    platformStructure:
      "明示的な越境性を商品とした、グローバルマッチング市場。",
    risks: [
      "国境を越えた詐欺・ロマンス詐欺",
      "国籍・写真の虚偽",
      "ビザ・移住目的の不一致",
      "翻訳による誤解",
      "経済格差の利用",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "詐欺防止教育",
      "運営監視",
    ],
    whyItSurvived: [
      "越境恋愛の継続需要",
      "Cupid Mediaの多国展開",
      "国内アプリにないグローバル検索",
      "移住・留学・旅行との接続",
      "JapanCupid等の姉妹サービスとの連携",
    ],
    whatCameBefore: ["国際結婚仲介", "文通", "出会い系", "JapanCupid"],
    whatCameAfter: ["AI翻訳", "Bumble", "越境詐欺対策"],
    whatRemainsToday: [
      "グローバル検索",
      "国籍・地域",
      "翻訳",
      "越境恋愛",
    ],
    observation: [
      "InternationalCupidは、出会いを「国境を越えること」自体を商品にした。",
      "国内プールではなく、世界を候補の場所として提示する。",
      "ロマンス詐欺も、越境市場の影である。",
    ],
    relatedLayers: ["intimacy", "scam-folklore", "market-signals"],
    relatedObservationSlugs: ["long-distance-national-couple-visitation"],
    relatedArticleSlugs: [],
    relatedEncounterSlugs: ["japancupid", "bumble", "okcupid"],
    crossCategoryLinks: [
      {
        categoryId: "immediate-casual",
        note: "近さを売る即時型と、国境を売る越境型——スワイプ以前から存在した越境市場。",
        label: "即時・カジュアル型を見る",
      },
    ],
  },
];

export const INTERNATIONAL_USER_UNCERTAINTY = [
  "相手の国籍・言語・居住国の不確かさ",
  "翻訳を介した誤解",
  "ビザや移住条件の非可視性",
  "プロフィールの虚偽",
  "国境を越えた詐欺・勧誘",
  "相性スコアや規範への過信",
  "時差と距離による関係の非対称",
];

export const INTERNATIONAL_NORM_ITEMS = [
  {
    id: "women-first",
    title: "女性ファースト",
    paragraphs: [
      "異性愛デートモードでは、マッチ後に女性だけが最初のメッセージを送れる。",
      "誰が話し始めるか——その順序が、ハラスメントリスクの低減と、ブランドの「尊重」を同時に示す。",
    ],
  },
  {
    id: "global-pool",
    title: "グローバルプール",
    paragraphs: [
      "国内の大衆型が居住地・属性を中心に候補を配信するのに対し、国際型は国境を越えた候補へアクセスする。",
      "言語や文化の差は、プロフィール上では平坦化され得る。",
    ],
  },
  {
    id: "norm-as-product",
    title: "規範としての商品",
    paragraphs: [
      "Bumbleは、機能だけでなく、出会いのルールそのものを価値として提示した。",
      "利用者は候補だけでなく、「こうあるべき出会い」という規範も購入している。",
    ],
  },
  {
    id: "mode-expansion",
    title: "用途別モード",
    paragraphs: [
      "Date、BFF、Bizz——恋愛だけでなく、友情やビジネスネットワークも同じスワイプ形式で提供される。",
      "出会いの装置は、一つの欲望に限定されなくなった。",
    ],
  },
  {
    id: "translation",
    title: "翻訳という媒介",
    paragraphs: [
      "JapanCupidやInternationalCupidでは、翻訳機能が接触の前提になる。",
      "言語の壁は下がったように見える——だが、文化と生活の差までは翻訳されない。",
    ],
  },
  {
    id: "compatibility-score",
    title: "相性の数値化",
    paragraphs: [
      "OkCupidは、価値観を質問とスコアへ変換した。",
      "越境型は、国内の心理診断型（with）と、グローバルな相性計算を結びつける。",
    ],
  },
];

export const INTERNATIONAL_CROSS_BORDER_STEPS = [
  "アプリをダウンロードし、プロフィールを作成する",
  "位置・言語・距離の設定を選ぶ",
  "候補をスワイプし、相互マッチする",
  "規範に従い、最初のメッセージを送る",
  "言語の壁を翻訳・辞書で乗り越える",
  "メッセージから音声・ビデオ通話へ",
  "国境を越えて会うか、どちらかの生活圏へ移動する",
  "ビザ・制度・生活の差と向き合う",
];

export const INTERNATIONAL_LINEAGE_STEPS = [
  "国内の出会い系・掲示板",
  "国内大衆型マッチング",
  "スワイプ型グローバルアプリ",
  "規範付き国際型（女性ファースト等）",
  "翻訳・越境インフラ付きマッチング",
];

export const INTERNATIONAL_LINEAGE_TRANSFORMS = [
  { from: "居住地中心", to: "グローバルプール" },
  { from: "国内の恋活・婚活", to: "国際的な出会い" },
  { from: "誰でもメッセージ", to: "女性ファースト" },
  { from: "プロフィール閲覧", to: "スワイプ＋規範" },
  { from: "偶然の近さ", to: "意図的な越境" },
  { from: "接触の可能性", to: "尊重という体験" },
];

export const INTERNATIONAL_VS_MASS_MARKET = {
  international: {
    label: "国際・越境型",
    labelEn: "International and cross-border",
    items: [
      "グローバルな候補プール",
      "国境・言語・文化を越える",
      "規範を商品として提示",
      "女性ファースト等の設計",
      "尊重・安全という語彙",
      "ビザ・移住の非可視性",
      "翻訳を介した接触",
      "国内制度から距離がある",
      "ブランドとしての越境性",
      "グローバルプールへのアクセスを売る",
    ],
  },
  massMarket: {
    label: "日本の大衆型",
    labelEn: "Mass-market matching",
    items: [
      "国内の候補プール",
      "居住地・属性が中心",
      "恋活・婚活として説明",
      "相互マッチ後に対等にメッセージ",
      "価値観・相性の語彙",
      "独身証明・年収等の国内文脈",
      "メッセージで関係構築",
      "社会的に説明しやすい",
      "国内ブランドとして定着",
      "関係の可能性を売る",
    ],
  },
};

export const INTERNATIONAL_DESIRE_FRAMES = [
  { frame: "尊重", description: "ハラスメントを減らす規範としての出会い" },
  { frame: "国際的", description: "国内の候補プールを越えた接触" },
  { frame: "自分らしさ", description: "既存の恋愛規範から距離を取った関係" },
  { frame: "安全", description: "本人確認と設計による信頼の演出" },
  { frame: "越境", description: "国籍・言語・文化の差をまたぐ出会い" },
  { frame: "グローバル", description: "世界規模の候補へアクセスする感覚" },
  { frame: "相性", description: "質問とスコアで測られる価値観の一致" },
  { frame: "異文化", description: "日本と世界、または国と国の間の恋愛" },
];
