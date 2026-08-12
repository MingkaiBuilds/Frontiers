import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const reference = z.object({
  title: z.string(),
  url: z.url(),
  publisher: z.string().optional(),
});

// Open problems belong to the report that establishes their technical context.
// The registry page aggregates these objects without maintaining a second CMS.
const openProblem = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string(),
  question: z.string(),
  status: z.enum(['Open', 'In progress', 'Evidence found', 'Resolved']).default('Open'),
  disciplines: z.array(z.string()).default([]),
  nextStep: z.string(),
});

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
    lastReviewed: z.coerce.date().optional(),
    readingTime: z.string(),
    reportNo: z.string(),
    author: z.string().default('Physical Extremes'),
    revision: z.string().default('1.0'),
    difficulty: z.enum(['Foundational', 'Intermediate', 'Advanced']).default('Advanced'),
    evidenceStatus: z.enum([
      'Hypothesis',
      'Modeled',
      'Bench-tested',
      'Field-demonstrated',
      'Industrialized',
    ]).default('Modeled'),
    readinessLevel: z.number().int().min(1).max(9).default(1),
    reviewStatus: z.enum([
      'Author reviewed',
      'External review',
      'Community reviewed',
    ]).default('Author reviewed'),
    references: z.array(reference).default([]),
    openProblems: z.array(openProblem).default([]),
    // IDs use the post's path beneath `src/content/blog/`, without `.md`.
    // Example: `deep-ocean/pressure-housings-are-not-the-system`.
    prerequisites: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
