import { FadeInOnScroll, FadeInStaggerGroup } from "./FadeInOnScroll";

const introParagraphs = [
  "かつて、出会いは電話の向こうから突然やってきた。",
  "繁華街の小さな個室で、男性は電話が鳴るのを待った。誰が電話をかけてくるかは分からない。声を聞き、短い会話を交わし、互いに気が合えば、駅や喫茶店で待ち合わせた。",
  "現在、私たちはスマートフォンの画面を眺めながら、誰かが表示されるのを待っている。",
  "写真、年齢、職業、年収、身長、趣味、結婚への意思、性格診断、位置情報。出会いは偶然ではなく、検索と推薦の結果として現れる。",
  "しかし、本当に変わったのは、人が誰かとつながりたいと思う気持ちだろうか。",
];

export function ClassicsHero() {
  return (
    <section
      className="grid-surface border-b border-[var(--border)]"
      aria-labelledby="classics-hero-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <FadeInOnScroll>
          <p className="annotation mb-5 text-[var(--accent-violet)]">
            Intimacy Observatory / Classics of Encounter
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <h1
            id="classics-hero-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            出会いの古典と現在
          </h1>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <p className="mt-3 text-lg text-[var(--ink-muted)]">
            電話が鳴る部屋から、AIが相手を選ぶ画面まで
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-faint)]">
            From the room where the telephone rang to the screen where
            algorithms choose whom we meet.
          </p>
        </FadeInOnScroll>

        <FadeInStaggerGroup
          className="mt-10 flex flex-col gap-5"
          staggerMs={70}
        >
          {introParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 12)}
              className="prose-ja text-[var(--ink-muted)]"
            >
              {paragraph}
            </p>
          ))}
        </FadeInStaggerGroup>

        <FadeInOnScroll delayMs={200} as="blockquote" className="mt-14">
          <blockquote className="border-l-2 border-[var(--border)] pl-6">
            <p className="text-lg leading-[2] text-[var(--ink)] md:text-xl">
              電話が鳴る部屋は消えた。
              <br />
              けれど、私たちは今も、通知が届くのを待っている。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
