import type { ProviderAdapter } from "./ProviderAdapter.js";

export const geminiAdapter: ProviderAdapter = {
  id: "gemini",
  async listModels() { return ["gemini-1.5-pro", "gemini-1.5-flash"]; },
  async complete(opts) {
    const fake = "[gemini stub] implement API call";
    if (opts.stream && opts.onToken) opts.onToken(fake);
    return { text: fake };
  }
};
