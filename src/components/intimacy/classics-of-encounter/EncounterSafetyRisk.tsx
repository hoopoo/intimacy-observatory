type EncounterSafetyRiskProps = {
  platformMechanisms?: string[];
  structuralRisks?: string[];
  userUncertainty?: string[];
};

export function EncounterSafetyRisk({
  platformMechanisms = [],
  structuralRisks = [],
  userUncertainty = [],
}: EncounterSafetyRiskProps) {
  const hasContent =
    platformMechanisms.length > 0 ||
    structuralRisks.length > 0 ||
    userUncertainty.length > 0;

  if (!hasContent) return null;

  return (
    <section
      aria-labelledby="safety-risk-heading"
      className="mb-12 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6"
    >
      <h2 id="safety-risk-heading" className="annotation mb-6">
        Safety / Risk / 安全とリスク
      </h2>
      <p className="prose-ja mb-8 text-sm text-[var(--ink-faint)]">
        以下は危険度の評価ではなく、サービス形式と利用者側の不確実性を分けて記録したものです。
      </p>

      <div className="flex flex-col gap-8">
        {platformMechanisms.length > 0 ? (
          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              Platform mechanisms
              <span className="ml-2 text-xs font-normal text-[var(--ink-faint)]">
                サービス側の仕組み
              </span>
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {platformMechanisms.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
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
        ) : null}

        {structuralRisks.length > 0 ? (
          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              Structural risks
              <span className="ml-2 text-xs font-normal text-[var(--ink-faint)]">
                形式に内在する可能性
              </span>
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {structuralRisks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
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
        ) : null}

        {userUncertainty.length > 0 ? (
          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              User-side uncertainty
              <span className="ml-2 text-xs font-normal text-[var(--ink-faint)]">
                利用者側の不確実性
              </span>
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {userUncertainty.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
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
        ) : null}
      </div>
    </section>
  );
}
