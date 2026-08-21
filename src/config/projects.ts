export type RelatedProject = {
  id: string;
  name: string;
  nameJa?: string;
  url: string;
};

export const RELATED_PROJECTS: RelatedProject[] = [
  {
    id: "intimacy-observatory",
    name: "Intimacy Observatory",
    nameJa: "親密性の観測所",
    url: "https://intimacy.shiroand.io",
  },
  {
    id: "scam-folklore",
    name: "Scam Folklore Observatory",
    nameJa: "詐欺民俗観測所",
    url: "https://scam-folklore-observatory.vercel.app",
  },
  {
    id: "body-meaning",
    name: "Body Meaning",
    url: "https://body-meaning.shiroand.io/body-meaning",
  },
  {
    id: "meaning-layer",
    name: "Meaning Layer",
    url: "https://meaning.shiroand.io",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    url: "https://book.shiroand.io/market_signals",
  },
  {
    id: "future-desire",
    name: "When the Future Stops Producing Desire",
    nameJa: "未来が、欲望を生まなくなるとき",
    url: "https://entangled.shiroand.io/observations/when-the-future-stops-producing-desire",
  },
];

export function getRelatedProject(id: string): RelatedProject | undefined {
  return RELATED_PROJECTS.find((p) => p.id === id);
}

export const SCAM_FOLKLORE_OBSERVATORY_URL =
  getRelatedProject("scam-folklore")?.url ??
  "https://scam-folklore-observatory.vercel.app";
