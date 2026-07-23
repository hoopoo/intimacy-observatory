import { FadeInOnScroll } from "./FadeInOnScroll";

export function MassMarketHero() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-3">Mass-market Matching</p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            日本の大衆型
          </h1>
          <p className="mt-3 text-lg text-[var(--ink-faint)]">
            How desire became daily dating vocabulary.
          </p>
          <p className="prose-ja mt-4 text-[var(--ink-muted)]">
            出会いたいという欲望を、恋活・婚活という日常的な言葉へ翻訳した。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              2010年代、日本の出会いは大きく変わった。
            </p>
            <p>
              掲示板からプロフィールカードへ。
              <br />
              直接メッセージから相互マッチへ。
              <br />
              ポイント課金から月額アクセスへ。
            </p>
            <p>
              大衆型マッチングアプリは、出会いを「恋活」「婚活」という社会的に説明しやすい活動として定着させた。
            </p>
            <p>
              利用者は自分の欲望を、価値観、趣味、結婚への意思、相性といった言葉へ翻訳してから、候補プールに入る。
            </p>
            <p>
              ここで販売されているのは、接触の可能性ではなく、関係の可能性である。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              出会いたいという欲望は、
              <br />
              恋活・婚活という言葉へ翻訳された。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </header>
  );
}
