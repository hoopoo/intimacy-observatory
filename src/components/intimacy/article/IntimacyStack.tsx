import type { ArticleIntimacyStackLayer } from "@/types/article";

export function IntimacyStack({ layers }: { layers: ArticleIntimacyStackLayer[] }) {
  return (
    <ol className="mt-6 flex flex-col gap-0">
      {layers.map((layer, index) => (
        <li key={layer.id} className="relative flex gap-4 pb-6 last:pb-0">
          {index < layers.length - 1 ? (
            <span
              className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-[var(--border)]"
              aria-hidden
            />
          ) : null}
          <div
            className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] text-xs font-semibold text-[var(--accent-violet)]"
            aria-hidden
          >
            {index + 1}
          </div>
          <div className="min-w-0 flex-1 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] p-4">
            <p className="annotation mb-1 text-[var(--ink-faint)]">
              {layer.titleEn ?? layer.title}
            </p>
            <h3 className="text-sm font-semibold text-[var(--ink)]">
              {layer.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
              {layer.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
