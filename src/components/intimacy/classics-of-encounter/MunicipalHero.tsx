import { FadeInOnScroll } from "./FadeInOnScroll";

export function MunicipalHero() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-3">Public and Municipal</p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            公共・行政型
          </h1>
          <p className="mt-3 text-lg text-[var(--ink-faint)]">
            When encounter became public infrastructure.
          </p>
          <p className="prose-ja mt-4 text-[var(--ink-muted)]">
            出会いは、社会基盤になった。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              かつて通信を介した出会いは、猥雑さや危険性を伴う境界産業として扱われた。
            </p>
            <p>
              掲示板から、プロフィールカードへ。
              <br />
              民間アプリから、行政プラットフォームへ。
              <br />
              個人の欲望から、人口政策へ。
            </p>
            <p>
              TOKYO縁結び、自治体AIマッチング、地域婚活支援——
              都・道府県・市区町村の各段階で、出会いが人口政策のインフラになっている。
            </p>
            <p>
              ここで販売されているのは、接触の可能性ではなく、制度が保証する結婚支援への参加権である。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              欲望そのものが変わったのではない。
              <br />
              欲望を包む制度と語彙が、変わった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </header>
  );
}
