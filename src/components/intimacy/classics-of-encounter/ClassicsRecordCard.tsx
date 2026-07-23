import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EncounterRecord } from "@/types/encounter-classics";
import {
  encounterStatusLabel,
  encounterStatusTone,
} from "@/lib/encounter-classics-display";
import { getEncounterCategoryById } from "@/lib/encounter-classics";

export function ClassicsRecordCard({ record }: { record: EncounterRecord }) {
  const category = getEncounterCategoryById(record.categoryId);
  const status = encounterStatusLabel[record.status];

  return (
    <Link
      href={`/classics-of-encounter/${record.slug}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--ink-faint)]">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-sm px-2 py-0.5 text-[0.65rem] font-medium ${encounterStatusTone(record.status)}`}
          >
            {status.en} / {status.ja}
          </span>
          {category ? (
            <span className="text-[0.65rem] text-[var(--ink-faint)]">
              {category.title}
            </span>
          ) : null}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{record.name}</h3>
        {record.englishName ? (
          <p className="mt-1 text-sm text-[var(--ink-faint)]">
            {record.englishName}
          </p>
        ) : null}
        <p className="annotation mt-3">{record.era}</p>
        <p className="prose-ja mt-4 line-clamp-3 flex-1 text-sm text-[var(--ink-muted)]">
          {record.observation[0]}
        </p>
        <div className="mt-5 flex items-center gap-1 text-sm text-[var(--ink-faint)] transition-colors group-hover:text-[var(--ink-muted)]">
          Read observation
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
      </article>
    </Link>
  );
}
