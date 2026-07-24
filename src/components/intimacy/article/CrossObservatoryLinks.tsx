import { ExternalLink } from "lucide-react";
import type { CrossObservatoryLink } from "@/types/article";
import { getObservationLayer } from "@/config/observation-layers";

export function CrossObservatoryLinks({
  links,
}: {
  links: CrossObservatoryLink[];
}) {
  return (
    <section aria-labelledby="cross-observatory-heading">
      <h2
        id="cross-observatory-heading"
        className="annotation mb-5"
      >
        Cross Observatory Links / 横断観測
      </h2>
      <ul className="flex flex-col gap-3">
        {links.map((link) => {
          const layer = getObservationLayer(link.layerId);
          if (!layer) return null;

          const inner = (
            <>
              <p className="text-sm font-semibold text-[var(--ink)]">
                {layer.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {link.description}
              </p>
            </>
          );

          return (
            <li key={link.layerId}>
              {layer.url ? (
                <a
                  href={layer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-sm border border-[var(--border)] p-4 transition-colors hover:border-[var(--ink-faint)]"
                >
                  {inner}
                  <ExternalLink
                    className="mt-3 h-3.5 w-3.5 text-[var(--ink-faint)]"
                    aria-hidden
                  />
                </a>
              ) : (
                <div className="rounded-sm border border-dashed border-[var(--border)] bg-[var(--paper-raised)] p-4">
                  {inner}
                  <p className="annotation mt-3 text-[var(--ink-faint)]">
                    Coming soon
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
