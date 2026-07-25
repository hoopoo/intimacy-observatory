import Image from "next/image";
import {
  CONFESSIONAL_HERO_QUOTE,
  CONFESSIONAL_INTIMACY_META,
} from "@/data/confessional-intimacy";

export function ConfessionalHero() {
  const lines = CONFESSIONAL_HERO_QUOTE.split("\n");

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden rounded-sm bg-[#1a1918] text-[#e8e4dc]"
    >
      <div className="absolute inset-0">
        <Image
          src={CONFESSIONAL_INTIMACY_META.heroImage}
          alt="暗い部屋でスマートフォンの淡い光だけが手元を照らす、顔の見えない人物のシルエット"
          fill
          className="object-cover opacity-45"
          priority
          sizes="(max-width: 768px) 100vw, 720px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1a1918] via-[#1a1918]/80 to-[#1a1918]/55"
          aria-hidden
        />
        <div
          className="confessional-hero-glow absolute left-1/2 top-[58%] h-24 w-24 -translate-x-1/2 rounded-full bg-[#8b9bb5]/20 blur-3xl"
          aria-hidden
        />
      </div>

      <div className="relative px-6 py-16 md:px-10 md:py-20">
        <p className="confessional-hero-fade annotation mb-4 text-[#9a9590]">
          Observation / Emerging
        </p>

        <blockquote className="confessional-hero-fade confessional-hero-fade-delay max-w-xl">
          {lines.map((line, i) => (
            <p
              key={line}
              className={`text-lg font-medium leading-[1.85] tracking-tight md:text-xl${i > 0 ? " mt-3" : ""}`}
            >
              {line}
            </p>
          ))}
          <span
            className="confessional-typing-cursor mt-4 inline-block h-[1.1em] w-px align-middle bg-[#c8c2b8]/70 motion-reduce:hidden"
            aria-hidden
          />
        </blockquote>
      </div>
    </section>
  );
}
