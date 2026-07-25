"use client";

import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export function ScrollQuestions({ questions }: { questions: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-8">
      {questions.map((question, index) => (
        <FadeInOnScroll key={question} delayMs={index * 80}>
          <li className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
            {question}
          </li>
        </FadeInOnScroll>
      ))}
    </ul>
  );
}

export function FinalQuestion({
  ja,
  en,
}: {
  ja: string;
  en: string;
}) {
  const lines = ja.split("\n");

  return (
    <FadeInOnScroll>
      <section
        aria-labelledby="final-question-heading"
        className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-6 py-10 text-center md:px-10 md:py-14"
      >
        <h2 id="final-question-heading" className="sr-only">
          Final Question
        </h2>
        <blockquote>
          {lines.map((line) => (
            <p
              key={line}
              className="text-xl font-semibold leading-[1.85] tracking-tight text-[var(--ink)] md:text-2xl"
            >
              {line}
            </p>
          ))}
        </blockquote>
        <p className="mx-auto mt-6 max-w-lg text-xs leading-relaxed text-[var(--ink-faint)]">
          {en}
        </p>
      </section>
    </FadeInOnScroll>
  );
}
