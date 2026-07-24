import type { ObservationStatus } from "@/types/intimacy";

export type ArticleType =
  | "observation-essay"
  | "pattern-essay"
  | "forecast-essay"
  | "field-note"
  | "institutional-reading";

export type ArticleComparisonSide = {
  title: string;
  titleEn?: string;
  items: string[];
};

export type ArticleIntimacyStackLayer = {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
};

export type ArticleHeroCopy = {
  thesis: string;
  supplement?: string;
};

export type CrossObservatoryLink = {
  layerId: string;
  description: string;
};

export type ArticleSection = {
  id: string;
  heading?: string;
  paragraphs: string[];
  quote?: string;
  bulletList?: string[];
  comparison?: {
    left: ArticleComparisonSide;
    right: ArticleComparisonSide;
  };
  beforeAfter?: {
    before: ArticleComparisonSide;
    after: ArticleComparisonSide;
  };
  intimacyStack?: ArticleIntimacyStackLayer[];
  emphasizedQuote?: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  date: string;
  articleType: ArticleType;
  readingTime?: number;
  themes: string[];
  category?: string;
  categoryJa?: string;
  observationStatus?: ObservationStatus;
  relatedObservationSlugs: string[];
  relatedArticleSlugs?: string[];
  relatedEncounterSlugs?: string[];
  body: ArticleSection[];
  heroCopy?: ArticleHeroCopy;
  openQuestionItems?: string[];
  emphasizedOpenQuestion?: string;
  closingStatement?: {
    paragraphs: string[];
    quote?: string;
  };
  crossObservatoryLinks?: CrossObservatoryLink[];
  relatedObservationsIntro?: string;
  sourceNote?: string;
  closingNote?: string;
  openQuestions?: string[];
  relatedProjects?: string[];
  seoDescription?: string;
  ogDescription?: string;
};
