import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getAllEncounterRecordSlugs,
  getCategoryBackLabel,
  getCategoryPageHref,
  getCategoryTitleSuffix,
  getEncounterRecordBySlug,
} from "@/lib/encounter-classics";
import { ClassicsRecordDetail } from "@/components/intimacy/classics-of-encounter/ClassicsRecordDetail";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllEncounterRecordSlugs().map((slug) => ({ slug }));
}

function buildDescription(record: NonNullable<ReturnType<typeof getEncounterRecordBySlug>>) {
  const observation = record.observation[0];
  if (observation) {
    return `${record.summary} ${observation}`;
  }
  return record.summary;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = getEncounterRecordBySlug(slug);
  if (!record) return { title: "Not Found" };
  const description = buildDescription(record);
  const titleCategory = getCategoryTitleSuffix(record.categoryId);
  return {
    title: `${record.name}｜${titleCategory}`,
    description,
    openGraph: {
      title: record.name,
      description,
    },
  };
}

export default async function ClassicsRecordPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const record = getEncounterRecordBySlug(slug);
  if (!record) notFound();

  const backHref =
    getCategoryPageHref(record.categoryId) ===
    `/classics-of-encounter/category/${record.categoryId}`
      ? "/classics-of-encounter#observations"
      : getCategoryPageHref(record.categoryId);
  const backLabel =
    getCategoryBackLabel(record.categoryId) ??
    "出会いの古典と現在に戻る";

  return (
    <div className="mx-auto max-w-[720px] px-5 py-12">
      <Link
        href={backHref}
        className="mb-10 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        {backLabel}
      </Link>
      <ClassicsRecordDetail record={record} />
    </div>
  );
}
