import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EncounterRecord } from "@/types/encounter-classics";
import {
  encounterStatusLabel,
  encounterStatusTone,
} from "@/lib/encounter-classics-display";

type Props = {
  record: EncounterRecord;
  number: number;
};

export function VanishedRecordCard({ record, number }: Props) {
  const status = encounterStatusLabel[record.status];
  const shortObservation = record.observation[0] ?? "";

  return (
    <article className="group relative border border-[var(--border)] bg-[var(--paper)] p-6 transition-colors hover:border-[var(--ink-faint)] md:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span
          className="font-mono text-2xl font-light tabular-nums text-[var(--ink-faint)]"
          aria-hidden
        >
          {String(number).padStart(2, "0")}
        </span>
        <span
          className={`shrink-0 rounded-sm px-2 py-0.5 text-[0.65rem] font-medium ${encounterStatusTone(record.status)}`}
        >
          {status.en} / {status.ja}
        </span>
      </div>

      <p className="annotation mb-1">{record.englishName}</p>
      <h3 className="text-xl font-semibold tracking-tight">{record.name}</h3>
      <p className="annotation mt-3">{record.era}</p>

      {record.interface?.length ? (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Interface">
          {record.interface.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {record.timeStructure ? (
        <dl className="mt-5 text-sm">
          <dt className="annotation mb-1">Time structure</dt>
          <dd className="text-[var(--ink-muted)]">{record.timeStructure}</dd>
        </dl>
      ) : null}

      <p className="prose-ja mt-5 text-sm text-[var(--ink-muted)]">
        {record.summary}
      </p>

      {shortObservation ? (
        <p className="prose-ja mt-4 border-t border-[var(--border-subtle)] pt-4 text-sm leading-relaxed text-[var(--ink-faint)]">
          {shortObservation}
        </p>
      ) : null}

      <Link
        href={`/classics-of-encounter/${record.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
        aria-label={`${record.name}の観測記録を読む`}
      >
        Read record
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </Link>
    </article>
  );
}
