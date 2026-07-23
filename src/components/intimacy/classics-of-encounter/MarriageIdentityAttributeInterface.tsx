import { MARRIAGE_IDENTITY_ATTRIBUTE_ITEMS } from "@/data/encounter-marriage-identity";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function MarriageIdentityAttributeInterface() {
  return (
    <section
      id="attribute-interface"
      className="border-b border-[var(--border)]"
      aria-labelledby="attribute-interface-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Attribute as interface</p>
          <h2
            id="attribute-interface-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            属性というインターフェース
          </h2>
        </FadeInOnScroll>

        <ol className="mt-12 flex flex-col gap-10">
          {MARRIAGE_IDENTITY_ATTRIBUTE_ITEMS.map((item, index) => (
            <FadeInOnScroll key={item.id} delayMs={index * 50}>
              <li>
                <h3 className="text-lg font-semibold tracking-tight">
                  <span className="mr-2 font-mono text-[var(--ink-faint)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h3>
                <div className="prose-ja mt-4 flex flex-col gap-3 text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                  ))}
                </div>
              </li>
            </FadeInOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
