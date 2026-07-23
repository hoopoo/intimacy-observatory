import { IMMEDIATE_PROXIMITY_STEPS } from "@/data/encounter-immediate-casual";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function ImmediateProximityEconomy() {
  return (
    <section
      id="proximity-economy"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="proximity-economy-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Proximity economy</p>
          <h2
            id="proximity-economy-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            近接性の経済——対面までの行動フロー
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <ol className="mt-10 flex flex-col">
            {IMMEDIATE_PROXIMITY_STEPS.map((step, index) => (
              <li
                key={step}
                className="relative flex items-start gap-4 border-l border-[var(--border)] py-4 pl-8"
              >
                <span
                  className="absolute -left-[5px] top-6 h-2 w-2 rounded-full bg-[var(--ink-faint)]"
                  aria-hidden
                />
                <span className="font-mono text-xs tabular-nums text-[var(--ink-faint)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[var(--ink-muted)]">{step}</span>
              </li>
            ))}
          </ol>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <p className="prose-ja mt-10 border-t border-[var(--border-subtle)] pt-8 text-[1.0625rem] font-medium leading-[2.1] text-[var(--ink-muted)]">
            関係は購入できない。
            <br />
            購入できるのは、近くにいる相手を可視化し、判断を加速する体験である。
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
