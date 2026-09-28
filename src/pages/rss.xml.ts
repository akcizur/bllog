import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPosts } from '@/lib/content';
export async function GET(context){const posts=sortPosts(await getCollection('blog'));return rss({title:'bllog',description:'Quiet ideas, clearly written.',site:context.site,items:posts.map(post=>({title:post.data.title,description:post.data.description,pubDate:post.data.pubDate,categories:[post.data.category,...post.data.tags],link:`/journal/${post.id}/`}))});}