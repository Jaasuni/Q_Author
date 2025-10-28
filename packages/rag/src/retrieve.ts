export async function retrieve(query: string, docs: string[]): Promise<string[]> {
  return docs.slice(0, 3);
}
