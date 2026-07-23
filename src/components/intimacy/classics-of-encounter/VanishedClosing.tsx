import { FadeInOnScroll } from "./FadeInOnScroll";

export function VanishedClosing() {
  return (
    <section
      id="closing"
      className="border-b border-[var(--border)]"
      aria-labelledby="vanished-closing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-2">Closing observation</p>
          <h2
            id="vanished-closing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            待つ装置から、選ぶ装置へ
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              文通、伝言ダイヤル、テレクラ、携帯掲示板。
            </p>
            <p>
              これらの装置は、それぞれ異なる技術を使っていた。しかし、共通していたのは、接続が起きるまで利用者が待つ必要があったことだ。
            </p>
            <p>
              現在のマッチングアプリでは、候補者は次々に表示される。利用者は接続を待つのではなく、候補者を選び続ける。
            </p>
            <p>
              出会いの不足は、候補者の不足から、判断力の不足へ変わった。
            </p>
            <p>
              誰にも会えないことよりも、誰を選べばよいか分からないことが問題になる。
            </p>
            <p>
              そして次の時代には、その選択さえAIへ委任されるかもしれない。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              出会いは、
              <br />
              待つことから選ぶことへ。
              <br />
              そして、選ぶことから委任することへ移っている。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
