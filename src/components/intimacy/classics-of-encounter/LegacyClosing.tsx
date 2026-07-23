import { FadeInOnScroll } from "./FadeInOnScroll";

export function LegacyClosing() {
  return (
    <section
      id="closing"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="legacy-closing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-2">Closing observation</p>
          <h2
            id="legacy-closing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            出会いの不足から、接触の過剰へ
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>テレクラでは、利用者は電話が鳴るのを待った。</p>
            <p>スタービーチでは、投稿にメールが届くのを待った。</p>
            <p>
              老舗出会い系では、利用者は待つだけではない。掲示板を読み、プロフィールを開き、何人もの相手へ接触を試みる。
            </p>
            <p>
              出会いの装置は、偶然を待つ場所から、接触を量産する市場へ変わった。
            </p>
            <p>
              しかし、接触の量が増えても、関係が始まるとは限らない。
            </p>
            <p>
              メッセージは送れる。候補者も見つかる。返信が来ることもある。
            </p>
            <p>
              それでも孤独が消えないとすれば、現代の出会いに不足しているのは、接触の機会ではないのかもしれない。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              接触は増えた。
              <br />
              関係は、必ずしも増えなかった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
