"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { X } from "lucide-react";
import {
  buildEncounterArchiveHref,
  encounterFiltersToSearchParams,
  parseEncounterFiltersFromSearchParams,
} from "@/lib/encounter-classics-filters";
import {
  filterEncounterRecords,
  filterEncounterTimelineEras,
  getCategoryPageHref,
  getEncounterCategories,
  getEncounterRecordBySlug,
  getEncounterTimeline,
} from "@/lib/encounter-classics";
import type { EncounterArchiveFilters } from "@/types/encounter-classics";
import { ClassicsRecordCard } from "./ClassicsRecordCard";
import { FadeInOnScroll } from "./FadeInOnScroll";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-sm border px-2.5 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]/20",
        active
          ? "border-[var(--accent-violet)] bg-[var(--accent-violet-bg)] text-[var(--ink)]"
          : "border-[var(--border)] text-[var(--ink-muted)] hover:border-[var(--ink-faint)]",
      )}
    >
      {label}
    </button>
  );
}

export function ClassicsArchiveExplorer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters = useMemo(
    () => parseEncounterFiltersFromSearchParams(searchParams),
    [searchParams],
  );

  const setFilters = useCallback(
    (next: EncounterArchiveFilters) => {
      const params = encounterFiltersToSearchParams(next);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}#archive` : `${pathname}#archive`, {
        scroll: false,
      });
    },
    [pathname, router],
  );

  const categories = getEncounterCategories();
  const allEras = getEncounterTimeline();
  const filteredEras = filterEncounterTimelineEras(filters);
  const filteredRecords = filterEncounterRecords(filters);
  const hasFilters = Boolean(filters.categoryId || filters.timelineEraId);

  const toggleCategory = (id: string) => {
    setFilters({
      ...filters,
      categoryId: filters.categoryId === id ? undefined : id,
    });
  };

  const toggleEra = (id: string) => {
    setFilters({
      ...filters,
      timelineEraId: filters.timelineEraId === id ? undefined : id,
    });
  };

  const clearFilters = () => setFilters({});

  return (
    <div id="archive">
      <section
        className="border-b border-[var(--border)]"
        aria-labelledby="classics-filter-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-10">
          <h2 id="classics-filter-heading" className="annotation mb-4">
            Filter / 横断ナビ
          </h2>
          <div className="flex flex-col gap-6">
            <fieldset>
              <legend className="annotation mb-2">Category</legend>
              <ul className="flex flex-wrap gap-1.5">
                {categories.map((category) => (
                  <li key={category.id}>
                    <FilterChip
                      label={category.title}
                      active={filters.categoryId === category.id}
                      onClick={() => toggleCategory(category.id)}
                    />
                  </li>
                ))}
              </ul>
            </fieldset>
            <fieldset>
              <legend className="annotation mb-2">Timeline era</legend>
              <ul className="flex flex-wrap gap-1.5">
                {allEras.map((era) => (
                  <li key={era.id}>
                    <FilterChip
                      label={era.title}
                      active={filters.timelineEraId === era.id}
                      onClick={() => toggleEra(era.id)}
                    />
                  </li>
                ))}
              </ul>
            </fieldset>
            {hasFilters ? (
              <div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="gap-1"
                >
                  <X className="h-3.5 w-3.5" aria-hidden />
                  フィルターを解除
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
        aria-labelledby="classics-timeline-heading"
      >
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Timeline</p>
            <h2
              id="classics-timeline-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              出会い装置の年代記
            </h2>
            {hasFilters ? (
              <p className="mt-3 text-sm text-[var(--ink-faint)]">
                {filteredEras.length} 件の時代区分を表示中
              </p>
            ) : null}
          </FadeInOnScroll>

          <ol className="relative mt-12 flex flex-col gap-0">
            {allEras.map((era, index) => {
              const visible = filteredEras.some((e) => e.id === era.id);
              return (
                <FadeInOnScroll key={era.id} delayMs={index * 40}>
                  <li
                    className={cn(
                      "relative border-l border-[var(--border)] pb-12 pl-8 last:pb-0 transition-opacity",
                      visible ? "opacity-100" : "opacity-30",
                    )}
                    aria-hidden={!visible}
                  >
                    <span
                      className={cn(
                        "absolute -left-[5px] top-1.5 h-2 w-2 rounded-full",
                        visible
                          ? "bg-[var(--accent-violet)]"
                          : "bg-[var(--ink-faint)]",
                      )}
                      aria-hidden
                    />
                    <p className="annotation mb-1">{era.period}</p>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {era.title}
                    </h3>
                    <p className="prose-ja mt-3 text-sm text-[var(--ink-muted)]">
                      {era.summary}
                    </p>
                    <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="annotation mb-1">Interface</dt>
                        <dd className="text-[var(--ink-muted)]">
                          {era.interface}
                        </dd>
                      </div>
                      <div>
                        <dt className="annotation mb-1">Core desire</dt>
                        <dd className="text-[var(--ink-muted)]">
                          {era.coreDesire}
                        </dd>
                      </div>
                    </dl>
                    {visible && era.relatedRecordSlugs?.length ? (
                      <ul className="mt-4 flex flex-col gap-2">
                        {era.relatedRecordSlugs.map((slug) => {
                          const record = getEncounterRecordBySlug(slug);
                          if (!record) return null;
                          return (
                            <li key={slug}>
                              <Link
                                href={`/classics-of-encounter/${slug}`}
                                className="group inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
                              >
                                View record: {record.name}
                                <ArrowRight
                                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                  aria-hidden
                                />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                    {visible && era.relatedCategoryId ? (
                      <Link
                        href={getCategoryPageHref(era.relatedCategoryId)}
                        className="group mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
                      >
                        View archive
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </Link>
                    ) : null}
                    {visible && era.additionalCategoryLinks?.length ? (
                      <ul className="mt-2 flex flex-col gap-2">
                        {era.additionalCategoryLinks.map((link) => (
                          <li key={link.categoryId}>
                            <Link
                              href={getCategoryPageHref(link.categoryId)}
                              className="group inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
                            >
                              {link.label}
                              <ArrowRight
                                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                aria-hidden
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                </FadeInOnScroll>
              );
            })}
          </ol>
        </div>
      </section>

      <section
        id="observations"
        className="border-b border-[var(--border)]"
        aria-labelledby="classics-records-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Observations</p>
            <h2
              id="classics-records-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              観測記録
            </h2>
            {hasFilters ? (
              <p className="mt-3 text-sm text-[var(--ink-faint)]">
                {filteredRecords.length} 件の観測を表示中
              </p>
            ) : null}
          </FadeInOnScroll>

          {filteredRecords.length === 0 ? (
            <p className="mt-8 text-sm text-[var(--ink-faint)]">
              この条件に一致する観測記録はまだありません。
            </p>
          ) : (
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredRecords.map((record, index) => (
                <FadeInOnScroll key={record.slug} delayMs={index * 50}>
                  <ClassicsRecordCard record={record} />
                </FadeInOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export function classicsCategoryFilterHref(categoryId: string): string {
  return buildEncounterArchiveHref({ categoryId });
}

export function classicsEraFilterHref(timelineEraId: string): string {
  return buildEncounterArchiveHref({ timelineEraId });
}
