import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";
import type { RelationshipTensionAxis } from "@/data/staying-beside-someone-you-cannot-save";

function TensionAxisCard({ axis }: { axis: RelationshipTensionAxis }) {
  return (
    <article className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-4">
      <div className="flex items-center justify-between gap-3 text-sm font-medium text-[var(--ink)]">
        <span>{axis.left}</span>
        <span className="text-[var(--ink-faint)]" aria-hidden>
          ↔
        </span>
        <span>{axis.right}</span>
      </div>
      <p className="prose-ja mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
        {axis.description}
      </p>
    </article>
  );
}

export function RelationshipTensionMap({
  axes,
}: {
  axes: RelationshipTensionAxis[];
}) {
  return (
    <div className="mt-6" aria-label="Relationship Tension Map">
      <FadeInOnScroll>
        <div className="mx-auto max-w-xs text-center">
          <div className="rounded-sm border-2 border-[var(--accent-violet)] bg-[var(--accent-violet-bg)]/50 px-5 py-4">
            <p className="annotation text-[var(--accent-violet)]">
              Staying Beside Someone
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--ink)]">
              救えない人のそばにいる
            </p>
          </div>
          <div
            className="mx-auto h-6 w-px bg-[var(--border)]"
            aria-hidden
          />
        </div>
      </FadeInOnScroll>

      <div className="mt-4 flex flex-col gap-3">
        {axes.map((axis, index) => (
          <FadeInOnScroll key={axis.id} delayMs={index * 50}>
            <TensionAxisCard axis={axis} />
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  );
}
