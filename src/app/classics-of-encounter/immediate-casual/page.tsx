import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getImmediateCasualRecords } from "@/lib/encounter-classics";
import { ImmediateHero } from "@/components/intimacy/classics-of-encounter/ImmediateHero";
import { ImmediateRecordCard } from "@/components/intimacy/classics-of-encounter/ImmediateRecordCard";
import { ImmediateLineage } from "@/components/intimacy/classics-of-encounter/ImmediateLineage";
import { ImmediateSwipeInterface } from "@/components/intimacy/classics-of-encounter/ImmediateSwipeInterface";
import { ImmediateProximityEconomy } from "@/components/intimacy/classics-of-encounter/ImmediateProximityEconomy";
import { ImmediateCasualFraming } from "@/components/intimacy/classics-of-encounter/ImmediateCasualFraming";
import { ImmediateVsMassMarket } from "@/components/intimacy/classics-of-encounter/ImmediateVsMassMarket";
import { ImmediateClosing } from "@/components/intimacy/classics-of-encounter/ImmediateClosing";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export const metadata: Metadata = {
  title: "即時・カジュアル型｜出会いの古典と現在",
  description:
    "Tinder、Dine、バチェラーデート、東カレデート。出会いを近さと速度へ還元し、スワイプと位置情報で対面を即時化した即時・カジュアル型マッチングを観測する。",
  openGraph: {
    title: "即時・カジュアル型",
    description: "出会いは、近さと今すぐへ還元された。",
  },
};

export default function ImmediateCasualPage() {
  const records = getImmediateCasualRecords();

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

      <ImmediateHero />

      <section
        id="records"
        className="border-b border-[var(--border)]"
        aria-labelledby="immediate-records-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Four immediate services</p>
            <h2
              id="immediate-records-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              四つの即時・カジュアル型サービス
            </h2>
          </FadeInOnScroll>

          <div className="mt-10 flex flex-col gap-6">
            {records.map((record, index) => (
              <FadeInOnScroll key={record.slug} delayMs={index * 50}>
                <ImmediateRecordCard
                  record={record}
                  number={record.displayOrder ?? index + 1}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ImmediateLineage />
      <ImmediateSwipeInterface />
      <ImmediateProximityEconomy />
      <ImmediateCasualFraming />
      <ImmediateVsMassMarket />
      <ImmediateClosing />
    </>
  );
}
