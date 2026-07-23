import { FadeInOnScroll } from "./FadeInOnScroll";

export function InternationalClosing() {
  return (
    <section
      id="closing"
      className="border-b border-[var(--border)]"
      aria-labelledby="international-closing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-2">Closing observation</p>
          <h2
            id="international-closing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            国境を越えた出会いへ
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              国際・越境型は、出会いを国内の制度や語彙から距離を取った接触として設計した。
            </p>
            <p>
              尊重、安全、国際性——利用者は恋活・婚活という言葉へ翻訳しなくても、グローバルな候補プールに入れる。
            </p>
            <p>
              大衆型が関係の市場だったのに対し、国際型は越境の市場である。
            </p>
            <p>
              しかし、対面は起きるとは限らない。マッチは国境を越える。ビザと生活の差は、アプリの外に残る。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              規範は可視化された。
              <br />
              制度の壁は、必ずしも越えられなかった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
