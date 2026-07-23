import { PUBLIC_VS_MASS_MARKET } from "@/data/encounter-public-municipal";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function MunicipalVsMassMarket() {
  return (
    <section
      id="municipal-vs-mass-market"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="municipal-vs-mass-market-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Public vs mass-market</p>
          <h2
            id="municipal-vs-mass-market-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            公共・行政型と大衆型
          </h2>
        </FadeInOnScroll>

        <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-2">
          {[
            PUBLIC_VS_MASS_MARKET.publicMunicipal,
            PUBLIC_VS_MASS_MARKET.massMarket,
          ].map((side) => (
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
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 lg:hidden">
          {[
            PUBLIC_VS_MASS_MARKET.publicMunicipal,
            PUBLIC_VS_MASS_MARKET.massMarket,
          ].map((side, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
