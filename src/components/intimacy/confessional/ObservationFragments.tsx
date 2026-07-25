import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export function ObservationFragments({ fragments }: { fragments: string[] }) {
  return (
    <div className="mt-6 flex flex-col gap-4">
      {fragments.map((fragment, index) => (
        <FadeInOnScroll key={fragment} delayMs={index * 70}>
          <p className="border-l border-[var(--border)] pl-4 text-sm leading-relaxed text-[var(--ink-muted)]">
            {fragment}
          </p>
        </FadeInOnScroll>
      ))}
    </div>
  );
}
