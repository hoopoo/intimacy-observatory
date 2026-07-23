import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  MASS_MARKET_LINEAGE_STEPS,
  MASS_MARKET_LINEAGE_TRANSFORMS,
} from "@/data/encounter-mass-market";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function MassMarketLineage() {
  return (
    <section
      id="lineage"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="mass-market-lineage-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">From bulletin board to profile card</p>
          <h2
            id="mass-market-lineage-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            掲示板から、プロフィールカードへ
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <p className="prose-ja mt-8 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            老舗出会い系が掲示板とポイント課金で接触市場を作ったのに対し、大衆型マッチングはプロフィールカードと相互マッチで関係市場を作った。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <ol className="mt-10 flex flex-col rounded-sm border border-[var(--border)] bg-[var(--paper)] p-6">
            {MASS_MARKET_LINEAGE_STEPS.map((step, index) => (
              <li
                key={step}
                className="relative flex items-start gap-3 pb-4 last:pb-0"
              >
                {index < MASS_MARKET_LINEAGE_STEPS.length - 1 ? (
                  <span
                    className="absolute left-[5px] top-3 h-[calc(100%-4px)] w-px bg-[var(--border)]"
                    aria-hidden
                  />
                ) : null}
                <span
                  className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-[var(--ink-faint)] bg-[var(--paper)]"
                  aria-hidden
                />
                <span className="text-sm text-[var(--ink-muted)]">{step}</span>
              </li>
            ))}
          </ol>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <dl className="mt-8 flex flex-col gap-3">
            {MASS_MARKET_LINEAGE_TRANSFORMS.map((item) => (
              <div
                key={item.from}
                className="grid gap-1 border-b border-[var(--border-subtle)] pb-3 text-sm last:border-0 sm:grid-cols-[1fr_auto_1fr]"
              >
                <dt className="text-[var(--ink-muted)]">{item.from}</dt>
                <dd className="text-center text-[var(--ink-faint)]" aria-hidden>
                  →
                </dd>
                <dd className="text-[var(--ink-muted)] sm:text-right">
                  {item.to}
                </dd>
              </div>
            ))}
          </dl>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <Link
            href="/classics-of-encounter/legacy-dating-services"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            日本の老舗出会い系を見る
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
