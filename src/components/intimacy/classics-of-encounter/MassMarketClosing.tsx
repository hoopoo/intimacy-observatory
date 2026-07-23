import { FadeInOnScroll } from "./FadeInOnScroll";

export function MassMarketClosing() {
  return (
    <section
      id="closing"
      className="border-b border-[var(--border)]"
      aria-labelledby="mass-market-closing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-2">Closing observation</p>
          <h2
            id="mass-market-closing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            説明可能な出会いへ
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              大衆型マッチングは、出会いを社会に説明可能にした。
            </p>
            <p>
              恋活、婚活、価値観、相性——利用者は自分の欲望を、周囲が理解できる言葉へ翻訳してからサービスに入る。
            </p>
            <p>
              老舗出会い系が接触の市場だったのに対し、大衆型は関係の市場である。
            </p>
            <p>
              しかし、関係が始まるとは限らない。マッチは成立する。メッセージは交わされる。それでも、孤独は消えないことがある。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              マッチは増えた。
              <br />
              関係は、必ずしも増えなかった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
