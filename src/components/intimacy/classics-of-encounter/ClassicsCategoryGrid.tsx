import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getEncounterCategories, getCategoryPageHref } from "@/lib/encounter-classics";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function ClassicsCategoryGrid() {
  const categories = getEncounterCategories();

  return (
    <section
      id="categories"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="classics-categories-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Categories</p>
          <h2
            id="classics-categories-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            観測対象のカテゴリ
          </h2>
        </FadeInOnScroll>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <FadeInOnScroll key={category.id} delayMs={index * 40}>
              <Link
                href={getCategoryPageHref(category.id)}
                className="group block h-full"
              >
                <article
                  id={`category-${category.id}`}
                  className="flex h-full flex-col rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--ink-faint)]"
                >
                  <p className="annotation mb-2">{category.titleEn}</p>
                  <h3 className="text-base font-semibold tracking-tight">
                    {category.title}
                  </h3>
                  <p className="prose-ja mt-3 flex-1 text-sm text-[var(--ink-muted)]">
                    {category.description}
                  </p>
                  {category.cardObservation?.length ? (
                    <div className="prose-ja mt-3 space-y-1 text-xs leading-relaxed text-[var(--ink-faint)]">
                      {category.cardObservation.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : null}
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {category.initialTargets.slice(0, 4).map((target) => (
                      <li
                        key={target}
                        className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]"
                      >
                        {target}
                      </li>
                    ))}
                    {category.initialTargets.length > 4 ? (
                      <li className="text-[0.65rem] text-[var(--ink-faint)]">
                        +{category.initialTargets.length - 4}
                      </li>
                    ) : null}
                  </ul>
                  <div className="mt-5 flex items-center gap-1 text-sm text-[var(--ink-faint)] transition-colors group-hover:text-[var(--ink-muted)]">
                    View category
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </div>
                </article>
              </Link>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
