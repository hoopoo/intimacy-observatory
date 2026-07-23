import type { EncounterRecordStatus } from "@/types/encounter-classics";

export const encounterStatusLabel: Record<
  EncounterRecordStatus,
  { en: string; ja: string }
> = {
  active: { en: "Active", ja: "稼働中" },
  vanished: { en: "Vanished", ja: "消滅" },
  transformed: { en: "Transformed", ja: "変容" },
  ending: { en: "Ending", ja: "終息中" },
};

export function encounterStatusTone(
  status: EncounterRecordStatus,
): string {
  switch (status) {
    case "active":
      return "text-[var(--accent-green)] bg-[var(--accent-green-bg)]";
    case "vanished":
      return "text-[var(--ink-faint)] bg-[var(--accent-soft)]";
    case "transformed":
      return "text-[var(--accent-violet)] bg-[var(--accent-violet-bg)]";
    case "ending":
      return "text-[var(--accent-amber)] bg-[var(--risk-medium-bg)]";
    default:
      return "text-[var(--ink-faint)] bg-[var(--accent-soft)]";
  }
}
