import { ExternalLink } from "lucide-react";
import type { ConnectedObservatory } from "@/data/confessional-intimacy";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export function ConnectedObservatories({
  observatories,
}: {
  observatories: ConnectedObservatory[];
}) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {observatories.map((obs, index) => (
        <FadeInOnScroll key={obs.id} delayMs={index * 60}>
          <li>
            <a
              href={obs.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-sm border border-[var(--border)] p-4 transition-colors hover:border-[var(--ink-faint)]"
            >
              <p className="text-sm font-semibold text-[var(--ink)]">
                {obs.name}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--ink-faint)]">
                {obs.title}
              </p>
              <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
                {obs.description}
              </p>
              <ExternalLink
                className="mt-3 h-3.5 w-3.5 text-[var(--ink-faint)]"
                aria-hidden
              />
            </a>
          </li>
        </FadeInOnScroll>
      ))}
    </ul>
  );
}
