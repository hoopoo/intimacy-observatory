import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getMarriageIdentityRecords } from "@/lib/encounter-classics";
import { MarriageIdentityHero } from "@/components/intimacy/classics-of-encounter/MarriageIdentityHero";
import { MarriageIdentityRecordCard } from "@/components/intimacy/classics-of-encounter/MarriageIdentityRecordCard";
import { MarriageIdentityLineage } from "@/components/intimacy/classics-of-encounter/MarriageIdentityLineage";
import { MarriageIdentityAttributeInterface } from "@/components/intimacy/classics-of-encounter/MarriageIdentityAttributeInterface";
import { MarriageIdentityFlow } from "@/components/intimacy/classics-of-encounter/MarriageIdentityFlow";
import { MarriageIdentityDesireFraming } from "@/components/intimacy/classics-of-encounter/MarriageIdentityDesireFraming";
import { MarriageIdentityVsMassMarket } from "@/components/intimacy/classics-of-encounter/MarriageIdentityVsMassMarket";
import { MarriageIdentityClosing } from "@/components/intimacy/classics-of-encounter/MarriageIdentityClosing";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export const metadata: Metadata = {
  title: "婚活・属性特化型｜出会いの古典と現在",
  description:
    "マリッシュ、ユーブライド、ブライダルネット、アンジュ。再婚・シニア・本気婚活など、生活史で候補プールを分割した婚活・属性特化型マッチングを観測する。",
  openGraph: {
    title: "婚活・属性特化型",
    description: "出会いは、生活史の条件で切り出された。",
  },
};

export default function MarriageIdentitySpecificPage() {
  const records = getMarriageIdentityRecords();

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

      <MarriageIdentityHero />

      <section
        id="records"
        className="border-b border-[var(--border)]"
        aria-labelledby="marriage-identity-records-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Four identity-specific services</p>
            <h2
              id="marriage-identity-records-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              四つの婚活・属性特化型サービス
            </h2>
          </FadeInOnScroll>

          <div className="mt-10 flex flex-col gap-6">
            {records.map((record, index) => (
              <FadeInOnScroll key={record.slug} delayMs={index * 50}>
                <MarriageIdentityRecordCard
                  record={record}
                  number={record.displayOrder ?? index + 1}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <MarriageIdentityLineage />
      <MarriageIdentityAttributeInterface />
      <MarriageIdentityFlow />
      <MarriageIdentityDesireFraming />
      <MarriageIdentityVsMassMarket />
      <MarriageIdentityClosing />
    </>
  );
}
