import { FadeInOnScroll } from "./FadeInOnScroll";

export function ImmediateHero() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-3">Immediate and Casual</p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            即時・カジュアル型
          </h1>
          <p className="mt-3 text-lg text-[var(--ink-faint)]">
            When proximity and speed replaced relationship vocabulary.
          </p>
          <p className="prose-ja mt-4 text-[var(--ink-muted)]">
            出会いは、近さと速度へ還元された。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              大衆型マッチングが関係の可能性を売るのに対し、即時・カジュアル型は近接性と速度を売る。
            </p>
            <p>
              プロフィールを読む時間から、スワイプの数秒へ。
              <br />
              居住地・価値観から、位置情報と距離へ。
              <br />
              恋活・婚活から、今日会えるへ。
            </p>
            <p>
              Tinder、Dine、バチェラーデート、東カレデート——
              これらは出会いを、社会的に説明しにくい欲望のまま、または食事・空き時間という形式へ載せて対面へ導く。
            </p>
            <p>
              ここで販売されているのは、関係の可能性ではなく、近くにいる相手との接触の即時性である。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              出会いは、
              <br />
              近さと、今すぐへ還元された。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </header>
  );
}
