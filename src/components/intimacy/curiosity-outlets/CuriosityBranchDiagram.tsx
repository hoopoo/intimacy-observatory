import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import type { CuriosityOutlet } from "@/data/curiosity-outlets";

export function CuriosityBranchDiagram({ outlets }: { outlets: CuriosityOutlet[] }) {
  return (
    <div className="mt-8" aria-label="好奇心の出口分岐図">
      <FadeInOnScroll>
        <div className="mx-auto max-w-xs text-center">
          <div className="rounded-sm border-2 border-[var(--accent-violet)] bg-[var(--accent-violet-bg)]/50 px-6 py-5">
            <p className="annotation text-[var(--accent-violet)]">Curiosity</p>
            <p className="mt-1 text-lg font-semibold text-[var(--ink)]">
              好奇心
            </p>
          </div>
          <div
            className="mx-auto h-8 w-px bg-[var(--border)]"
            aria-hidden
          />
        </div>
      </FadeInOnScroll>

      <ol className="relative mx-auto flex max-w-2xl flex-col gap-3 md:gap-4">
        {outlets.map((outlet, index) => (
          <FadeInOnScroll key={outlet.id} delayMs={index * 50}>
            <li className="relative flex gap-4">
              <div
                className="absolute left-[1.125rem] top-0 hidden h-full w-px bg-[var(--border-subtle)] md:block"
                aria-hidden
              />
              <div
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] text-xs font-semibold text-[var(--accent-violet)]"
                aria-hidden
              >
                {outlet.number}
              </div>
              <article className="min-w-0 flex-1 rounded-sm border border-[var(--border)] bg-[var(--paper)] p-4 transition-transform duration-300 hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <p className="annotation text-[var(--ink-faint)]">
                  {outlet.titleEn}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[var(--ink)]">
                  {outlet.titleJa}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {outlet.tagline}
                </p>
              </article>
            </li>
          </FadeInOnScroll>
        ))}
      </ol>
    </div>
  );
}
