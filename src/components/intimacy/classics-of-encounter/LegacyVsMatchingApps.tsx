import { LEGACY_VS_MATCHING } from "@/data/encounter-legacy";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function LegacyVsMatchingApps() {
  return (
    <section
      id="legacy-vs-matching"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="legacy-vs-matching-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Bulletin-board dating and match-first dating</p>
          <h2
            id="legacy-vs-matching-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            掲示板型とマッチング型
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-2">
            {[LEGACY_VS_MATCHING.legacy, LEGACY_VS_MATCHING.matching].map(
              (side) => (
                <article
                  key={side.labelEn}
                  className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-6"
                >
                  <h3 className="text-base font-semibold">{side.label}</h3>
                  <p className="annotation mt-1">{side.labelEn}</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {side.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ),
            )}
          </div>
        </FadeInOnScroll>

        <div className="mt-10 flex flex-col gap-6 lg:hidden">
          {[LEGACY_VS_MATCHING.legacy, LEGACY_VS_MATCHING.matching].map(
            (side, index) => (
              <FadeInOnScroll key={side.labelEn} delayMs={index * 50}>
                <article className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5">
                  <h3 className="text-base font-semibold">{side.label}</h3>
                  <p className="annotation mt-1">{side.labelEn}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {side.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeInOnScroll>
            ),
          )}
        </div>

        <FadeInOnScroll delayMs={120}>
          <div className="prose-ja mx-auto mt-12 max-w-2xl text-center text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>老舗出会い系は、欲望を整理しきらない。</p>
            <p>
              マッチングアプリは、欲望を恋活、婚活、価値観、将来設計へ翻訳する。
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
