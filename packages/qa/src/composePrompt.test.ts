import test from "node:test";
import assert from "node:assert/strict";
import { composeGuidedPrompt } from "@q-author/core";

test("composeGuidedPrompt injects bans and beats", () => {
  const msgs = composeGuidedPrompt({
    voiceCard: "avoid adverbs; tactile nouns",
    sceneMeta: {
      sceneGoal: "Reconcile with brother",
      beats: ["arrival", "argument", "revelation"],
      bans: ["very", "suddenly"]
    }
  });
  const joined = msgs.map(m=>m.content).join("\n");
  assert.ok(joined.includes("Reconcile with brother"));
  assert.ok(joined.includes("1) arrival"));
  assert.ok(joined.includes("BANS"));
});
