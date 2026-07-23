import type { EncounterRecord } from "@/types/encounter-classics";

export const LEGACY_CATEGORY_ID = "legacy-dating-services";

export const LEGACY_ENCOUNTER_RECORDS: EncounterRecord[] = [
  {
    slug: "happy-mail",
    name: "ハッピーメール",
    englishName: "Happy Mail",
    era: "2000年代から現在",
    status: "active",
    categoryId: LEGACY_CATEGORY_ID,
    displayOrder: 1,
    timelineEraId: "dating-sites",
    summary:
      "掲示板、プロフィール検索、メッセージ、ポイント課金を中心に、携帯電話時代から継続する大規模な出会い系サービス。",
    interface: [
      "Webサイト",
      "モバイルサイト",
      "アプリ",
      "掲示板",
      "プロフィール",
      "メッセージ",
      "地域検索",
      "ポイント",
    ],
    entryCondition:
      "アカウントを作成し、プロフィールを設定し、掲示板投稿や検索、メッセージ送信を行う。",
    timeStructure:
      "非同期型だが、地域検索や募集投稿によって即時的な接触も生まれる。",
    geographicStructure:
      "地域、都道府県、近隣エリアなどを手がかりに、生活圏に近い相手を探す。",
    identityStructure:
      "ハンドルネーム、年齢、地域、目的、自己紹介、写真などを自己申告し、必要な本人確認を経て利用する。",
    whatItPromised:
      "日常では出会えない相手と、目的や地域に応じてつながれること。",
    whatItActuallySold:
      "プロフィールを閲覧し、メッセージを送り、反応を得られるかもしれない接触可能性。",
    whoWasVisible:
      "プロフィールを作成し、掲示板へ投稿し、検索結果に表示される利用者。",
    whoRemainedInvisible:
      "閲覧だけする利用者、複数の目的を使い分ける人、プロフィールでは表現されない生活背景や感情。",
    howChanceWasProduced:
      "新着投稿、地域、利用目的、検索条件、オンライン状態などから候補が提示される。",
    howTrustWasProduced:
      "本人確認、プロフィール、写真、メッセージの継続、運営による監視や通報機能。",
    howDesireWasFramed:
      "恋人、友達、遊び、食事、会話、暇つぶし、今から会うこと。",
    paymentLogic:
      "主にポイントを消費しながら、閲覧やメッセージ送信などの行動を進める設計。",
    contactLogic:
      "互いのマッチ成立を待たず、一方から直接接触できる。",
    matchingRequirement:
      "原則として、スワイプ型アプリのような相互マッチを会話開始の必須条件にしない。",
    visibilityLogic:
      "掲示板投稿、新着表示、検索条件、プロフィール充実度などが発見可能性を左右する。",
    genderedPricing:
      "性別によって、利用料金や無料範囲が異なる設計が採用される場合がある。",
    repetitionLogic:
      "特定の相手との関係成立後に必ず退会する設計ではなく、新しい接触を求めて繰り返し利用できる。",
    platformStructure:
      "一回限りの紹介ではなく、投稿、検索、閲覧、接触が継続的に循環する市場型プラットフォーム。",
    risks: [
      "属性や目的の虚偽",
      "業者的な勧誘",
      "投資、商材、別サービスへの誘導",
      "個人情報の交換",
      "待ち合わせ時のトラブル",
      "年齢や関係目的の不一致",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "ガイドライン",
      "不適切投稿の削除",
    ],
    whyItSurvived: [
      "携帯電話時代から継続した認知",
      "掲示板と検索を組み合わせた自由度",
      "マッチ成立を必要としない接触",
      "地域と目的を直接指定できる",
      "月額契約ではなく行動単位で使える課金",
      "Webサービスとして長期間運営できる構造",
    ],
    whatCameBefore: [
      "スタービーチ",
      "テレクラ",
      "雑誌の恋人募集欄",
      "メル友掲示板",
      "携帯電話向け掲示板",
    ],
    whatCameAfter: [
      "スワイプ型マッチングアプリ",
      "位置情報型アプリ",
      "AI推薦",
      "本人確認型恋活・婚活サービス",
    ],
    whatRemainsToday: [
      "掲示板",
      "地域検索",
      "ポイント課金",
      "直接メッセージ",
      "匿名的プロフィール",
      "即時募集",
    ],
    observation: [
      "ハッピーメールでは、誰かとマッチすることよりも、誰かへ接触できることが先にある。",
      "利用者は候補者から選ばれるのを待つだけではなく、掲示板を読み、自分からメッセージを送り、反応が返ってくる可能性にポイントを使う。",
      "ここでは、出会いは結果ではなく、細かく分割された行動として販売される。",
    ],
    relatedLayers: [
      "intimacy",
      "clean-society",
      "scam-folklore",
      "market-signals",
      "body-meaning",
    ],
    relatedObservationSlugs: [
      "romance-scam-ai-voice-cloning-2026",
      "elder-targeted-ai-romance-fraud",
    ],
    relatedArticleSlugs: ["the-one-who-understands-you-most"],
    relatedEncounterSlugs: ["star-beach", "telephone-club", "tinder", "pcmax"],
    crossCategoryLinks: [
      {
        categoryId: "mass-market-matching",
        note: "掲示板とポイント課金の時代から、プロフィールカードと相互マッチへ。",
        label: "日本の大衆型マッチングを見る",
      },
    ],
  },
  {
    slug: "pcmax",
    name: "PCMAX",
    englishName: "PCMAX",
    era: "2000年代から現在",
    status: "active",
    categoryId: LEGACY_CATEGORY_ID,
    displayOrder: 2,
    timelineEraId: "dating-sites",
    summary:
      "掲示板、プロフィール、地域検索、メッセージなどを組み合わせ、直接的な接触と即時性を重視してきた出会い系サービス。",
    interface: [
      "Webサイト",
      "モバイル",
      "アプリ",
      "掲示板",
      "プロフィール",
      "メッセージ",
      "写真",
      "ポイント",
    ],
    entryCondition:
      "プロフィールを登録し、検索、掲示板閲覧、投稿、メッセージ送信を行う。",
    timeStructure:
      "投稿と返信を中心とした非同期型だが、同じ時間帯に利用する人同士の即時的な接触も起きる。",
    geographicStructure:
      "地域や利用目的を手がかりに、現実の待ち合わせ可能圏へ接続する。",
    identityStructure:
      "ニックネーム、年齢、地域、写真、目的、自己紹介などで構成される。",
    whatItPromised: "近くにいる、目的の合う相手へ、自分から接触できること。",
    whatItActuallySold:
      "相手のプロフィールを開き、メッセージを送り、会話が始まる可能性にアクセスする権利。",
    whoWasVisible:
      "掲示板へ投稿する人、プロフィールを公開する人、検索条件に合致する人。",
    whoRemainedInvisible:
      "投稿をせずに閲覧する人、プロフィールとは異なる目的を持つ人、複数の役割を使い分ける人。",
    howChanceWasProduced:
      "新着順、地域、目的、掲示板カテゴリ、プロフィール検索による候補の発見。",
    howTrustWasProduced:
      "プロフィール情報、本人確認、写真、会話の継続、通報やブロック機能。",
    howDesireWasFramed:
      "今から会う、食事、友達、恋愛、大人の関係、暇つぶしなど複数の目的。",
    paymentLogic: "接触や閲覧行動の一部にポイントを消費する設計。",
    contactLogic:
      "相互承認よりも、利用者の一方向のメッセージから接触が始まる。",
    matchingRequirement:
      "事前の相互マッチを必須にせず、検索結果や掲示板から直接メッセージを送れる。",
    visibilityLogic:
      "投稿の新しさ、地域、目的、検索条件が、誰に発見されるかを決める。",
    genderedPricing:
      "性別によって利用条件や課金範囲が異なる場合がある。",
    repetitionLogic:
      "会話が終わったあとも、再び掲示板へ戻り、別の接触を開始できる。",
    platformStructure:
      "個別の相手を紹介する相談所型ではなく、多数の利用者が常時出入りする市場型。",
    risks: [
      "目的の不一致",
      "外部サイトや連絡手段への誘導",
      "金銭や投資に関する勧誘",
      "個人情報の過剰な共有",
      "対面時の安全",
      "プロフィール情報の誤認",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "監視",
      "注意喚起",
      "不適切利用への対応",
    ],
    whyItSurvived: [
      "掲示板型の即時性",
      "自分から接触できる自由",
      "長期契約を前提にしない課金",
      "地域と目的を直接探せる",
      "Web文化からアプリ時代へ適応した",
      "恋愛だけに限定しない利用目的",
    ],
    whatCameBefore: [
      "スタービーチ",
      "テレクラ",
      "ツーショットダイヤル",
      "出会い掲示板",
      "メル友文化",
    ],
    whatCameAfter: [
      "スワイプ型アプリ",
      "即日デート機能",
      "位置情報推薦",
      "AIによる目的推定",
    ],
    whatRemainsToday: [
      "掲示板",
      "地域",
      "新着順",
      "直接接触",
      "ポイント消費",
      "多目的な出会い",
    ],
    observation: [
      "PCMAXの構造では、相性よりも接触の速度が先に置かれる。",
      "誰と長期的に合うかを計算するのではなく、今、誰がいて、誰へ連絡できるかが重要になる。",
      "これはテレクラの着信待ちを、検索可能な掲示板へ変えたものでもある。",
    ],
    relatedLayers: [
      "intimacy",
      "clean-society",
      "scam-folklore",
      "market-signals",
    ],
    relatedEncounterSlugs: ["telephone-club", "star-beach", "happy-mail", "wakuwaku-mail"],
  },
  {
    slug: "wakuwaku-mail",
    name: "ワクワクメール",
    englishName: "Wakuwaku Mail",
    era: "2000年代から現在",
    status: "active",
    categoryId: LEGACY_CATEGORY_ID,
    displayOrder: 3,
    timelineEraId: "dating-sites",
    summary:
      "プロフィール、掲示板、日記的投稿、メッセージなどを通じて、出会いとコミュニティ的な滞在を組み合わせたサービス。",
    interface: [
      "Webサイト",
      "モバイル",
      "アプリ",
      "プロフィール",
      "掲示板",
      "メッセージ",
      "投稿機能",
      "ポイント",
    ],
    entryCondition:
      "プロフィールを登録し、相手を検索するか、掲示板や投稿から接触する。",
    timeStructure:
      "即時的な募集と、投稿を通じた継続的な観察の両方を持つ。",
    geographicStructure:
      "地域検索を利用し、オンライン上の交流を現実の生活圏へつなぐ。",
    identityStructure:
      "ニックネーム、地域、年齢、目的、写真、投稿履歴などが人物像を構成する。",
    whatItPromised:
      "気軽な会話から実際の出会いまで、自分のペースで関係を始められること。",
    whatItActuallySold:
      "直接メッセージだけでなく、相手の投稿や活動を観察しながら、接触のタイミングを選べる環境。",
    whoWasVisible:
      "投稿を続ける人、プロフィールを更新する人、掲示板に現れる人。",
    whoRemainedInvisible:
      "閲覧だけする人、複数の人格を演じる人、投稿と実生活が一致しない人。",
    howChanceWasProduced:
      "掲示板、新着、検索、日記的投稿、足跡や反応などによって偶然の発見を作る。",
    howTrustWasProduced:
      "継続的な投稿、プロフィール、本人確認、メッセージ履歴、サービス内での活動の蓄積。",
    howDesireWasFramed:
      "恋愛、友達、会話、日常共有、遊び、地域交流。",
    paymentLogic: "メッセージや一部機能の利用にポイントを消費する。",
    contactLogic:
      "直接連絡に加え、公開投稿やプロフィール観察を経て接触できる。",
    matchingRequirement:
      "相互マッチがなくても、投稿や検索を起点に会話を始められる。",
    visibilityLogic:
      "検索結果だけでなく、投稿頻度や活動の継続が可視性につながる。",
    genderedPricing:
      "性別による利用条件の非対称が設けられる場合がある。",
    repetitionLogic:
      "一度の出会いだけでなく、投稿、閲覧、会話のためにサービスへ滞在し続けられる。",
    platformStructure:
      "マッチング機能とSNS的な滞在機能の中間に位置する。",
    risks: [
      "投稿から生活情報が推測される",
      "目的の異なる相手との接触",
      "外部連絡先への誘導",
      "金銭的な勧誘",
      "長期的な監視や執着",
      "実像と投稿人格の不一致",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "投稿監視",
      "不適切コンテンツ対応",
      "注意喚起",
    ],
    whyItSurvived: [
      "掲示板だけでなく滞在型の投稿機能を持つ",
      "相手をすぐ選ばず観察できる",
      "恋愛以外の軽い交流にも利用できる",
      "地域性とコミュニティ性を両立する",
      "スワイプ疲れとは異なる利用感",
      "長期間の利用習慣が形成される",
    ],
    whatCameBefore: [
      "メル友掲示板",
      "個人ホームページ",
      "日記サイト",
      "スタービーチ",
      "チャットコミュニティ",
    ],
    whatCameAfter: [
      "SNS経由の出会い",
      "コミュニティ型マッチング",
      "趣味投稿型アプリ",
      "AIによる投稿分析",
    ],
    whatRemainsToday: [
      "公開投稿",
      "日記的自己表現",
      "足跡",
      "地域検索",
      "直接メッセージ",
      "プロフィールの蓄積",
    ],
    observation: [
      "ワクワクメールでは、プロフィールは一枚のカードだけではない。",
      "投稿や活動履歴が積み重なり、相手は時間をかけて観察される。",
      "文通が手紙の継続によって相手を可視化したように、ここでは投稿の継続が人物像を作る。",
    ],
    relatedLayers: [
      "intimacy",
      "body-meaning",
      "clean-society",
      "vanishing-life",
      "market-signals",
    ],
    relatedEncounterSlugs: ["pen-pal", "star-beach", "happy-mail", "ikukuru"],
  },
  {
    slug: "ikukuru",
    name: "イククル",
    englishName: "Ikukuru",
    era: "2000年代から現在",
    status: "active",
    categoryId: LEGACY_CATEGORY_ID,
    displayOrder: 4,
    timelineEraId: "dating-sites",
    summary:
      "地域、プロフィール、掲示板、メッセージを用いて、幅広い目的の接触を支える老舗出会い系サービス。",
    interface: [
      "Webサイト",
      "モバイル",
      "アプリ",
      "掲示板",
      "プロフィール",
      "メッセージ",
      "地域検索",
      "ポイント",
    ],
    entryCondition:
      "登録後、地域や目的で検索し、掲示板への投稿または直接メッセージを行う。",
    timeStructure:
      "即時的な募集と、時間を置いたメッセージ交換を併せ持つ。",
    geographicStructure:
      "都道府県や生活圏を起点に、オンライン上の候補を現実の距離へ変換する。",
    identityStructure:
      "ニックネーム、地域、年齢、目的、自己紹介、写真などで構成される。",
    whatItPromised:
      "近くにいる、目的の合う相手を見つけ、直接会話を始められること。",
    whatItActuallySold:
      "検索と投稿を繰り返しながら、接触の候補を絶えず更新できる環境。",
    whoWasVisible:
      "検索条件に合う人、掲示板へ投稿する人、プロフィールを公開する人。",
    whoRemainedInvisible:
      "活動を止めている人、閲覧専用の人、プロフィール以外の生活や関係性。",
    howChanceWasProduced:
      "地域、目的、新着投稿、プロフィール検索によって候補を表示する。",
    howTrustWasProduced:
      "本人確認、プロフィール、メッセージの応答、通報やブロック。",
    howDesireWasFramed:
      "恋人、友達、会話、食事、遊び、地域での接触。",
    paymentLogic: "行動に応じてポイントを使用する設計。",
    contactLogic:
      "マッチを待たず、検索または投稿から直接会話を開始する。",
    matchingRequirement: "双方の事前承認を必須にしない。",
    visibilityLogic:
      "新着性、投稿、地域、検索条件が表示機会を決める。",
    genderedPricing:
      "性別により課金条件が異なる場合がある。",
    repetitionLogic:
      "出会いが成立しなくても、検索、投稿、メッセージを繰り返すことで利用が継続する。",
    platformStructure:
      "関係成立の成功報酬ではなく、接触行動の連続によって収益が生まれる。",
    risks: [
      "目的の虚偽",
      "不適切な勧誘",
      "個人情報交換",
      "対面時のトラブル",
      "年齢や属性の不一致",
      "外部サービスへの誘導",
    ],
    safetyMechanisms: [
      "本人確認",
      "通報",
      "ブロック",
      "運営監視",
      "利用規約",
      "注意喚起",
    ],
    whyItSurvived: [
      "地域検索による具体性",
      "直接接触できる自由度",
      "ポイント課金による短期利用",
      "掲示板の即時性",
      "恋愛や結婚だけに限定しない",
      "長期間認知されているサービス形式",
    ],
    whatCameBefore: [
      "スタービーチ",
      "テレクラ",
      "携帯掲示板",
      "メル友募集",
      "雑誌広告",
    ],
    whatCameAfter: [
      "即時デート機能",
      "位置情報マッチング",
      "AIプロフィール",
      "自動会話支援",
    ],
    whatRemainsToday: [
      "地域検索",
      "掲示板",
      "ポイント課金",
      "直接メッセージ",
      "多目的利用",
      "匿名的な接触",
    ],
    observation: [
      "イククルでは、出会いは一度だけ成立するイベントではない。",
      "検索し、投稿し、メッセージを送り、反応を待つ。その小さな循環が何度も繰り返される。",
      "この反復性こそが、老舗出会い系を単なる過去のサービスにしなかった。",
    ],
    relatedLayers: [
      "intimacy",
      "clean-society",
      "scam-folklore",
      "market-signals",
    ],
    relatedEncounterSlugs: ["star-beach", "happy-mail", "wakuwaku-mail"],
  },
];

export const LEGACY_USER_UNCERTAINTY = [
  "プロフィールの虚偽",
  "目的の不一致",
  "相手の生活背景が分からないこと",
  "自己申告属性と対面時の現実のずれ",
  "接触の意図が読み取れないこと",
];

export const LEGACY_POINT_ECONOMY_STEPS = [
  "候補者を探す",
  "プロフィールを開く",
  "写真や投稿を見る",
  "メッセージを送る",
  "返信を待つ",
  "追加情報を見る",
  "会話を継続する",
  "外部または対面へ移動する",
];

export const LEGACY_BULLETIN_ITEMS = [
  {
    id: "no-match-wait",
    title: "マッチを待たなくてよい",
    paragraphs: [
      "スワイプ型アプリでは、互いに好意を示すまで会話が始まらない。",
      "掲示板型では、投稿を見た側がそのままメッセージを送れる。",
      "接触の主導権は、アルゴリズムだけでなく利用者にも残されている。",
    ],
  },
  {
    id: "purpose-first",
    title: "目的を先に書ける",
    paragraphs: [
      "プロフィールは「どのような人間か」を説明する。",
      "掲示板は「今、何をしたいか」を説明する。",
      "人ではなく、その瞬間の目的が接続の入口になる。",
    ],
  },
  {
    id: "time-visible",
    title: "時間が可視化される",
    paragraphs: [
      "投稿には新しさがある。",
      "数日前のプロフィールよりも、数分前の募集の方が、相手が今ここにいることを強く示す。",
      "掲示板では、人物の属性だけでなく、現在性が商品になる。",
    ],
  },
  {
    id: "act-before-selected",
    title: "選ばれる前に動ける",
    paragraphs: [
      "スワイプ型では、写真や属性によって事前に選別される。",
      "掲示板では、自分の文章とタイミングによって接触の可能性を作れる。",
      "これは平等ではないが、選択の仕組みが異なる。",
    ],
  },
];

export const LEGACY_GENDER_OBSERVATION_AXES = [
  { id: "who-pays", label: "Who pays", labelJa: "誰が払うのか" },
  { id: "who-invited", label: "Who is invited", labelJa: "誰が呼び込まれるのか" },
  {
    id: "who-receives",
    label: "Who receives more messages",
    labelJa: "誰がより多くのメッセージを受け取るのか",
  },
  {
    id: "who-selects",
    label: "Who performs selection",
    labelJa: "誰が選別を行うのか",
  },
  {
    id: "physical-risk",
    label: "Who carries physical risk",
    labelJa: "誰が身体的リスクを負うのか",
  },
  {
    id: "financial-risk",
    label: "Who carries financial risk",
    labelJa: "誰が金銭的リスクを負うのか",
  },
  {
    id: "inventory",
    label: "Who becomes inventory",
    labelJa: "誰が供給として扱われるのか",
  },
  {
    id: "customer",
    label: "Who becomes customer",
    labelJa: "誰が顧客として扱われるのか",
  },
];

export const LEGACY_LINEAGE_STEPS = [
  "テレクラ",
  "携帯掲示板",
  "スタービーチ",
  "老舗出会い系",
  "現在の地域・即時型マッチング",
];

export const LEGACY_LINEAGE_TRANSFORMS = [
  { from: "着信を待つ", to: "投稿への返信を待つ" },
  { from: "店舗へ行く", to: "携帯電話からアクセスする" },
  { from: "時間料金", to: "ポイント課金" },
  { from: "声で判断する", to: "短文と写真で判断する" },
  { from: "店舗周辺", to: "地域検索" },
  { from: "先に受話器を取る", to: "新着投稿へ先に連絡する" },
];

export const LEGACY_STAR_BEACH_STRUCTURES = [
  "地域から探す",
  "短い募集文を投稿する",
  "新着順に流れる",
  "公開投稿から個別メッセージへ移る",
  "マッチを待たずに直接連絡する",
  "無料または少額で接触を始める",
];

export const LEGACY_VS_MATCHING = {
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
      "継続的に戻ることを前提にできる",
      "接触量が多くなりやすい",
      "境界が曖昧",
    ],
  },
  matching: {
    label: "マッチングアプリ",
    labelEn: "Match-first dating",
    items: [
      "プロフィールカードから始まる",
      "相互選択後に接触する",
      "マッチ成立が会話の条件になる",
      "継続的な人物像を登録する",
      "月額または機能課金",
      "属性と相性が重要",
      "恋活・婚活として目的を整理する",
      "相手を見つけて卒業する物語を持つ",
      "接触前の選別が多い",
      "社会的に説明しやすい",
    ],
  },
};
