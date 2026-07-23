import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  LEGACY_LINEAGE_STEPS,
  LEGACY_LINEAGE_TRANSFORMS,
  LEGACY_STAR_BEACH_STRUCTURES,
} from "@/data/encounter-legacy";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function LegacyStarBeachLineage() {
  return (
    <section
      id="star-beach-lineage"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="star-beach-lineage-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">
            Star Beach vanished. The bulletin board remained.
          </p>
          <h2
            id="star-beach-lineage-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            スタービーチは消えた。掲示板は残った。
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="prose-ja mt-10 flex flex-col gap-5 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            <p>
              スタービーチは、携帯電話の中に出会いの掲示板を作った。
            </p>
            <p>
              地域と目的を短い文章で投稿し、返信はメールで届いた。そこには、現在の老舗出会い系に残る基本構造がすでにあった。
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={80}>
          <ul className="mt-8 flex flex-col gap-2">
            {LEGACY_STAR_BEACH_STRUCTURES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={100}>
          <p className="prose-ja mt-8 text-sm text-[var(--ink-muted)]">
            スタービーチという名称とサービスは消えた。
            <br />
            しかし、そのインターフェースは、本人確認、監視、ポイント課金、通報機能を備えながら、別のサービスの中で生き続けた。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={120}>
          <div className="mt-10 rounded-sm border border-[var(--border)] bg-[var(--paper)] p-6">
            <h3 className="annotation mb-4">Lineage / 系譜</h3>
            <ol className="flex flex-col">
              {LEGACY_LINEAGE_STEPS.map((step, index) => (
                <li
                  key={step}
                  className="relative flex items-start gap-3 pb-4 last:pb-0"
                >
                  {index < LEGACY_LINEAGE_STEPS.length - 1 ? (
                    <span
                      className="absolute left-[5px] top-3 h-[calc(100%-4px)] w-px bg-[var(--border)]"
                      aria-hidden
                    />
                  ) : null}
                  <span
                    className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-[var(--ink-faint)] bg-[var(--paper)]"
                    aria-hidden
                  />
                  <span className="text-sm text-[var(--ink-muted)]">
                    {index > 0 ? (
                      <span aria-hidden className="mr-1 text-[var(--ink-faint)]">
                        →
                      </span>
                    ) : null}
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={140}>
          <dl className="mt-8 flex flex-col gap-3">
            {LEGACY_LINEAGE_TRANSFORMS.map((item) => (
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

        <FadeInOnScroll delayMs={160}>
          <Link
            href="/classics-of-encounter/star-beach"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            スタービーチの観測記録を読む
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
