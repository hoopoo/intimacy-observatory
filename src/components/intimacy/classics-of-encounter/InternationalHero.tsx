import { FadeInOnScroll } from "./FadeInOnScroll";

export function InternationalHero() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-3">International and Cross-border</p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            国際・越境型
          </h1>
          <p className="mt-3 text-lg text-[var(--ink-faint)]">
            When encounter crossed borders, languages, and norms.
          </p>
          <p className="prose-ja mt-4 text-[var(--ink-muted)]">
            出会いは、国境と規範を越えた。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              日本の大衆型が国内の関係市場を作ったのに対し、国際・越境型はグローバルな候補プールと、越境的な規範を売る。
            </p>
            <p>
              居住地から、世界へ。
              <br />
              誰でもメッセージから、女性ファーストへ。
              <br />
              恋活・婚活から、尊重と国際性へ。
            </p>
            <p>
              Bumble、Hinge、OkCupid、JapanCupid、InternationalCupid——
              規範・会話・相性・国籍を軸に、国内大衆型とは異なる越境市場を形成する。
            </p>
            <p>
              ここで販売されているのは、国内の候補プールではなく、国境を越えた接触の可能性と、そこに込められた規範である。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              誰が最初に話すか——
              <br />
              その順序が、信頼の言語になった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </header>
  );
}
