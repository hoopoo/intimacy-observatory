import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EncounterCategory } from "@/types/encounter-classics";
import {
  getEncounterRecordsByCategory,
  getEncounterTimeline,
  getPendingTargetsForCategory,
} from "@/lib/encounter-classics";
import { buildEncounterArchiveHref } from "@/lib/encounter-classics-filters";
import { ClassicsRecordCard } from "./ClassicsRecordCard";

export function ClassicsCategoryDetail({
  category,
}: {
  category: EncounterCategory;
}) {
  const records = getEncounterRecordsByCategory(category.id);
  const pending = getPendingTargetsForCategory(category.id);
  const timeline = getEncounterTimeline().filter((era) =>
    category.timelineEraIds.includes(era.id),
  );

  return (
    <div>
      <header className="mb-12 max-w-2xl">
        <p className="annotation mb-2">{category.titleEn}</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {category.title}
        </h1>
        <p className="prose-ja mt-4 text-sm text-[var(--ink-muted)]">
          {category.description}
        </p>
      </header>

      {timeline.length > 0 ? (
        <section className="mb-12 border-b border-[var(--border-subtle)] pb-10">
          <h2 className="annotation mb-4">Related timeline eras</h2>
          <ul className="flex flex-col gap-3">
            {timeline.map((era) => (
              <li key={era.id}>
                <Link
                  href={buildEncounterArchiveHref({
                    categoryId: category.id,
                    timelineEraId: era.id,
                  })}
                  className="group flex items-start justify-between gap-4 rounded-sm border border-[var(--border)] p-4 transition-colors hover:border-[var(--ink-faint)]"
                >
                  <div>
                    <p className="annotation mb-1">{era.period}</p>
                    <p className="font-medium">{era.title}</p>
                    <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
                      {era.summary}
                    </p>
                  </div>
                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mb-12">
        <h2 className="annotation mb-4">Observations in this category</h2>
        {records.length === 0 ? (
          <p className="text-sm text-[var(--ink-faint)]">
            このカテゴリの詳細観測は準備中です。
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {records.map((record) => (
              <ClassicsRecordCard key={record.slug} record={record} />
            ))}
          </div>
        )}
      </section>

      {pending.length > 0 ? (
        <section className="border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-4">Archive expanding</h2>
          <p className="mb-4 text-sm text-[var(--ink-muted)]">
            以下のサービス・装置は、観測記録の追加を予定しています。
          </p>
          <ul className="flex flex-wrap gap-2">
            {pending.map((target) => (
              <li
                key={target}
                className="rounded-sm border border-[var(--border-subtle)] px-2.5 py-1 text-xs text-[var(--ink-faint)]"
              >
                {target}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
