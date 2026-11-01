import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const conseils = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conseils' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['Éducation', 'Comportement', 'Chiot', 'Quotidien']),
      cover: image(),
      coverAlt: z.string(),
      readingTime: z.number(),
      order: z.number(),
    }),
});

export const collections = { conseils };
