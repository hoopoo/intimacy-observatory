import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export function ClassicsOfEncounterSection() {
  return (
    <section
      id="classics-of-encounter"
      className="border-b border-[var(--border)]"
      aria-labelledby="classics-section-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <FadeInOnScroll>
          <p className="annotation mb-1">Classics of Encounter</p>
          <h2
            id="classics-section-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            出会いの古典と現在
          </h2>
          <p className="prose-ja mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            テレクラ、出会い系サイト、マッチングアプリ、AI婚活まで。出会いを生み出す装置の文化史。
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[var(--ink-faint)]">
            From telephone clubs to algorithmic matching — an archive of how
            societies design the possibility of meeting someone.
          </p>
          <Link
            href="/classics-of-encounter"
            className="mt-6 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
          >
            出会いの古典と現在を見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
