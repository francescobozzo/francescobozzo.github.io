import { getCollection } from 'astro:content';

/** All blog posts, newest first. */
export async function getPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** "July 12, 2025" (or "Jul 12, 2025" with month = 'short'). */
export function formatDate(date: Date, month: 'long' | 'short' = 'long') {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month,
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** Estimated reading time in minutes, at 200 words per minute. */
export function readingTime(text = '') {
  return Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));
}
