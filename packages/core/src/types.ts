export type Role = "system" | "user" | "assistant";

export type ChatMessage = {
  role: Role;
  content: string;
};

export type SceneMeta = {
  sceneGoal?: string;
  pov?: string;
  tense?: "past" | "present";
  distance?: "close" | "medium" | "far";
  conflict?: string;
  beats?: string[];
  styleThroughlines?: string[];
  length?: string;
  bans?: string[];
};

export type ComposeOptions = {
  voiceCard?: string;
  sceneMeta?: SceneMeta;
  continuity?: string;
  fewshots?: { role: "assistant"; content: string }[];
  raw?: boolean;
};
