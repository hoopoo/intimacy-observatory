import { VANISHED_LINEAGE } from "@/data/encounter-vanished";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function VanishedLineage() {
  return (
    <section
      id="lineage"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="lineage-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Lineage to the present</p>
          <h2
            id="lineage-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            古い装置は、何に変わったのか
          </h2>
        </FadeInOnScroll>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {VANISHED_LINEAGE.map((chain, chainIndex) => (
            <FadeInOnScroll key={chain.id} delayMs={chainIndex * 60}>
              <article
                className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5"
                aria-label={`${chain.origin}から現代への系譜`}
              >
                <h3 className="text-sm font-semibold">{chain.origin}</h3>
                <ol className="mt-4 flex flex-col">
                  {chain.steps.map((step, stepIndex) => (
                    <li
                      key={step}
                      className="relative flex items-start gap-3 pb-4 last:pb-0"
                    >
                      {stepIndex < chain.steps.length - 1 ? (
                        <span
                          className="absolute left-[5px] top-3 h-[calc(100%-4px)] w-px bg-[var(--border)]"
                          aria-hidden
                        />
                      ) : null}
                      <span
                        className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-[var(--ink-faint)] bg-[var(--paper)]"
                        aria-hidden
                      />
                      <span className="text-sm text-[var(--ink-muted)]">
                        {stepIndex > 0 ? (
                          <span aria-hidden className="mr-1 text-[var(--ink-faint)]">
                            →
                          </span>
                        ) : null}
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
