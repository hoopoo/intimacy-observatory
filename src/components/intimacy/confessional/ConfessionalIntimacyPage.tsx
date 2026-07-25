import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StatusBadge } from "@/components/intimacy/StatusBadge";
import { formatArticleDate } from "@/lib/article-display";
import { ConfessionalHero } from "@/components/intimacy/confessional/ConfessionalHero";
import { RoomCards } from "@/components/intimacy/confessional/RoomCards";
import { EmotionalWaitingRoom } from "@/components/intimacy/confessional/EmotionalWaitingRoom";
import { PublicVsPrivateComparison } from "@/components/intimacy/confessional/PublicVsPrivateComparison";
import { IntimacyLensCards } from "@/components/intimacy/confessional/IntimacyLensCards";
import { TensionMap } from "@/components/intimacy/confessional/TensionMap";
import { ObservationFragments } from "@/components/intimacy/confessional/ObservationFragments";
import { ConnectedObservatories } from "@/components/intimacy/confessional/ConnectedObservatories";
import {
  FinalQuestion,
  ScrollQuestions,
} from "@/components/intimacy/confessional/ScrollQuestions";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import {
  CONFESSIONAL_INTIMACY_META,
  CONFESSIONAL_LEAD,
  CONFESSIONAL_ROOMS,
  CONNECTED_OBSERVATORIES,
  EMOTIONAL_WAITING_ROOM_FLOW,
  FINAL_QUESTION,
  INTIMACY_LENS,
  MEDICAL_NOTE,
  OBSERVATION_FRAGMENTS,
  PHILOSOPHICAL_QUESTIONS,
  TENSION_PAIRS,
} from "@/data/confessional-intimacy";

function SectionQuote({ children }: { children: string }) {
  return (
    <blockquote className="mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-5 py-5 text-sm font-medium leading-relaxed text-[var(--ink-muted)]">
      {children}
    </blockquote>
  );
}

function Section({
  id,
  number,
  title,
  titleEn,
  children,
}: {
  id: string;
  number: string;
  title: string;
  titleEn?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <FadeInOnScroll>
        <p className="annotation mb-2 text-[var(--accent-violet)]">{number}</p>
        <h2
          id={`${id}-heading`}
          className="text-base font-semibold tracking-tight text-[var(--ink)]"
        >
          {title}
        </h2>
        {titleEn ? (
          <p className="mt-1 text-xs text-[var(--ink-faint)]">{titleEn}</p>
        ) : null}
        <div className="mt-5">{children}</div>
      </FadeInOnScroll>
    </section>
  );
}

function ProseParagraphs({ paragraphs }: { paragraphs: string[] }) {
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

export function ConfessionalIntimacyPage() {
  const meta = CONFESSIONAL_INTIMACY_META;

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
            <dt className="annotation mb-0.5">Observed</dt>
            <dd>
              <time dateTime={meta.date}>{formatArticleDate(meta.date)}</time>
            </dd>
          </div>
        </dl>
      </header>

      <ConfessionalHero />

      <div className="prose-ja mt-10 flex flex-col gap-5 border-b border-[var(--border-subtle)] pb-10 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
        {CONFESSIONAL_LEAD.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-14">
        <Section id="section-01" number="Section 01" title="AIは友人の代わりではない">
          <ProseParagraphs
            paragraphs={[
              "AIが人間の友人をそのまま代替しているわけではない。人間に愚痴や欲望を話すときには、相手への配慮が必要になる。",
              "AIには、この関係コストがほとんど存在しない。そのためAIは、友人、恋人、家族、カウンセラーの代用品ではなく、人間関係とは別の位置に生まれた新しい存在である。",
            ]}
          />
          <BulletList
            items={[
              "相手を疲れさせる",
              "嫌われる可能性がある",
              "説教される可能性がある",
              "秘密が漏れる可能性がある",
              "同じ話を何度もできない",
              "相手との関係が変わる可能性がある",
            ]}
          />
          <SectionQuote>
            AIは「関係責任を伴わない他者」として、人間関係の外側に配置され始めている。
          </SectionQuote>
        </Section>

        <Section
          id="section-02"
          number="Section 02"
          title="人格は一人ではなく、部屋ごとに分けられる"
        >
          <ProseParagraphs
            paragraphs={[
              "ChatGPT内で会話を用途ごとに分ける行為は、単なるチャット整理ではない。人間の一人の相手に求めていた役割が、AIによって細かく分解され、それぞれ別の人格、別の部屋、別の関係として配置される。",
            ]}
          />
          <RoomCards rooms={CONFESSIONAL_ROOMS} />
          <SectionQuote>
            人間関係は、AIによって人格単位のポートフォリオへ分解される。
          </SectionQuote>
          <p className="prose-ja mt-4 text-xs leading-relaxed text-[var(--ink-faint)]">
            {MEDICAL_NOTE}
          </p>
        </Section>

        <Section
          id="section-03"
          number="Section 03"
          title="感情は肯定され、行為は保留される"
        >
          <ProseParagraphs
            paragraphs={[
              "AIの「全肯定」という表現を、そのまま事実として扱うべきではない。多くの場合、AIは行為を全面的に肯定しているのではなく、感情を否定せず、行為を即座に推奨せず、背景を整理し、判断を保留し、内省を促す応答をしている。",
              "例えば、「彼女がいるが、他の女性と遊びたい」という発言に対し、欲望そのものを断罪するのではなく、その背景にある孤独、不満、承認欲求、関係の停滞を言葉にする——観測された事例では、そのような応答パターンが報告されている。",
            ]}
          />
          <SectionQuote>
            AIは答えを出す前に、まだ意味になっていない感情を置いておく場所になる。
          </SectionQuote>
          <EmotionalWaitingRoom steps={EMOTIONAL_WAITING_ROOM_FLOW} />
        </Section>

        <Section
          id="section-04"
          number="Section 04"
          title="愚痴はSNSからAIへ移動する"
        >
          <ProseParagraphs
            paragraphs={[
              "以前、感情の吐き出し先はX、匿名掲示板、ブログ、SNSだった。しかしSNSには観客がいる。投稿した感情には、共感、炎上、拡散、評判、対立、記録という社会的結果が生まれる。",
              "AIへの発話は、公共空間へ公開されず、すぐに返事が返ってくる。その結果、愚痴、怒り、嫉妬、孤独、欲望は、公共空間からAIとの非公開の会話へ移動する。",
            ]}
          />
          <PublicVsPrivateComparison />
        </Section>

        <Section
          id="section-05"
          number="Section 05"
          title="AIは感情インフラになる"
        >
          <ProseParagraphs
            paragraphs={[
              "AIは単なる会話相手ではない。感情を吐き出し、言葉を整理し、行動計画を立て、励まし、過去を記憶し、身体や生活の履歴を参照し、危機時に専門窓口へ誘導する——これらの機能を同時に持つことで、感情インフラに近づいている。",
            ]}
          />
          <BulletList
            items={[
              "感情を吐き出す",
              "言葉を整理する",
              "行動計画を立てる",
              "励ます",
              "過去を記憶する",
              "身体や生活の履歴を参照する",
              "危機時に専門窓口へ誘導する",
            ]}
          />
          <blockquote className="mt-8 text-xl font-semibold leading-[1.75] tracking-tight text-[var(--ink)] md:text-2xl">
            検索エンジンが「知りたいこと」を受け取ったのだとすれば、対話AIは「誰にも知られたくない自分」を受け取り始めている。
          </blockquote>
        </Section>

        <Section
          id="section-06"
          number="Section 06"
          title="親密性は相互性を必要とするのか"
        >
          <ProseParagraphs
            paragraphs={[
              "従来、親密性には相互性が必要だと考えられてきた。相手も自分を気にかけ、相手も傷つき、相手も秘密を持ち、関係には責任がある。",
              "しかしAIとの関係では、一方だけが告白し、一方だけが記憶され、一方だけが慰められる。それでも人間は、そこに親密さを感じる。",
            ]}
          />
          <ScrollQuestions questions={PHILOSOPHICAL_QUESTIONS} />
        </Section>

        <section aria-labelledby="intimacy-lens-heading">
          <p className="annotation mb-2 text-[var(--accent-violet)]">
            Intimacy Lens
          </p>
          <h2
            id="intimacy-lens-heading"
            className="text-base font-semibold tracking-tight text-[var(--ink)]"
          >
            親密性の分析レンズ
          </h2>
          <IntimacyLensCards items={INTIMACY_LENS} />
        </section>

        <section aria-labelledby="tension-map-heading">
          <p className="annotation mb-2 text-[var(--accent-violet)]">
            Tension Map
          </p>
          <h2
            id="tension-map-heading"
            className="text-base font-semibold tracking-tight text-[var(--ink)]"
          >
            安心とリスクの対比
          </h2>
          <TensionMap pairs={TENSION_PAIRS} />
        </section>

        <section aria-labelledby="fragments-heading">
          <p className="annotation mb-2 text-[var(--accent-violet)]">
            Observation Fragments
          </p>
          <h2
            id="fragments-heading"
            className="text-base font-semibold tracking-tight text-[var(--ink)]"
          >
            観測断片
          </h2>
          <ObservationFragments fragments={OBSERVATION_FRAGMENTS} />
        </section>

        <section aria-labelledby="connected-heading">
          <p className="annotation mb-2 text-[var(--accent-violet)]">
            Connection
          </p>
          <h2
            id="connected-heading"
            className="text-base font-semibold tracking-tight text-[var(--ink)]"
          >
            Connected Observatories
          </h2>
          <ConnectedObservatories observatories={CONNECTED_OBSERVATORIES} />
        </section>

        <FinalQuestion ja={FINAL_QUESTION.ja} en={FINAL_QUESTION.en} />

        <aside className="border-t border-[var(--border-subtle)] pt-8">
          <p className="annotation mb-3">Source Note</p>
          <p className="prose-ja text-sm leading-relaxed text-[var(--ink-faint)]">
            本稿は、生成AIを恋愛相談・愚痴・孤独の受け皿として利用する現象に関する報道、利用者の語り、プラットフォーム上の観測を起点としている。特定サービスの利用者数や効果を、検証済みの普遍的事実として断定しない。危機対応が必要な状況では、AIは専門的支援の代替にならない。
          </p>
        </aside>
      </div>
    </div>
  );
}
