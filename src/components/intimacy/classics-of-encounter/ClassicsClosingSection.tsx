import { FadeInOnScroll } from "./FadeInOnScroll";

const closingParagraphs = [
  "マッチングアプリの次に現れるのは、より多くのプロフィールを見せるサービスではないかもしれない。",
  "AIが本人より先に相手を探し、AI同士が会話し、関係を始める価値があるかを判定する。利用者は相手を探すのではなく、AIが選んだ数人の中から、実際に会う相手だけを決める。",
  "出会いは、検索から委任へ移る。",
  "そのとき、人間は誰を選ぶのだろうか。",
  "それとも、選んだ理由だけを、あとからAIに説明してもらうのだろうか。",
];

export function ClassicsClosingSection() {
  return (
    <section
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="classics-closing-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <h2
            id="classics-closing-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            次に現れる出会いの装置
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <div className="mt-8 flex flex-col gap-5">
            {closingParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 16)}
                className="prose-ja text-[var(--ink-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={160}>
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-faint)]">
            This archive does not rank services.
            <br />
            It records how societies design the possibility of meeting someone.
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
