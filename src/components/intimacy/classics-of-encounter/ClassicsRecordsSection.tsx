import { getEncounterRecords } from "@/lib/encounter-classics";
import { ClassicsRecordCard } from "./ClassicsRecordCard";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function ClassicsRecordsSection() {
  const records = getEncounterRecords();

  return (
    <section
      id="observations"
      className="border-b border-[var(--border)]"
      aria-labelledby="classics-records-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Sample Observations</p>
          <h2
            id="classics-records-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            観測記録（サンプル）
          </h2>
          <p className="prose-ja mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            各時代の装置が、何を約束し、誰を可視化し、偶然をどう生成したか——最初の3件。
          </p>
        </FadeInOnScroll>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {records.map((record, index) => (
            <FadeInOnScroll key={record.slug} delayMs={index * 60}>
              <ClassicsRecordCard record={record} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
