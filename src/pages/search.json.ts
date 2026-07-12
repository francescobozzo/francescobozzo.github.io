import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');

  const data = posts.map((post) => ({
    id: post.id,
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate.toISOString(),
    tags: post.data.tags,
    body: post.body,
    url: `/blog/${post.id}/`,
  }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
