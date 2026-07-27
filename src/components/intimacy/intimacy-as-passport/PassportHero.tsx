import { INTIMACY_AS_PASSPORT_META } from "@/data/intimacy-as-passport";

export function PassportHero() {
  const lines = INTIMACY_AS_PASSPORT_META.heroQuote.split("\n");

  return (
    <section
      aria-label={INTIMACY_AS_PASSPORT_META.heroImageAlt}
      className="relative overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)]"
    >
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, var(--paper) 0%, var(--paper-raised) 45%, rgba(139,155,181,0.08) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border-subtle)]"
        aria-hidden
      />
      <div
        className="absolute left-[12%] top-[28%] h-16 w-24 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)]/80"
        aria-hidden
      />
      <div
        className="absolute right-[14%] top-[32%] h-12 w-20 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)]/60"
        aria-hidden
      />
      <div
        className="absolute left-[18%] top-[52%] h-1 w-14 bg-[var(--border)]"
        aria-hidden
      />
      <div
        className="absolute right-[20%] top-[48%] h-8 w-12 rounded-sm border border-[var(--accent-violet)]/30 bg-[var(--accent-violet-bg)]/40"
        aria-hidden
      />

      <div className="relative px-6 py-14 md:px-10 md:py-16">
        <p className="annotation mb-4 text-[var(--accent-violet)]">
          Key Observation / 観測の要点
        </p>
        <blockquote>
          {lines.map((line, i) => (
            <p
              key={line}
              className={`text-lg font-medium leading-[1.85] tracking-tight text-[var(--ink)] md:text-xl${i > 0 ? " mt-3" : ""}`}
            >
              {line}
            </p>
          ))}
        </blockquote>
      </div>
    </section>
  );
}
