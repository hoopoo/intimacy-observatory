import { VANISHED_INTERFACE_COMPARISON } from "@/data/encounter-vanished";
import { FadeInOnScroll } from "./FadeInOnScroll";

const COLUMNS = [
  { key: "primaryInterface", label: "Primary interface", labelJa: "主要インターフェース" },
  { key: "firstVisibleSignal", label: "First visible signal", labelJa: "最初の可視信号" },
  { key: "firstPrivateContact", label: "First private contact", labelJa: "最初の私的接触" },
  { key: "waitingTime", label: "Waiting time", labelJa: "待ち時間" },
  { key: "geographicRange", label: "Geographic range", labelJa: "地理的範囲" },
  { key: "identityExposure", label: "Identity exposure", labelJa: "身元の露出" },
  { key: "gatekeeper", label: "Gatekeeper", labelJa: "ゲートキーパー" },
  { key: "payment", label: "Payment", labelJa: "支払い" },
  { key: "mainRisk", label: "Main risk", labelJa: "主なリスク" },
] as const;

type RowKey = (typeof COLUMNS)[number]["key"];

export function VanishedInterfaceHistory() {
  return (
    <section
      id="interface-history"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="interface-history-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Interfaces of Encounter</p>
          <h2
            id="interface-history-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            何を使って、誰かに触れたのか
          </h2>
        </FadeInOnScroll>

        {/* Desktop table */}
        <FadeInOnScroll delayMs={60}>
          <div className="mt-10 hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[960px] border-collapse text-sm">
              <caption className="sr-only">
                消えた出会いの装置6件のインターフェース比較
              </caption>
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th
                    scope="col"
                    className="annotation px-3 py-3 text-left font-normal"
                  >
                    装置
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className="annotation px-3 py-3 text-left font-normal"
                    >
                      {col.labelJa}
                      <span className="mt-0.5 block text-[0.6rem] text-[var(--ink-faint)]">
                        {col.label}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VANISHED_INTERFACE_COMPARISON.map((row) => (
                  <tr
                    key={row.recordSlug}
                    className="border-b border-[var(--border-subtle)]"
                  >
                    <th
                      scope="row"
                      className="px-3 py-4 text-left font-medium"
                    >
                      {row.label}
                    </th>
                    {COLUMNS.map((col) => (
                      <td
                        key={col.key}
                        className="px-3 py-4 text-[var(--ink-muted)]"
                      >
                        {row[col.key as RowKey]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInOnScroll>

        {/* Mobile cards */}
        <div className="mt-10 flex flex-col gap-6 lg:hidden">
          {VANISHED_INTERFACE_COMPARISON.map((row, index) => (
            <FadeInOnScroll key={row.recordSlug} delayMs={index * 40}>
              <article className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5">
                <h3 className="text-base font-semibold">{row.label}</h3>
                <dl className="mt-4 flex flex-col gap-3">
                  {COLUMNS.map((col) => (
                    <div key={col.key}>
                      <dt className="annotation mb-0.5">
                        {col.labelJa}
                        <span className="ml-1 text-[0.6rem] text-[var(--ink-faint)]">
                          {col.label}
                        </span>
                      </dt>
                      <dd className="text-sm text-[var(--ink-muted)]">
                        {row[col.key as RowKey]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
