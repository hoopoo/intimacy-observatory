import { VANISHED_DISAPPEARED } from "@/data/encounter-vanished";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function VanishedWhatDisappeared() {
  return (
    <section
      id="what-disappeared"
      className="border-b border-[var(--border)]"
      aria-labelledby="what-disappeared-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">What disappeared with them</p>
          <h2
            id="what-disappeared-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            装置とともに、何が消えたのか
          </h2>
        </FadeInOnScroll>

        <ol className="mt-12 flex flex-col gap-10">
          {VANISHED_DISAPPEARED.map((item, index) => (
            <FadeInOnScroll key={item.id} delayMs={index * 50}>
              <li>
                <h3 className="text-lg font-semibold tracking-tight">
                  <span className="mr-2 font-mono text-[var(--ink-faint)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h3>
                <div className="prose-ja mt-4 flex flex-col gap-3 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                  ))}
                </div>
              </li>
            </FadeInOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
