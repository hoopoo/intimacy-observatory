import {
  ENCOUNTER_CATEGORIES,
  ENCOUNTER_COMPARE,
  ENCOUNTER_RECORDS,
  ENCOUNTER_TIMELINE,
} from "@/data/encounter-classics";
import type {
  EncounterArchiveFilters,
  EncounterCategory,
  EncounterRecord,
  EncounterTimelineEra,
} from "@/types/encounter-classics";
import { getArticleBySlug } from "@/lib/articles";
import { getObservationBySlug } from "@/lib/observations";
import type { Article } from "@/types/article";
import type { Observation } from "@/types/intimacy";

export function getEncounterTimeline(): EncounterTimelineEra[] {
  return [...ENCOUNTER_TIMELINE].sort((a, b) => a.order - b.order);
}

export function getEncounterCategories(): EncounterCategory[] {
  return ENCOUNTER_CATEGORIES;
}

export function getAllEncounterCategoryIds(): string[] {
  return ENCOUNTER_CATEGORIES.map((category) => category.id);
}

export function getEncounterCategoryById(
  id: string,
): EncounterCategory | undefined {
  return ENCOUNTER_CATEGORIES.find((category) => category.id === id);
}

export function getEncounterRecords(): EncounterRecord[] {
  return ENCOUNTER_RECORDS;
}

export function getEncounterRecordBySlug(
  slug: string,
): EncounterRecord | undefined {
  return ENCOUNTER_RECORDS.find((record) => record.slug === slug);
}

export function getAllEncounterRecordSlugs(): string[] {
  return ENCOUNTER_RECORDS.map((record) => record.slug);
}

export function getEncounterCompare() {
  return ENCOUNTER_COMPARE;
}

export function getEncounterRecordsByCategory(
  categoryId: string,
): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.categoryId === categoryId,
  );
}

export function getEncounterRecordsByTimelineEra(
  eraId: string,
): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.timelineEraId === eraId,
  );
}

export function getPendingTargetsForCategory(
  categoryId: string,
): string[] {
  const category = getEncounterCategoryById(categoryId);
  if (!category) return [];

  const recordedNames = new Set(
    getEncounterRecordsByCategory(categoryId).flatMap((record) => [
      record.name,
      record.englishName ?? "",
    ]),
  );

  return category.initialTargets.filter(
    (target) => !recordedNames.has(target),
  );
}

export function filterEncounterRecords(
  filters: EncounterArchiveFilters,
): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter((record) => {
    if (filters.categoryId && record.categoryId !== filters.categoryId) {
      return false;
    }
    if (
      filters.timelineEraId &&
      record.timelineEraId !== filters.timelineEraId
    ) {
      return false;
    }
    return true;
  });
}

export function filterEncounterTimelineEras(
  filters: EncounterArchiveFilters,
): EncounterTimelineEra[] {
  const eras = getEncounterTimeline();

  if (filters.timelineEraId) {
    return eras.filter((era) => era.id === filters.timelineEraId);
  }

  if (filters.categoryId) {
    const category = getEncounterCategoryById(filters.categoryId);
    if (!category) return eras;
    return eras.filter((era) => category.timelineEraIds.includes(era.id));
  }

  return eras;
}

export function getRelatedObservationsForEncounter(
  record: EncounterRecord,
): Observation[] {
  return (record.relatedObservationSlugs ?? [])
    .map((slug) => getObservationBySlug(slug))
    .filter((o): o is Observation => Boolean(o));
}

export function getRelatedArticlesForEncounter(
  record: EncounterRecord,
): Article[] {
  return (record.relatedArticleSlugs ?? [])
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a));
}

export function getRelatedEncountersForEncounter(
  record: EncounterRecord,
): EncounterRecord[] {
  return (record.relatedEncounterSlugs ?? [])
    .map((slug) => getEncounterRecordBySlug(slug))
    .filter((r): r is EncounterRecord => Boolean(r));
}

export function getEncountersForObservation(
  observationSlug: string,
  directSlugs: string[] = [],
): EncounterRecord[] {
  const bySlug = new Map<string, EncounterRecord>();

  for (const slug of directSlugs) {
    const record = getEncounterRecordBySlug(slug);
    if (record) bySlug.set(record.slug, record);
  }

  for (const record of ENCOUNTER_RECORDS) {
    if ((record.relatedObservationSlugs ?? []).includes(observationSlug)) {
      bySlug.set(record.slug, record);
    }
  }

  return [...bySlug.values()];
}

export function getEncountersForArticle(articleSlug: string): EncounterRecord[] {
  const bySlug = new Map<string, EncounterRecord>();

  const article = getArticleBySlug(articleSlug);
  for (const slug of article?.relatedEncounterSlugs ?? []) {
    const record = getEncounterRecordBySlug(slug);
    if (record) bySlug.set(record.slug, record);
  }

  for (const record of ENCOUNTER_RECORDS) {
    if ((record.relatedArticleSlugs ?? []).includes(articleSlug)) {
      bySlug.set(record.slug, record);
    }
  }

  return [...bySlug.values()];
}

export function getEncountersLinkingToSlug(slug: string): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter((record) =>
    (record.relatedEncounterSlugs ?? []).includes(slug),
  );
}

export function getVanishedRecords(): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.categoryId === "vanished-systems",
  ).sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );
}

export function getVanishedRecordNumber(slug: string): number | undefined {
  const records = getVanishedRecords();
  const index = records.findIndex((record) => record.slug === slug);
  return index >= 0 ? index + 1 : undefined;
}

export function getAdjacentVanishedRecords(slug: string): {
  prev?: EncounterRecord;
  next?: EncounterRecord;
} {
  const records = getVanishedRecords();
  const index = records.findIndex((record) => record.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? records[index - 1] : undefined,
    next: index < records.length - 1 ? records[index + 1] : undefined,
  };
}

export function getCategoryPageHref(categoryId: string): string {
  if (categoryId === "vanished-systems") {
    return "/classics-of-encounter/vanished";
  }
  if (categoryId === "legacy-dating-services") {
    return "/classics-of-encounter/legacy-dating-services";
  }
  if (categoryId === "mass-market-matching") {
    return "/classics-of-encounter/mass-market-matching";
  }
  if (categoryId === "immediate-casual") {
    return "/classics-of-encounter/immediate-casual";
  }
  if (categoryId === "international-cross-border") {
    return "/classics-of-encounter/international-cross-border";
  }
  if (categoryId === "public-municipal") {
    return "/classics-of-encounter/public-municipal";
  }
  if (categoryId === "marriage-identity-specific") {
    return "/classics-of-encounter/marriage-identity-specific";
  }
  return `/classics-of-encounter/category/${categoryId}`;
}

export function getMarriageIdentityRecords(): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.categoryId === "marriage-identity-specific",
  ).sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );
}

export function getMarriageIdentityRecordNumber(
  slug: string,
): number | undefined {
  const records = getMarriageIdentityRecords();
  const index = records.findIndex((record) => record.slug === slug);
  return index >= 0 ? index + 1 : undefined;
}

export function getAdjacentMarriageIdentityRecords(slug: string): {
  prev?: EncounterRecord;
  next?: EncounterRecord;
} {
  const records = getMarriageIdentityRecords();
  const index = records.findIndex((record) => record.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? records[index - 1] : undefined,
    next: index < records.length - 1 ? records[index + 1] : undefined,
  };
}

export function getPublicMunicipalRecords(): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.categoryId === "public-municipal",
  ).sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );
}

export function getPublicMunicipalRecordNumber(
  slug: string,
): number | undefined {
  const records = getPublicMunicipalRecords();
  const index = records.findIndex((record) => record.slug === slug);
  return index >= 0 ? index + 1 : undefined;
}

export function getAdjacentPublicMunicipalRecords(slug: string): {
  prev?: EncounterRecord;
  next?: EncounterRecord;
} {
  const records = getPublicMunicipalRecords();
  const index = records.findIndex((record) => record.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? records[index - 1] : undefined,
    next: index < records.length - 1 ? records[index + 1] : undefined,
  };
}

export function getInternationalRecords(): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.categoryId === "international-cross-border",
  ).sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );
}

export function getInternationalRecordNumber(
  slug: string,
): number | undefined {
  const records = getInternationalRecords();
  const index = records.findIndex((record) => record.slug === slug);
  return index >= 0 ? index + 1 : undefined;
}

export function getAdjacentInternationalRecords(slug: string): {
  prev?: EncounterRecord;
  next?: EncounterRecord;
} {
  const records = getInternationalRecords();
  const index = records.findIndex((record) => record.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? records[index - 1] : undefined,
    next: index < records.length - 1 ? records[index + 1] : undefined,
  };
}

export function getImmediateCasualRecords(): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.categoryId === "immediate-casual",
  ).sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );
}

export function getImmediateCasualRecordNumber(
  slug: string,
): number | undefined {
  const records = getImmediateCasualRecords();
  const index = records.findIndex((record) => record.slug === slug);
  return index >= 0 ? index + 1 : undefined;
}

export function getAdjacentImmediateCasualRecords(slug: string): {
  prev?: EncounterRecord;
  next?: EncounterRecord;
} {
  const records = getImmediateCasualRecords();
  const index = records.findIndex((record) => record.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? records[index - 1] : undefined,
    next: index < records.length - 1 ? records[index + 1] : undefined,
  };
}

export const EXTENDED_ENCOUNTER_CATEGORY_IDS = [
  "legacy-dating-services",
  "mass-market-matching",
  "immediate-casual",
  "international-cross-border",
  "public-municipal",
  "marriage-identity-specific",
] as const;

export function isExtendedEncounterCategory(categoryId: string): boolean {
  return (EXTENDED_ENCOUNTER_CATEGORY_IDS as readonly string[]).includes(
    categoryId,
  );
}

export function getCategoryBackLabel(categoryId: string): string | undefined {
  const labels: Record<string, string> = {
    "vanished-systems": "消えた出会いの装置に戻る",
    "legacy-dating-services": "日本の老舗出会い系に戻る",
    "mass-market-matching": "日本の大衆型に戻る",
    "immediate-casual": "即時・カジュアル型に戻る",
    "international-cross-border": "国際・越境型に戻る",
    "public-municipal": "公共・行政型に戻る",
    "marriage-identity-specific": "婚活・属性特化型に戻る",
  };
  return labels[categoryId];
}

export function getCategoryTitleSuffix(categoryId: string): string {
  const suffixes: Record<string, string> = {
    "legacy-dating-services": "日本の老舗出会い系",
    "mass-market-matching": "日本の大衆型",
    "immediate-casual": "即時・カジュアル型",
    "international-cross-border": "国際・越境型",
    "public-municipal": "公共・行政型",
    "marriage-identity-specific": "婚活・属性特化型",
  };
  return suffixes[categoryId] ?? "出会いの古典と現在";
}

export function getMassMarketRecords(): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.categoryId === "mass-market-matching",
  ).sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );
}

export function getMassMarketRecordNumber(slug: string): number | undefined {
  const records = getMassMarketRecords();
  const index = records.findIndex((record) => record.slug === slug);
  return index >= 0 ? index + 1 : undefined;
}

export function getAdjacentMassMarketRecords(slug: string): {
  prev?: EncounterRecord;
  next?: EncounterRecord;
} {
  const records = getMassMarketRecords();
  const index = records.findIndex((record) => record.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? records[index - 1] : undefined,
    next: index < records.length - 1 ? records[index + 1] : undefined,
  };
}

export function getLegacyRecords(): EncounterRecord[] {
  return ENCOUNTER_RECORDS.filter(
    (record) => record.categoryId === "legacy-dating-services",
  ).sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );
}

export function getLegacyRecordNumber(slug: string): number | undefined {
  const records = getLegacyRecords();
  const index = records.findIndex((record) => record.slug === slug);
  return index >= 0 ? index + 1 : undefined;
}

export function getAdjacentLegacyRecords(slug: string): {
  prev?: EncounterRecord;
  next?: EncounterRecord;
} {
  const records = getLegacyRecords();
  const index = records.findIndex((record) => record.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? records[index - 1] : undefined,
    next: index < records.length - 1 ? records[index + 1] : undefined,
  };
}
