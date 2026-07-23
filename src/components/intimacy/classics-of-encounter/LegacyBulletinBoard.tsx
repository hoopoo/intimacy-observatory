import { LEGACY_BULLETIN_ITEMS } from "@/data/encounter-legacy";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function LegacyBulletinBoard() {
  return (
    <section
      id="bulletin-board"
      className="border-b border-[var(--border)]"
      aria-labelledby="bulletin-board-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Bulletin board as interface</p>
          <h2
            id="bulletin-board-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            掲示板は、なぜ消えなかったのか
          </h2>
        </FadeInOnScroll>

        <ol className="mt-12 flex flex-col gap-10">
          {LEGACY_BULLETIN_ITEMS.map((item, index) => (
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

        <FadeInOnScroll delayMs={200}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              プロフィールは人物を説明する。
              <br />
              掲示板は現在の欲望を説明する。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
