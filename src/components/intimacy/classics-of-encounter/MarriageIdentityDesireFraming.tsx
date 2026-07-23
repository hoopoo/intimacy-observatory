import { MARRIAGE_IDENTITY_DESIRE_FRAMES } from "@/data/encounter-marriage-identity";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function MarriageIdentityDesireFraming() {
  return (
    <section
      id="desire-framing"
      className="border-b border-[var(--border)]"
      aria-labelledby="marriage-identity-desire-framing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Desire framing</p>
          <h2
            id="marriage-identity-desire-framing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            欲望は、どの枠組みへ限定されるのか
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <ul className="mt-10 flex flex-col gap-4">
            {MARRIAGE_IDENTITY_DESIRE_FRAMES.map((item) => (
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
