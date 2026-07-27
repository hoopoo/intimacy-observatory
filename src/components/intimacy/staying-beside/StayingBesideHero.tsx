import { STAYING_BESIDE_META } from "@/data/staying-beside-someone-you-cannot-save";

export function StayingBesideHero() {
  const lines = STAYING_BESIDE_META.heroImageAlt.split("。");

  return (
    <section
      aria-label={STAYING_BESIDE_META.heroImageAlt}
      className="relative overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[#14131a] text-[#e8e4dc]"
    >
      <div
        className="absolute inset-0 opacity-90"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, #1a1824 0%, #12111a 55%, #0e0d14 100%)",
        }}
      />
      <div
        className="absolute bottom-[28%] left-0 right-0 h-px bg-[#3d3850]/60"
        aria-hidden
      />
      <div
        className="absolute bottom-[22%] left-[18%] h-24 w-8 rounded-full bg-[#2a2635]"
        aria-hidden
      />
      <div
        className="absolute bottom-[22%] left-[24%] h-20 w-7 rounded-full bg-[#322e3f]"
        aria-hidden
      />
      <div
        className="absolute bottom-[30%] left-[52%] h-28 w-9 rounded-full bg-[#2a2635]"
        aria-hidden
      />
      <div
        className="absolute bottom-[30%] left-[58%] h-22 w-7 rounded-full bg-[#3a3548]"
        aria-hidden
      />
      <div
        className="absolute left-[22%] top-[18%] h-16 w-16 rounded-full bg-[#8b7fd4]/10 blur-2xl"
        aria-hidden
      />
      <div
        className="absolute right-[20%] top-[24%] h-20 w-20 rounded-full bg-[#d47f9a]/8 blur-2xl"
        aria-hidden
      />
      <div
        className="absolute left-[30%] top-[32%] h-1 w-24 bg-[#6b5f8a]/40"
        aria-hidden
      />
      <div
        className="absolute right-[28%] top-[38%] h-1 w-16 bg-[#6b5f8a]/25"
        aria-hidden
      />

      <div className="relative px-6 py-14 md:px-10 md:py-16">
        <p className="annotation mb-3 text-[#9a9590]">Key Visual / キービジュアル</p>
        <p className="max-w-md text-sm leading-relaxed text-[#b8b2a8]">
          {lines[0]}。
        </p>
        <p className="mt-2 text-xs text-[#7a756c]">
          顔は描かない。関係の温かさと不安定さが同時にある、静かな夜の抽象表現。
        </p>
      </div>
    </section>
  );
}
