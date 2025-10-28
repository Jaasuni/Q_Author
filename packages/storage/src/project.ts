import fs from "fs";
import path from "path";

export type ProjectMeta = {
  title: string;
  created: string;
  model?: string;
};

export function createProject(dir: string, title: string) {
  fs.mkdirSync(dir, { recursive: true });
  const meta: ProjectMeta = { title, created: new Date().toISOString() };
  fs.writeFileSync(path.join(dir, "project.json"), JSON.stringify(meta, null, 2), "utf-8");
  fs.writeFileSync(path.join(dir, "voice.md"), DEFAULT_VOICE, "utf-8");
  fs.writeFileSync(path.join(dir, "lore.md"), "# Lore\n", "utf-8");
  fs.writeFileSync(path.join(dir, "characters.md"), "# Characters\n", "utf-8");
  fs.mkdirSync(path.join(dir, "scenes"), { recursive: true });
  fs.mkdirSync(path.join(dir, "snapshots"), { recursive: true });
}

export function snapshot(dir: string) {
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const snapDir = path.join(dir, "snapshots", ts);
  fs.mkdirSync(snapDir, { recursive: true });
  for (const f of ["project.json", "voice.md", "lore.md", "characters.md"]) {
    const src = path.join(dir, f);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(snapDir, f));
  }
}

export function saveScene(dir: string, file: string, content: string) {
  fs.writeFileSync(path.join(dir, "scenes", file), content, "utf-8");
}

export function loadScene(dir: string, file: string) {
  return fs.readFileSync(path.join(dir, "scenes", file), "utf-8");
}

const DEFAULT_VOICE = `CADENCE: 16–22 word average; every third paragraph ≤10 words.
DICTION: concrete, tactile verbs; avoid “very”, “suddenly”, “seems”.
TONE: wry warmth, grounded wonder; no moralizing.
MICRO-MOVES:
- Image → subtext turn on final clause.
- Sensory anchor within first 2 sentences.
- Dialogue trims tags; action beats carry tone.
`;
