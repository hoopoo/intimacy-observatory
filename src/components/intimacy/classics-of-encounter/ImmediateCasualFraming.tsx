import { IMMEDIATE_CASUAL_FRAMES } from "@/data/encounter-immediate-casual";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function ImmediateCasualFraming() {
  return (
    <section
      id="casual-framing"
      className="border-b border-[var(--border)]"
      aria-labelledby="casual-framing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Casual framing</p>
          <h2
            id="casual-framing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            欲望は、どの枠組みへ載せられるのか
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <ul className="mt-10 flex flex-col gap-4">
            {IMMEDIATE_CASUAL_FRAMES.map((item) => (
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
