import type { ProviderAdapter } from "./ProviderAdapter.js";

export const openrouterAdapter: ProviderAdapter = {
  id: "openrouter",
  async listModels() { return ["openrouter/auto"]; },
  async complete(opts) {
    const fake = "[openrouter stub] implement API call";
    if (opts.stream && opts.onToken) opts.onToken(fake);
    return { text: fake };
  }
};
