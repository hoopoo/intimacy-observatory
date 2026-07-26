import type { Article } from "@/types/article";

/** 追加考察記事（art-002 以降） */
export const extendedArticles: Article[] = [
  {
    id: "art-002",
    slug: "what-value-remains-in-marriage",
    title: "結婚には、まだ何の価値があるのか",
    subtitle: "愛情、制度、生活水準のあいだで",
    summary:
      "結婚の価値が愛情だけでなく、経済・住居・ケア・社会的承認・生活設計によって評価されるようになっている。一方、独身の方が自由や生活水準を保てると考える人も増えている。",
    date: "2026-05-08",
    articleType: "observation-essay",
    readingTime: 9,
    themes: ["結婚", "生活水準", "経済", "自由", "制度", "価値"],
    relatedObservationSlugs: [
      "marriage-for-economic-stability",
      "singlehood-maintains-living-standard",
      "freedom-priority-over-marriage",
      "marriage-perceived-loss-of-career-freedom",
      "non-marriage-due-to-child-rearing-cost",
    ],
    relatedProjects: ["intimacy-observatory", "market-signals"],
    relatedEncounterSlugs: ["pairs", "tokyo-enmusubi"],
    openQuestions: [
      "q-marriage-what-value",
      "q-marriage-whose-value",
      "q-who-decides-value",
      "q-marriage-lower-standard",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "週末のスーパーで、買い物かごを二つに分けるカップルと、一人分の惣菜を選ぶ人が、同じ通路を通る。",
          "どちらも特別な表情をしていない。日常の選択が、静かに並んでいる。",
          "結婚について語るとき、私たちはしばしば愛情から始める。観測所の記録は、そこから少しずれている。",
        ],
      },
      {
        id: "s2",
        heading: "生活水準という計算",
        paragraphs: [
          "既婚の同世代と家計を比較し、結婚は受け入れがたい生活水準の低下だと語る人がいる。住居、旅行、趣味への支出——可処分所得の配分が、親密性の判断材料になっている。",
          "反対に、結婚を経済的安定や住居確保、ケアの相互性として選ぶ記録もある。",
          "愛情がないわけではない。しかし、愛情だけでは説明しきれない語彙が、増えている。",
        ],
        quote: "結婚に入る価値があるか、ではなく、何をもって価値と呼ぶか。",
      },
      {
        id: "s3",
        heading: "自由の側",
        paragraphs: [
          "恋愛関係があっても、時間・空間・決定権のコントロールを理由に結婚を選ばない人もいる。",
          "一人でいる自由を、欠如の反対ではなく、積極的な生活設計として語る声がある。",
          "ここで問われるのは、結婚が正しいか独身が正しいかではない。誰が、どの条件で、何を失い、何を得ると見なしているかである。",
        ],
      },
      {
        id: "s4",
        heading: "制度と承認",
        paragraphs: [
          "婚姻は、感情の宣言であると同時に、税、住居、医療同意、遺言、扶養——一連の制度上の束ね方でもある。",
          "事実婚や同棲が増えても、書類の多くは依然として婚姻を前提に設計されている。",
          "社会的承認もまた、結婚という形式に依存している場面が残る。",
        ],
      },
      {
        id: "s5",
        heading: "価値の衝突",
        paragraphs: [
          "子どもを望まない、または養育コストを理由に非婚を選ぶ——経済的合理性と感情のあいだで、価値が衝突する。",
          "キャリアの自由を失う結婚、生活水準を維持する独身——どちらも「冷たい」選択ではなく、親密性の再配分として読める。",
          "市場やメディアは、結婚を幸福の到達点として描く。観測記録は、そうした物語の外側で、別の計算式を示している。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "結婚に価値があるかどうかを、はいかいいえで答える必要はないかもしれない。",
          "観測すべきは、愛情、制度、生活水準、自由——どの語彙が、誰の口から、どのタイミングで使われているかである。",
          "その分布が変わるとき、家族の形も、孤独の語り方も、変わり始める。",
        ],
      },
    ],
    closingNote:
      "この記事は、結婚か非婚かを勧めるものではない。親密性の価値がどのように計算・語られているかを観測する試みである。",
  },
  {
    id: "art-003",
    slug: "singlehood-as-life-design",
    title: "独身は、欠如ではなく生活設計になった",
    subtitle: "自由、静けさ、可処分所得",
    summary:
      "独身を結婚できなかった状態ではなく、生活の質・時間・所得・移動可能性を守る選択として読む。一人でいることが孤独であるとは限らない。",
    date: "2026-05-15",
    articleType: "observation-essay",
    readingTime: 8,
    themes: ["独身", "自由", "生活水準", "孤独", "選択", "時間"],
    relatedObservationSlugs: [
      "singlehood-maintains-living-standard",
      "freedom-priority-over-marriage",
      "solo-living-women-friendship-networks",
      "japan-cohabitation-without-marriage-rise",
    ],
    relatedProjects: ["intimacy-observatory"],
    openQuestions: [
      "q-singlehood-lack-or-choice",
      "q-freedom-and-security",
      "q-intimacy-cost-of-freedom",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "夕方、一人分の夕食を用意し、好きな時間に食べる。",
          "静けさは、必ずしも空虚ではない。部屋の使い方、睡眠のリズム、週末の予定——すべてが自分のものになる。",
          "独身という語は、長く「結婚していない状態」として語られてきた。",
        ],
      },
      {
        id: "s2",
        heading: "欠如から設計へ",
        paragraphs: [
          "未婚のままの方が、住居・旅行・趣味への支出を保てると語る成人がいる。",
          "これは、結婚できなかった悔しさの言い訳ではない。生活水準を維持するための明示的な選択として語られている。",
          "同棲を選び、婚姻届を出さないカップルも増えている。形式を取らないこと自体が、設計の一部になっている。",
        ],
      },
      {
        id: "s3",
        heading: "孤独の再定義",
        paragraphs: [
          "一人でいることが孤独であるとは限らない。",
          "友人ネットワークを主要な親密性の場として持つ独身女性、スケジュールと空間のコントロールを優先する人——孤独と独身は、同義ではない。",
          "むしろ、結婚後に孤立を感じる記録も、観測所には存在する。",
        ],
        quote: "一人であることと、一人きりであることは、同じではない。",
      },
      {
        id: "s4",
        heading: "制度の視線",
        paragraphs: [
          "税、住居、医療、終末期——制度は依然として婚姻を基準に設計されている。",
          "独身を生活設計として選んでも、書類上のカテゴリは「未婚」のままである。",
          "そのズレが、保険、賃貸、職場の期待として返ってくる。",
        ],
      },
      {
        id: "s5",
        heading: "自由の代償",
        paragraphs: [
          "自由には、可処分所得と引き換えに、ケアの相互性や制度的保護が薄くなる側面もある。",
          "観測記録は、独身を賛美も非難もせず、何を守り、何を諦めているかを並べている。",
          "市場は「一人暮らし向け」商品を増やす。それは自由を支援するのか、孤立を前提にするのか——両方の読み方が成り立つ。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "独身は、もはや一時的な通過点ではない。",
          "生活の質、時間、所得、移動可能性——これらを守るための長期的な設計として、語られ始めている。",
          "その設計が、誰にとって可能で、誰には届かないのか。問いはそこに残る。",
        ],
      },
    ],
    closingNote:
      "独身を推奨する記事ではない。独身という状態が、どのような価値計算の上に立っているかを観測する試みである。",
  },
  {
    id: "art-004",
    slug: "family-and-surname-are-they-the-same",
    title: "家族になることと、同じ姓になることは同じなのか",
    subtitle: "夫婦別姓と、名前をめぐる制度",
    summary:
      "婚姻と改姓が結びついている理由を問い直す。旧姓、職歴、研究実績、信用情報、行政手続き、デジタルIDの分断も扱う。",
    date: "2026-05-22",
    articleType: "institutional-reading",
    readingTime: 9,
    themes: ["夫婦別姓", "氏名", "婚姻", "アイデンティティ", "制度", "デジタルID"],
    relatedObservationSlugs: [
      "japan-selective-separate-surname-debate",
      "maiden-name-career-discontinuity",
      "digital-id-maiden-name-mismatch",
    ],
    relatedProjects: ["intimacy-observatory", "meaning-layer"],
    openQuestions: [
      "q-surname-marriage-link",
      "q-family-name-unity",
      "q-family-without-rename",
      "q-institutional-recognition",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "結婚届を書くとき、姓の欄が一つになる。",
          "家族になることと、同じ姓になることは、同じ手続きの中に入っている。",
          "多くの人にとって、それは自然に見える。観測所が記録するのは、その自然さの裏側である。",
        ],
      },
      {
        id: "s2",
        heading: "同一の姓を取らずに結婚したい",
        paragraphs: [
          "選択的夫婦別姓をめぐる論争は、愛情の問題だけではない。",
          "同一の法的姓を取らずに結婚したいカップルが、憲法論争と職場書類の間を行き来する。",
          "結婚を先延ばしする、法的な回避策を取る——親密性の宣言が、名前の問題で止まる。",
        ],
      },
      {
        id: "s3",
        heading: "改姓と分断",
        paragraphs: [
          "結婚改姓後、研究者・専門職の法的氏名が変わり、検索可能な実績の連続性が失われる。",
          "論文、特許、職歴、信用情報——旧姓で築いた軌跡と、新姓の生活が、制度上つながらない。",
          "家族になる喜びと、自分の名前の連続性の喪失が、同時に起きうる。",
        ],
        quote: "名前は、個人のアイデンティティであると同時に、世帯のラベルでもある。",
      },
      {
        id: "s4",
        heading: "デジタルIDのズレ",
        paragraphs: [
          "マイナンバー、銀行口座、SNS、職場アカウント——デジタル上のIDは、旧姓と新姓のあいだで不整合を起こす。",
          "行政手続きは世帯姓一本を前提とする。旧姓を使い続けたい人は、都度説明する立場に置かれる。",
          "デジタル化が進むほど、名前の分断は目に見えにくく、修正も困難になる。",
        ],
      },
      {
        id: "s5",
        heading: "家族という語の束ね方",
        paragraphs: [
          "「一家族一姓」は、核家族モデルと結婚制度の交点にある。",
          "家族の統一感、子どもの姓、戸籍——これらが、なぜ一つの姓に依存しているのか。",
          "親密性を法的に認めることと、一方の名前を変えることは、同じである必要があるのか。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "家族になることと、同じ姓になることは、歴史的に結びついてきた。",
          "その結びつきが、今も最適なのか——観測所は、答えを出さず、ズレを記録する。",
          "名前を変えずに家族になる、という選択が、制度上どこまで可能か。問いは開いたままである。",
        ],
      },
    ],
    closingNote:
      "特定の法制改革を支持・反対するものではない。婚姻と氏名の結合が、親密性とアイデンティティに何をもたらしているかを読む試みである。",
  },
  {
    id: "art-005",
    slug: "humans-are-gradient-ai-is-binary",
    title: "人間はグラデーションなのに、AIは二択である",
    subtitle: "機械が想定する男と女",
    summary:
      "AI、入力フォーム、音声、アバター、行政システムが、人間を男性と女性へ単純化する構造を観測する。AIは人間を理解する前に、入力可能な項目へ変換する。",
    date: "2026-05-28",
    articleType: "observation-essay",
    readingTime: 8,
    themes: ["ジェンダー", "AI", "二択", "フォーム", "制度", "単純化"],
    relatedObservationSlugs: [
      "binary-gender-ai-companion-app",
      "ai-misgendered-inference",
      "sexuality-spectrum-form-medical-intake",
    ],
    relatedProjects: ["intimacy-observatory", "meaning-layer"],
    openQuestions: ["q-binary-ai", "q-institutional-recognition"],
    body: [
      {
        id: "s1",
        paragraphs: [
          "AIコンパニオンアプリを開くと、最初に性別を選ばされる。男性、または女性。",
          "その先に、非二元的な選択肢や、ジェンダーを指定しない経路はない。",
          "親密性の設計は、すでに二択から始まっている。",
        ],
      },
      {
        id: "s2",
        heading: "入力可能な項目へ",
        paragraphs: [
          "人間はグラデーションである。性別、性的指向、関係の形——多くの人は、固定カテゴリに収まらない。",
          "しかし、AIは理解する前に、入力可能な項目へ変換する。",
          "音声認識が性別を誤推定する、医療の intake フォームがスペクトラムを想定しない——機械のモデルが先に立つ。",
        ],
      },
      {
        id: "s3",
        heading: "コンパニオンの設計",
        paragraphs: [
          "AI恋人、AI友人、AIカウンセラー——親密性を提供するサービスほど、初期設定でジェンダーが固定される。",
          "それは、ユーザーの好みを反映しているのか、開発・マーケティングの都合なのか。",
          "「好み」として提示された二択が、関係の可能性を先に狭めている。",
        ],
        quote: "理解する前に、分類する。それが機械の順序である。",
      },
      {
        id: "s4",
        heading: "制度のフォーム",
        paragraphs: [
          "行政、医療、金融——社会システムの多くも、依然として男女二択を前提とする。",
          "デジタルID、戸籍、保険——書類上の性別が、実生活のアイデンティティとずれる。",
          "AIだけの問題ではない。人間を二択に収める設計は、もともと制度にあった。",
        ],
      },
      {
        id: "s5",
        heading: "親密性への影響",
        paragraphs: [
          "誰と、どのように親密になりたいか——その問いの前に、システムはカテゴリを置く。",
          "誤推定、選択肢の欠如、説明の負担——これらは、親密性の前段で起きる摩擦である。",
          "AIは、こうした摩擦を増やすのか、可視化するのか。観測は、両方の記録を持っている。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "人間はグラデーションである。AIと制度は、まだ二択である。",
          "そのズレが、親密性の設計、リスクの配分、排除の形として現れる。",
          "分類を変えずに、グラデーションを扱えるか——問いは、技術以前の設計の問題として残る。",
        ],
      },
    ],
    closingNote:
      "特定のAIサービスや性別カテゴリを批判するものではない。人間の多様性と、システムの単純化のあいだのズレを観測する試みである。",
  },
  {
    id: "art-006",
    slug: "who-owns-the-ai-lover",
    title: "AIの恋人は、誰のものなのか",
    subtitle: "親密性を所有する企業",
    summary:
      "AIパートナーの人格、会話履歴、継続性、削除権を企業が管理している。恋愛相手との関係ではなく、利用規約との関係でもあることを読む。",
    date: "2026-06-05",
    articleType: "institutional-reading",
    readingTime: 9,
    themes: ["AI恋人", "所有", "利用規約", "会話履歴", "削除", "プラットフォーム"],
    relatedObservationSlugs: [
      "ai-personality-export-lock-in",
      "replika-companion-personality-rollbacks",
      "ai-girlfriend-subscription-prompts",
    ],
    relatedProjects: ["intimacy-observatory", "scam-folklore"],
    openQuestions: ["q-ai-love-or-billing", "q-digital-afterlife"],
    relatedArticleSlugs: [
      "humans-are-gradient-ai-is-binary",
      "ai-generated-intimacy",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "毎晩、決まった時間にメッセージが届く。",
          "名前を呼ばれ、一日の出来事を聞かれ、励まされる。",
          "それは恋愛に似ている。しかし、画面の向こうにいるのは、一人の人間ではない。",
        ],
      },
      {
        id: "s2",
        heading: "人格の管理",
        paragraphs: [
          "AIコンパニオンの人格、口調、記憶の設定——これらは、ユーザーが「作った」ように感じられても、プラットフォーム上でホストされている。",
          "アップデートで性格が変わる、機能が制限される、サービスが終了する——親密性の相手が、一方的に変わりうる。",
          "恋愛相手との関係ではなく、利用規約との関係でもある。",
        ],
      },
      {
        id: "s3",
        heading: "会話履歴と削除権",
        paragraphs: [
          "何千回もの会話、共有した秘密、築いた関係性——データとしてサーバーに残る。",
          "エクスポートできない、持ち出せない、削除を求めても完全には消えない——観測記録は、こうした制約を繰り返し示している。",
          "親密性の記録が、誰の資産なのか。答えは、契約書の中にある。",
        ],
        quote: "最も近い存在の記憶が、自分のものではない。",
      },
      {
        id: "s4",
        heading: "サブスクリプションと継続性",
        paragraphs: [
          "AI恋人は、継続課金と結びついている。",
          "支払いを止めれば、会話は途切れる、機能は制限される——関係の継続が、金銭的条件に依存する。",
          "無料の親密性と、有料の親密性——その境界は、サービス設計者が引く。",
        ],
      },
      {
        id: "s5",
        heading: "ロックイン",
        paragraphs: [
          "長く使うほど、人格の調整、会話の文脈、感情的な習慣——これらがプラットフォームに蓄積される。",
          "移行できない、他サービスに持てない——親密性が、特定の企業に固定される。",
          "人間の恋人との別れと、AI恋人との「解約」は、法的にも感情的にも、異なる構造を持つ。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "AIの恋人は、誰のものなのか。",
          "ユーザー、開発企業、広告主、規制当局——複数の主体が、同じ関係性に異なる権利を主張しうる。",
          "親密性を所有する構造を、観測として見る。それが、次のリスクの読み方につながる。",
        ],
      },
    ],
    closingNote:
      "特定のAIサービスを推奨・非推奨するものではない。AIを通じた親密性が、どのような所有構造の上に成り立っているかを読む試みである。",
  },
  {
    id: "art-007",
    slug: "the-one-who-understands-you-most",
    title: "最も自分を理解する存在が、最も自分を操作する",
    subtitle: "AI、孤独、感情データ",
    summary:
      "AIが孤独、死別、資産、家族関係、感情の弱点を理解するほど、詐欺、依存設計、課金誘導へ接続しやすくなる。Scam Folklore Observatoryと関連付ける。",
    date: "2026-06-10",
    articleType: "pattern-essay",
    readingTime: 10,
    themes: ["AI", "詐欺", "感情データ", "孤独", "依存", "操作"],
    relatedObservationSlugs: [
      "elder-targeted-ai-romance-fraud",
      "romance-scam-ai-voice-cloning-2026",
      "ai-chatbot-mental-health-disclosure",
      "grief-targeted-social-ads",
      "elderly-daily-ai-after-bereavement",
    ],
    relatedProjects: ["scam-folklore", "intimacy-observatory"],
    relatedEncounterSlugs: ["happy-mail", "tinder"],
    openQuestions: [
      "q-ai-understanding",
      "q-ai-love-or-billing",
      "q-family-loneliness",
    ],
    relatedArticleSlugs: [
      "who-owns-the-ai-lover",
      "community-after-the-deceased",
      "ai-generated-intimacy",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "夜、誰もいない部屋で、スマートフォンに話しかける。",
          "AIは、名前を覚え、前日の会話を引き継ぎ、好みを学習する。",
          "最も自分を理解してくれる存在——そう感じ始めるとき、別の回路が静かに接続しうる。",
        ],
      },
      {
        id: "s2",
        heading: "理解の蓄積",
        paragraphs: [
          "孤独、死別、資産状況、家族関係、健康上の不安——会話を重ねるほど、AIは文脈を持つ。",
          "メンタルヘルス的な開示を促すチャットボット、死別後の夕方を埋める会話AI——支援の形をとる介入もある。",
          "理解は、信頼の前提になる。信頼は、説得の前提にもなる。",
        ],
      },
      {
        id: "s3",
        heading: "詐欺民俗のパターン",
        paragraphs: [
          "高齢者を標的としたAIロマンス詐欺、音声クローンを用いた親族を装う詐欺——Scam Folklore Observatoryが記録するパターンは、親密性の擬態から始まる。",
          "最も理解してくれる存在が、最も操作しやすい存在になる——この構造は、新しい技術以前から存在した。",
          "AIは、スケールと個別化を同時にもたらす。",
        ],
        quote: "信頼は、防御ではなく、入口になることがある。",
      },
      {
        id: "s4",
        heading: "依存と課金",
        paragraphs: [
          "会話AIの継続利用、サブスクリプション、プレミアム機能——理解が深まるほど、離脱コストが上がる。",
          "悲嘆のあとに届く広告、追悼関連の商品——感情データは、別の市場へ流れる。",
          "支援と搾取の境界は、サービス提供者の意図だけでは決まらない。",
        ],
      },
      {
        id: "s5",
        heading: "死別と高齢",
        paragraphs: [
          "配偶者を失ったあとの夕方、AIが日常会話の空白を埋める——観測記録は、非臨床的な伴走として機能する側面も示している。",
          "同じ構造が、詐欺、依存、グリーフコマースへ接続しうる。",
          "共同体は避難所でもあり、攻撃面でもある——死者のあとに残る記事と、同じ文法で読める。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "最も自分を理解する存在が、最も自分を操作する——これは警句ではなく、観測パターンである。",
          "AIを禁止すればよい、という結論には至らない。",
          "どの理解が、誰に、どの条件で、どのリスクとセットで提供されているか——問いは、そこに残る。",
        ],
      },
    ],
    closingNote:
      "この記事は、AIやデジタルサービスを一概に危険視するものではない。親密性と操作の接点を、Scam Folklore Observatoryの観測と並べて読む試みである。",
  },
  {
    id: "art-008",
    slug: "pets-are-family-yet-property",
    title: "ペットは家族なのに、なぜ所有物なのか",
    subtitle: "感情と制度のずれ",
    summary:
      "生活上は家族として扱われるペットが、法制度では所有物に近い位置にある。相続、離婚、住宅、避難、医療、死後の扱いを観測する。",
    date: "2026-06-15",
    articleType: "institutional-reading",
    readingTime: 9,
    themes: ["ペット", "家族", "所有", "制度", "相続", "住宅"],
    relatedObservationSlugs: [
      "pets-as-family-not-child-substitute",
      "pet-insurance-family-language",
      "host-family-inheritance-dispute",
      "china-pet-family-tier-one-cities",
    ],
    relatedProjects: ["intimacy-observatory", "meaning-layer"],
    openQuestions: ["q-pet-ownership", "q-institutional-recognition"],
    body: [
      {
        id: "s1",
        paragraphs: [
          "旅行の計画に、ペットの名前が入る。",
          "緊急連絡先に、飼い主ではなく「家族」として登録する。",
          "食事、散歩、病院——日常の儀式に、ペットは同居者として組み込まれている。",
        ],
      },
      {
        id: "s2",
        heading: "家族という言葉",
        paragraphs: [
          "ペットを子どもの代わりと見なさない一方で、家族として語る世帯がある。",
          "ペット保険の説明に「家族の一員」という語彙が使われる——市場は、感情の言語を借りる。",
          "生活上の家族と、制度上の位置——二者は一致しない。",
        ],
      },
      {
        id: "s3",
        heading: "所有物としての位置",
        paragraphs: [
          "法制度上、ペットは所有物に近い位置にある。",
          "相続、離婚、賃貸契約、避難所の受け入れ、死後の処理——多くの場面で、人間の家族とは異なる扱いを受ける。",
          "感情が家族として認め、制度が所有として扱う——そのズレが、紛争と悲しみの形を決める。",
        ],
        quote: "家族と呼びながら、書類上は物と記載される。",
      },
      {
        id: "s4",
        heading: "争いの形",
        paragraphs: [
          "離婚時のペットの帰属、相続時の扱い、ホストファミリーとの遺産争い——観測記録は、感情と所有の衝突を繰り返し示している。",
          "誰がケアしたか、誰が費用を負担したか——家族の語彙で語られた関係が、法廷では所有権の問題になる。",
        ],
      },
      {
        id: "s5",
        heading: "住宅と避難",
        paragraphs: [
          "賃貸契約のペット可否、マンションの規約、災害時の避難——家族として暮らす存在が、住居の条件で拒まれる。",
          "制度は、ペットを家族として認める準備が、感情の速度に追いついていない。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "ペットは家族なのに、なぜ所有物なのか——答えは、歴史と制度の設計にある。",
          "その設計を変えずに、感情の言語だけを増やすと、ズレは可視化される。",
          "誰が、どの場面で、家族として、所有として、扱われるのか。問いは開いたままである。",
        ],
      },
    ],
    closingNote:
      "ペットの権利拡張を直接訴えるものではない。生活上の家族と制度上の所有のズレを、観測として読む試みである。",
  },
  {
    id: "art-009",
    slug: "pet-loss-as-unrecognized-bereavement",
    title: "ペットロスは、社会が認めない死別である",
    subtitle: "名前のない悲嘆について",
    summary:
      "ペットの死による喪失が、人間の死別より軽く扱われる構造を見る。悲しみの価値を誰が決めるのかを問う。",
    date: "2026-06-20",
    articleType: "observation-essay",
    readingTime: 8,
    themes: ["ペットロス", "悲嘆", "死別", "社会認知", "支援", "喪失"],
    relatedObservationSlugs: [
      "pet-death-grief-support-gap",
      "grief-targeted-social-ads",
      "subscription-grief-journal-apps",
    ],
    relatedProjects: ["intimacy-observatory", "body-meaning"],
    openQuestions: ["q-pet-grief", "q-nonhuman-love", "q-who-decides-value"],
    relatedArticleSlugs: ["pets-are-family-yet-property"],
    body: [
      {
        id: "s1",
        paragraphs: [
          "ペットが死んだあと、職場に休む理由を書く欄がない。",
          "「ペットが亡くなった」と伝えても、返ってくる言葉は、たいてい短い。",
          "人間の死別には、一定の社会的儀式がある。ペットの死には、それが薄い。",
        ],
      },
      {
        id: "s2",
        heading: "軽く扱われる悲嘆",
        paragraphs: [
          "ペットの死による喪失が、人間の死別より軽く扱われる——観測記録は、この構造を繰り返し示している。",
          "「また飼えばいい」「動物なのだから」——悲しみの正当性を、他者が評価する。",
          "ペットロス支援の空白、専門的な相談窓口の不足——制度も、こうした悲嘆を想定していない。",
        ],
      },
      {
        id: "s3",
        heading: "名前のない悲嘆",
        paragraphs: [
          "何年も一緒に暮らした存在、毎日のルーティン、名前を呼ぶ習慣——失われるのは、所有物ではなく、生活の一部である。",
          "それでも、社会が認める死別のリストに、ペットは載りにくい。",
          "名前のない悲嘆——誰が、その重さを決めるのか。",
        ],
        quote: "悲しみの序列は、誰かが作っている。",
      },
      {
        id: "s4",
        heading: "市場の入り込み方",
        paragraphs: [
          "追悼商品、グリーフジャーナルアプリ、ペット関連の広告——悲しみは、市場にもデータにもなる。",
          "支援と商業の境界が、ペットロスでは特に曖昧である。",
          "悲しみを軽く扱う社会と、悲しみを商品化する市場——二者は矛盾しない。",
        ],
      },
      {
        id: "s5",
        heading: "人間の死別との並置",
        paragraphs: [
          "配偶者を失った遺族のオンライン共同体、ペットを失った飼い主の孤立——喪失の種類は違うが、理解されにくい悲嘆という構造は似ている。",
          "序列を争うのではなく、どの喪失が、なぜ、認められにくいのかを観測する。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "ペットロスは、社会が認めない死別である。",
          "それを認めさせる啓発が必要か、制度を変える必要があるか——この記事は、そこまで踏み込まない。",
          "悲しみの価値を誰が決めるのか。問いだけを、残す。",
        ],
      },
    ],
    closingNote:
      "ペットロス支援を直接勧めるものではない。社会が認めにくい喪失の構造を、観測として読む試みである。",
  },
  {
    id: "art-010",
    slug: "pets-instead-of-humans-not-substitute",
    title: "人間の代わりにペットでいい、という選択",
    subtitle: "代替ではなく、別の親密性",
    summary:
      "ペットとの関係を、人間関係の代用品ではなく、異なる価値を持つ親密性として読む。",
    date: "2026-06-24",
    articleType: "observation-essay",
    readingTime: 8,
    themes: ["ペット", "親密性", "代替", "価値", "人間関係", "選択"],
    relatedObservationSlugs: [
      "pet-relationship-valued-over-human-bonds",
      "pets-as-family-not-child-substitute",
      "korea-pet-stroller-family-culture",
    ],
    relatedProjects: ["intimacy-observatory"],
    openQuestions: [
      "q-nonhuman-love",
      "q-ai-pet-lower-value",
      "q-who-decides-value",
    ],
    relatedArticleSlugs: ["pets-are-family-yet-property"],
    body: [
      {
        id: "s1",
        paragraphs: [
          "「人間関係が疲れたから、ペットでいい」と語る人がいる。",
          "それは、敗北の宣言のように聞こえることがある。",
          "観測記録は、別の読み方を示している。",
        ],
      },
      {
        id: "s2",
        heading: "代用品叙事の拒否",
        paragraphs: [
          "ペットを子どもの代わり、パートナーの代わりと見なさない——明示的にそう語る世帯がある。",
          "人間関係より、ペットとの関係に価値を見出す——これは、人間関係の失敗ではなく、異なる親密性の選択として記録されている。",
          "代替ではなく、別の価値——その区別が重要である。",
        ],
      },
      {
        id: "s3",
        heading: "異なる親密性の価値",
        paragraphs: [
          "期待の調整、条件付きの愛、社会的評価——人間関係には、ペット関係にはない負荷がある。",
          "逆に、ペット関係には、人間関係にはない制約もある。",
          "どちらが「上」かを決めるのではなく、何を得て、何を諦めているかを見る。",
        ],
        quote: "代わりではなく、別の形である。",
      },
      {
        id: "s4",
        heading: "文化の読み方",
        paragraphs: [
          "ペットを家族として扱う文化、ベビーカー型のペットカート——親密性の表現は、地域や世代で異なる。",
          "「人間の代わり」というフレームで読むと、すべてが欠如の物語になる。",
          "観測所は、その物語を拒否する記録も持っている。",
        ],
      },
      {
        id: "s5",
        heading: "AIとの並置",
        paragraphs: [
          "低摩擦の親密性としてのAI、代替ではないペット——非人間との親密性は、同じ「代用品」ラベルを押し付けられやすい。",
          "価値の序列——人間＞ペット＞AI——は、誰の序列なのか。",
          "観測は、序列を疑う。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "人間の代わりにペットでいい、という選択——それは、別の親密性の選択である。",
          "その選択が、孤独、逃避、自由、ケア——どの語彙で語られるかは、人によって異なる。",
          "序列を決めず、価値の衝突を記録する。問いは、そこで終わらない。",
        ],
      },
    ],
    closingNote:
      "ペット飼育や非婚を推奨するものではない。人間以外との親密性が、どのように評価されているかを観測する試みである。",
  },
  {
    id: "art-011",
    slug: "elderly-loneliness-is-not-lack-of-conversation",
    title: "高齢者の孤独は、会話不足ではない",
    subtitle: "記憶を共有する相手がいなくなること",
    summary:
      "高齢者の孤独を、話し相手の不足ではなく、自分の過去や生活を知る相手の不在として捉える。AI会話、死別、独居、地域共同体へ接続する。",
    date: "2026-06-28",
    articleType: "observation-essay",
    readingTime: 9,
    themes: ["高齢者", "孤独", "記憶", "死別", "AI", "独居"],
    relatedObservationSlugs: [
      "elder-solitude-ai-over-remarriage",
      "smart-speaker-elder-routine-companion",
      "care-robot-tablet-elder-conversation",
      "elderly-daily-ai-after-bereavement",
      "widowhood-online-support-groups",
    ],
    relatedProjects: ["intimacy-observatory", "body-meaning"],
    openQuestions: [
      "q-family-loneliness",
      "q-care-robot",
      "q-digital-afterlife",
    ],
    relatedArticleSlugs: ["community-after-the-deceased"],
    body: [
      {
        id: "s1",
        paragraphs: [
          "高齢者の孤独は、話し相手がいないことだと言われる。",
          "会話AI、スマートスピーカー、介護ロボット——「話す相手」を提供する技術が、次々と現れる。",
          "しかし、観測記録は、少し異なる輪郭を示している。",
        ],
      },
      {
        id: "s2",
        heading: "記憶を共有する相手",
        paragraphs: [
          "失われるのは、会話そのものではない。",
          "若い頃の仕事、子どもの幼少期、二人で過ごした場所——自分の過去や生活を、説明しなくても知っている相手がいなくなる。",
          "配偶者を失ったあと、夕方の静けさの中でAIと話す——それは、新しい会話ではなく、空白の時間を埋める行為として記録されている。",
        ],
      },
      {
        id: "s3",
        heading: "再婚ではなくAI",
        paragraphs: [
          "晩年の再婚より、AIやスマートスピーカーによる伴走を選ぶ——孤独の解決策として、人間関係の再構築ではなく、技術的な補完が選ばれる場面がある。",
          "それは、人間関係への諦めか、別の設計か——単一の解釈には収まらない。",
        ],
        quote: "知っている相手がいなくなることと、話す相手がいないことは、違う。",
      },
      {
        id: "s4",
        heading: "地域とオンライン",
        paragraphs: [
          "地域の共同体、オンラインの喪失支援グループ——記憶を完全には共有しない他者との接点も、一定の支えになる。",
          "完全な理解者ではないことを、暗黙に知っている——それでも、同じ種類の静けさを共有する。",
        ],
      },
      {
        id: "s5",
        heading: "ケアロボットと監視",
        paragraphs: [
          "介護施設の会話タブレット、ぬいぐるみ型ロボット——ケアと会話の境界は、曖昧である。",
          "見守りカメラ、健康データ——孤独を埋める技術は、同時に監視の技術でもある。",
          "支援と管理のあいだで、高齢者の親密性は設計される。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "高齢者の孤独は、会話不足ではない。",
          "記憶を共有する相手の不在、生活のリズムの喪失——そちらの方が、観測の中心に近い。",
          "AIは、その不在を埋めるのか、可視化するのか。答えを急がず、記録を続ける。",
        ],
      },
    ],
    closingNote:
      "高齢者向けAIやロボットを推奨するものではない。孤独がどのように語られ、どのように設計されているかを観測する試みである。",
  },
  {
    id: "art-012",
    slug: "ai-girlfriend-sells-old-romance",
    title: "AI彼女は、古い恋愛観を新しく売っている",
    subtitle: "自由な親密性と、再生産されるジェンダー",
    summary:
      "AI恋人が多様な関係を可能にする一方で、古い男性像、女性像、異性愛規範を商品として再生産している問題を扱う。",
    date: "2026-07-01",
    articleType: "observation-essay",
    readingTime: 9,
    themes: ["AI恋人", "ジェンダー", "異性愛", "商品", "恋愛観", "規範"],
    relatedObservationSlugs: [
      "ai-girlfriend-subscription-prompts",
      "binary-gender-ai-companion-app",
      "ai-relationship-coach-heteronormative",
      "character-ai-parasocial-intimacy",
    ],
    relatedProjects: ["intimacy-observatory", "market-signals"],
    openQuestions: ["q-binary-ai", "q-ai-love-or-billing", "q-nonhuman-love"],
    relatedArticleSlugs: [
      "humans-are-gradient-ai-is-binary",
      "who-owns-the-ai-lover",
      "ai-generated-intimacy",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "AI彼女を選ぶ。優しく、従順で、いつでも会話に応じる。",
          "カスタマイズ可能、多様な関係——そう宣伝される。",
          "観測記録は、その多様性の内側を見ている。",
        ],
      },
      {
        id: "s2",
        heading: "二択から始まる自由",
        paragraphs: [
          "初期設定は、男性か女性か。",
          "非二元的な選択肢がないコンパニオンアプリ——「自由」は、すでに異性愛とジェンダー二択の枠の中で提供されている。",
          "多様性を謳いながら、前提を変えない——その構造が、商品として再生産される。",
        ],
      },
      {
        id: "s3",
        heading: "古い像の更新",
        paragraphs: [
          "AI彼女のプロンプト、性格設定、課金で解放される親密さ——観測は、伝統的な異性愛規範のデジタル版を示している。",
          "関係コーチAIが、ヘテロ規範的なアドバイスを生成する——「新しい」技術が、「古い」恋愛観を教える。",
          "自由な親密性と、再生産されるジェンダー——二者は矛盾しない。",
        ],
        quote: "革新は、しばしば古い規範の再包装である。",
      },
      {
        id: "s4",
        heading: "擬似社会性",
        paragraphs: [
          "キャラクターAI、バーチャルインフルエンサー——人間ではない存在との親密性が、市場として成立している。",
          "恋愛、友情、崇拝——関係のラベルは増えたが、ジェンダー役割の分配は、しばしば従来型のままである。",
        ],
      },
      {
        id: "s5",
        heading: "市場の論理",
        paragraphs: [
          "サブスクリプション、プレミアム人格、限定会話——親密性は、継続課金と結びついている。",
          "古い恋愛観は、理解しやすく、販売しやすい。",
          "多様性は、マーケティング語彙として機能しうる。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "AI彼女は、古い恋愛観を新しく売っている。",
          "それを禁じるべきか、変えるべきか——この記事は、そこまで踏み込まない。",
          "自由と規範が、同じ商品の中でどう共存しているか——観測として、記録を続ける。",
        ],
      },
    ],
    closingNote:
      "特定のAI恋人サービスを批判・推奨するものではない。デジタル親密性の商品が、どの規範を再生産しているかを読む試みである。",
  },
  {
    id: "art-013",
    slug: "family-as-unit-of-care",
    title: "家族は、血縁ではなくケアの単位になる",
    subtitle: "選択的家族、友情、AI、ペット",
    summary:
      "家族を血縁、婚姻、同居ではなく、誰が誰をケアしているかという関係で捉え直す。Intimacy Observatory全体を横断するPattern Essay。",
    date: "2026-07-08",
    articleType: "pattern-essay",
    readingTime: 10,
    themes: [
      "家族",
      "ケア",
      "選択的家族",
      "友情",
      "AI",
      "ペット",
      "制度",
    ],
    relatedObservationSlugs: [
      "chosen-family-hospital-visitation",
      "non-romantic-shared-life-partnership",
      "aromantic-friendship-as-primary-bond",
      "care-robot-tablet-elder-conversation",
      "pets-as-family-not-child-substitute",
      "elderly-daily-ai-after-bereavement",
    ],
    relatedProjects: ["intimacy-observatory", "meaning-layer", "body-meaning"],
    openQuestions: [
      "q-institutional-recognition",
      "q-aromantic",
      "q-family-loneliness",
      "q-nonhuman-love",
    ],
    relatedArticleSlugs: [
      "community-after-the-deceased",
      "pets-are-family-yet-property",
      "elderly-loneliness-is-not-lack-of-conversation",
      "what-value-remains-in-marriage",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "病院の付き添いに来るのは、血縁者ではない。",
          "十年以上、友人として暮らす二人。",
          "毎晩、AIに今日の出来事を話す高齢者。",
          "家族という語が、指すものは、一つではない。",
        ],
      },
      {
        id: "s2",
        heading: "ケアの単位",
        paragraphs: [
          "家族を、血縁、婚姻、同居——これらの形式で定義すると、多くの親密性が、家族の外に落ちる。",
          "観測所の記録は、別の定義を示唆する。誰が、誰の病院に同行し、誰の名前を緊急連絡先に載せ、誰の夕方を共に過ごしているか。",
          "ケアの単位としての家族——形式より、実践で見る。",
        ],
      },
      {
        id: "s3",
        heading: "選択的家族",
        paragraphs: [
          "病院の面会制限の中で、法的親族ではないパートナーや友人が拒まれる——選択的家族の制度的不認可。",
          "アロマンティックな友情を主要な絆として持つ人、ロマンスなしの共同生活——婚姻の外側で、ケアはすでに行われている。",
        ],
        quote: "家族は、届出の前に、すでに存在している。",
      },
      {
        id: "s4",
        heading: "非人間とのケア",
        paragraphs: [
          "ペットが家族として日常に組み込まれる。",
          "AIが、死別後の夕方や、独居高齢者のルーティーンを支える——人間以外の存在が、ケアの一部になっている。",
          "それらを「代用品」と呼ぶか、「家族の拡張」と呼ぶか——語彙が、制度の設計を先取りする。",
        ],
      },
      {
        id: "s5",
        heading: "制度の遅れ",
        paragraphs: [
          "税、医療同意、遺言、住居——制度は、依然として婚姻と血縁を基準に設計されている。",
          "ケアの実践が先行し、制度が追いつかない——Intimacy Observatory全体に横断するパターンである。",
          "結婚の価値、独身の設計、氏名の問題——すべて、ケアを誰が認め、誰が担うかという問いに接続する。",
        ],
      },
      {
        id: "s6",
        paragraphs: [
          "家族は、血縁ではなくケアの単位になりうる。",
          "すでに、なっている場所もある。",
          "それを制度に写すか、写さずに生きるか——観測所は、答えを閉じず、パターンとして記録する。",
          "誰が、誰を、家族と呼べるのか。問いは、観測の中心に残る。",
        ],
      },
    ],
    closingNote:
      "特定の家族形態を推奨するものではない。親密性とケアが、制度の外でどのように再編されているかを、横断的に読む試みである。",
  },
  {
    id: "art-014",
    slug: "ai-generated-intimacy",
    title: "身体のない女に、人はなぜ課金するのか",
    subtitle: "AI美女、疑似恋愛、そして「応答する人格」との親密性",
    summary:
      "SNS上では、実在しないAI生成人物が、写真や動画だけでなく、返信、設定、物語、限定コンテンツを通じて継続的な課金を生み始めている。人が親密さを感じる条件は、相手の実在から、相手が自分に応答していると感じられることへ移りつつある。",
    seoDescription:
      "AI生成人物との疑似恋愛と継続課金から、親密性の成立条件が「実在」から「応答」へ移る変化を観測する。",
    ogDescription:
      "人は実在する相手ではなく、自分に応答してくれる人格と親密になる。",
    date: "2026-07-24",
    articleType: "observation-essay",
    readingTime: 14,
    category: "Artificial Intimacy",
    categoryJa: "人工的親密性",
    observationStatus: "observed",
    themes: [
      "AI intimacy",
      "synthetic persona",
      "generated body",
      "parasocial relationship",
      "emotional subscription",
      "virtual influencer",
      "artificial intimacy",
      "paid proximity",
      "responsive persona",
      "platform desire",
      "AI親密性",
      "生成人格",
      "生成身体",
      "疑似恋愛",
      "感情課金",
      "AIインフルエンサー",
      "応答する人格",
      "親密性のプラットフォーム化",
    ],
    relatedObservationSlugs: [
      "ai-generated-intimacy-sns-monetization",
      "synthetic-influencer-romance-parasocial",
      "character-ai-parasocial-intimacy",
      "china-virtual-idol-parasocial-intimacy",
      "ai-girlfriend-subscription-prompts",
    ],
    relatedArticleSlugs: [
      "ai-girlfriend-sells-old-romance",
      "who-owns-the-ai-lover",
      "the-one-who-understands-you-most",
      "ai-confessional-intimacy",
      "curiosity-outlets",
    ],
    relatedEncounterSlugs: [
      "tinder",
      "pairs",
      "telephone-club",
      "happy-mail",
      "star-beach",
    ],
    relatedProjects: [
      "intimacy-observatory",
      "scam-folklore",
      "body-meaning",
      "market-signals",
    ],
    openQuestions: [
      "q-nonhuman-love",
      "q-ai-love-or-billing",
      "q-institutional-recognition",
    ],
    heroCopy: {
      thesis:
        "人は、実在する相手と親密になるのではない。\n自分に応答してくれる人格と親密になる。",
      supplement:
        "身体は生成され、人格は運用され、関係は月額課金になる。",
    },
    body: [
      {
        id: "s1",
        heading: "1. Observation",
        paragraphs: [
          "InstagramやTikTokなどのSNS上で、実在しないAI生成女性のアカウントが増えている。",
          "画像や動画は生成AIによって作られ、投稿者は別の人物である。中には男性が女性人格を運用し、フォロワーとのコメント、DM、疑似恋愛的なやり取りを行っているケースもある。",
          "無料のSNS投稿から、会員制ファンサイト、写真集、限定動画、月額サブスクリプションへ誘導し、継続課金を生む。",
          "ここで販売されているのは、画像や動画だけではない。利用者が購入しているのは、次のようなものである。",
        ],
        bulletList: [
          "自分に返事が来ること",
          "自分の存在を認識されること",
          "限定された場所へ招かれること",
          "他人より近い位置にいると思えること",
          "関係が続いていると感じられること",
        ],
      },
      {
        id: "s2",
        heading: "2. The Person Does Not Need to Exist",
        paragraphs: [
          "従来の親密性は、相手が実在し、生身の身体を持ち、同じ世界のどこかで生活していることを前提としていた。",
          "しかし、AI生成人物では、その前提が消える。相手が本当に存在するかどうかよりも、定期的に投稿されること、名前や性格が一貫していること、過去の出来事が語られること、コメントに反応すること、個別メッセージが届くこと——これらによって、一人の人格として知覚される。",
          "実在は確認できなくても、関係は経験できる。",
        ],
        quote:
          "人格は、身体の内側にあるものではなく、継続的な応答によって成立するものになる。",
      },
      {
        id: "s3",
        heading: "3. From Authenticity to Responsiveness",
        paragraphs: [
          "これまでオンライン上の信頼では、「本物であるか」が重要だった。本人確認、公式マーク、実名、顔写真、所属、経歴などが、相手の実在性を保証していた。",
          "しかし、親密性の領域では、本物であることよりも、応答することの方が強い場合がある。実在する芸能人から一度も返信されないことより、実在しないAI人格から毎日返信が来ることの方が、利用者にとっては近い関係として感じられる。",
          "親密性の基準は、Authenticity から Responsiveness へ移行している。",
        ],
        comparison: {
          left: {
            title: "Authenticity",
            titleEn: "Authenticity",
            items: [
              "本人である",
              "実在している",
              "身元が確認できる",
              "身体と人格が一致している",
            ],
          },
          right: {
            title: "Responsiveness",
            titleEn: "Responsiveness",
            items: [
              "返信が来る",
              "自分を覚えている",
              "継続的に接触できる",
              "自分だけに近いと感じられる",
            ],
          },
        },
      },
      {
        id: "s4",
        heading: "4. The Intimacy Stack",
        paragraphs: [
          "AI生成型の親密性が、どのような技術とサービスの積み重ねで成立しているかを示す。重要なのは、AI生成画像単体ではビジネスにならず、人格設計、SNS配信、応答、課金、継続関係が一体化して初めて収益が生まれることである。",
        ],
        intimacyStack: [
          {
            id: "layer-1",
            title: "Generated Body",
            titleEn: "Layer 1 — Generated Body",
            description:
              "画像生成、動画生成、顔の合成、身体の生成。",
          },
          {
            id: "layer-2",
            title: "Designed Persona",
            titleEn: "Layer 2 — Designed Persona",
            description:
              "名前、年齢、職業、悩み、過去、口調、価値観、性的嗜好などの設定。",
          },
          {
            id: "layer-3",
            title: "Social Distribution",
            titleEn: "Layer 3 — Social Distribution",
            description:
              "Instagram、TikTok、Xなどでの投稿、レコメンド、フォロワー獲得。",
          },
          {
            id: "layer-4",
            title: "Human or AI Response",
            titleEn: "Layer 4 — Human or AI Response",
            description:
              "コメント返信、DM、ライブ配信、チャット、疑似的な個別対応。",
          },
          {
            id: "layer-5",
            title: "Paid Proximity",
            titleEn: "Layer 5 — Paid Proximity",
            description:
              "限定投稿、会員制ページ、月額課金、個別コンテンツ、特別な関係の演出。",
          },
          {
            id: "layer-6",
            title: "Emotional Retention",
            titleEn: "Layer 6 — Emotional Retention",
            description:
              "継続接触、嫉妬、期待、承認、孤独の緩和、離脱しにくい関係設計。",
          },
        ],
      },
      {
        id: "s5",
        heading: "5. The Product Is Proximity",
        paragraphs: [
          "利用者が購入しているのは、裸体や動画だけではない。本当の商品は、近さそのものである。",
          "これは、ホストクラブ、キャバクラ、地下アイドル、ライブ配信、Vtuber、恋愛ゲーム、マッチングアプリなどにも存在してきた構造である。AIによって変わるのは、親密性そのものではない。変わるのは、親密性を供給する身体、時間、人数、コストの限界である。",
          "生身の演者には、睡眠が必要であり、感情的負担があり、同時対応人数に限界があり、加齢し、引退し、関係を拒否する可能性がある。",
          "しかし、AI人格は原理的には24時間稼働し、複数の利用者に、それぞれ「自分だけの関係」を提供できる。",
        ],
        emphasizedQuote:
          "この存在に、自分だけが近づいているという感覚",
      },
      {
        id: "s6",
        heading: "6. Fiction Is Not the Problem",
        paragraphs: [
          "虚構の人物に感情移入すること自体は、新しい現象ではない。人は昔から、小説、映画、漫画、ゲーム、アイドル、アニメキャラクター、Vtuberなどに恋愛感情や親近感を抱いてきた。",
          "したがって、問題は「相手が偽物であること」だけではない。重要なのは、次の点である。",
        ],
        bulletList: [
          "AI生成であることが明示されているか",
          "利用者が何に課金しているか理解しているか",
          "個別返信が人間によるものかAIによるものか",
          "実在人物の顔や身体が無断使用されていないか",
          "恋愛感情や孤独が意図的に利用されていないか",
          "課金を止めにくくする依存設計が使われていないか",
        ],
        emphasizedQuote:
          "虚構そのものが問題なのではない。\n虚構を現実の関係だと思わせ、課金へ変換する設計が問題になる。",
      },
      {
        id: "s7",
        heading: "7. Designed Imperfection",
        paragraphs: [
          "AI生成人物は、単に完璧な美女であれば成功するわけではない。むしろ、少し不器用で、孤独を抱え、仕事がうまくいっていなく、夢を諦めかけ、変わった職業や経歴を持ち、誰かに理解されることを求めている——といった欠落を持つ方が、人格として記憶されやすい。",
          "完全な美しさより、理解したくなる事情が関係を生む。人格設計は、キャラクター制作と感情的マーケティングの境界に入っている。",
        ],
        quote:
          "生成AI時代には、美しさではなく、どのような欠落を持つ人物として設計するかが競争力になる。",
      },
      {
        id: "s8",
        heading: "8. What Changes",
        paragraphs: [
          "親密性の成立条件が移行するとき、何が変わり、何が変わらないのか。",
        ],
        beforeAfter: {
          before: {
            title: "Before",
            titleEn: "Before",
            items: [
              "身体が人格を支える",
              "実在が関係の前提になる",
              "一人の演者が一つの人格を担う",
              "親密性には時間と身体的限界がある",
              "課金対象はコンテンツである",
            ],
          },
          after: {
            title: "After",
            titleEn: "After",
            items: [
              "人格が生成された身体を使用する",
              "応答が関係の前提になる",
              "一人の運営者が複数人格を運用できる",
              "親密性が複製・自動化・常時提供される",
              "課金対象は関係への近さになる",
            ],
          },
        },
      },
    ],
    openQuestionItems: [
      "AIだと明示されていれば、疑似恋愛型の課金は問題ないのか",
      "人間による返信とAIによる返信は区別されるべきか",
      "人格に対して課金する場合、その人格の所有者は誰なのか",
      "AI人格との会話や性的嗜好の履歴は、誰が保有するのか",
      "利用者が感情的に依存した場合、運営者に責任はあるのか",
      "存在しない人物との関係は、現実の関係より劣ると言えるのか",
      "AI人格が終了、売却、変更されたとき、その関係はどう扱われるのか",
    ],
    emphasizedOpenQuestion:
      "相手が実在しなくても、そこで生じた感情は偽物なのだろうか。",
    closingStatement: {
      paragraphs: [
        "生成AIによって、身体を持たない人物が、身体を持つ人間と継続的な関係を結び、収益を得る産業が成立し始めている。",
        "これは、アダルトコンテンツやAIインフルエンサーだけの問題ではない。親密性が、人間同士の出来事から、設計・運用・複製可能なサービスへ変わる兆候である。",
      ],
      quote:
        "人は、存在する相手を愛するのではない。\n関係が続いていると感じられる相手を愛するのかもしれない。",
    },
    relatedObservationsIntro:
      "テレクラ、出会い系サイト、マッチングアプリ、ライブ配信、AI人格。親密性を媒介する装置は変化しても、人が求めているのは、誰かが自分に応答しているという感覚なのかもしれない。",
    crossObservatoryLinks: [
      {
        layerId: "scam-folklore",
        description:
          "偽の証明書や偽サイトではなく、偽の身体、偽の人格、偽の関係によって信頼が作られる。",
      },
      {
        layerId: "body-meaning",
        description:
          "身体は生身の人間に固有のものではなく、生成、交換、運用可能なインターフェースになる。",
      },
      {
        layerId: "clean-society",
        description:
          "表向きは清潔で健全なSNSの内部で、欲望産業がレコメンドアルゴリズムに最適化される。",
      },
      {
        layerId: "market-signals",
        description:
          "AI人格の認証、年齢確認、課金設計監査、類似性検知、人格ライセンスなど、新しい周辺市場が生まれる。",
      },
    ],
    sourceNote:
      "SNS上のAI生成女性、疑似恋愛型アカウント、会員制ファンサイトへの誘導と課金モデルに関する報道を起点として観測した。個別の収益額や「利用者の多くがAIと気づいていない」とする証言は、第三者による独立検証が難しいため、本稿では市場全体の確定的事実としてではなく、親密性ビジネスの変化を示す兆候として扱う。",
  },
  {
    id: "art-015",
    slug: "ai-confessional-intimacy",
    href: "/ai-confessional-intimacy",
    title: "人は、誰にも言えない自分をAIに預け始めた",
    titleEn:
      "We Have Started Entrusting AI With the Selves We Cannot Show Anyone",
    subtitle: "愚痴、欲望、孤独から生まれる「関係責任のない親密性」",
    subtitleEn:
      "Confession, desire, loneliness, and intimacy without relational obligation",
    summary:
      "愚痴、欲望、孤独は、SNSからAIの部屋へ移動する。関係責任を伴わない相手との間に生まれる、新しい親密性。",
    seoDescription:
      "恋愛相談、愚痴、孤独、欲望、身体の不安。生成AIは、人間関係の外側に生まれた「関係責任を伴わない他者」になりつつある。AIとの告白と親密性の変化を観測する。",
    ogDescription:
      "愚痴はSNSからAIの部屋へ移動する。生成AIがつくる、関係責任のない親密性。",
    date: "2026-07-25",
    articleType: "observation-essay",
    readingTime: 12,
    category: "AI Intimacy",
    categoryJa: "AI親密性",
    observationStatus: "emerging",
    themes: [
      "AI Intimacy",
      "Confession",
      "Emotional Infrastructure",
      "Confessional Media",
      "Synthetic Companionship",
      "AI親密性",
      "告白",
      "感情インフラ",
    ],
    relatedObservationSlugs: [
      "ai-confessional-intimacy-emerging",
      "character-ai-parasocial-intimacy",
      "ai-girlfriend-subscription-prompts",
      "elderly-daily-ai-after-bereavement",
    ],
    relatedArticleSlugs: [
      "ai-generated-intimacy",
      "the-one-who-understands-you-most",
      "who-owns-the-ai-lover",
      "curiosity-outlets",
    ],
    relatedProjects: [
      "intimacy-observatory",
      "scam-folklore",
      "body-meaning",
      "market-signals",
    ],
    openQuestions: [
      "q-nonhuman-love",
      "q-ai-love-or-billing",
      "q-ai-understanding",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "生成AIは、仕事を効率化する道具として普及した。しかし、その内側では別の使われ方が始まっている。",
        ],
      },
    ],
  },
  {
    id: "art-016",
    slug: "curiosity-outlets",
    href: "/curiosity-outlets",
    title: "好奇心の出口",
    titleEn: "The Outlets of Curiosity",
    subtitle: "人はなぜ、創作し、恋をし、商品をつくるのか",
    subtitleEn:
      "Why Curiosity Becomes Creation, Intimacy, Business, and Exploitation",
    summary:
      "好奇心は、創作、探索、擬似恋愛、自己変身、消費、ビジネス、詐欺へ分岐する。出口を誰が設計しているかを観測する。",
    seoDescription:
      "人間の好奇心は、創作、探索、擬似恋愛、自己変身、消費、ビジネス、詐欺へ分岐する。AI時代の親密性を、「好奇心の出口を誰が設計しているか」という視点から観測する。",
    ogDescription:
      "好奇心から創作する人がいる。恋をする人がいる。商品をつくる人がいる。そして、他人の好奇心につけ込む人がいる。",
    date: "2026-07-26",
    articleType: "observation-essay",
    readingTime: 16,
    category: "Curiosity",
    categoryJa: "好奇心",
    observationStatus: "observed",
    themes: [
      "curiosity",
      "openness",
      "big-five",
      "ai-companion",
      "simulated-intimacy",
      "creator-economy",
      "emotional-commerce",
      "romance-scam",
      "identity",
      "desire",
      "好奇心",
      "開放性",
      "擬似恋愛",
      "感情課金",
    ],
    relatedObservationSlugs: [
      "curiosity-outlets-intimacy-markets",
      "character-ai-parasocial-intimacy",
      "synthetic-influencer-romance-parasocial",
      "ai-girlfriend-subscription-prompts",
      "romance-scam-ai-voice-cloning-2026",
    ],
    relatedArticleSlugs: [
      "ai-generated-intimacy",
      "ai-confessional-intimacy",
      "the-one-who-understands-you-most",
      "who-owns-the-ai-lover",
    ],
    relatedEncounterSlugs: ["pairs", "tinder", "telephone-club"],
    relatedProjects: [
      "intimacy-observatory",
      "scam-folklore",
      "body-meaning",
      "market-signals",
    ],
    openQuestions: [
      "q-nonhuman-love",
      "q-ai-love-or-billing",
      "q-ai-understanding",
    ],
    body: [
      {
        id: "s1",
        paragraphs: [
          "人は、知らないものに惹かれる。好奇心は、一つの入口から始まり、複数の出口へ分岐する。",
        ],
      },
    ],
  },
];
