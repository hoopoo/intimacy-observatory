import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInOnScroll } from "./FadeInOnScroll";
import {
  WHERE_LOVERS_COME_FROM_HREF,
  WHERE_LOVERS_META,
} from "@/data/where-lovers-come-from";

export function ClassicsThematicOverview() {
  return (
    <section
      id="thematic-overview"
      className="border-b border-[var(--border)]"
      aria-labelledby="thematic-overview-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Thematic overview</p>
          <h2
            id="thematic-overview-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            出会いインフラの変化
          </h2>
          <p className="prose-ja mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            個別のサービスを横断し、恋人がどこから来るのかという問いを記録する。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <Link
            href={WHERE_LOVERS_COME_FROM_HREF}
            className="group mt-8 block"
          >
            <article className="rounded-sm border border-[var(--accent-violet)]/25 bg-[var(--accent-violet-bg)]/25 p-6 transition-colors hover:border-[var(--accent-violet)]/40 md:p-8">
              <p className="annotation text-[var(--accent-violet)]">
                Where Lovers Come From
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {WHERE_LOVERS_META.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                {WHERE_LOVERS_META.subtitle}
              </p>
              <p className="prose-ja mt-4 text-sm leading-relaxed text-[var(--ink-muted)]">
                From arranged marriage and workplace romance to platforms and
                algorithms.
              </p>
              <p className="prose-ja mt-2 text-sm leading-relaxed text-[var(--ink-faint)]">
                お見合い、職場結婚、友人紹介から、アルゴリズムとプラットフォームへ。
              </p>
              <div className="mt-5 flex items-center gap-1 text-sm text-[var(--ink-faint)] group-hover:text-[var(--ink-muted)]">
                Read observation
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </div>
            </article>
          </Link>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
