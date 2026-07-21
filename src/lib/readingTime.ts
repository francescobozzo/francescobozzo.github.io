/** Estimate reading time in minutes for given text. */
export function readingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / wordsPerMinute));
}
