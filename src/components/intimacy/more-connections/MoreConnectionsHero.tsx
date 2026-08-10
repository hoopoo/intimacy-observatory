import { MORE_CONNECTIONS_META } from "@/data/more-connections-less-connection";

export function MoreConnectionsHero() {
  return (
    <section
      aria-label={MORE_CONNECTIONS_META.heroImageAlt}
      className="relative overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[#12141a] text-[#e8e4dc]"
    >
      <div
        className="absolute inset-0 opacity-90"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, #0f1118 0%, #1a1d28 45%, #141820 100%)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-32 w-48 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#4a5568]/40 bg-[#1e2430]/60"
        aria-hidden
      />
      <div
        className="absolute left-[28%] top-[42%] h-16 w-6 rounded-full bg-[#2a3140]"
        aria-hidden
      />
      <div
        className="absolute right-[28%] top-[44%] h-14 w-5 rounded-full bg-[#323848]"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-[38%] h-px w-24 -translate-x-1/2 bg-[#6b7fd4]/30"
        aria-hidden
      />

      <div className="relative px-6 py-14 md:px-10 md:py-16">
        <p className="annotation mb-3 text-[#9a9590]">Observation / 観測</p>
        <p className="text-sm font-medium text-[#b8b2a8]">
          {MORE_CONNECTIONS_META.titleEn}
        </p>
        <p className="mt-4 max-w-lg text-lg font-medium leading-relaxed tracking-tight">
          {MORE_CONNECTIONS_META.subtitle}
        </p>
      </div>
    </section>
  );
}
