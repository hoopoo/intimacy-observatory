import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Observation } from "@/types/intimacy";

type RelatedObservationsProps = {
  observations: Observation[];
  intro?: string;
};

export function RelatedObservations({
  observations,
  intro,
}: RelatedObservationsProps) {
  if (observations.length === 0) return null;

  return (
    <section aria-labelledby="related-observations-heading">
      <h2
        id="related-observations-heading"
        className="annotation mb-5"
      >
        Related Observations / 関連観測
      </h2>
      {intro ? (
        <p className="prose-ja mb-6 text-sm leading-relaxed text-[var(--ink-muted)]">
          {intro}
        </p>
      ) : null}
      <ul className="flex flex-col gap-3">
        {observations.map((o) => (
          <li key={o.id}>
            <Link
              href={`/observations/${o.slug}`}
              className="group flex items-start justify-between gap-4 rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
            >
              <div>
                <p className="text-xs text-[var(--ink-faint)]">{o.title}</p>
                <p className="mt-0.5 text-sm font-medium">{o.titleJa}</p>
              </div>
              <ArrowRight
                className="mt-1 h-4 w-4 shrink-0 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
