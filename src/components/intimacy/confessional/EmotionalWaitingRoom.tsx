import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

type FlowStep = {
  id: string;
  label: string;
  labelJa: string;
};

export function EmotionalWaitingRoom({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-sm font-semibold text-[var(--ink)]">
          Emotional Waiting Room
        </h3>
        <p className="text-sm text-[var(--ink-faint)]">感情の待合室</p>
      </div>
      <FadeInOnScroll>
        <ol className="flex flex-col gap-0 md:flex-row md:items-stretch">
          {steps.map((step, index) => (
            <li key={step.id} className="relative flex flex-1 flex-col md:min-w-0">
              <div className="flex flex-1 flex-col rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] p-4 md:rounded-none md:border-r-0 md:first:rounded-l-sm md:last:rounded-r-sm md:last:border-r">
                <p className="annotation text-[var(--ink-faint)]">{step.label}</p>
                <p className="mt-1 text-sm font-medium text-[var(--ink)]">
                  {step.labelJa}
                </p>
              </div>
              {index < steps.length - 1 ? (
                <span
                  className="my-2 flex items-center justify-center text-[var(--ink-faint)] md:absolute md:-right-2 md:top-1/2 md:z-10 md:my-0 md:-translate-y-1/2"
                  aria-hidden
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </FadeInOnScroll>
    </div>
  );
}
