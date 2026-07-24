import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Article, ArticleSection } from "@/types/article";
import {
  getRelatedArticlesForArticle,
  getRelatedObservationsForArticle,
} from "@/lib/articles";
import { getEncountersForArticle } from "@/lib/encounter-classics";
import { buildQuestionFilterHref, getAllQuestions } from "@/lib/observations";
import { RELATED_PROJECTS } from "@/config/projects";
import {
  articleTypeLabel,
  formatArticleDate,
} from "@/lib/article-display";
import { StatusBadge } from "@/components/intimacy/StatusBadge";
import { ObservationHero } from "@/components/intimacy/article/ObservationHero";
import { ThesisQuote } from "@/components/intimacy/article/ThesisQuote";
import {
  BeforeAfterComparison,
  ComparisonCards,
} from "@/components/intimacy/article/BeforeAfterComparison";
import { IntimacyStack } from "@/components/intimacy/article/IntimacyStack";
import { OpenQuestions } from "@/components/intimacy/article/OpenQuestions";
import { CrossObservatoryLinks } from "@/components/intimacy/article/CrossObservatoryLinks";
import { RelatedObservations } from "@/components/intimacy/article/RelatedObservations";

function ArticleSectionBlock({ section }: { section: ArticleSection }) {
  return (
    <section
      aria-labelledby={section.heading ? `section-${section.id}` : undefined}
    >
      {section.heading ? (
        <h2
          id={`section-${section.id}`}
          className="mb-5 text-base font-semibold tracking-tight text-[var(--ink)]"
        >
          {section.heading}
        </h2>
      ) : null}
      <div className="flex flex-col gap-5">
        {section.paragraphs.map((paragraph, i) => (
          <p
            key={`${section.id}-p-${i}`}
            className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
      {section.bulletList ? (
        <ul className="mt-5 flex flex-col gap-2.5 border-l border-[var(--border-subtle)] pl-5">
          {section.bulletList.map((item) => (
            <li
              key={item}
              className="text-[1.0625rem] leading-[2] text-[var(--ink-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {section.comparison ? (
        <ComparisonCards
          left={section.comparison.left}
          right={section.comparison.right}
        />
      ) : null}
      {section.beforeAfter ? (
        <BeforeAfterComparison
          before={section.beforeAfter.before}
          after={section.beforeAfter.after}
        />
      ) : null}
      {section.intimacyStack ? (
        <IntimacyStack layers={section.intimacyStack} />
      ) : null}
      {section.quote ? (
        <blockquote className="mt-6 border-l border-[var(--border)] pl-5 text-sm italic leading-relaxed text-[var(--ink-faint)]">
          {section.quote}
        </blockquote>
      ) : null}
      {section.emphasizedQuote ? (
        <div className="mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-5 py-6">
          <ThesisQuote text={section.emphasizedQuote} size="default" />
        </div>
      ) : null}
    </section>
  );
}

export function ArticleDetail({ article }: { article: Article }) {
  const type = articleTypeLabel[article.articleType];
  const relatedObservations = getRelatedObservationsForArticle(article);
  const relatedArticles = getRelatedArticlesForArticle(article);
  const allQuestions = getAllQuestions();
  const relatedEncounters = getEncountersForArticle(article.slug);
  const openQuestions = (article.openQuestions ?? [])
    .map((id) => allQuestions.find((q) => q.id === id))
    .filter(Boolean);

  return (
    <article>
      <header className="mb-12 border-b border-[var(--border-subtle)] pb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <p className="annotation text-[var(--accent-violet)]">
            {type.en} / {type.ja}
          </p>
          {article.category ? (
            <span className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]">
              {article.categoryJa ?? article.category}
            </span>
          ) : null}
          {article.observationStatus ? (
            <StatusBadge status={article.observationStatus} />
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
          {article.title}
        </h1>
        {article.subtitle ? (
          <p className="mt-4 text-lg leading-relaxed text-[var(--ink-muted)]">
            {article.subtitle}
          </p>
        ) : null}
        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--ink-faint)]">
          <div>
            <dt className="annotation mb-0.5">Published</dt>
            <dd>
              <time dateTime={article.date}>
                {formatArticleDate(article.date)}
              </time>
            </dd>
          </div>
          {article.readingTime ? (
            <div>
              <dt className="annotation mb-0.5">Reading time</dt>
              <dd>{article.readingTime} 分</dd>
            </div>
          ) : null}
        </dl>
      </header>

      {article.heroCopy ? (
        <ObservationHero
          thesis={article.heroCopy.thesis}
          supplement={article.heroCopy.supplement}
        />
      ) : null}

      <div className="article-body flex flex-col gap-10">
        {article.body.map((section) => (
          <ArticleSectionBlock key={section.id} section={section} />
        ))}
      </div>

      {article.openQuestionItems && article.openQuestionItems.length > 0 ? (
        <div className="mt-14 border-t border-[var(--border-subtle)] pt-10">
          <OpenQuestions
            questions={article.openQuestionItems}
            emphasizedQuestion={article.emphasizedOpenQuestion}
          />
        </div>
      ) : null}

      {article.closingStatement ? (
        <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-6">Closing Statement / 結論</h2>
          <div className="flex flex-col gap-5">
            {article.closingStatement.paragraphs.map((paragraph, i) => (
              <p
                key={`closing-${i}`}
                className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {article.closingStatement.quote ? (
            <div className="mt-10 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-6 py-8">
              <ThesisQuote
                text={article.closingStatement.quote}
                size="hero"
                className="border-none pl-0 text-center"
              />
            </div>
          ) : null}
        </section>
      ) : null}

      {article.sourceNote ? (
        <aside className="mt-14 border-t border-[var(--border-subtle)] pt-8">
          <p className="annotation mb-3">Source Note</p>
          <p className="prose-ja text-sm leading-relaxed text-[var(--ink-faint)]">
            {article.sourceNote}
          </p>
        </aside>
      ) : null}

      {article.closingNote && !article.sourceNote ? (
        <aside className="mt-14 border-t border-[var(--border-subtle)] pt-8">
          <p className="annotation mb-3">Note</p>
          <p className="prose-ja text-sm leading-relaxed text-[var(--ink-faint)]">
            {article.closingNote}
          </p>
        </aside>
      ) : null}

      {relatedObservations.length > 0 ? (
        <div className="mt-14 border-t border-[var(--border-subtle)] pt-10">
          <RelatedObservations
            observations={relatedObservations}
            intro={article.relatedObservationsIntro}
          />
        </div>
      ) : null}

      {relatedArticles.length > 0 ? (
        <section className="mt-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-5">Related Articles / 関連記事</h2>
          <ul className="flex flex-col gap-3">
            {relatedArticles.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex items-center justify-between rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                >
                  <span className="text-sm font-medium">{a.title}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {relatedEncounters.length > 0 ? (
        <section className="mt-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-5">
            Classics of Encounter / 出会いの古典と現在
          </h2>
          <ul className="flex flex-col gap-3">
            {relatedEncounters.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/classics-of-encounter/${r.slug}`}
                  className="group flex items-center justify-between rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                >
                  <span className="text-sm font-medium">{r.name}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {article.crossObservatoryLinks &&
      article.crossObservatoryLinks.length > 0 ? (
        <div className="mt-10 border-t border-[var(--border-subtle)] pt-10">
          <CrossObservatoryLinks links={article.crossObservatoryLinks} />
        </div>
      ) : null}

      {openQuestions.length > 0 ? (
        <section className="mt-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-5">
            Observatory Questions / 観測所の問い
          </h2>
          <ul className="flex flex-col gap-6">
            {openQuestions.map((q) =>
              q ? (
                <li key={q.id}>
                  <Link
                    href={buildQuestionFilterHref(q.filterParams)}
                    className="prose-ja text-[var(--ink-muted)] hover:text-[var(--accent-violet)]"
                  >
                    {q.textJa}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      ) : null}

      {article.relatedProjects && article.relatedProjects.length > 0 ? (
        <section className="mt-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-5">Related Projects / 関連プロジェクト</h2>
          <ul className="flex flex-col gap-2">
            {article.relatedProjects.map((id) => {
              const project = RELATED_PROJECTS.find((p) => p.id === id);
              if (!project) return null;
              return (
                <li key={id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
                  >
                    {project.name}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
