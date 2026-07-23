import { FadeInOnScroll } from "./FadeInOnScroll";

export function LegacyHero() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <FadeInOnScroll>
          <p className="annotation mb-3">Legacy Dating Services in Japan</p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            日本の老舗出会い系
          </h1>
          <p className="mt-3 text-lg text-[var(--ink-faint)]">
            Even after the swipe, bulletin boards and point-based contact
            remained.
          </p>
          <p className="prose-ja mt-4 text-[var(--ink-muted)]">
            スワイプが登場しても、掲示板とポイント課金は消えなかった。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>スタービーチが消えたあとも、掲示板型の出会いは消えなかった。</p>
            <p>
              短い自己紹介を投稿する。
              <br />
              地域や目的から相手を探す。
              <br />
              メッセージを送るたびにポイントを使う。
              <br />
              気になる相手には、マッチ成立を待たずに接触する。
            </p>
            <p>
              現在のマッチングアプリでは、互いに選び合ったあとで会話が始まることが多い。
            </p>
            <p>
              一方、老舗出会い系では、接触すること自体が商品である。
            </p>
            <p>
              利用者は誰かと正式にマッチするのではなく、掲示板を読み、プロフィールを開き、メッセージを送り、反応が返ってくる可能性にポイントを使う。
            </p>
            <p>
              ここにあるのは、結婚相手を一人だけ見つけてサービスを卒業する設計ではない。
            </p>
            <p>
              孤独、暇、欲望、好奇心が発生するたびに、何度でも戻ってこられる接続市場である。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <blockquote className="mt-12 border-l-2 border-[var(--accent-violet)] pl-6">
            <p className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
              マッチングアプリが関係の成立を売るなら、
              <br />
              老舗出会い系は接触の可能性を売る。
            </p>
          </blockquote>
        </FadeInOnScroll>
      </div>
    </header>
  );
}
