import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getVanishedRecords } from "@/lib/encounter-classics";
import { VanishedHero } from "@/components/intimacy/classics-of-encounter/VanishedHero";
import { VanishedRecordCard } from "@/components/intimacy/classics-of-encounter/VanishedRecordCard";
import { VanishedInterfaceHistory } from "@/components/intimacy/classics-of-encounter/VanishedInterfaceHistory";
import { VanishedWhatDisappeared } from "@/components/intimacy/classics-of-encounter/VanishedWhatDisappeared";
import { VanishedLineage } from "@/components/intimacy/classics-of-encounter/VanishedLineage";
import { VanishedClosing } from "@/components/intimacy/classics-of-encounter/VanishedClosing";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export const metadata: Metadata = {
  title: "消えた出会いの装置｜出会いの古典と現在",
  description:
    "文通、恋人募集欄、伝言ダイヤル、ツーショットダイヤル、テレクラ、スタービーチ。マッチングアプリ以前に、人が見知らぬ誰かとつながるために使った装置を記録する。",
  openGraph: {
    title: "消えた出会いの装置",
    description:
      "プロフィールもスワイプもなかった時代、人は何を手がかりに誰かを探したのか。",
  },
};

export default function VanishedSystemsPage() {
  const records = getVanishedRecords();

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

      <VanishedHero />

      <section
        id="records"
        className="border-b border-[var(--border)]"
        aria-labelledby="vanished-records-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <FadeInOnScroll>
            <p className="annotation mb-2">Six vanished systems</p>
            <h2
              id="vanished-records-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              六つの消えた装置
            </h2>
          </FadeInOnScroll>

          <div className="mt-10 flex flex-col gap-6">
            {records.map((record, index) => (
              <FadeInOnScroll key={record.slug} delayMs={index * 50}>
                <VanishedRecordCard
                  record={record}
                  number={record.displayOrder ?? index + 1}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <VanishedInterfaceHistory />
      <VanishedWhatDisappeared />
      <VanishedLineage />
      <VanishedClosing />
    </>
  );
}
