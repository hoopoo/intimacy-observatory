import type { TensionPair } from "@/data/confessional-intimacy";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export function TensionMap({ pairs }: { pairs: TensionPair[] }) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <div className="hidden gap-4 md:grid md:grid-cols-2">
        <p className="annotation text-[var(--ink-faint)]">Relief</p>
        <p className="annotation text-[var(--ink-faint)]">Risk</p>
      </div>
      {pairs.map((pair, index) => (
        <FadeInOnScroll key={pair.relief} delayMs={index * 50}>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-3">
              <p className="annotation mb-1 md:sr-only">Relief</p>
              <p className="text-sm text-[var(--ink-muted)]">{pair.relief}</p>
            </div>
            <div className="rounded-sm border border-[var(--border)] bg-[var(--paper)] px-4 py-3">
              <p className="annotation mb-1 md:sr-only">Risk</p>
              <p className="text-sm text-[var(--ink-muted)]">{pair.risk}</p>
            </div>
          </div>
        </FadeInOnScroll>
      ))}
    </div>
  );
}
