import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getMassMarketRecords } from "@/lib/encounter-classics";
import { MassMarketHero } from "@/components/intimacy/classics-of-encounter/MassMarketHero";
import { MassMarketRecordCard } from "@/components/intimacy/classics-of-encounter/MassMarketRecordCard";
import { MassMarketLineage } from "@/components/intimacy/classics-of-encounter/MassMarketLineage";
import { MassMarketProfileInterface } from "@/components/intimacy/classics-of-encounter/MassMarketProfileInterface";
import { MassMarketSubscriptionEconomy } from "@/components/intimacy/classics-of-encounter/MassMarketSubscriptionEconomy";
import { MassMarketDesireTranslation } from "@/components/intimacy/classics-of-encounter/MassMarketDesireTranslation";
import { MassMarketVsLegacy } from "@/components/intimacy/classics-of-encounter/MassMarketVsLegacy";
import { MassMarketClosing } from "@/components/intimacy/classics-of-encounter/MassMarketClosing";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export const metadata: Metadata = {
  title: "日本の大衆型｜出会いの古典と現在",
  description:
    "Pairs、tapple、with、Omiai。出会いを恋活・婚活という日常的な言葉へ翻訳し、プロフィールカードと相互マッチで関係市場を作った大衆型マッチングを観測する。",
  openGraph: {
    title: "日本の大衆型",
    description:
      "出会いたいという欲望を、恋活・婚活という言葉へ翻訳した。",
  },
};

export default function MassMarketMatchingPage() {
  const records = getMassMarketRecords();

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <Link
          href="/classics-of-encounter"
          className="inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          出会いの古典と現在に戻る
        </Link>
      </div>

      <MassMarketHero />

      <section
        id="records"
        className="border-b border-[var(--border)]"
        aria-labelledby="mass-market-records-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Four mass-market services</p>
            <h2
              id="mass-market-records-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              四つの大衆型サービス
            </h2>
          </FadeInOnScroll>

          <div className="mt-10 flex flex-col gap-6">
            {records.map((record, index) => (
              <FadeInOnScroll key={record.slug} delayMs={index * 50}>
                <MassMarketRecordCard
                  record={record}
                  number={record.displayOrder ?? index + 1}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <MassMarketLineage />
      <MassMarketProfileInterface />
      <MassMarketSubscriptionEconomy />
      <MassMarketDesireTranslation />
      <MassMarketVsLegacy />
      <MassMarketClosing />
    </>
  );
}
