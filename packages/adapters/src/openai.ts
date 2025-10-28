import type { ProviderAdapter, ChatMessage, StreamHandler } from "./ProviderAdapter.js";

export const openaiAdapter: ProviderAdapter = {
  id: "openai",
  async listModels() {
    return ["gpt-4o-mini", "gpt-4.1-mini", "gpt-4.1"];
  },
  async complete({ model, messages, temperature = 0.8, topP = 0.9, presencePenalty = 0.2, maxTokens = 800, stream = false, onToken, seed }) {
    // TODO: implement real OpenAI call with streaming
    const fake = "[openai stub] implement API call";
    if (stream && onToken) onToken(fake);
    return { text: fake };
  }
};
