export const PASSES = {
  outline: { temperature: 0.5, maxTokens: 250 },
  draft:   { temperature: 0.85, topP: 0.9, maxTokens: 1200 },
  tighten: { temperature: 0.6,  maxTokens: 600 }
} as const;
