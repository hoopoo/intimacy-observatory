import { ThesisQuote } from "./ThesisQuote";

type OpenQuestionsProps = {
  questions: string[];
  emphasizedQuestion?: string;
};

export function OpenQuestions({
  questions,
  emphasizedQuestion,
}: OpenQuestionsProps) {
  return (
    <section aria-labelledby="open-questions-heading">
      <h2
        id="open-questions-heading"
        className="annotation mb-6 text-[var(--accent-violet)]"
      >
        Open Questions / 開かれた問い
      </h2>
      <ul className="flex flex-col gap-5">
        {questions.map((question) => (
          <li
            key={question}
            className="prose-ja text-[1.0625rem] leading-[2] text-[var(--ink-muted)]"
          >
            {question}
          </li>
        ))}
      </ul>
      {emphasizedQuestion ? (
        <div className="mt-10 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-6 py-8">
          <ThesisQuote text={emphasizedQuestion} size="large" />
        </div>
      ) : null}
    </section>
  );
}
