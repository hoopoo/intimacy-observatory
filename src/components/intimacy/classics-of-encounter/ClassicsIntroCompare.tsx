import { getEncounterCompare } from "@/lib/encounter-classics";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function ClassicsIntroCompare() {
  const { teleclub, modernApps } = getEncounterCompare();

  return (
    <section
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="classics-compare-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <h2
            id="classics-compare-heading"
            className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl"
          >
            欲望は変わったのではない。
            <br />
            インターフェースが変わった。
          </h2>
        </FadeInOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
          {[teleclub, modernApps].map((side, index) => (
            <FadeInOnScroll key={side.id} delayMs={index * 100}>
              <article className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-6 md:p-8">
                <h3 className="annotation mb-6 text-[var(--accent-slate)]">
                  {side.label}
                </h3>
                <ul className="flex flex-col gap-3">
                  {side.items.map((item) => (
                    <li
                      key={item}
                      className="prose-ja border-b border-[var(--border-subtle)] pb-3 text-sm text-[var(--ink-muted)] last:border-0 last:pb-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll delayMs={180}>
          <p className="prose-ja mt-12 max-w-xl text-base font-medium text-[var(--ink)] md:text-lg">
            テレクラでは電話が鳴った。
            <br />
            現在は通知が鳴る。
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
