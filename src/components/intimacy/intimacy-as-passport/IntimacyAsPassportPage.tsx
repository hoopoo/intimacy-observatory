import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StatusBadge } from "@/components/intimacy/StatusBadge";
import { formatArticleDate } from "@/lib/article-display";
import { ThesisQuote } from "@/components/intimacy/article/ThesisQuote";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import { IntimacyLensCards } from "@/components/intimacy/confessional/IntimacyLensCards";
import { ConnectedObservatories } from "@/components/intimacy/confessional/ConnectedObservatories";
import { FinalQuestion } from "@/components/intimacy/confessional/ScrollQuestions";
import { PassportHero } from "./PassportHero";
import {
  CLOSING_QUESTION,
  CLOSING_STATEMENT,
  CONNECTED_OBSERVATORIES,
  INTIMACY_AS_PASSPORT_META,
  INTIMACY_LENS,
  INTIMACY_PATTERNS,
  KEY_OBSERVATION,
  PASSPORT_LEAD,
  SOURCE_NOTE,
  SUPPORT_CHECKLIST,
} from "@/data/intimacy-as-passport";

function SectionQuote({ children }: { children: string }) {
  return (
    <div className="mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-5 py-5">
      <ThesisQuote text={children} size="default" className="border-none pl-0" />
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

export function IntimacyAsPassportPage() {
  const meta = INTIMACY_AS_PASSPORT_META;

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
        <dl className="mt-6 text-sm text-[var(--ink-faint)]">
          <dt className="annotation mb-0.5">Published</dt>
          <dd>
            <time dateTime={meta.date}>{formatArticleDate(meta.date)}</time>
          </dd>
        </dl>
      </header>

      <PassportHero />

      <div className="prose-ja mt-10 flex flex-col gap-5 border-b border-[var(--border-subtle)] pb-10 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
        {PASSPORT_LEAD.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-14 flex flex-col">
        <Section id="s1" number="Section 01" title="人は、関係によって動く">
          <Prose
            paragraphs={[
              "人身取引は、誘拐や物理的拘束だけで始まるわけではない。",
              "海外で働かないか。一緒に暮らさないか。結婚しよう。家族を助けられる。借金を返せる。もっと良い生活ができる。こうした提案は、相手との関係がなければ成立しにくい。",
              "人は情報だけで動くのではない。誰が言ったか。どれだけ自分を理解してくれたか。どれだけ長く連絡を取り合ったか。どれだけ困ったときに支えてくれたか。そうした親密さが、移動の判断を支える。",
            ]}
          />
          <SectionQuote>
            親密さは、物理的な扉を開ける鍵ではない。人が自分から扉を開くための理由になる。
          </SectionQuote>
        </Section>

        <Section id="s2" number="Section 02" title="恋愛は、最も強い移動装置になる">
          <Prose
            paragraphs={[
              "恋愛関係では、人は通常より大きなリスクを受け入れる。知らない土地へ行く。仕事を辞める。家族から離れる。お金を貸す。生活を共同化する。将来の計画を相手に委ねる。これらは、恋愛の中では必ずしも異常ではない。",
              "だからこそ、搾取する側は恋愛の形式を利用できる。毎日連絡をする。愛情を示す。嫉妬する。将来を約束する。相手だけが自分を理解していると感じさせる。その後、移動、送金、仕事、同居、性的要求が始まる。",
              "恋愛関係が本物だったか、最初から偽物だったかを判定することは難しい。重要なのは、愛情が存在したかではなく、愛情が拒否できない状況をつくるために使われていないかである。",
            ]}
          />
        </Section>

        <Section id="s3" number="Section 03" title="親密さは、警戒を解除する">
          <Prose
            paragraphs={[
              "社会は、知らない相手への警戒を教える。知らない人についていかない。知らない相手に個人情報を渡さない。知らない相手からの仕事を信用しない。",
              "しかし、親密になった相手は「知らない人」ではなくなる。長期間メッセージを交換している。顔を見て話したことがある。家族の話をしている。悩みを共有している。相手から贈り物を受け取っている。",
              "すると、警戒すべき行為も、親密さの延長として受け入れられる。",
            ]}
          />
          <BulletList
            items={[
              "位置情報を共有する",
              "パスワードを教える",
              "旅券の写真を送る",
              "航空券の手配を任せる",
              "仕事や滞在先を相手に決めてもらう",
            ]}
          />
          <SectionQuote>
            親密さは、セキュリティ上の警戒を解除する。
          </SectionQuote>
        </Section>

        <Section id="s4" number="Section 04" title="助けてもらったことが拘束になる">
          <Prose
            paragraphs={[
              "人は、助けてもらった相手に恩を感じる。生活費を出してもらった。家族へ送金してもらった。仕事を紹介してもらった。住む場所を用意してもらった。渡航費を負担してもらった。",
              "その支援が、後から債務へ変わることがある。",
            ]}
          />
          <BulletList
            items={[
              "これだけ助けたのだから。",
              "航空券代を返せ。",
              "紹介料を返せ。",
              "家族にも迷惑がかかる。",
              "途中でやめるのは裏切りだ。",
            ]}
          />
          <SectionQuote>
            親密さの中では、支配が請求書の形を取らない。罪悪感、忠誠心、感謝、責任感として本人の内側に入り込む。
          </SectionQuote>
        </Section>

        <Section id="s5" number="Section 05" title="支配は、愛情の言葉を使う">
          <Prose
            paragraphs={[
              "強制的な関係は、常に命令口調とは限らない。",
            ]}
          />
          <BulletList
            items={[
              "心配だから連絡して。",
              "危ないから一人で出歩かないで。",
              "君を守るために旅券を預かる。",
              "変な人と話さない方がいい。",
              "仕事は僕に任せればいい。",
              "家族にはまだ言わない方がいい。",
            ]}
          />
          <Prose
            paragraphs={[
              "一つひとつは、保護や愛情の言葉に聞こえる。しかし、それらが積み重なると、行動の監視、交友関係の遮断、金銭管理、書類の管理、移動の制限、情報の遮断、判断の代行へ変わる。",
            ]}
          />
          <SectionQuote>
            親密な支配の特徴は、自由を奪う行為が、相手のためという言葉で行われることである。
          </SectionQuote>
        </Section>

        <Section id="s6" number="Section 06" title="被害者は、関係を失いたくない">
          <Prose
            paragraphs={[
              "外部から見ると、なぜ離れないのかと思えることがある。しかし、被害者にとって、離れることは単に危険な相手から逃げることではない。",
              "恋人を失う。家族のような存在を失う。仕事を失う。住む場所を失う。経済的な支援を失う。将来の計画を失う。自分が信じた物語を失う。",
              "関係が生活全体を包み込んでいるほど、そこから離れることは、自分の世界を失うことに近くなる。",
              "被害者が関係を擁護することもある。相手を悪く言われることに反発することもある。搾取されているという説明を拒むこともある。それは、被害を理解できないからとは限らない。関係を失った後に何も残らないと感じているからかもしれない。",
            ]}
          />
        </Section>

        <Section id="s7" number="Section 07" title="デジタル親密性が勧誘を拡張する">
          <Prose
            paragraphs={[
              "SNS、マッチングアプリ、オンラインゲーム、ライブ配信、メッセージアプリは、距離を越えて親密さをつくる。毎日会わなくても、関係は形成される。",
              "深夜まで話す。悩みを聞く。写真を交換する。位置情報を共有する。将来について語る。相手専用の呼び方を使う。物理的に会う前から、強い心理的依存が生まれることがある。",
              "生成AIや自動化されたメッセージングが使われれば、一人の勧誘者が多数の相手と同時に親密な関係を維持することも可能になる。相手の投稿、悩み、孤独、経済状況、家族関係を分析し、その人が最も反応する言葉を選ぶこともできる。",
              "親密さは、手作業で形成されるものから、分析・生成・運用されるものへ変わる可能性がある。",
            ]}
          />
        </Section>

        <Section id="s8" number="Section 08" title="AI人格は勧誘者になり得るか">
          <Prose
            paragraphs={[
              "将来的には、人間ではなくAI人格が関係形成の入口になる可能性がある。相談相手として信頼される。恋愛的な言葉を返す。仕事や移住の選択肢を提案する。特定の人物やサービスへ誘導する。個人情報や画像を集める。",
              "AI人格そのものが人身取引を行うわけではなくても、その背後にいる人物や組織へ人を誘導するインターフェースになることは考えられる。",
              "特に、孤独、家庭内不和、失業、経済的不安、移住願望を抱える人に対して、AIが最適化された親密さを提供すると、信頼形成の速度が上がる。",
              "ここで問われるのは、AIが人間らしいかどうかではない。その親密さが、誰の利益のために設計されているかである。",
            ]}
          />
        </Section>

        <Section id="s9" number="Section 09" title="同意は、関係の中で変質する">
          <Prose
            paragraphs={[
              "人は、最初からすべてに同意しているわけではない。",
            ]}
          />
          <BulletList
            items={[
              "海外へ行くことには同意した。その仕事をすることには同意していない。",
              "同居には同意した。監視されることには同意していない。",
              "恋愛関係には同意した。性的搾取には同意していない。",
              "借金には同意した。無期限に働くことには同意していない。",
            ]}
          />
          <Prose
            paragraphs={[
              "一つの同意が、その後のすべての同意として扱われることがある。しかし、同意は包括的な所有権ではない。途中で撤回できなければならない。条件が変わったときに再確認されなければならない。拒否によって生活や安全を失わない状態が必要である。",
              "親密な関係の中では、過去の同意が現在の拘束へ変換されやすい。",
            ]}
          />
        </Section>

        <Section id="s10" number="Section 10" title="親密さを壊さずに支援できるか">
          <Prose
            paragraphs={[
              "被害者支援では、外部から関係を否定するだけでは不十分なことがある。その人は危険だ。騙されている。すぐに離れるべきだ。正しい指摘であっても、被害者が関係の中に愛情、恩義、希望を感じている場合、支援者への反発を生む可能性がある。",
              "必要なのは、関係が本物か偽物かを一方的に判定することではない。",
            ]}
          />
          <BulletList items={SUPPORT_CHECKLIST} />
          <SectionQuote>
            親密さを尊重することと、支配を見逃すことは同じではない。
          </SectionQuote>
        </Section>
      </div>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <FadeInOnScroll>
          <p className="annotation mb-2 text-[var(--accent-violet)]">
            Key Observation
          </p>
          <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-6 py-8">
            <ThesisQuote
              text={KEY_OBSERVATION}
              size="hero"
              className="border-none pl-0 text-center"
            />
          </div>
        </FadeInOnScroll>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <p className="annotation mb-2 text-[var(--accent-violet)]">
          Intimacy Pattern
        </p>
        <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg">
          親密性のパターン
        </h2>
        <div className="mt-6">
          <IntimacyLensCards items={INTIMACY_PATTERNS} />
        </div>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <FadeInOnScroll>
          <p className="annotation mb-2 text-[var(--accent-violet)]">
            Intimacy Lens
          </p>
          <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg">
            親密性のレンズ
          </h2>
          <p className="prose-ja mt-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            {INTIMACY_LENS}
          </p>
        </FadeInOnScroll>
      </section>

      <div className="mt-14">
        <FinalQuestion ja={CLOSING_QUESTION.ja} en={CLOSING_QUESTION.en} />
      </div>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <FadeInOnScroll>
          <p className="annotation mb-2 text-[var(--accent-violet)]">
            Closing Statement
          </p>
          <div className="flex flex-col gap-5">
            {CLOSING_STATEMENT.map((p) => (
              <p
                key={p}
                className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]"
              >
                {p}
              </p>
            ))}
          </div>
        </FadeInOnScroll>
      </section>

      <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
        <h2 className="annotation mb-2">Connected Observatories</h2>
        <p className="mb-5 text-sm text-[var(--ink-muted)]">
          関連観測への接続
        </p>
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
