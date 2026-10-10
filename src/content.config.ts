import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guidesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(['dnv', 'afm', 'tax', 'bookkeeping', 'lifestyle']),
    image: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    translationOf: z.string().optional(), // slug of the German version (guides-de)
  })
});

const guidesDeCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides-de" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(['dnv', 'afm', 'tax', 'bookkeeping', 'lifestyle']),
    image: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    translationOf: z.string().optional(), // slug of the English version (guides)
  })
});

export const collections = {
  'guides': guidesCollection,
  'guides-de': guidesDeCollection,
};
