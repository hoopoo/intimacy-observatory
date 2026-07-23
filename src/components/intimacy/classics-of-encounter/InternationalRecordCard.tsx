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

export function InternationalRecordCard({ record, number }: Props) {
  const status = encounterStatusLabel[record.status];
  const shortObservation = record.observation[0] ?? "";

  return (
    <article className="group relative border border-[var(--border)] bg-[var(--paper)] transition-colors hover:border-[var(--ink-faint)] md:grid md:grid-cols-[1fr_180px]">
      <div className="p-6 md:p-8">
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

        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="annotation mb-0.5">Contact logic</dt>
            <dd className="text-[var(--ink-muted)]">
              {record.contactLogic ?? record.matchingRequirement ?? "相互マッチ"}
            </dd>
          </div>
          <div>
            <dt className="annotation mb-0.5">Desire framed as</dt>
            <dd className="text-[var(--ink-muted)]">
              {record.howDesireWasFramed}
            </dd>
          </div>
        </dl>

        {shortObservation ? (
          <p className="prose-ja mt-5 border-t border-[var(--border-subtle)] pt-4 text-sm leading-relaxed text-[var(--ink-faint)]">
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
      </div>

      <div
        className="border-t border-[var(--border-subtle)] bg-[var(--paper-raised)] p-5 md:border-l md:border-t-0"
        aria-hidden
      >
        <div className="flex flex-col gap-3">
          <div className="aspect-[3/4] rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] p-3">
            <div className="flex items-center justify-between text-[0.55rem] text-[var(--ink-faint)]">
              <span>Global</span>
              <span>Women first</span>
            </div>
            <div className="mt-2 h-20 rounded-sm bg-[var(--border-subtle)]" />
            <div className="mt-3 flex justify-center gap-3">
              <span className="h-7 w-7 rounded-full border border-[var(--border-subtle)]" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--accent-violet)] text-[0.5rem]">
                ✉
              </span>
            </div>
            <p className="mt-3 text-center font-mono text-[0.55rem] text-[var(--ink-faint)]">
              最初の一言を待つ
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
