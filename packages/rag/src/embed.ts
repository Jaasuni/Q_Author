export async function embed(text: string): Promise<number[]> {
  return Array(8).fill(0).map((_,i)=>Math.sin(i));
}
