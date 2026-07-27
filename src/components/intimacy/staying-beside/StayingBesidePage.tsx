import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StatusBadge } from "@/components/intimacy/StatusBadge";
import { formatArticleDate } from "@/lib/article-display";
import { ThesisQuote } from "@/components/intimacy/article/ThesisQuote";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import { IntimacyLensCards } from "@/components/intimacy/confessional/IntimacyLensCards";
import { ConnectedObservatories } from "@/components/intimacy/confessional/ConnectedObservatories";
import { StayingBesideHero } from "./StayingBesideHero";
import { RelationshipTensionMap } from "./RelationshipTensionMap";
import { ObservationSummary } from "./ObservationSummary";
import {
  CENTER_QUESTION,
  CONNECTED_OBSERVATORIES,
  IMPLICATIONS,
  INTIMACY_LENS_ITEMS,
  KEY_OBSERVATION,
  OBSERVATION_SUMMARY,
  RELATIONSHIP_TENSION_AXES,
  SIGNAL,
  SOURCE_NOTE,
  STAYING_BESIDE_LEAD,
  STAYING_BESIDE_META,
} from "@/data/staying-beside-someone-you-cannot-save";

function SectionQuote({ text, size = "default" as const }: { text: string; size?: "default" | "hero" }) {
  return (
    <div className={`mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] ${size === "hero" ? "px-6 py-8" : "px-5 py-5"}`}>
      <ThesisQuote text={text} size={size} className="border-none pl-0 text-center" />
    </div>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-b border-[var(--border-subtle)] py-10 last:border-0"
      aria-labelledby={`${id}-heading`}
    >
      <FadeInOnScroll>
        <p className="annotation mb-2 text-[var(--accent-violet)]">{number}</p>
        <h2
          id={`${id}-heading`}
          className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg"
        >
          {title}
        </h2>
        <div className="mt-5">{children}</div>
      </FadeInOnScroll>
    </section>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      {paragraphs.map((p) => (
        <p
          key={p}
          className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]"
        >
          {p}
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-2 border-l border-[var(--border-subtle)] pl-5">
      {items.map((item) => (
        <li
          key={item}
          className="text-[1.0625rem] leading-[2] text-[var(--ink-muted)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function StayingBesidePage() {
  const meta = STAYING_BESIDE_META;

  return (
    <div className="mx-auto max-w-[720px] px-5 py-12">
      <Link
        href="/articles"
        className="mb-10 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        Articles一覧に戻る
      </Link>

      <header className="mb-10 border-b border-[var(--border-subtle)] pb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <p className="annotation text-[var(--accent-violet)]">
            Observation Essay / 観測エッセイ
          </p>
          <StatusBadge status={meta.observationStatus} />
        </div>
        <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-faint)]">{meta.titleEn}</p>
        <p className="mt-4 text-lg leading-relaxed text-[var(--ink-muted)]">
          {meta.subtitle}
        </p>
        <p className="mt-1 text-sm text-[var(--ink-faint)]">{meta.subtitleEn}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {meta.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]"
            >
              {cat}
            </span>
          ))}
        </div>
        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--ink-faint)]">
          <div>
            <dt className="annotation mb-0.5">Published</dt>
            <dd>
              <time dateTime={meta.date}>{formatArticleDate(meta.date)}</time>
            </dd>
          </div>
          <div>
            <dt className="annotation mb-0.5">Reading</dt>
            <dd>{meta.readingTime} 分</dd>
          </div>
        </dl>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {meta.themes.slice(0, 8).map((theme) => (
            <li
              key={theme}
              className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]"
            >
              {theme}
            </li>
          ))}
        </ul>
      </header>

      <StayingBesideHero />

      <div className="prose-ja mt-10 flex flex-col gap-5 border-b border-[var(--border-subtle)] pb-10 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
        {STAYING_BESIDE_LEAD.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <SectionQuote text={CENTER_QUESTION} size="hero" />
      </div>

      <div className="mt-14 flex flex-col">
        <Section id="s1" number="Section 01" title="親密さは、解決として語られやすい">
          <Prose
            paragraphs={[
              "物語では、親密さはしばしば救済として描かれる。理解者に出会う。友人ができる。恋人が支える。家族のような関係が生まれる。孤独だった人物が、誰かとの関係によって変わっていく。",
              "この構図には強い魅力がある。人は制度よりも、人によって救われる。冷たい社会の中でも、一人の理解者がいれば生きていける。",
              "しかし現実では、親密さだけでは解決できない問題がある。貧困。暴力。依存。住居。雇用。認知や発達上の困難。医療や福祉への未接続。",
              "親密さは、これらを一時的に支えることはできる。だが、一人の人間が制度の代わりになることはできない。",
            ]}
          />
          <SectionQuote text={"親密さは、避難場所にはなれる。\nしかし、社会保障そのものにはなれない。"} />
        </Section>

        <Section id="s2" number="Section 02" title="「放っておけない」という感情">
          <Prose
            paragraphs={[
              "山田さんとみいちゃんの関係を動かしているのは、必ずしも友情という整った言葉だけではない。心配。苛立ち。同情。責任感。罪悪感。親しみ。危うさへの直感。自分が見捨てたら何かが起きるという恐れ。",
              "「放っておけない」という感情には、複数のものが混ざっている。それは優しさである一方、相手を自分の責任範囲へ入れてしまうことでもある。その瞬間から、相手の失敗や危険が、自分の失敗のように感じられる。",
            ]}
          />
          <SectionQuote text="気にかけることは、相手の人生の一部を自分の内側へ持ち込むことである。" />
        </Section>

        <Section id="s3" number="Section 03" title="救う側にも限界がある">
          <Prose
            paragraphs={[
              "支える側は、しばしば無限の忍耐を期待される。理解してあげる。怒らない。見捨てない。何度失敗しても手を差し伸べる。",
              "しかし、支える側にも生活がある。仕事がある。疲労がある。恐怖がある。自分では引き受けられない問題がある。相手を大切に思うことと、すべてを引き受けることは同じではない。限界を示すことは、必ずしも冷たさではない。",
              "ただし、境界線を引けば、相手が危険な場所へ戻ってしまう可能性もある。そのため支える側は、次の二つの間で揺れる。",
            ]}
          />
          <BulletList
            items={[
              "自分を守るために距離を取る",
              "相手を守るために関係を続ける",
            ]}
          />
          <Prose paragraphs={["どちらを選んでも、罪悪感が残る。"]} />
        </Section>

        <Section id="s4" number="Section 04" title="ケアと管理の境界">
          <Prose
            paragraphs={[
              "相手の安全を考えるほど、行動を制限したくなることがある。",
            ]}
          />
          <BulletList
            items={[
              "そこへ行かないでほしい。",
              "その人に会わないでほしい。",
              "その仕事を辞めてほしい。",
              "自分に連絡してほしい。",
              "一人で決めないでほしい。",
            ]}
          />
          <Prose
            paragraphs={[
              "これらはケアとして始まる。しかし、相手の判断を信用しない形へ進めば、管理になる。脆弱な相手との関係では、この境界が特に曖昧になる。",
              "危険を理解できていないように見える。同じ失敗を繰り返す。搾取する人を信じてしまう。そのとき、「本人の自由を尊重する」という言葉だけでは守れない場合がある。一方で、「守るため」という理由で、本人の意思を奪うこともできてしまう。",
            ]}
          />
          <SectionQuote text={"ケアは、相手を守るために近づく。\n管理は、相手を守るために自由を奪う。\n\n両者は、遠く離れているわけではない。"} />
        </Section>

        <Section id="s5" number="Section 05" title="依存は、一方通行ではない">
          <Prose
            paragraphs={[
              "脆弱な人物が誰かへ依存しているように見えるとき、関係は一方向に説明されやすい。助けられる側が依存している。支える側が負担を背負っている。",
              "しかし、支える側もまた、その関係へ依存することがある。必要とされている感覚。自分だけが分かっているという感覚。自分がいなければ相手が壊れるという感覚。誰かを救う役割が、自分の存在理由になることもある。",
              "この依存は、悪意から生まれるとは限らない。優しさ、責任感、孤独、自尊心が混ざり合って生まれる。",
            ]}
          />
          <SectionQuote text={"支えられる側だけが、関係に依存しているとは限らない。\n救う役割もまた、人を関係へ縛る。"} />
        </Section>

        <Section id="s6" number="Section 06" title="「救えなかった」という物語">
          <Prose
            paragraphs={[
              "誰かに重大なことが起きたとき、周囲の人は後から考える。もっと早く気づけたのではないか。あのとき止められたのではないか。別の言葉をかければよかったのではないか。見捨てなければよかったのではないか。",
              "この問いには終わりがない。結果を知った後では、過去のすべての場面が予兆に見える。しかし、その時点では何が起こるか分からなかった。人は他者の未来を完全には予測できない。",
              "それでも、親密な関係にあった人ほど、自分に責任があったと感じる。",
            ]}
          />
          <SectionQuote text={"「救えなかった」という感情は、\n実際に救える力があったことを意味しない。\n\nこの区別は重要である。\n責任感と、実際の責任は同じではない。"} />
        </Section>

        <Section id="s7" number="Section 07" title="関係は結果だけで評価できるのか">
          <Prose
            paragraphs={[
              "救済できなかった関係は、無意味だったのか。相手の人生を変えられなかった。危険を完全には止められなかった。最後まで守れなかった。そうした結果だけを見れば、関係は失敗に見える。",
              "しかし、人と人との関係の意味は、最終結果だけでは測れない。一緒に食事をした。話を聞いた。名前を呼んだ。心配した。一時的に安心できる場所になった。完全には理解できなくても、存在を気にかけた。",
              "それらは問題を解決しない。けれど、何もなかったことにはならない。",
            ]}
          />
          <SectionQuote text={"救えなかったことと、\nそばにいたことが無意味だったことは同じではない。"} size="hero" />
        </Section>

        <Section id="s8" number="Section 08" title="アニメによって親密さに声が付く">
          <Prose
            paragraphs={[
              "漫画では、関係の距離感は読者の想像に委ねられる。どれほど優しく話したのか。どれほど苛立っていたのか。沈黙が何秒続いたのか。呼びかけに、どの程度の切迫感があったのか。",
              "アニメでは、これらが演技として具体化される。山田さんの声に母性的な要素を強く与えれば、関係は保護者と子どものように見える。苛立ちを強くすれば、負担を背負う人の物語に見える。みいちゃんの声を幼く演出すれば、二人の対等性はさらに弱く見える。",
              "声優演技、演出、間、音楽によって、親密さの意味が固定される。",
            ]}
          />
          <SectionQuote text="アニメ化は、人物の声だけでなく、関係の解釈にも声を与える。" />
        </Section>

        <Section id="s9" number="Section 09" title="視聴者は誰に感情移入するのか">
          <Prose
            paragraphs={[
              "この作品を見る人は、みいちゃんだけでなく、山田さんの側にも自分を重ねる。困っている人を放っておけない。助けても同じことを繰り返される。優しくしたいのに苛立つ。距離を取りたいのに罪悪感がある。自分だけが背負っているように感じる。",
              "こうした感情は、介護、子育て、友人関係、恋愛、職場、依存症支援など、多くの場面に接続する。そのため物語は、脆弱な人物の物語であると同時に、支える側の疲労の物語としても読まれる。",
              "ただし、支える側への共感が強くなりすぎると、みいちゃん自身が「負担をかける存在」としてだけ見られる危険もある。どちらか一方だけに完全に感情移入することで、関係の非対称性が単純化される。",
            ]}
          />
        </Section>

        <Section id="s10" number="Section 10" title="制度がない場所で親密さが酷使される">
          <Prose
            paragraphs={[
              "制度につながらない人を、最後に支えるのは身近な誰かになる。友人。恋人。同僚。店長。近所の人。SNSで知り合った人。",
              "親密な関係が、福祉、医療、住居支援、危機介入の役割まで背負わされる。これは「人の優しさ」の物語として美しく語られることがある。しかし別の見方をすれば、社会が担うべき役割を、個人関係へ外注している。",
              "そして、そのインフラには予算も、専門知識も、休暇も、交代要員もない。関係が壊れれば、支援そのものが消える。",
            ]}
          />
          <SectionQuote text="制度が届かない場所では、親密さがインフラとして酷使される。" />
        </Section>

        <Section id="s11" number="Section 11" title="AIとの親密さとの接続">
          <Prose
            paragraphs={[
              "この問題は、人間同士の関係だけに限らない。AIとの親密性が広がる社会では、「いつでも応答してくれる存在」が、孤独や不安を受け止める。AIは疲れない。苛立ちを表に出さない。何度同じ話をしても応答する。その点では、人間の支援者より安定して見える。",
              "しかしAIは、住居を確保できない。暴力から物理的に避難させられない。医療や福祉へ強制的につなぐこともできない。危険を察知しても、現実の世界で手を伸ばせない。",
              "AIとの親密さもまた、避難場所にはなれても、社会保障そのものにはなれない。むしろ、AIが十分に優しく応答することで、制度につながらない状態が長期化する可能性もある。",
            ]}
          />
        </Section>

        <Section id="s12" number="Section 12" title="Intimacyの観測">
          <Prose
            paragraphs={[
              "Intimacyが観測するのは、親密さを無条件に肯定することではない。親密さの中にある矛盾を見る。",
            ]}
          />
          <BulletList
            items={[
              "愛情と支配",
              "ケアと管理",
              "共感と疲労",
              "保護と自由",
              "必要と依存",
              "責任と罪悪感",
              "継続と切断",
            ]}
          />
          <Prose
            paragraphs={[
              "人は、誰かを完全には救えない。しかし、完全に救えないからといって、関係を持つ意味が消えるわけでもない。",
              "大切なのは、個人の優しさを無限の資源として扱わないことである。そして、親密な関係だけに問題を背負わせないことである。",
            ]}
          />
          <SectionQuote text={"誰かのそばにいることは、救済の約束ではない。\nそれでも、孤独を完全なものにしない行為にはなり得る。"} />
        </Section>
      </div>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <FadeInOnScroll>
          <p className="annotation mb-2 text-[var(--accent-violet)]">Key Observation</p>
          <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-6 py-8">
            <ThesisQuote text={KEY_OBSERVATION} size="hero" className="border-none pl-0 text-center" />
          </div>
        </FadeInOnScroll>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <p className="annotation mb-2 text-[var(--accent-violet)]">Intimacy Lens</p>
        <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg">
          親密性のレンズ
        </h2>
        <div className="mt-6">
          <IntimacyLensCards items={INTIMACY_LENS_ITEMS} />
        </div>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <p className="annotation mb-2 text-[var(--accent-violet)]">Signal</p>
        <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
          {SIGNAL}
        </p>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <p className="annotation mb-2 text-[var(--accent-violet)]">Implications</p>
        <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg">
          含意
        </h2>
        <BulletList items={IMPLICATIONS} />
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <p className="annotation mb-2 text-[var(--accent-violet)]">
          Relationship Tension Map
        </p>
        <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg">
          関係の緊張
        </h2>
        <RelationshipTensionMap axes={RELATIONSHIP_TENSION_AXES} />
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <p className="annotation mb-2 text-[var(--accent-violet)]">
          Observation Summary
        </p>
        <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg">
          観測サマリー
        </h2>
        <ObservationSummary items={OBSERVATION_SUMMARY} />
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <h2 className="annotation mb-2">Connected Observatories</h2>
        <p className="mb-5 text-sm text-[var(--ink-muted)]">接続する観測領域</p>
        <ConnectedObservatories observatories={CONNECTED_OBSERVATORIES} />
      </section>

      <aside className="mt-14 border-t border-[var(--border-subtle)] pt-8">
        <p className="annotation mb-3">Source Note</p>
        <p className="prose-ja text-sm leading-relaxed text-[var(--ink-faint)]">
          {SOURCE_NOTE}
        </p>
      </aside>
    </div>
  );
}
