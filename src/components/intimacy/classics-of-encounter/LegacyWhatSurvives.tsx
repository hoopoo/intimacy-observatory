import { FadeInOnScroll } from "./FadeInOnScroll";

export function LegacyWhatSurvives() {
  return (
    <section
      id="what-survives"
      className="border-b border-[var(--border)]"
      aria-labelledby="what-survives-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">What survives</p>
          <h2
            id="what-survives-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            古いのではなく、別の時間を生きている
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              老舗出会い系には、現在のプロダクトデザインから見れば古く見える要素が多い。
            </p>
            <p>
              掲示板。ポイント。短い自己紹介。地域別の募集。目的の混在。
            </p>
            <p>しかし、それらは消え残った機能ではない。</p>
            <p>
              マッチを待たずに自分から動きたい人。
              <br />
              長期契約ではなく、そのときだけ利用したい人。
              <br />
              恋愛や結婚として説明できない接触を求める人。
              <br />
              近くにいる相手を、今の目的から探したい人。
            </p>
            <p>
              そうした需要にとって、掲示板とポイント課金は現在も合理的なインターフェースである。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <p className="prose-ja mt-10 border-t border-[var(--border-subtle)] pt-8 text-[1.0625rem] font-medium leading-[2.1] text-[var(--ink-muted)]">
            古いUIが残っているのではない。
            <br />
            古い欲望が、現在も残っている。
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
