import type { ChatMessage, ComposeOptions } from "./types.js";

const RAW_SYSTEM = `You are a fiction writing engine. Stay in third-person past tense unless told otherwise. Output only prose.`;

export function composeRawPrompt(sceneBrief: string): ChatMessage[] {
  return [
    { role: "system", content: RAW_SYSTEM },
    { role: "user", content: sceneBrief.trim() }
  ];
}

export function composeGuidedPrompt(opts: ComposeOptions): ChatMessage[] {
  const { voiceCard = "", sceneMeta, continuity = "", fewshots = [] } = opts;
  const parts: ChatMessage[] = [];

  const system = [
    `You are a fiction author matching the attached Voice Card.`,
    `Prioritize rhythm, concrete images, subtext. Avoid clichés and moralizing.`,
    `Output only prose.`
  ].join(" ");
  parts.push({ role: "system", content: system });

  if (voiceCard) {
    parts.push({ role: "user", content: `VOICE CARD:\n${voiceCard}` });
  }

  if (continuity) {
    parts.push({ role: "user", content: `CONTINUITY SEED (recent context):\n${continuity}` });
  }

  for (const fs of fewshots) {
    parts.push(fs);
  }

  const metaLines: string[] = [];
  if (sceneMeta?.sceneGoal) metaLines.push(`[SCENE GOAL]: ${sceneMeta.sceneGoal}`);
  if (sceneMeta?.pov) metaLines.push(`[POV]: ${sceneMeta.pov}`);
  if (sceneMeta?.tense) metaLines.push(`[TENSE]: ${sceneMeta.tense}`);
  if (sceneMeta?.distance) metaLines.push(`[DISTANCE]: ${sceneMeta.distance}`);
  if (sceneMeta?.conflict) metaLines.push(`[CONFLICT]: ${sceneMeta.conflict}`);
  if (sceneMeta?.beats?.length) metaLines.push(`[BEATS]: ${sceneMeta.beats.map((b,i)=>`${i+1}) ${b}`).join(" ")}`);
  if (sceneMeta?.styleThroughlines?.length) metaLines.push(`[STYLE THROUGHLINES]: ${sceneMeta.styleThroughlines.join(", ")}`);
  if (sceneMeta?.length) metaLines.push(`[LENGTH]: ${sceneMeta.length}`);
  if (sceneMeta?.bans?.length) metaLines.push(`[BANS]: ${sceneMeta.bans.join(", ")}`);

  parts.push({ role: "user", content: metaLines.join("\n") });

  return parts;
}
