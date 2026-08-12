import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// All reports live beside the repository and are validated at build time.
// Both Markdown and MDX are accepted, so authors can start simple and add
// interactive Astro components only when a report genuinely needs them.
const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    frontier: z.enum([
      'Deep Space',
      'Deep Ocean',
      'Deep Crust',
      'Fusion Energy',
      'Cryo-Quantum Infrastructure',
    ]),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    readingTime: z.string(),
    reportNo: z.string(),
    // IDs use the post's path beneath `src/content/blog/`, without `.md`.
    // Example: `deep-ocean/pressure-housings-are-not-the-system`.
    prerequisites: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
