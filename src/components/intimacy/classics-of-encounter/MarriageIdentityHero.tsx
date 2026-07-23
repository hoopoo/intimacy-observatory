import { FadeInOnScroll } from "./FadeInOnScroll";

export function MarriageIdentityHero() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-3">Marriage and Identity-specific</p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            婚活・属性特化型
          </h1>
          <p className="mt-3 text-lg text-[var(--ink-faint)]">
            When encounter was segmented by life history.
          </p>
          <p className="prose-ja mt-4 text-[var(--ink-muted)]">
            出会いは、生活史の条件で切り出された。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              大衆型マッチングが全利用者を同じ候補プールに入れるのに対し、婚活・属性特化型は生活史で市場を分割する。
            </p>
            <p>
              再婚から、シングルペアレントへ。
              <br />
              本気婚活から、シニア層へ。
              <br />
              恋活・婚活から、結婚前提へ。
            </p>
            <p>
              マリッシュ、ユーブライド、ブライダルネット、アンジュ——これらは特定の背景を持つ利用者だけを集め、同質性の中での出会いを設計する。
            </p>
            <p>
              ここで販売されているのは、偶然ではなく、似た条件の中での結婚の可能性である。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              出会いは、
              <br />
              生活史の条件で分割された。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </header>
  );
}
