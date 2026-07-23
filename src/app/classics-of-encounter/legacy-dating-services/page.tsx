import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getLegacyRecords } from "@/lib/encounter-classics";
import { LegacyHero } from "@/components/intimacy/classics-of-encounter/LegacyHero";
import { LegacyRecordCard } from "@/components/intimacy/classics-of-encounter/LegacyRecordCard";
import { LegacyStarBeachLineage } from "@/components/intimacy/classics-of-encounter/LegacyStarBeachLineage";
import { LegacyBulletinBoard } from "@/components/intimacy/classics-of-encounter/LegacyBulletinBoard";
import { LegacyPointEconomy } from "@/components/intimacy/classics-of-encounter/LegacyPointEconomy";
import { LegacyGenderAsymmetry } from "@/components/intimacy/classics-of-encounter/LegacyGenderAsymmetry";
import { LegacyVsMatchingApps } from "@/components/intimacy/classics-of-encounter/LegacyVsMatchingApps";
import { LegacyWhatSurvives } from "@/components/intimacy/classics-of-encounter/LegacyWhatSurvives";
import { LegacyClosing } from "@/components/intimacy/classics-of-encounter/LegacyClosing";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export const metadata: Metadata = {
  title: "日本の老舗出会い系｜出会いの古典と現在",
  description:
    "ハッピーメール、PCMAX、ワクワクメール、イククル。スタービーチ以後も残った、掲示板、地域検索、直接メッセージ、ポイント課金の構造を観測する。",
  openGraph: {
    title: "日本の老舗出会い系",
    description:
      "スワイプが登場しても、掲示板とポイント課金は消えなかった。",
  },
};

export default function LegacyDatingServicesPage() {
  const records = getLegacyRecords();

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

      <LegacyHero />

      <section
        id="records"
        className="border-b border-[var(--border)]"
        aria-labelledby="legacy-records-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Four legacy services</p>
            <h2
              id="legacy-records-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              四つの老舗サービス
            </h2>
          </FadeInOnScroll>

          <div className="mt-10 flex flex-col gap-6">
            {records.map((record, index) => (
              <FadeInOnScroll key={record.slug} delayMs={index * 50}>
                <LegacyRecordCard
                  record={record}
                  number={record.displayOrder ?? index + 1}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <LegacyStarBeachLineage />
      <LegacyBulletinBoard />
      <LegacyPointEconomy />
      <LegacyGenderAsymmetry />
      <LegacyVsMatchingApps />
      <LegacyWhatSurvives />
      <LegacyClosing />
    </>
  );
}
