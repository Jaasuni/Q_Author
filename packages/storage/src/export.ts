export async function exportMarkdown(projectDir: string) {
  // TODO: walk scenes and zip output; stub for now.
  return { ok: true, path: projectDir };
}

export async function exportDocx(projectDir: string) {
  return { ok: false, error: "Pandoc not found in PATH; DOCX export is disabled in this build." };
}

export async function exportEpub(projectDir: string) {
  return { ok: false, error: "Pandoc not found in PATH; EPUB export is disabled in this build." };
}
