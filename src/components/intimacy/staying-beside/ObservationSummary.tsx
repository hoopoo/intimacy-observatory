import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import type { ObservationSummaryItem } from "@/data/staying-beside-someone-you-cannot-save";

export function ObservationSummary({
  items,
}: {
  items: ObservationSummaryItem[];
}) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <FadeInOnScroll key={item.id} delayMs={index * 40}>
          <article className="h-full rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-4">
            <p className="annotation text-[var(--accent-violet)]">
              {item.label}
            </p>
            <p className="mt-0.5 text-xs text-[var(--ink-faint)]">
              {item.labelEn}
            </p>
            <p className="prose-ja mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
              {item.value}
            </p>
          </article>
        </FadeInOnScroll>
      ))}
    </div>
  );
}
