import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getAllEncounterCategoryIds,
  getEncounterCategoryById,
} from "@/lib/encounter-classics";
import { ClassicsCategoryDetail } from "@/components/intimacy/classics-of-encounter/ClassicsCategoryDetail";

type Params = { categoryId: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllEncounterCategoryIds().map((categoryId) => ({ categoryId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { categoryId } = await params;
  const category = getEncounterCategoryById(categoryId);
  if (!category) return { title: "Not Found" };
  return {
    title: `${category.title}｜出会いの古典と現在`,
    description: category.description,
  };
}

export default async function ClassicsCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { categoryId } = await params;
  if (categoryId === "vanished-systems") {
    redirect("/classics-of-encounter/vanished");
  }
  if (categoryId === "legacy-dating-services") {
    redirect("/classics-of-encounter/legacy-dating-services");
  }
  if (categoryId === "mass-market-matching") {
    redirect("/classics-of-encounter/mass-market-matching");
  }
  if (categoryId === "immediate-casual") {
    redirect("/classics-of-encounter/immediate-casual");
  }
  if (categoryId === "international-cross-border") {
    redirect("/classics-of-encounter/international-cross-border");
  }
  if (categoryId === "public-municipal") {
    redirect("/classics-of-encounter/public-municipal");
  }
  if (categoryId === "marriage-identity-specific") {
    redirect("/classics-of-encounter/marriage-identity-specific");
  }
  const category = getEncounterCategoryById(categoryId);
  if (!category) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Link
        href="/classics-of-encounter#categories"
        className="mb-10 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        出会いの古典と現在に戻る
      </Link>
      <ClassicsCategoryDetail category={category} />
    </div>
  );
}
