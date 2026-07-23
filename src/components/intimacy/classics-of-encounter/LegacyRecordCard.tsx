import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EncounterRecord } from "@/types/encounter-classics";
import {
  encounterStatusLabel,
  encounterStatusTone,
} from "@/lib/encounter-classics-display";

const ABSTRACT_UI = [
  { time: "23:14", region: "東京", newNo: "042" },
  { time: "18:02", region: "大阪", newNo: "118" },
  { time: "01:47", region: "福岡", newNo: "007" },
  { time: "12:33", region: "名古屋", newNo: "056" },
];

type Props = {
  record: EncounterRecord;
  number: number;
};

export function LegacyRecordCard({ record, number }: Props) {
  const status = encounterStatusLabel[record.status];
  const shortObservation = record.observation[0] ?? "";
  const uiHint = ABSTRACT_UI[(number - 1) % ABSTRACT_UI.length];
  const primaryInterface = record.interface?.[0] ?? "掲示板";

  return (
    <article className="group relative border border-[var(--border)] bg-[var(--paper)] transition-colors hover:border-[var(--ink-faint)] md:grid md:grid-cols-[1fr_200px]">
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
            <dt className="annotation mb-0.5">Primary interface</dt>
            <dd className="text-[var(--ink-muted)]">{primaryInterface}</dd>
          </div>
          {record.contactLogic ? (
            <div>
              <dt className="annotation mb-0.5">Contact logic</dt>
              <dd className="text-[var(--ink-muted)]">{record.contactLogic}</dd>
            </div>
          ) : null}
          <div className="sm:col-span-2">
            <dt className="annotation mb-0.5">Payment logic</dt>
            <dd className="text-[var(--ink-muted)]">{record.paymentLogic}</dd>
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
        <div className="flex flex-col gap-3 font-mono text-[0.65rem] text-[var(--ink-faint)]">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
            <span>{uiHint.time}</span>
            <span>新着 #{uiHint.newNo}</span>
          </div>
          <span className="inline-flex w-fit rounded-sm border border-[var(--border-subtle)] px-2 py-0.5">
            {uiHint.region}
          </span>
          <div className="flex flex-col gap-1.5 pt-1">
            <span className="h-px w-full bg-[var(--border-subtle)]" />
            <span className="h-px w-4/5 bg-[var(--border-subtle)]" />
            <span className="h-px w-3/5 bg-[var(--border-subtle)]" />
          </div>
          <div className="mt-2 flex items-center justify-between text-[0.6rem]">
            <span>送信前</span>
            <span>— pt</span>
          </div>
        </div>
      </div>
    </article>
  );
}
