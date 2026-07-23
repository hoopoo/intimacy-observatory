import { FadeInOnScroll } from "./FadeInOnScroll";

export function VanishedHero() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-3">Vanished Systems of Encounter</p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            消えた出会いの装置
          </h1>
          <p className="mt-3 text-lg text-[var(--ink-faint)]">
            Before profiles and swipes, what allowed strangers to begin?
          </p>
          <p className="prose-ja mt-4 text-[var(--ink-muted)]">
            プロフィールもスワイプもなかった時代、人は何を手がかりに誰かを探したのか。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              かつて、知らない誰かと出会うためには、待つことが必要だった。
            </p>
            <p>
              手紙を書き、返事が来るまで待つ。
              <br />
              雑誌が発売され、自分の投稿が掲載されるのを待つ。
              <br />
              録音された伝言に、誰かが応答するのを待つ。
              <br />
              繁華街の個室で、電話が鳴るのを待つ。
            </p>
            <p>
              現在のマッチングアプリでは、候補者はほとんど途切れることなく表示される。
            </p>
            <p>
              しかし、候補者が少なかった時代、出会いには空白の時間があった。その空白の中で、人は相手を想像し、自分の言葉を選び、接続が起きるかどうかを待っていた。
            </p>
            <p>
              消えたのは、古い機械やサービスだけではない。
              <br />
              出会いの前に存在していた、長い待ち時間もまた消えつつある。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              出会いは、検索するものになる前、
              <br />
              待つものだった。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </header>
  );
}
