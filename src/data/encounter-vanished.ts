import type {
  EncounterRecord,
  InterfaceComparisonRow,
  VanishedDisappearedItem,
  VanishedLineageChain,
} from "@/types/encounter-classics";

export const VANISHED_CATEGORY_ID = "vanished-systems";

export const VANISHED_ENCOUNTER_RECORDS: EncounterRecord[] = [
  {
    slug: "pen-pal",
    name: "文通",
    englishName: "Pen Pal Correspondence",
    era: "戦後から1990年代頃",
    status: "transformed",
    categoryId: VANISHED_CATEGORY_ID,
    displayOrder: 1,
    timelineEraId: "correspondence-ads",
    summary:
      "住所と文章を交換し、長い時間をかけて見知らぬ相手との関係を形成する接続方法。",
    interface: ["手紙", "封筒", "切手", "郵便受け", "雑誌の文通募集欄"],
    entryCondition:
      "文章を書き、自分の住所または仲介先を相手に伝えること。",
    timeStructure: "返事が来るまで数日から数週間待つ非同期型。",
    geographicStructure: "遠距離であること自体が価値になり得る。",
    identityStructure:
      "筆名や簡単な自己紹介は使えるが、住所を通じて生活圏が相手に接続される。",
    whatItPromised: "日常では会えない、遠くの誰かとつながること。",
    whatItActuallySold:
      "返事が届くかもしれないという期待と、まだ会ったことのない相手を想像する時間。",
    whoWasVisible:
      "文章を書くことができ、住所を持ち、郵便を受け取れる人。",
    whoRemainedInvisible:
      "声、表情、身体、日常の動き、実際の生活状況。",
    howChanceWasProduced:
      "雑誌や新聞の募集欄、学校間交流、趣味のコミュニティから相手を見つける。",
    howTrustWasProduced:
      "文章の継続、返信の頻度、便箋、筆跡、消印、長期間のやり取り。",
    howDesireWasFramed: "友情、交流、語学学習、趣味、恋愛。",
    paymentLogic: "切手、便箋、雑誌代、郵便料金。",
    risks: [
      "住所を知られる",
      "年齢や属性の偽装",
      "返信が途絶える",
      "対面時の不一致",
    ],
    whyItDisappeared: [
      "電子メールとチャットの普及",
      "即時返信への期待",
      "住所を他人に渡すことへの警戒",
      "雑誌投稿文化の縮小",
    ],
    whatCameBefore: ["紹介", "地域共同体", "学校間交流", "新聞投稿"],
    whatCameAfter: ["メール友達", "メル友募集", "SNS", "国際交流アプリ"],
    whatRemainsToday: [
      "長文メッセージ",
      "ニュースレター",
      "ファンレター",
      "Slowlyなどの遅延型コミュニケーション",
      "DMで始まる遠距離交流",
    ],
    observation: [
      "文通では、相手との関係が始まる前に、まず文章があった。",
      "相手の写真やプロフィールを見て選ぶのではなく、届いた言葉から相手の輪郭を想像した。",
      "現在のサービスが、相手を可視化してから会話を始めるのに対し、文通は、会話を続けることで相手を少しずつ可視化する仕組みだった。",
    ],
    relatedLayers: [
      "intimacy",
      "vanishing-life",
      "classics-meaning-layer",
      "body-meaning",
    ],
    relatedEncounterSlugs: ["personal-ads", "message-dial"],
  },
  {
    slug: "personal-ads",
    name: "新聞・雑誌の恋人募集欄",
    englishName: "Personal Advertisements",
    era: "1960年代から1990年代頃",
    status: "transformed",
    categoryId: VANISHED_CATEGORY_ID,
    displayOrder: 2,
    timelineEraId: "correspondence-ads",
    summary:
      "新聞や雑誌の小さな投稿欄を通じて、自分の属性と希望を短い文章に圧縮し、見知らぬ相手からの連絡を待つ仕組み。",
    interface: ["新聞", "雑誌", "投稿欄", "私書箱", "編集部経由の転送"],
    entryCondition: "限られた文字数で、自分と求める相手を説明すること。",
    timeStructure:
      "掲載、閲覧、投函、転送、返信までに長い時間がかかる。",
    geographicStructure:
      "全国誌であれば地域を越えるが、地域名は重要な条件になる。",
    identityStructure:
      "年齢、性別、職業、趣味、居住地域などを短文で自己申告する。",
    whatItPromised:
      "日常の生活圏では会えない相手から、手紙が届く可能性。",
    whatItActuallySold:
      "自分の存在を、見知らぬ読者の前に一度だけ掲載する権利。",
    whoWasVisible:
      "媒体を購入し、投稿し、編集部の基準を通過できる人。",
    whoRemainedInvisible:
      "投稿が掲載されなかった人、文字にしにくい属性、外見や身体の現実。",
    howChanceWasProduced:
      "同じ新聞や雑誌を偶然読んだ人が、短い投稿を見つけること。",
    howTrustWasProduced: "編集部による仲介、媒体のブランド、手紙の継続。",
    howDesireWasFramed:
      "恋人募集、結婚相手募集、友達募集、趣味仲間募集。",
    paymentLogic: "雑誌代、投稿料、郵送費、私書箱利用。",
    risks: [
      "属性の虚偽",
      "大量の返信",
      "返信の選別",
      "個人情報の流出",
      "媒体側による恣意的な掲載",
    ],
    whyItDisappeared: [
      "インターネット掲示板の普及",
      "検索と即時返信の一般化",
      "紙媒体の縮小",
      "個人情報保護意識の変化",
    ],
    whatCameBefore: ["仲人", "知人の紹介", "地域の結婚相談", "文通"],
    whatCameAfter: [
      "出会い系掲示板",
      "プロフィール検索",
      "マッチングアプリ",
      "SNSの自己紹介欄",
    ],
    whatRemainsToday: [
      "プロフィール文",
      "自己紹介テンプレート",
      "希望条件",
      "募集投稿",
      "ハッシュタグ",
    ],
    observation: [
      "恋人募集欄は、現代のプロフィールカードの祖先だった。",
      "違いは、現在のプロフィールが何度でも編集され、検索され、比較されるのに対し、雑誌の投稿は、限られた文字数で一度だけ世界へ投げられたことにある。",
      "そこでは自己紹介は、継続的なデータではなく、小さな広告だった。",
    ],
    relatedLayers: [
      "intimacy",
      "clean-society",
      "classics-meaning-layer",
      "market-signals",
    ],
    relatedEncounterSlugs: ["pen-pal", "star-beach"],
  },
  {
    slug: "message-dial",
    name: "伝言ダイヤル",
    englishName: "Recorded Message Dial",
    era: "1980年代から1990年代",
    status: "vanished",
    categoryId: VANISHED_CATEGORY_ID,
    displayOrder: 3,
    timelineEraId: "message-dial",
    summary:
      "利用者が音声メッセージを録音し、他の利用者がそれを聞いて応答する、電話回線上の非同期型コミュニケーション。",
    interface: [
      "固定電話",
      "音声ガイダンス",
      "録音メッセージ",
      "暗証番号",
      "電話番号",
    ],
    entryCondition:
      "電話をかけ、音声を録音するか、他者の録音を聞くこと。",
    timeStructure:
      "音声は録音され、別の時間に聞かれる。電話でありながら非同期。",
    geographicStructure:
      "電話回線によって、生活圏外の相手とも接続できる。",
    identityStructure: "声、話し方、自己申告された年齢や属性のみ。",
    whatItPromised: "自分の声を残し、誰かからの応答を待てること。",
    whatItActuallySold:
      "姿を見せずに、自分の存在を声として空間に残す権利。",
    whoWasVisible: "電話を使い、自分の声を録音できる人。",
    whoRemainedInvisible:
      "外見、本名、住所、日常生活、録音時以外の人格。",
    howChanceWasProduced:
      "録音メッセージを順番またはカテゴリから聞くこと。",
    howTrustWasProduced:
      "声の印象、話し方、繰り返されるメッセージ、電話での応答。",
    howDesireWasFramed:
      "会話、友達募集、相談、恋人募集、秘密の交流。",
    paymentLogic: "通話料、情報料、時間課金。",
    risks: [
      "年齢や性別の偽装",
      "高額な通話料金",
      "録音内容の悪用",
      "個人情報の聞き出し",
      "未成年者の利用",
    ],
    whyItDisappeared: [
      "携帯電話とインターネットの普及",
      "メールやチャットへの移行",
      "高額課金への批判",
      "規制と社会的警戒",
      "音声のみの非効率性",
    ],
    whatCameBefore: ["留守番電話", "ラジオ投稿", "電話相談", "文通"],
    whatCameAfter: [
      "ボイスチャット",
      "音声SNS",
      "ボイスメッセージ",
      "ポッドキャスト",
      "音声プロフィール",
    ],
    whatRemainsToday: [
      "音声投稿",
      "ボイスメモ",
      "音声ルーム",
      "音声による本人らしさの演出",
    ],
    observation: [
      "伝言ダイヤルは、声をプロフィールとして使った。",
      "写真もテキストもなく、利用者は話し方、沈黙、息遣い、声の高さから相手を想像した。",
      "現在のプロフィールが身体を写真へ圧縮したとすれば、伝言ダイヤルは身体を声へ圧縮した装置だった。",
    ],
    relatedLayers: [
      "intimacy",
      "body-meaning",
      "vanishing-life",
      "classics-meaning-layer",
    ],
    relatedEncounterSlugs: ["two-shot-dial", "telephone-club"],
  },
  {
    slug: "two-shot-dial",
    name: "ツーショットダイヤル",
    englishName: "Two-shot Telephone Service",
    era: "1980年代後半から1990年代",
    status: "vanished",
    categoryId: VANISHED_CATEGORY_ID,
    displayOrder: 4,
    timelineEraId: "message-dial",
    summary:
      "電話サービスへ接続した利用者同士を、音声だけの一対一の会話へ即時に接続する仕組み。",
    interface: ["固定電話", "自動接続", "音声", "番号選択", "通話時間"],
    entryCondition: "サービス番号へ電話をかけ、接続を待つこと。",
    timeStructure: "同期型。接続した瞬間に会話が始まる。",
    geographicStructure:
      "互いの場所を知らないまま、電話回線上で接続される。",
    identityStructure: "声以外の情報は、会話の中で自己申告される。",
    whatItPromised: "今すぐ、知らない誰かと二人きりで話せること。",
    whatItActuallySold:
      "誰かと接続されるまでの期待と、切断する自由。",
    whoWasVisible: "その瞬間に電話をかけている利用者。",
    whoRemainedInvisible:
      "接続されなかった利用者、相手の実生活、電話の外側にいる人間関係。",
    howChanceWasProduced:
      "同じ時間に接続している利用者を、システムが自動的に組み合わせる。",
    howTrustWasProduced:
      "最初の数秒の声、会話のテンポ、質問への応答。",
    howDesireWasFramed: "会話、暇つぶし、友達、恋愛、秘密。",
    paymentLogic: "通話時間に比例する料金、情報料。",
    risks: [
      "高額課金",
      "虚偽申告",
      "嫌がらせ",
      "録音",
      "年齢確認の欠如",
      "犯罪への接続",
    ],
    whyItDisappeared: [
      "インターネットチャットの普及",
      "携帯電話サービスの変化",
      "規制",
      "高額課金モデルの衰退",
      "相手を事前に選べない不便さ",
    ],
    whatCameBefore: [
      "伝言ダイヤル",
      "電話相談",
      "ランダムな間違い電話",
      "ラジオのリクエスト文化",
    ],
    whatCameAfter: [
      "ランダムチャット",
      "Omegle型サービス",
      "音声マッチング",
      "ライブ配信のコラボ通話",
    ],
    whatRemainsToday: [
      "ランダムマッチング",
      "即時通話",
      "音声ルーム",
      "匿名通話アプリ",
    ],
    observation: [
      "ツーショットダイヤルには、プロフィールを読む時間がなかった。",
      "接続した相手が誰であっても、まず声を聞き、会話を続けるか、切るかを決めた。",
      "現代のスワイプが接続前の拒否を可能にしたのに対し、ツーショットダイヤルは接続後にしか拒否できなかった。",
    ],
    relatedLayers: [
      "intimacy",
      "clean-society",
      "body-meaning",
      "scam-folklore",
    ],
    relatedEncounterSlugs: ["message-dial", "telephone-club"],
  },
  {
    slug: "telephone-club",
    name: "テレクラ",
    englishName: "Telephone Club",
    era: "1980年代後半から1990年代",
    status: "transformed",
    categoryId: VANISHED_CATEGORY_ID,
    displayOrder: 5,
    timelineEraId: "telephone-club",
    summary:
      "繁華街の店舗に設置された個室で、女性からかかってくる電話を男性利用者が待ち、会話と待ち合わせを成立させる仕組み。",
    interface: [
      "店舗",
      "個室",
      "固定電話",
      "着信ランプ",
      "受話器",
      "繁華街",
    ],
    entryCondition: "男性は店舗へ入店し、女性は外部から電話をかける。",
    timeStructure:
      "同期型であり、着信を待つ時間自体がサービス体験になる。",
    geographicStructure:
      "店舗と周辺の駅、喫茶店、繁華街が一つの出会い圏を形成する。",
    identityStructure:
      "男性は店舗という物理空間に存在し、女性は電話の向こう側にいる。男女で接続条件が非対称。",
    whatItPromised:
      "今いる場所の近くで、知らない誰かと会える可能性。",
    whatItActuallySold:
      "電話が鳴るかもしれないという期待、着信を取る競争、繁華街で偶然が起きる感覚。",
    whoWasVisible: "店舗で待つ男性と、電話をかける女性。",
    whoRemainedInvisible:
      "電話をかけない人、店舗へ入れない人、相手の生活背景、目的、危険性。",
    howChanceWasProduced:
      "不特定の相手からの着信と、受話器を取る先着性。",
    howTrustWasProduced:
      "声、短い会話、待ち合わせ場所、服装や目印の説明。",
    howDesireWasFramed: "会話、遊び、出会い、暇つぶし。",
    paymentLogic:
      "男性の入店料、時間料金、延長料金。女性側の利用条件は非対称。",
    risks: [
      "年齢確認の不足",
      "売春や犯罪との接続",
      "虚偽申告",
      "待ち合わせ時の危険",
      "店舗周辺への集中",
      "ジェンダー非対称",
    ],
    whyItDisappeared: [
      "携帯電話と出会い系サイトの普及",
      "規制強化",
      "店舗コスト",
      "繁華街型サービスの衰退",
      "自宅から接続できるサービスへの移行",
    ],
    whatCameBefore: [
      "伝言ダイヤル",
      "ツーショットダイヤル",
      "ナンパ",
      "雑誌広告",
      "文通",
    ],
    whatCameAfter: [
      "出会い系サイト",
      "掲示板",
      "マッチングアプリ",
      "位置情報型サービス",
    ],
    whatRemainsToday: [
      "通知を待つこと",
      "即時性",
      "異性間の課金非対称",
      "近くにいる相手との接続",
      "偶然に見せられたマッチング",
    ],
    observation: [
      "テレクラは、相手を検索する場所ではなかった。",
      "利用者はプロフィールを比較せず、電話が鳴るのを待った。",
      "そこで販売されていたのは、特定の相手ではなく、接続が突然発生するかもしれないという期待だった。",
      "テレクラでは電話が鳴った。現在は通知が鳴る。",
    ],
    relatedLayers: [
      "intimacy",
      "clean-society",
      "vanishing-life",
      "classics-meaning-layer",
      "market-signals",
    ],
    relatedObservationSlugs: ["late-life-remarriage-stigma"],
    relatedArticleSlugs: ["community-after-the-deceased"],
    relatedEncounterSlugs: ["message-dial", "two-shot-dial", "star-beach", "happy-mail"],
    crossCategoryLinks: [
      {
        categoryId: "legacy-dating-services",
        note: "テレクラ → 携帯掲示板 → 老舗出会い系",
        label: "Explore Legacy Dating Services",
      },
    ],
  },
  {
    slug: "star-beach",
    name: "スタービーチ",
    englishName: "Star Beach",
    era: "1990年代後半から2000年代",
    status: "vanished",
    categoryId: VANISHED_CATEGORY_ID,
    displayOrder: 6,
    timelineEraId: "dating-sites",
    summary:
      "携帯電話向けの掲示板を通じて、地域、目的、年齢などを投稿し、メールで直接連絡を取り合う大規模な出会いの場。",
    interface: [
      "携帯電話",
      "掲示板",
      "メールアドレス",
      "地域カテゴリ",
      "投稿フォーム",
      "画面上の短文",
    ],
    entryCondition:
      "携帯電話から掲示板へアクセスし、投稿するか、投稿者へメールを送る。",
    timeStructure:
      "非同期だが、携帯電話によって短時間で返信が届く。",
    geographicStructure:
      "地域カテゴリによって、近くの利用者を探せる。",
    identityStructure:
      "ハンドルネーム、年齢、性別、地域、短い本文、メールアドレス。",
    whatItPromised:
      "無料で、近くにいる誰かと直接つながれること。",
    whatItActuallySold:
      "大規模な利用者が存在する掲示板上で、自分の投稿が誰かに見つかる可能性。",
    whoWasVisible:
      "携帯電話とメールアドレスを持ち、掲示板に投稿できる人。",
    whoRemainedInvisible:
      "投稿を見ているだけの人、複数の身分を使う人、実年齢や生活背景。",
    howChanceWasProduced:
      "新着投稿、地域カテゴリ、短いタイトル、投稿の流れ。",
    howTrustWasProduced:
      "メールの返信速度、文章、写真交換、電話番号交換。",
    howDesireWasFramed:
      "友達募集、メル友、恋人募集、今から会える人。",
    paymentLogic: "基本的な利用は無料。通信料は利用者負担。",
    risks: [
      "未成年者の利用",
      "援助交際",
      "性犯罪",
      "詐欺",
      "個人情報流出",
      "メールアドレス悪用",
      "年齢偽装",
    ],
    whyItDisappeared: [
      "社会問題化",
      "児童被害への懸念",
      "規制強化",
      "運営終了",
      "本人確認型サービスへの移行",
      "アプリストア管理下のサービスへの移行",
    ],
    whatCameBefore: [
      "テレクラ",
      "伝言ダイヤル",
      "雑誌の恋人募集",
      "パソコン通信",
      "メル友文化",
    ],
    whatCameAfter: [
      "出会い系サイト",
      "SNS",
      "マッチングアプリ",
      "地域・位置情報型サービス",
    ],
    whatRemainsToday: [
      "地域検索",
      "短文プロフィール",
      "無料参加",
      "DMへの移行",
      "今すぐ会えるという即時性",
      "公開投稿から個別連絡へ移る構造",
    ],
    observation: [
      "スタービーチは、テレクラの着信を、携帯電話の掲示板へ置き換えた。",
      "誰かから電話がかかるのを待つ代わりに、利用者は短い文章を投稿し、メールが届くのを待った。",
      "ここで出会いは初めて、店舗から離れ、常に持ち歩けるものになった。",
      "同時に、出会いの危険もまた、繁華街の特定の場所から、日常の携帯電話へ移動した。",
    ],
    relatedLayers: [
      "intimacy",
      "clean-society",
      "scam-folklore",
      "vanishing-life",
      "market-signals",
    ],
    relatedEncounterSlugs: ["telephone-club", "personal-ads", "happy-mail"],
    crossCategoryLinks: [
      {
        categoryId: "legacy-dating-services",
        note: "スタービーチの終了後も、その掲示板構造は老舗出会い系の中に残った。",
        label: "日本の老舗出会い系を見る",
      },
    ],
  },
];

export const VANISHED_INTERFACE_COMPARISON: InterfaceComparisonRow[] = [
  {
    recordSlug: "pen-pal",
    label: "文通",
    primaryInterface: "手紙",
    firstVisibleSignal: "文章",
    firstPrivateContact: "住所への郵送",
    waitingTime: "数日から数週間",
    geographicRange: "遠距離",
    identityExposure: "住所",
    gatekeeper: "雑誌、学校、郵便",
    payment: "郵便料金",
    mainRisk: "住所の露出",
  },
  {
    recordSlug: "personal-ads",
    label: "新聞・雑誌の恋人募集欄",
    primaryInterface: "新聞・雑誌",
    firstVisibleSignal: "短い自己紹介",
    firstPrivateContact: "編集部経由の手紙",
    waitingTime: "数週間",
    geographicRange: "媒体の流通範囲",
    identityExposure: "自己申告属性",
    gatekeeper: "編集部",
    payment: "投稿料、雑誌代",
    mainRisk: "属性偽装",
  },
  {
    recordSlug: "message-dial",
    label: "伝言ダイヤル",
    primaryInterface: "録音音声",
    firstVisibleSignal: "声",
    firstPrivateContact: "電話応答",
    waitingTime: "数分から数日",
    geographicRange: "電話網",
    identityExposure: "声",
    gatekeeper: "通信事業者、運営会社",
    payment: "通話料、情報料",
    mainRisk: "高額課金",
  },
  {
    recordSlug: "two-shot-dial",
    label: "ツーショットダイヤル",
    primaryInterface: "即時通話",
    firstVisibleSignal: "最初の声",
    firstPrivateContact: "自動接続",
    waitingTime: "数秒から数分",
    geographicRange: "電話網",
    identityExposure: "声",
    gatekeeper: "接続システム",
    payment: "時間課金",
    mainRisk: "接続相手を選べない",
  },
  {
    recordSlug: "telephone-club",
    label: "テレクラ",
    primaryInterface: "店舗の電話",
    firstVisibleSignal: "着信と声",
    firstPrivateContact: "個室での通話",
    waitingTime: "数分から数時間",
    geographicRange: "店舗周辺",
    identityExposure: "声、待ち合わせ時の外見",
    gatekeeper: "店舗",
    payment: "入店料、時間料金",
    mainRisk: "待ち合わせ時の危険",
  },
  {
    recordSlug: "star-beach",
    label: "スタービーチ",
    primaryInterface: "携帯掲示板",
    firstVisibleSignal: "短文投稿",
    firstPrivateContact: "メール",
    waitingTime: "数分から数時間",
    geographicRange: "地域カテゴリ",
    identityExposure: "メールアドレス、自己申告属性",
    gatekeeper: "掲示板運営",
    payment: "基本無料、通信料",
    mainRisk: "未成年、個人情報、犯罪",
  },
];

export const VANISHED_DISAPPEARED: VanishedDisappearedItem[] = [
  {
    id: "waiting-time",
    title: "待つ時間",
    paragraphs: [
      "以前の出会いには、相手が現れない時間があった。",
      "返事が来るか分からない数週間。電話が鳴らない数時間。メールが届かない夜。",
      "現在のアプリは、その空白を次の候補者で埋める。",
    ],
  },
  {
    id: "imagination",
    title: "相手を想像する余白",
    paragraphs: [
      "写真がないとき、人は声や文章から相手を想像した。",
      "現在は、会話が始まる前に、写真、職業、年齢、趣味、年収、価値観が提示される。",
      "情報が増えるほど、想像は減る。",
    ],
  },
  {
    id: "post-connection",
    title: "接続後に判断すること",
    paragraphs: [
      "ツーショットダイヤルでは、つながったあとで会話を続けるか決めた。",
      "現在のアプリでは、つながる前に拒否できる。",
      "拒否は安全になったが、偶然は起きにくくなった。",
    ],
  },
  {
    id: "place",
    title: "場所としての出会い",
    paragraphs: [
      "テレクラには店舗があり、待ち合わせる駅や喫茶店があった。",
      "現在の出会いはスマートフォンの中にあり、どこからでも接続できる。",
      "出会いは場所を失い、常時接続になった。",
    ],
  },
  {
    id: "forgetting",
    title: "忘れられること",
    paragraphs: [
      "古い装置では、手紙を捨て、電話番号を変え、店へ行かなくなれば、関係は消えた。",
      "現在のやり取りは、サーバー、スクリーンショット、検索履歴、位置情報、推薦モデルの中に残る。",
      "出会いは簡単になったが、完全に消えることは難しくなった。",
    ],
  },
];

export const VANISHED_LINEAGE: VanishedLineageChain[] = [
  {
    id: "pen-pal",
    origin: "文通",
    steps: [
      "メル友",
      "SNSのDM",
      "長文マッチング",
      "AIによる会話要約",
    ],
  },
  {
    id: "personal-ads",
    origin: "新聞・雑誌の恋人募集",
    steps: [
      "掲示板",
      "プロフィール検索",
      "マッチングカード",
      "AI生成プロフィール",
    ],
  },
  {
    id: "message-dial",
    origin: "伝言ダイヤル",
    steps: [
      "ボイスメッセージ",
      "音声SNS",
      "音声プロフィール",
      "AI音声エージェント",
    ],
  },
  {
    id: "two-shot-dial",
    origin: "ツーショットダイヤル",
    steps: [
      "ランダムチャット",
      "ビデオチャット",
      "音声マッチング",
      "AI同士の事前会話",
    ],
  },
  {
    id: "telephone-club",
    origin: "テレクラ",
    steps: [
      "出会い系サイト",
      "位置情報アプリ",
      "今日会える機能",
      "リアルタイム行動推薦",
    ],
  },
  {
    id: "star-beach",
    origin: "スタービーチ",
    steps: [
      "無料掲示板",
      "SNS",
      "マッチングアプリ",
      "本人確認された地域マッチング",
    ],
  },
];
