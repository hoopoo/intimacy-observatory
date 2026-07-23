import { FadeInOnScroll } from "./FadeInOnScroll";

export function MarriageIdentityClosing() {
  return (
    <section
      id="closing"
      className="border-b border-[var(--border)]"
      aria-labelledby="marriage-identity-closing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-2">Closing observation</p>
          <h2
            id="marriage-identity-closing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            分割された出会いへ
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              婚活・属性特化型は、出会いを生活史の条件で切り出した。
            </p>
            <p>
              再婚、シニア、本気婚活——利用者は大衆型の海の中ではなく、自分と似た条件のプールに入る。
            </p>
            <p>
              大衆型が関係の市場だったのに対し、特化型は結婚の市場である。
            </p>
            <p>
              しかし、結婚は成立するとは限らない。同質性は可視化される。それでも、孤独は消えないことがある。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              市場は分割された。
              <br />
              結婚は、必ずしも近づかなかった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
