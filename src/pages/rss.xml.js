import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/** @param {import('astro').APIContext} context */
export async function GET(context) {
  const blog = await getCollection('blog');

  const posts = blog
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      updatedDate: post.data.updatedDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    }));

  return rss({
    title: 'Francesco Bozzo - Blog',
    description: 'Thoughts on software, math, and everything in between.',
    site: context.site,
    items: posts,
    customData: `<language>en-us</language>`,
  });
}
