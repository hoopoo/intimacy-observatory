/**
 * Production Intimacy → LensInput adapter (host mapper).
 *
 * Lens logic lives in @shiro/cross-observer (SoT).
 * This module only maps More Connections page data into the shared input shape.
 */

import {
  intimacyToLensInput,
  type IntimacyObservation,
  type LensInput,
} from "@shiro/cross-observer";
import {
  CLOSING_QUESTION,
  CONNECTED_OBSERVATORIES,
  CORE_THESIS,
  MORE_CONNECTIONS_META,
  OPENING,
  STRUCTURAL_PARADOXES,
} from "@/data/more-connections-less-connection";

/**
 * Map More Connections, Less Connection → LensInput.
 * Source data objects are never mutated.
 */
export function moreConnectionsToLensInput(): LensInput {
  const meta = MORE_CONNECTIONS_META;
  const mentionsRomanceProtocolCollapse = CONNECTED_OBSERVATORIES.some(
    (o) =>
      o.id === "clean-society" ||
      /romance protocol|恋愛プロトコル/i.test(`${o.title} ${o.description}`),
  );

  const observation: IntimacyObservation = {
    id: meta.slug,
    slug: meta.slug,
    title: meta.title,
    titleEn: meta.titleEn,
    text: [meta.subtitle, CORE_THESIS, ...OPENING, CLOSING_QUESTION].join(
      "\n",
    ),
    context: [
      meta.cardSummary,
      meta.subtitleEn,
      "Screen-mediated intimacy vs embodied presence",
      "More Matches ≠ More Intimacy; optimization does not guarantee connection",
    ].join("\n"),
    patterns: [
      "Infinite Choice Paradox",
      "Decision Stack",
      "Trust Cost Inflation",
      "Optimization Fatigue",
      ...STRUCTURAL_PARADOXES,
    ],
    actors: ["マッチング利用者", "プラットフォーム", "身体的存在としての相手"],
    choiceStructure:
      "profile → image/text compare → risk judgment → message → conditional meeting → continued search",
    trustCost:
      "評価・条件比較・リスク判断が、身体的な安心より先に来る構造",
    optimizationSignals: [
      "comparable",
      "searchable",
      "optimizable",
      "archivable",
      "reviewable",
    ],
    relationshipContext:
      "digital mediation of intimacy; desire within relationships under choice architecture",
    mentionsRomanceProtocolCollapse,
    metadata: {
      href: meta.href,
      host: "intimacy-observatory",
      themes: [...meta.themes],
      categories: [...meta.categories],
    },
  };

  return intimacyToLensInput(observation);
}
