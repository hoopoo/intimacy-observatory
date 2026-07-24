import { ThesisQuote } from "./ThesisQuote";

type ObservationHeroProps = {
  thesis: string;
  supplement?: string;
};

export function ObservationHero({ thesis, supplement }: ObservationHeroProps) {
  return (
    <div
      className="mb-12 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-6 py-10 md:px-8"
      aria-label="記事の核心"
    >
      <ThesisQuote text={thesis} size="hero" className="border-none pl-0 text-center" />
      {supplement ? (
        <p className="mt-6 text-center text-sm leading-relaxed text-[var(--ink-faint)]">
          {supplement}
        </p>
      ) : null}
    </div>
  );
}
