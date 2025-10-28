import type { ProviderAdapter } from "./ProviderAdapter.js";

export const anthropicAdapter: ProviderAdapter = {
  id: "anthropic",
  async listModels() { return ["claude-3-5-sonnet", "claude-3-5-haiku"]; },
  async complete(opts) {
    const fake = "[anthropic stub] implement API call";
    if (opts.stream && opts.onToken) opts.onToken(fake);
    return { text: fake };
  }
};
