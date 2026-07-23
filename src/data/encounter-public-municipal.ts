import type { EncounterRecord } from "@/types/encounter-classics";

export const PUBLIC_MUNICIPAL_CATEGORY_ID = "public-municipal";

export const PUBLIC_MUNICIPAL_RECORDS: EncounterRecord[] = [
  {
    slug: "tokyo-enmusubi",
    name: "TOKYO縁結び",
    englishName: "TOKYO Futari Story AI Matching",
    era: "2020年代から現在",
    status: "active",
    categoryId: PUBLIC_MUNICIPAL_CATEGORY_ID,
    displayOrder: 1,
    timelineEraId: "ai-municipal",
    summary:
      "東京都が運営するAIマッチング。独身証明・本人確認・面談を通過した利用者同士を、価値観診断にもとづいて結びつける。通信を介した出会いが、行政運営の社会基盤へ移行した例。",
    interface: [
      "Webプラットフォーム",
      "価値観診断",
      "AI推薦",
      "独身証明書",
      "本人確認",
      "収入・学歴情報",
      "面談",
      "メッセージ",
    ],
    entryCondition:
      "独身証明、本人確認、必要書類の提出、面談を経て、都の基準を満たす利用者として登録される。",
    timeStructure:
      "診断と書類審査に時間を要する。マッチングはAI推薦により段階的に提示される。",
    geographicStructure:
      "原則として東京都内の独身者を対象とする。生活圏と行政区が前提となる。",
    identityStructure:
      "公的証明書、収入・学歴、価値観診断結果、面談記録。匿名性は民間アプリより低い。",
    whatItPromised:
      "本人確認された環境で、価値観の合う結婚相手と出会うこと。",
    whatItActuallySold:
      "出会いの安全性と正当性を、行政と制度に保証してもらえる感覚。",
    whoWasVisible:
      "独身証明、本人確認、収入情報、面談などの条件を通過できる利用者。",
    whoRemainedInvisible:
      "証明書を準備できない人、制度への参加を避ける人、結婚以外の親密性を求める人、都外居住者。",
    howChanceWasProduced:
      "価値観診断とAI推薦によって候補を提示する。偶然より、制度設計された出会い。",
    howTrustWasProduced:
      "公的証明書、本人確認、面談、東京都の運営という権威。",
    howDesireWasFramed: "結婚支援、少子化対策、安心できる出会い、都の支援。",
    paymentLogic:
      "民間サービスよりも、制度参加費や運営コストに近い設計。利用者負担は相対的に低い。",
    contactLogic:
      "AI推薦後、双方の同意を経てメッセージ。事前の書類・面談が接触の前提。",
    matchingRequirement:
      "AI推薦と双方の同意。独身証明等の条件を満たした利用者同士。",
    visibilityLogic:
      "書類審査と面談を通過した利用者のみが候補プールに入る。",
    genderedPricing:
      "性別による料金差は設けにくい。参加条件は制度的・中立的に設計される。",
    repetitionLogic:
      "結婚相手探しとして、推薦を受け続けられる。都の政策目的上、継続利用が想定される。",
    platformStructure:
      "行政が運営する、書類とAIを介した結婚支援インフラ。",
    risks: [
      "個人情報の管理",
      "AI推薦の不透明性",
      "結婚以外の関係意図との不一致",
      "書類準備の負担",
      "期待と現実のギャップ",
    ],
    safetyMechanisms: [
      "独身証明",
      "本人確認",
      "面談",
      "行政運営",
      "通報・相談窓口",
    ],
    whyItSurvived: [
      "東京都の人口政策・少子化対策",
      "民間アプリへの不信",
      "公的保証という信頼",
      "無料または低コスト",
      "結婚支援という社会的正当性",
    ],
    whatCameBefore: [
      "自治体婚活イベント",
      "結婚相談所",
      "仲人",
      "地域のお見合い",
      "Pairs",
      "テレクラ",
    ],
    whatMayComeAfter: [
      "自治体間データ連携",
      "AI仲人の高度化",
      "ライフプランと統合された人口政策",
      "全国展開型の行政マッチング",
    ],
    whatRemainsToday: [
      "独身証明",
      "AI推薦",
      "価値観診断",
      "行政運営",
      "結婚支援という語彙",
      "人口政策との接続",
    ],
    observation: [
      "かつて通信を介した出会いは、猥雑さや危険性を伴う境界産業として扱われた。",
      "現在、その一部は行政が運営する社会基盤へ変わっている。",
      "テレクラが規制の対象だったとすれば、行政マッチングは人口政策の一部である。欲望そのものが変わったのではなく、欲望を包む制度と語彙が変わった。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: [
      "marriage-for-economic-stability",
      "japan-selective-separate-surname-debate",
    ],
    relatedArticleSlugs: [
      "what-value-remains-in-marriage",
      "family-and-surname-are-they-the-same",
    ],
    relatedEncounterSlugs: ["pairs", "telephone-club", "with", "prefecture-ai-matching", "regional-konkatsu-support"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "民間の恋活・婚活市場から、行政が運営する結婚支援インフラへ。",
        label: "日本の大衆型マッチングを見る",
      },
      {
        categoryId: "vanished-systems",
        note: "テレクラが規制の対象だった時代から、出会いが人口政策の一部になった。",
        label: "消えた出会いの装置を見る",
      },
    ],
  },
  {
    slug: "prefecture-ai-matching",
    name: "自治体AIマッチング",
    englishName: "Prefectural AI Matching",
    era: "2020年代から現在",
    status: "active",
    categoryId: PUBLIC_MUNICIPAL_CATEGORY_ID,
    displayOrder: 2,
    timelineEraId: "ai-municipal",
    summary:
      "茨城県・福島県・神奈川県など、都道府県が独自に運営するAI婚活・マッチング。TOKYO縁結びのモデルを地方に展開し、居住者限定の候補プールと公的書類を組み合わせる。",
    interface: [
      "Webプラットフォーム",
      "価値観診断",
      "AI推薦",
      "独身証明書",
      "本人確認",
      "面談・説明会",
      "メッセージ",
      "県内居住限定",
    ],
    entryCondition:
      "当該都道府県の居住者として、独身証明・本人確認・必要書類を提出し、登録基準を満たす。",
    timeStructure:
      "診断と書類審査に時間を要する。AI推薦は段階的に提示される。",
    geographicStructure:
      "都道府県内の居住者に限定。県境が候補プールの境界になる。",
    identityStructure:
      "公的証明書、価値観診断、面談記録——都モデルに準じた身元構造。",
    whatItPromised:
      "県が支援する、安心できる結婚相手探し。",
    whatItActuallySold:
      "都道府県レベルの公的保証と、居住者限定のAI候補プール。",
    whoWasVisible:
      "県内居住者で、書類と面談を通過できる利用者。",
    whoRemainedInvisible:
      "県外居住者、書類を準備できない人、結婚以外の親密性を求める人。",
    howChanceWasProduced:
      "価値観診断とAI推薦。偶然より、政策設計された出会い。",
    howTrustWasProduced:
      "県の運営、独身証明、面談、TOKYO縁結びとの連続性。",
    howDesireWasFramed: "結婚支援、少子化対策、県の支援、地域の安心。",
    paymentLogic:
      "無料または低コスト。都道府県予算による運営。",
    contactLogic:
      "AI推薦後、双方の同意を経てメッセージ。",
    matchingRequirement: "AI推薦と双方の同意。県内居住・独身証明が前提。",
    visibilityLogic: "書類審査を通過した県内居住者のみ。",
    genderedPricing: "性別による料金差は設けにくい。",
    repetitionLogic: "結婚相手探しとして推薦を受け続けられる。",
    platformStructure:
      "都道府県が運営する、居住者限定のAI結婚支援インフラ。",
    risks: [
      "個人情報の県データ管理",
      "AI推薦の不透明性",
      "県外との出会いの制限",
      "書類準備の負担",
      "都との格差",
    ],
    safetyMechanisms: [
      "独身証明",
      "本人確認",
      "面談",
      "県庁運営",
      "相談窓口",
    ],
    whyItSurvived: [
      "TOKYO縁結びの成功モデル",
      "地方の未婚化・少子化対策",
      "民間アプリへの不信",
      "予算配分による政策展開",
    ],
    whatCameBefore: [
      "自治体婚活イベント",
      "TOKYO縁結び",
      "結婚相談所",
      "Pairs",
    ],
    whatMayComeAfter: [
      "道府県間連携",
      "全国統一プラットフォーム",
      "AI仲人の高度化",
    ],
    whatRemainsToday: [
      "県内限定",
      "AI推薦",
      "独身証明",
      "地方版都モデル",
    ],
    observation: [
      "自治体AIマッチングは、TOKYO縁結びを地方へ複製した。",
      "出会いの単位が、全国から都道府県へ縮小された。",
      "県境の内側だけが、結婚支援の対象になる。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: ["marriage-for-economic-stability"],
    relatedEncounterSlugs: ["tokyo-enmusubi", "pairs", "regional-konkatsu-support"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "全国規模の民間プールから、県内限定の行政プールへ。",
        label: "日本の大衆型マッチングを見る",
      },
    ],
  },
  {
    slug: "regional-konkatsu-support",
    name: "地域婚活支援",
    englishName: "Regional Konkatsu Support",
    era: "2000年代から現在",
    status: "active",
    categoryId: PUBLIC_MUNICIPAL_CATEGORY_ID,
    displayOrder: 3,
    timelineEraId: "ai-municipal",
    summary:
      "市区町村が主催する婚活イベント、相談窓口、補助金、お見合い支援など、AI以前から続く地域型の結婚支援インフラ。対面と地域コミュニティを軸に、出会いを行政が仲介する。",
    interface: [
      "婚活イベント",
      "お見合いパーティ",
      "相談窓口",
      "Web掲示・申込",
      "補助金・助成",
      "地域限定",
      "職員・ボランティア",
    ],
    entryCondition:
      "当該市区町村の居住者または対象年齢の独身者として、イベント・支援に申し込む。",
    timeStructure:
      "イベント日時が決まっている。申込から対面まで、行政スケジュールに沿う。",
    geographicStructure:
      "市区町村・生活圏に限定。地元で会うことが前提。",
    identityStructure:
      "年齢、居住地、職業——イベント票と申込書に記載される属性。",
    whatItPromised:
      "地域で、安心して結婚相手と出会える機会。",
    whatItActuallySold:
      "行政が保証する対面の場と、地域コミュニティへの接続。",
    whoWasVisible:
      "居住地・年齢条件を満たし、イベントに参加できる独身者。",
    whoRemainedInvisible:
      "イベント形式が合わない人、地域外居住者、結婚以外の親密性を求める人。",
    howChanceWasProduced:
      "イベント集客、お見合いの席次、職員の仲介。",
    howTrustWasProduced:
      "自治体の名義、会場の公共性、職員の存在、補助金。",
    howDesireWasFramed: "地域婚活、少子化対策、安心、地元での出会い。",
    paymentLogic:
      "無料または低額参加費。自治体予算・補助金。",
    contactLogic:
      "イベント内の対面、お見合い、相談窓口経由の紹介。",
    matchingRequirement: "イベント参加と、双方の申込・同意。",
    visibilityLogic: "居住地・年齢等の条件を満たす者のみ参加可能。",
    genderedPricing: "性別による参加条件の調整（男女比）がある。",
    repetitionLogic: "複数イベントへの参加、相談所の継続利用。",
    platformStructure:
      "市区町村が運営する、対面中心の地域婚活インフラ。",
    risks: [
      "イベント形式への不適合",
      "少人数による選択肢の限定",
      "地域の同質性",
      "期待と現実のギャップ",
    ],
    safetyMechanisms: [
      "公共会場",
      "職員の立会",
      "本人確認（イベントによる）",
      "相談窓口",
    ],
    whyItSurvived: [
      "AI以前からの自治体婚活の伝統",
      "対面を重視する層の需要",
      "デジタルデバイドへの配慮",
      "TOKYO縁結びとの補完関係",
      "地域コミュニティの維持",
    ],
    whatCameBefore: [
      "お見合い",
      "自治体合コン",
      "結婚相談所",
      "仲人",
    ],
    whatMayComeAfter: [
      "AIイベントとのハイブリッド",
      "オンライン婚活との統合",
    ],
    whatRemainsToday: [
      "婚活イベント",
      "地域限定",
      "対面",
      "行政仲介",
    ],
    observation: [
      "地域婚活支援は、出会いを「地域コミュニティ」の中に置いた。",
      "AIマッチングが画面の中で完結するのに対し、ここでは市役所と会場が装置になる。",
      "TOKYO縁結び以前から、結婚支援はすでに行政の仕事だった。",
    ],
    relatedLayers: ["intimacy", "clean-society", "market-signals"],
    relatedObservationSlugs: ["marriage-for-economic-stability"],
    relatedEncounterSlugs: ["tokyo-enmusubi", "prefecture-ai-matching", "bridal-net"],
    crossCategoryLinks: [
      {
        categoryId: "marriage-identity-specific",
        note: "民間の本気婚活（ブライダルネット等）と、行政の地域婚活——形式は異なり、結婚前提は共有する。",
        label: "婚活・属性特化型を見る",
      },
    ],
  },
];

export const PUBLIC_USER_UNCERTAINTY = [
  "AI推薦の根拠の不透明さ",
  "書類準備の負担と参加障壁",
  "結婚以外の関係意図との不一致",
  "個人情報の行政データとしての管理",
  "期待と現実のギャップ",
  "都道府県・市区町村による支援格差",
  "デジタルと対面の二層構造",
];

export const PUBLIC_INSTITUTION_ITEMS = [
  {
    id: "documents",
    title: "書類という入口",
    paragraphs: [
      "独身証明、本人確認、収入・学歴——接触の前に、公的書類が関門になる。",
      "民間アプリが写真とプロフィールで始まるのに対し、行政型は制度を通過した者だけが候補プールに入る。",
    ],
  },
  {
    id: "ai-matching",
    title: "AI推薦",
    paragraphs: [
      "価値観診断の結果をもとに、AIが相性のよい相手を推薦する。",
      "偶然ではなく、計算された出会い——ただし、その計算の根拠は利用者には完全には見えない。",
    ],
  },
  {
    id: "interview",
    title: "面談",
    paragraphs: [
      "書類だけでは足りない。面談によって、利用者の意図と適性が確認される。",
      "出会いの前に、行政が「結婚を望む適格者」かどうかを見る。",
    ],
  },
  {
    id: "authority",
    title: "行政という権威",
    paragraphs: [
      "東京都が運営する——その事実自体が、信頼の根拠になる。",
      "民間サービスがブランドで信頼を売るのに対し、行政型は制度と権威を売る。",
    ],
  },
  {
    id: "prefectural-scale",
    title: "都道府県へ複製",
    paragraphs: [
      "TOKYO縁結びの成功は、茨城・福島・神奈川などへ展開された。",
      "出会いの単位が全国から都道府県へ縮小され、県境が候補プールの境界になる。",
    ],
  },
  {
    id: "regional-events",
    title: "地域の対面",
    paragraphs: [
      "AIマッチング以前から、市区町村の婚活イベントと相談窓口は存在した。",
      "画面の中だけでなく、市役所と公共会場が、出会いの装置として機能する。",
    ],
  },
];

export const PUBLIC_PARTICIPATION_STEPS = [
  "居住地（都・県・市）の独身者として申し込む",
  "独身証明書を取得・提出する",
  "本人確認書類を提出する",
  "価値観診断またはイベント申込を行う",
  "面談または婚活イベントに参加する",
  "AI推薦または対面で候補と出会う",
  "双方の同意を経て連絡を交わす",
  "結婚支援の文脈で関係を進める",
];

export const PUBLIC_LINEAGE_STEPS = [
  "仲人・お見合い",
  "自治体婚活イベント",
  "民間結婚相談所",
  "大衆型マッチングアプリ",
  "都のAI婚活（TOKYO縁結び）",
  "道府県AIマッチング",
];

export const PUBLIC_LINEAGE_TRANSFORMS = [
  { from: "民間の接触市場", to: "行政の結婚支援" },
  { from: "写真とプロフィール", to: "独身証明と面談" },
  { from: "恋活・婚活", to: "少子化対策" },
  { from: "月額課金", to: "制度参加" },
  { from: "境界産業", to: "社会基盤" },
  { from: "個人の欲望", to: "人口政策" },
];

export const PUBLIC_VS_MASS_MARKET = {
  publicMunicipal: {
    label: "公共・行政型",
    labelEn: "Public and municipal",
    items: [
      "行政が運営",
      "独身証明・面談が前提",
      "結婚支援・少子化対策",
      "AI推薦と価値観診断",
      "公的保証という信頼",
      "参加障壁が高い",
      "都・自治体の居住者が対象",
      "無料または低コスト",
      "結婚以外の意図は不可視",
      "制度参加権を売る",
    ],
  },
  massMarket: {
    label: "日本の大衆型",
    labelEn: "Mass-market matching",
    items: [
      "民間企業が運営",
      "写真とプロフィールで開始",
      "恋活・婚活として説明",
      "相互マッチとメッセージ",
      "ブランドと本人確認",
      "比較的低い参加障壁",
      "国内の広い利用者層",
      "月額・ポイント課金",
      "カジュアルな利用も存在",
      "関係の可能性を売る",
    ],
  },
};

export const PUBLIC_DESIRE_FRAMES = [
  { frame: "結婚支援", description: "行政が支援する、安心できる結婚相手探し" },
  { frame: "少子化対策", description: "社会課題としての未婚化への応答" },
  { frame: "公的保証", description: "行政が背書きする出会いの安全性" },
  { frame: "価値観", description: "相性と価値観の一致をAIが計算" },
  { frame: "適格者", description: "書類と面談を通過した者同士の接触" },
  { frame: "都民・県民", description: "行政区画内の生活者としての参加" },
  { frame: "地域", description: "市区町村のイベントとコミュニティ" },
];
