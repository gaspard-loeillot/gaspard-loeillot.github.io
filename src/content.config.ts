import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Essays: long-form writing. Surfaced on the homepage (recent) and
 * on /essays/ (full archive).
 */
const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Podcasts: individual conversation episodes.
 */
const podcasts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/podcasts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    guest: z.string(),
    description: z.string(),
    audioUrl: z.string().url().optional(),
    duration: z.string().optional(), // e.g. "1:04:22"
    episodeNumber: z.number().int().nonnegative().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Projects: things Gaspard has built or is building.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    role: z.string(),
    period: z.string(), // e.g. "2025 — present"
    status: z.enum(['active', 'shipped', 'archived']).default('active'),
    url: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    order: z.number().default(0), // lower = displayed first
  }),
});

export const collections = { essays, podcasts, projects };
