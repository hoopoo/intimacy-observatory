/**
 * Host integration smoke for Intimacy × Cross-Observer v1.1.0
 * Run: npm run test:cross-observer
 */

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { applyLens } from "@shiro/cross-observer";
import { moreConnectionsToLensInput } from "./moreConnectionsToLensInput";

describe("Intimacy production Lens integration", () => {
  it("builds LensInput from More Connections without mutating source shape", () => {
    const input = moreConnectionsToLensInput();
    assert.equal(input.sourceObservatory, "intimacy");
    assert.equal(
      input.sourceObservationId,
      "more-connections-less-connection",
    );
    assert.match(input.text, /connections|親密/);
    assert.match(String(input.context), /Romance Protocol|optimization/i);
  });

  it("applies Buddhist Lens with romance-related safeguards", () => {
    const outcome = applyLens("buddhist", moreConnectionsToLensInput());
    assert.equal(outcome.ok, true);
    if (!outcome.ok) return;

    const concepts = [
      outcome.result.primaryConcept,
      ...outcome.result.secondaryConcepts,
    ];
    assert.ok(
      ["b05-craving", "b06-attachment", "b02-dukkha", "b04-dependent-origination"].some(
        (id) => concepts.includes(id),
      ),
    );
    assert.ok(
      outcome.result.relatedPatterns?.some(
        (p) => p.id === "romance-protocol-collapse",
      ),
    );
    assert.ok(outcome.result.reflectionQuestion.length > 10);

    const blob = [
      outcome.result.interpretation,
      ...outcome.result.limitations,
      outcome.result.reflectionQuestion,
    ].join("\n");
    assert.equal(blob.includes("あなたの執着が原因"), false);
    assert.equal(blob.includes("結婚すべき"), false);
    assert.equal(blob.includes("アプリが恋愛を壊した"), false);
  });

  it("unknown lens fails safely", () => {
    const outcome = applyLens("taoism", moreConnectionsToLensInput());
    assert.equal(outcome.ok, false);
    if (outcome.ok) return;
    assert.equal(outcome.code, "unknown_lens");
  });
});
