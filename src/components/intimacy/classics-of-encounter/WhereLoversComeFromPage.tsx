import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import {
  BeforeAfterComparison,
  ComparisonCards,
} from "@/components/intimacy/article/BeforeAfterComparison";
import {
  CROSS_OBSERVATORY_LINKS,
  EMBEDDED_ENCOUNTERS,
  ENCOUNTER_TYPES,
  EXPANSION_UNCERTAINTY,
  HERO_LEAD,
  INTIMACY_QUESTIONS,
  OMIAI_BEFORE_AFTER,
  REGIONAL_COMPARISONS,
  RELATED_PAGES,
  TRUST_COMPARISON,
  WHERE_LOVERS_META,
} from "@/data/where-lovers-come-from";

function SectionShell({
  id,
  eyebrow,
  title,
  titleEn,
  children,
  variant = "default",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  titleEn?: string;
  children: React.ReactNode;
  variant?: "default" | "raised" | "emphasis";
}) {
  const bg =
    variant === "raised"
      ? "bg-[var(--paper-raised)]"
      : variant === "emphasis"
        ? "bg-[var(--accent-violet-bg)]/30"
        : "";

  return (
    <section
      id={id}
      className={`border-b border-[var(--border)] ${bg}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          {eyebrow ? (
            <p className="annotation mb-2 text-[var(--accent-violet)]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={id ? `${id}-heading` : undefined}
            className="text-xl font-semibold tracking-tight md:text-2xl"
          >
            {title}
          </h2>
          {titleEn ? (
            <p className="mt-1 text-sm text-[var(--ink-faint)]">{titleEn}</p>
          ) : null}
          <div className="mt-6">{children}</div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

function EmphasisQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-8 border-l-2 border-[var(--accent-violet)] pl-5 text-[1.0625rem] font-medium leading-[1.85] text-[var(--ink-muted)] md:text-lg">
      {children}
    </blockquote>
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

export function WhereLoversComeFromPage() {
  const meta = WHERE_LOVERS_META;

  return (
    <>
      <div className="mx-auto max-w-3xl px-5 pt-8">
        <Link
          href="/classics-of-encounter"
          className="inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          出会いの古典と現在に戻る
        </Link>
      </div>

      <header className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <FadeInOnScroll>
            <p className="annotation mb-3 text-[var(--accent-violet)]">
              CLASSICS OF ENCOUNTER
            </p>
            <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
              {meta.title}
            </h1>
            <p className="mt-3 text-lg text-[var(--ink-muted)]">
              {meta.subtitle}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]">
                {meta.stateLabel}
              </span>
              <span className="text-xs text-[var(--ink-faint)]">
                {meta.recorded}
              </span>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delayMs={80}>
            <p className="prose-ja mt-10 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              {HERO_LEAD}
            </p>
          </FadeInOnScroll>
        </div>
      </header>

      <SectionShell
        id="routing-changed"
        title="出会いが減ったのではない。導線が変わった。"
      >
        <Prose
          paragraphs={[
            "お見合いが弱まり、職場結婚や友人紹介も以前ほど中心的ではなくなった。その一方で、SNS、マッチングアプリ、オンラインゲーム、ファンダム、VR空間など、新しい接続経路が増えている。",
            "これは、若い世代が恋愛しなくなったという単純な話ではない。親密性に至るまでの経路が、共同体の内部から、検索・推薦・観測を行うデジタル空間へ移動したという変化である。",
          ]}
        />
        <EmphasisQuote>
          出会いは、社会の中で起きるものから、プラットフォーム上で設計されるものへ変わった。
        </EmphasisQuote>
      </SectionShell>

      <SectionShell
        id="embedded"
        eyebrow="Historical infrastructure"
        title="かつて、恋人は共同体の中から現れた"
        variant="raised"
      >
        <ul className="flex flex-col gap-4">
          {EMBEDDED_ENCOUNTERS.map((item, index) => (
            <FadeInOnScroll key={item.id} delayMs={index * 50}>
              <li className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5 transition-transform duration-300 hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <h3 className="text-sm font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="prose-ja mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {item.description}
                </p>
                <p className="annotation mt-3 text-[var(--accent-violet)]">
                  {item.roles}
                </p>
              </li>
            </FadeInOnScroll>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        id="workplace"
        title="会社は、人生共同体ではなくなった"
      >
        <Prose
          paragraphs={[
            "職場結婚の減少は、恋愛観の変化だけでは説明できない。転職、非正規雇用、リモートワーク、副業、ハラスメントへの警戒、社内交流の縮小によって、会社が人間関係を形成する場所として持っていた機能そのものが弱くなっている。",
            "かつて会社は、賃金を得る場所であると同時に、友人をつくり、配偶者と出会い、住居や家族形成を支える場所でもあった。会社が業務契約の場所へ変われば、職場恋愛もまた、以前とは異なるものになる。",
          ]}
        />
        <EmphasisQuote>
          職場結婚が減ったのではない。
          <br />
          会社が、人の人生を抱え込まなくなった。
        </EmphasisQuote>
      </SectionShell>

      <section
        id="six-types"
        className="border-b border-[var(--border)]"
        aria-labelledby="six-types-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2 text-[var(--accent-violet)]">
              Current patterns
            </p>
            <h2
              id="six-types-heading"
              className="text-xl font-semibold tracking-tight md:text-2xl"
            >
              現在、親密性はどのように始まるのか
            </h2>
          </FadeInOnScroll>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ENCOUNTER_TYPES.map((card, index) => (
              <FadeInOnScroll key={card.id} delayMs={index * 60}>
                <article className="flex h-full flex-col rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5 transition-transform duration-300 hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <p className="annotation text-[var(--ink-faint)]">
                    {card.number} / {card.titleEn}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">{card.title}</h3>
                  <p className="prose-ja mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {card.body}
                  </p>
                  {card.examples ? (
                    <p className="mt-3 text-xs text-[var(--ink-faint)]">
                      例：{card.examples}
                    </p>
                  ) : null}
                  <p className="mt-3 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--accent-violet)]">
                    古典との対応：{card.classicalLink}
                  </p>
                  {card.note ? (
                    <p className="prose-ja mt-2 text-xs leading-relaxed text-[var(--ink-faint)]">
                      {card.note}
                    </p>
                  ) : null}
                </article>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section
        id="omiai-distributed"
        className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
        aria-labelledby="omiai-distributed-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2 text-[var(--accent-violet)]">
              Central observation
            </p>
            <h2
              id="omiai-distributed-heading"
              className="text-2xl font-semibold tracking-tight md:text-3xl"
            >
              お見合いは、なくなったのではない
            </h2>
            <p className="prose-ja mt-6 max-w-2xl text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              お見合いという制度には、複数の機能が一体化されていた。現在、それらは異なるサービスへ分配されている。
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delayMs={80}>
            <BeforeAfterComparison
              before={OMIAI_BEFORE_AFTER.before}
              after={OMIAI_BEFORE_AFTER.after}
            />
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-[var(--ink-faint)]">
              <span>Before: Family / Matchmaker / Community</span>
              <span>After: Platform / Data / Algorithm</span>
            </div>
            <EmphasisQuote>
              お見合いという統合システムが解体され、その部品が複数のアプリとサービスへ配布された。
            </EmphasisQuote>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionShell id="trust" title="誰が、相手を保証するのか">
        <Prose
          paragraphs={[
            "家族や仲人が介在する出会いでは、相手の身元と評判は共同体によって保証された。職場では、所属、勤務態度、同僚からの評判が信用情報になった。友人紹介では、「あの人の知り合いなら大丈夫」という人的な保証が働いた。",
            "一方、プラットフォーム上の信用は、写真、プロフィール、認証バッジ、投稿履歴、返信速度、フォロワー、検索結果などから構成される。",
          ]}
        />
        <ComparisonCards
          left={TRUST_COMPARISON.left}
          right={TRUST_COMPARISON.right}
        />
        <EmphasisQuote>
          信用は、共同体の評判から、プロフィールとデータの整合性へ移った。
        </EmphasisQuote>
      </SectionShell>

      <section
        id="expansion"
        className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
        aria-labelledby="expansion-heading"
      >
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <h2
              id="expansion-heading"
              className="text-xl font-semibold tracking-tight md:text-2xl"
            >
              選択肢は増えた。保証は減った。
            </h2>
            <Prose
              paragraphs={[
                "プラットフォームは、居住地、学校、職場、階級、地域共同体の外側にいる人とも接続できるようにした。これは大きな自由である。",
                "一方で、既婚者、年齢詐称、写真加工、なりすまし、投資詐欺、ロマンス詐欺、AI生成人物なども、同じ入口から入り込む。",
              ]}
            />
          </FadeInOnScroll>
          <FadeInOnScroll delayMs={60}>
            <ComparisonCards
              left={EXPANSION_UNCERTAINTY.expansion}
              right={EXPANSION_UNCERTAINTY.uncertainty}
            />
          </FadeInOnScroll>
          <FadeInOnScroll delayMs={120}>
            <ul className="mt-10 flex flex-col gap-2">
              {CROSS_OBSERVATORY_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  >
                    {link.name}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </div>
      </section>

      <section
        id="regional"
        className="border-b border-[var(--border)]"
        aria-labelledby="regional-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Regional comparison</p>
            <h2
              id="regional-heading"
              className="text-xl font-semibold tracking-tight md:text-2xl"
            >
              同じデジタル化でも、更新される古典は違う
            </h2>
          </FadeInOnScroll>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {REGIONAL_COMPARISONS.map((region, index) => (
              <FadeInOnScroll key={region.id} delayMs={index * 60}>
                <article className="h-full rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5">
                  <p className="annotation text-[var(--ink-faint)]">
                    {region.region}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold leading-snug">
                    {region.title}
                  </h3>
                  <p className="prose-ja mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {region.body}
                  </p>
                </article>
              </FadeInOnScroll>
            ))}
          </div>
          <FadeInOnScroll delayMs={180}>
            <EmphasisQuote>
              世界は同じ恋愛モデルへ向かっているのではない。
              <br />
              それぞれの社会が持っていた「出会いの古典」を、異なる形でデジタル化している。
            </EmphasisQuote>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionShell id="questions" eyebrow="Questions" title="Questions">
        <ol className="flex flex-col gap-6">
          {INTIMACY_QUESTIONS.map((question, index) => (
            <FadeInOnScroll key={question} delayMs={index * 70}>
              <li className="prose-ja text-[1.0625rem] leading-[2] text-[var(--ink-muted)]">
                <span className="annotation mr-2 text-[var(--ink-faint)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {question}
              </li>
            </FadeInOnScroll>
          ))}
        </ol>
      </SectionShell>

      <section
        id="final-observation"
        className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
        aria-labelledby="final-observation-heading"
      >
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <FadeInOnScroll>
            <h2 id="final-observation-heading" className="sr-only">
              Final Observation
            </h2>
            <blockquote className="text-center">
              <p className="text-xl font-semibold leading-[1.85] tracking-tight text-[var(--ink)] md:text-2xl">
                恋人は、偶然現れる存在ではなくなりつつある。
                <br />
                検索され、推薦され、観測され、認証される存在になった。
              </p>
              <p className="mt-6 text-xl font-semibold leading-[1.85] tracking-tight text-[var(--ink)] md:text-2xl">
                変わったのは、出会い方だけではない。
                <br />
                人間同士の親密性を仲介する主体そのものが変わった。
              </p>
            </blockquote>
            <p className="annotation mt-8 text-center text-[var(--ink-faint)]">
              The infrastructure of intimacy is being rebuilt.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      <section
        id="related"
        className="border-b border-[var(--border)]"
        aria-labelledby="related-heading"
      >
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Related Observations</p>
            <h2
              id="related-heading"
              className="text-xl font-semibold tracking-tight"
            >
              関連ページ
            </h2>
          </FadeInOnScroll>
          <ul className="mt-8 flex flex-col gap-3">
            {RELATED_PAGES.map((page, index) => (
              <FadeInOnScroll key={page.href} delayMs={index * 40}>
                <li>
                  <Link
                    href={page.href}
                    className="group flex items-center justify-between rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                  >
                    <span className="text-sm font-medium">{page.label}</span>
                    <ArrowRight
                      className="h-4 w-4 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </li>
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
