import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { sortPosts } from '@/lib/content';

export const GET: APIRoute = async ({ site }) => {
  const posts = sortPosts(await getCollection('blog'));

  return rss({
    title: 'bllog',
    description: 'Quiet ideas, clearly written.',
    site: site ?? new URL('https://akcizur.github.io'),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: [post.data.category, ...post.data.tags],
      link: `/journal/${post.id}/`,
    })),
  });
};
