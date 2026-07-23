import { PUBLIC_PARTICIPATION_STEPS } from "@/data/encounter-public-municipal";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function MunicipalParticipationFlow() {
  return (
    <section
      id="participation-flow"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="participation-flow-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Participation flow</p>
          <h2
            id="participation-flow-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            参加までの行動フロー
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <ol className="mt-10 flex flex-col">
            {PUBLIC_PARTICIPATION_STEPS.map((step, index) => (
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
            マッチは制度を通過した者に与えられる。
            <br />
            参加できない者は、最初から候補プールに入れない。
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
