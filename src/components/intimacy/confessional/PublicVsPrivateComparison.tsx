"use client";

import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

const leftItems = [
  "SNS",
  "Audience",
  "Reputation",
  "Conflict",
  "Permanence",
];

const rightItems = [
  "AI room",
  "No visible audience",
  "Immediate response",
  "No social retaliation",
  "Persistent memory",
];

function SideCard({
  title,
  titleJa,
  items,
  align,
}: {
  title: string;
  titleJa: string;
  items: string[];
  align: "left" | "right";
}) {
  return (
    <FadeInOnScroll
      className={align === "left" ? "md:translate-x-0" : "md:translate-x-0"}
      delayMs={align === "left" ? 0 : 120}
    >
      <div className="h-full rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5">
        <p className="annotation text-[var(--ink-faint)]">{title}</p>
        <p className="mt-1 text-sm font-semibold text-[var(--ink)]">{titleJa}</p>
        <ul className="mt-4 flex flex-col gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="text-sm leading-relaxed text-[var(--ink-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeInOnScroll>
  );
}

export function PublicVsPrivateComparison() {
  return (
    <div className="mt-8">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <SideCard
          title="Public Expression"
          titleJa="公共的な表出"
          items={leftItems}
          align="left"
        />
        <FadeInOnScroll delayMs={60}>
          <div className="flex flex-col items-center justify-center px-2 py-3 text-center">
            <span className="text-lg text-[var(--ink-faint)]" aria-hidden>
              →
            </span>
            <p className="annotation mt-2 max-w-[10rem] text-[var(--accent-violet)]">
              From Posting to Confessing
            </p>
          </div>
        </FadeInOnScroll>
        <SideCard
          title="Private AI Confession"
          titleJa="非公開のAI告白"
          items={rightItems}
          align="right"
        />
      </div>
    </div>
  );
}
