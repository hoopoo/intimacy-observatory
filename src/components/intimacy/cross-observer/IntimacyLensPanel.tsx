"use client";

import type { LensInput } from "@shiro/cross-observer";
import { LensPanel } from "@shiro/cross-observer/ui";

type Props = {
  input: LensInput;
  className?: string;
};

/**
 * Drop-in Lens Layer for Intimacy observation essays.
 * Place after main analysis / closing question; before Source Boundary / Related.
 *
 * Reuses Intimacy design tokens (--paper, --ink, --border, --accent-violet, …).
 * Not romantic advice. Not religious ornament.
 */
export function IntimacyLensPanel({ input, className = "" }: Props) {
  return (
    <section
      className={`cross-observer-lens max-w-2xl py-8 ${className}`.trim()}
      aria-label="Cross-Observatory Lens Layer"
      data-cross-observer-lens="true"
    >
      <p className="annotation mb-2 text-[var(--accent-violet)]">
        Cross-Observatory Lens
      </p>
      <p className="prose-ja mb-4 text-sm leading-relaxed text-[var(--ink-muted)]">
        本稿の観測分析を置き換えません。読み終えたあと、別の思想的観測レイヤーとして重ねます。恋愛指南ではありません。
      </p>
      <LensPanel input={input} />
    </section>
  );
}
