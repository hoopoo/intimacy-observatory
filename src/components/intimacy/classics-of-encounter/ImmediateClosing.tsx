import { FadeInOnScroll } from "./FadeInOnScroll";

export function ImmediateClosing() {
  return (
    <section
      id="closing"
      className="border-b border-[var(--border)]"
      aria-labelledby="immediate-closing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-2">Closing observation</p>
          <h2
            id="immediate-closing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            説明しにくい出会いへ
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              即時・カジュアル型は、出会いを社会に説明しにくいまま、または食事・空き時間という形式へ載せた。
            </p>
            <p>
              近さ、今すぐ、カジュアル——利用者は恋活・婚活という言葉へ翻訳しなくても、候補プールに入れる。
            </p>
            <p>
              大衆型が関係の市場だったのに対し、即時型は近接の市場である。
            </p>
            <p>
              しかし、対面は起きるとは限らない。マッチは成立する。距離は表示される。それでも、孤独は消えないことがある。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              近さは可視化された。
              <br />
              関係は、必ずしも近づかなかった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
