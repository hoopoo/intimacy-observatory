type ThesisQuoteProps = {
  text: string;
  size?: "default" | "hero" | "large";
  className?: string;
};

const sizeClass = {
  default:
    "text-base font-medium leading-relaxed text-[var(--ink-muted)] md:text-lg",
  hero: "text-xl font-semibold leading-[1.75] tracking-tight text-[var(--ink)] md:text-2xl",
  large:
    "text-lg font-semibold leading-[1.8] tracking-tight text-[var(--ink)] md:text-xl",
};

export function ThesisQuote({
  text,
  size = "default",
  className = "",
}: ThesisQuoteProps) {
  const lines = text.split("\n").filter(Boolean);

  return (
    <blockquote
      className={`border-l-2 border-[var(--accent-violet)] pl-5 ${sizeClass[size]} ${className}`}
    >
      {lines.map((line, i) => (
        <p key={i} className={i > 0 ? "mt-2" : undefined}>
          {line}
        </p>
      ))}
    </blockquote>
  );
}
