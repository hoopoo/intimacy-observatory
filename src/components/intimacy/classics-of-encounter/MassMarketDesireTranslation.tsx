import { MASS_MARKET_DESIRE_FRAMES } from "@/data/encounter-mass-market";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function MassMarketDesireTranslation() {
  return (
    <section
      id="desire-translation"
      className="border-b border-[var(--border)]"
      aria-labelledby="desire-translation-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Desire translation</p>
          <h2
            id="desire-translation-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            欲望は、どの言葉へ翻訳されるのか
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <ul className="mt-10 flex flex-col gap-4">
            {MASS_MARKET_DESIRE_FRAMES.map((item) => (
              <li
                key={item.frame}
                className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5"
              >
                <h3 className="text-sm font-semibold">{item.frame}</h3>
                <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
