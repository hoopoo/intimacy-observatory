import { FadeInOnScroll } from "./FadeInOnScroll";

export function MunicipalClosing() {
  return (
    <section
      id="closing"
      className="border-b border-[var(--border)]"
      aria-labelledby="municipal-closing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-2">Closing observation</p>
          <h2
            id="municipal-closing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            制度化された出会いへ
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              公共・行政型は、出会いを個人の欲望から社会課題の一部へ移した。
            </p>
            <p>
              結婚支援、少子化対策、公的保証——利用者は恋活アプリの利用者ではなく、都の支援を受ける都民として参加する。
            </p>
            <p>
              大衆型が関係の市場だったのに対し、行政型は人口政策のインフラである。
            </p>
            <p>
              しかし、結婚は成立するとは限らない。書類は通過する。面談は終わる。それでも、孤独は消えないことがある。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              出会いは制度化された。
              <br />
              結婚は、必ずしも制度化されなかった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
