import { SCAM_FOLKLORE_OBSERVATORY_URL } from "@/config/projects";

export type ObservationLayer = {
  id: string;
  name: string;
  url?: string;
};

/** SHIRO & Co. 横断観測領域。URL が確認できないものはテキストのみ表示。 */
export const OBSERVATION_LAYERS: ObservationLayer[] = [
  {
    id: "intimacy",
    name: "Intimacy",
    url: "https://intimacy.shiroand.io",
  },
  {
    id: "scam-folklore",
    name: "Scam Folklore",
    url: SCAM_FOLKLORE_OBSERVATORY_URL,
  },
  {
    id: "body-meaning",
    name: "Body Meaning",
    url: "https://body-meaning.shiroand.io/body-meaning",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    url: "https://book.shiroand.io/market_signals",
  },
  {
    id: "classics-meaning-layer",
    name: "Classics Meaning Layer",
    url: "https://classics.shiroand.io",
  },
  {
    id: "vanishing-life",
    name: "Vanishing Life",
    url: "https://vanishing.shiroand.io",
  },
  { id: "clean-society", name: "Clean Society" },
  /** URL 未確認 — 確定後に url を追加 */
  { id: "parallel-life-protocol", name: "Parallel Life Protocol" },
];

export function getObservationLayer(id: string): ObservationLayer | undefined {
  return OBSERVATION_LAYERS.find((layer) => layer.id === id);
}
