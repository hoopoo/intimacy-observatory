import { LEGACY_POINT_ECONOMY_STEPS } from "@/data/encounter-legacy";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function LegacyPointEconomy() {
  return (
    <section
      id="point-economy"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="point-economy-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">The point economy of contact</p>
          <h2
            id="point-economy-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            接触は、細かく分割されて販売される
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <ol className="mt-10 flex flex-col gap-0">
            {LEGACY_POINT_ECONOMY_STEPS.map((step, index) => (
              <li
                key={step}
                className="relative flex items-start gap-4 border-l border-[var(--border)] py-4 pl-8"
              >
                <span
                  className="absolute -left-[5px] top-6 h-2 w-2 rounded-full bg-[var(--ink-faint)]"
                  aria-hidden
                />
                <span className="font-mono text-xs tabular-nums text-[var(--ink-faint)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[var(--ink-muted)]">{step}</span>
              </li>
            ))}
          </ol>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              月額制のマッチングアプリでは、利用者は一定期間のアクセス権を購入する。
            </p>
            <p>
              ポイント課金型では、接触までの行動が細かく分割される。
            </p>
            <p>
              閲覧する。送信する。確認する。再び送る。
            </p>
            <p>
              課金されているのは相手との関係ではない。
            </p>
            <p>
              関係が始まるかもしれない一つひとつの操作である。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <p className="prose-ja mt-10 border-t border-[var(--border-subtle)] pt-8 text-[1.0625rem] font-medium leading-[2.1] text-[var(--ink-muted)]">
            関係は購入できない。
            <br />
            購入できるのは、接触を試みる回数である。
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
