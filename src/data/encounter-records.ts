import type { EncounterRecord } from "@/types/encounter-classics";
import { VANISHED_ENCOUNTER_RECORDS } from "@/data/encounter-vanished";
import { LEGACY_ENCOUNTER_RECORDS } from "@/data/encounter-legacy";
import { MASS_MARKET_ENCOUNTER_RECORDS } from "@/data/encounter-mass-market";
import { IMMEDIATE_CASUAL_RECORDS } from "@/data/encounter-immediate-casual";
import { INTERNATIONAL_ENCOUNTER_RECORDS } from "@/data/encounter-international";
import { PUBLIC_MUNICIPAL_RECORDS } from "@/data/encounter-public-municipal";
import { MARRIAGE_IDENTITY_RECORDS } from "@/data/encounter-marriage-identity";

export const ENCOUNTER_RECORDS: EncounterRecord[] = [
  ...VANISHED_ENCOUNTER_RECORDS,
  ...LEGACY_ENCOUNTER_RECORDS,
  ...MASS_MARKET_ENCOUNTER_RECORDS,
  ...IMMEDIATE_CASUAL_RECORDS,
  ...INTERNATIONAL_ENCOUNTER_RECORDS,
  ...PUBLIC_MUNICIPAL_RECORDS,
  ...MARRIAGE_IDENTITY_RECORDS,
];
