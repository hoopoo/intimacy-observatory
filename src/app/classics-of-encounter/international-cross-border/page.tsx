import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getInternationalRecords } from "@/lib/encounter-classics";
import { InternationalHero } from "@/components/intimacy/classics-of-encounter/InternationalHero";
import { InternationalRecordCard } from "@/components/intimacy/classics-of-encounter/InternationalRecordCard";
import { InternationalLineage } from "@/components/intimacy/classics-of-encounter/InternationalLineage";
import { InternationalNormInterface } from "@/components/intimacy/classics-of-encounter/InternationalNormInterface";
import { InternationalCrossBorderFlow } from "@/components/intimacy/classics-of-encounter/InternationalCrossBorderFlow";
import { InternationalDesireFraming } from "@/components/intimacy/classics-of-encounter/InternationalDesireFraming";
import { InternationalVsMassMarket } from "@/components/intimacy/classics-of-encounter/InternationalVsMassMarket";
import { InternationalClosing } from "@/components/intimacy/classics-of-encounter/InternationalClosing";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export const metadata: Metadata = {
  title: "国際・越境型｜出会いの古典と現在",
  description:
    "Bumble、Hinge、OkCupid、JapanCupid、InternationalCupid。規範・会話・相性・国籍を軸に、越境的な出会いを観測する。",
  openGraph: {
    title: "国際・越境型",
    description: "出会いのルールそのものが、商品になった。",
  },
};

export default function InternationalCrossBorderPage() {
  const records = getInternationalRecords();

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

      <InternationalHero />

      <section
        id="records"
        className="border-b border-[var(--border)]"
        aria-labelledby="international-records-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Five international services</p>
            <h2
              id="international-records-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              五つの国際・越境型サービス
            </h2>
          </FadeInOnScroll>

          <div className="mt-10 flex flex-col gap-6">
            {records.map((record, index) => (
              <FadeInOnScroll key={record.slug} delayMs={index * 50}>
                <InternationalRecordCard
                  record={record}
                  number={record.displayOrder ?? index + 1}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <InternationalLineage />
      <InternationalNormInterface />
      <InternationalCrossBorderFlow />
      <InternationalDesireFraming />
      <InternationalVsMassMarket />
      <InternationalClosing />
    </>
  );
}
