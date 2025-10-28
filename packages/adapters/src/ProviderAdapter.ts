export type ChatMessage = { role: "system" | "user" | "assistant"; content: string };
export type StreamHandler = (chunk: string) => void;

export interface ProviderAdapter {
  id: string;
  listModels(): Promise<string[]>;
  complete(opts: {
    model: string;
    messages: ChatMessage[];
    temperature?: number;
    topP?: number;
    presencePenalty?: number;
    maxTokens?: number;
    stream?: boolean;
    onToken?: StreamHandler;
    seed?: number;
  }): Promise<{ text: string }>;
}
