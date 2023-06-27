// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().max(160, "For optimize SEO, please provide a description of 160 ch or less"),
    category: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(["Mysekolahkripto", "Ilham Qayyum", "J4nt4nCrypto", "John Doe"])
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blog,
};