import type { EncounterArchiveFilters } from "@/types/encounter-classics";

export function parseEncounterFiltersFromSearchParams(
  searchParams: URLSearchParams,
): EncounterArchiveFilters {
  const categoryId = searchParams.get("category") ?? undefined;
  const timelineEraId = searchParams.get("era") ?? undefined;
  return {
    categoryId: categoryId || undefined,
    timelineEraId: timelineEraId || undefined,
  };
}

export function encounterFiltersToSearchParams(
  filters: EncounterArchiveFilters,
): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.categoryId) params.set("category", filters.categoryId);
  if (filters.timelineEraId) params.set("era", filters.timelineEraId);
  return params;
}

export function buildEncounterArchiveHref(
  filters: EncounterArchiveFilters,
): string {
  const params = encounterFiltersToSearchParams(filters);
  const qs = params.toString();
  return qs ? `/classics-of-encounter?${qs}` : "/classics-of-encounter";
}
