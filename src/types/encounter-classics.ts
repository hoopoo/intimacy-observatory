export type EncounterRecordStatus =
  | "active"
  | "vanished"
  | "transformed"
  | "ending";

export type EncounterRecord = {
  slug: string;
  name: string;
  englishName?: string;
  era: string;
  status: EncounterRecordStatus;
  categoryId: string;
  summary: string;
  /** カテゴリ内表示順（消えた装置など） */
  displayOrder?: number;
  interface?: string[];
  entryCondition?: string;
  timeStructure?: string;
  geographicStructure?: string;
  identityStructure?: string;
  whatItPromised: string;
  whatItActuallySold: string;
  whoWasVisible: string;
  whoRemainedInvisible: string;
  howChanceWasProduced: string;
  howTrustWasProduced: string;
  howDesireWasFramed: string;
  paymentLogic: string;
  contactLogic?: string;
  matchingRequirement?: string;
  visibilityLogic?: string;
  genderedPricing?: string;
  repetitionLogic?: string;
  platformStructure?: string;
  risks?: string[];
  safetyMechanisms?: string[];
  whyItDisappeared?: string[];
  whyItSurvived?: string[];
  whatCameBefore: string[];
  whatCameAfter?: string[];
  whatMayComeAfter?: string[];
  whatRemainsToday?: string[];
  observation: string[];
  relatedLayers: string[];
  timelineEraId?: string;
  relatedObservationSlugs?: string[];
  relatedArticleSlugs?: string[];
  relatedEncounterSlugs?: string[];
  /** 他カテゴリページへの導線 */
  crossCategoryLinks?: {
    categoryId: string;
    note: string;
    label: string;
  }[];
};

export type InterfaceComparisonRow = {
  recordSlug: string;
  label: string;
  primaryInterface: string;
  firstVisibleSignal: string;
  firstPrivateContact: string;
  waitingTime: string;
  geographicRange: string;
  identityExposure: string;
  gatekeeper: string;
  payment: string;
  mainRisk: string;
};

export type VanishedLineageChain = {
  id: string;
  origin: string;
  steps: string[];
};

export type VanishedDisappearedItem = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type EncounterTimelineEra = {
  id: string;
  order: number;
  title: string;
  titleEn?: string;
  period: string;
  summary: string;
  interface: string;
  coreDesire: string;
  /** 関連する観測記録 slug */
  relatedRecordSlugs?: string[];
  /** 関連カテゴリページ（View archive 導線） */
  relatedCategoryId?: string;
  /** 追加のカテゴリ導線 */
  additionalCategoryLinks?: { categoryId: string; label: string }[];
};

export type EncounterCategory = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  initialTargets: string[];
  timelineEraIds: string[];
  /** カテゴリカード用の短い観測文 */
  cardObservation?: string[];
};

export type EncounterArchiveFilters = {
  categoryId?: string;
  timelineEraId?: string;
};

export type EncounterCompareSide = {
  id: string;
  label: string;
  items: string[];
};
