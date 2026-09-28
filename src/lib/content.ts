import type { CollectionEntry } from 'astro:content';
export type Post=CollectionEntry<'blog'>;
export function sortPosts(posts:Post[]){return [...posts].filter(p=>!p.data.draft).sort((a,b)=>b.data.pubDate.valueOf()-a.data.pubDate.valueOf());}
export function formatDate(date:Date){return new Intl.DateTimeFormat('en',{year:'numeric',month:'short',day:'numeric'}).format(date);}
export function href(path:string){const base=import.meta.env.BASE_URL.replace(/\/$/,'');if(path==='/')return `${base}/`;return `${base}${path.startsWith('/')?path:`/${path}`}`;}
export function slugify(value:string){return value.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
export function uniqueValues(posts:Post[],key:'category'|'tags'){const values=posts.flatMap(p=>key==='category'?[p.data.category]:p.data.tags);return [...new Set(values)].sort((a,b)=>a.localeCompare(b));}
export function getRelatedPosts(post:Post,posts:Post[],limit=3){return sortPosts(posts).filter(p=>p.id!==post.id&&p.data.category===post.data.category).slice(0,limit);}