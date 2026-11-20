import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';

/** @param {import('astro').APIContext} context */
export async function GET(context) {
  const posts = await getPosts();

  return rss({
    title: 'Francesco Bozzo - Blog',
    description: 'Thoughts on software, math, and everything in between.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
