import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Design', 'Notes', 'Culture', 'Technology']),
    tags: z.array(z.string()).default([]),
    coverImage: z.url(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readTimeMinutes: z.number().int().positive(),
    author: z.object({ name: z.string(), role: z.string(), avatar: z.url() }),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };