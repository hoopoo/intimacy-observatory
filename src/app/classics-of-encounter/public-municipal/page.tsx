import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPublicMunicipalRecords } from "@/lib/encounter-classics";
import { MunicipalHero } from "@/components/intimacy/classics-of-encounter/MunicipalHero";
import { MunicipalRecordCard } from "@/components/intimacy/classics-of-encounter/MunicipalRecordCard";
import { MunicipalLineage } from "@/components/intimacy/classics-of-encounter/MunicipalLineage";
import { MunicipalInstitutionInterface } from "@/components/intimacy/classics-of-encounter/MunicipalInstitutionInterface";
import { MunicipalParticipationFlow } from "@/components/intimacy/classics-of-encounter/MunicipalParticipationFlow";
import { MunicipalDesireFraming } from "@/components/intimacy/classics-of-encounter/MunicipalDesireFraming";
import { MunicipalVsMassMarket } from "@/components/intimacy/classics-of-encounter/MunicipalVsMassMarket";
import { MunicipalClosing } from "@/components/intimacy/classics-of-encounter/MunicipalClosing";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export const metadata: Metadata = {
  title: "公共・行政型｜出会いの古典と現在",
  description:
    "TOKYO縁結び、自治体AIマッチング、地域婚活支援。都・道府県・市区町村の各段階で、出会いを社会基盤化した公共・行政型を観測する。",
  openGraph: {
    title: "公共・行政型",
    description: "欲望を包む制度と語彙が、変わった。",
  },
};

export default function PublicMunicipalPage() {
  const records = getPublicMunicipalRecords();

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

      <MunicipalHero />

      <section
        id="records"
        className="border-b border-[var(--border)]"
        aria-labelledby="municipal-records-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Three public services</p>
            <h2
              id="municipal-records-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              三つの公共・行政型サービス
            </h2>
          </FadeInOnScroll>

          <div className="mt-10 flex flex-col gap-6">
            {records.map((record, index) => (
              <FadeInOnScroll key={record.slug} delayMs={index * 50}>
                <MunicipalRecordCard
                  record={record}
                  number={record.displayOrder ?? index + 1}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <MunicipalLineage />
      <MunicipalInstitutionInterface />
      <MunicipalParticipationFlow />
      <MunicipalDesireFraming />
      <MunicipalVsMassMarket />
      <MunicipalClosing />
    </>
  );
}
