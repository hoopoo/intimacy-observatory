import type { ArticleComparisonSide } from "@/types/article";

type BeforeAfterComparisonProps = {
  before: ArticleComparisonSide;
  after: ArticleComparisonSide;
};

function ComparisonColumn({
  side,
  variant,
}: {
  side: ArticleComparisonSide;
  variant: "before" | "after";
}) {
  const isBefore = variant === "before";

  return (
    <div
      className={`flex flex-col rounded-sm border p-5 ${
        isBefore
          ? "border-[var(--border)] bg-[var(--paper)]"
          : "border-[var(--accent-violet)]/30 bg-[var(--accent-violet-bg)]/40"
      }`}
    >
      <h3 className="annotation mb-1 text-[var(--ink-faint)]">
        {side.titleEn ?? side.title}
      </h3>
      <p className="mb-4 text-sm font-semibold text-[var(--ink)]">
        {side.title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {side.items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-relaxed text-[var(--ink-muted)]"
          >
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BeforeAfterComparison({
  before,
  after,
}: BeforeAfterComparisonProps) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <ComparisonColumn side={before} variant="before" />
      <ComparisonColumn side={after} variant="after" />
    </div>
  );
}

export function ComparisonCards({
  left,
  right,
}: {
  left: ArticleComparisonSide;
  right: ArticleComparisonSide;
}) {
  return (
    <BeforeAfterComparison before={left} after={right} />
  );
}
