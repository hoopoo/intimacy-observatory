import { PUBLIC_INSTITUTION_ITEMS } from "@/data/encounter-public-municipal";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function MunicipalInstitutionInterface() {
  return (
    <section
      id="institution-interface"
      className="border-b border-[var(--border)]"
      aria-labelledby="institution-interface-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <FadeInOnScroll>
          <p className="annotation mb-2">Institution as interface</p>
          <h2
            id="institution-interface-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            制度というインターフェース
          </h2>
        </FadeInOnScroll>

        <ol className="mt-12 flex flex-col gap-10">
          {PUBLIC_INSTITUTION_ITEMS.map((item, index) => (
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
