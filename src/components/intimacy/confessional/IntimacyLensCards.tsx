import type { IntimacyLensItem } from "@/data/confessional-intimacy";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export function IntimacyLensCards({ items }: { items: IntimacyLensItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <FadeInOnScroll key={item.id} delayMs={index * 60}>
          <article className="h-full rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5">
            <p className="annotation text-[var(--accent-violet)]">{item.label}</p>
            <h3 className="mt-2 text-sm font-semibold text-[var(--ink)]">
              {item.title}
            </h3>
            <p className="prose-ja mt-3 text-sm text-[var(--ink-muted)]">
              {item.description}
            </p>
          </article>
        </FadeInOnScroll>
      ))}
    </div>
  );
}
