import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getEncounterRecordBySlug,
  getEncounterTimeline,
} from "@/lib/encounter-classics";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function ClassicsTimeline() {
  const eras = getEncounterTimeline();

  return (
    <section
      id="timeline"
      className="border-b border-[var(--border)]"
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
        </FadeInOnScroll>

        <ol className="relative mt-12 flex flex-col gap-0">
          {eras.map((era, index) => (
            <FadeInOnScroll key={era.id} delayMs={index * 50}>
              <li className="relative border-l border-[var(--border)] pb-12 pl-8 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[var(--ink-faint)]"
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
                {era.relatedRecordSlugs?.length ? (
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
              </li>
            </FadeInOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
