import type { ProviderAdapter } from "./ProviderAdapter.js";

export const ollamaAdapter: ProviderAdapter = {
  id: "ollama",
  async listModels() { return ["qwen2.5:14b", "llama3.1:8b", "phi3:medium"]; },
  async complete(opts) {
    const fake = "[ollama stub] implement API call";
    if (opts.stream && opts.onToken) opts.onToken(fake);
    return { text: fake };
  }
};
