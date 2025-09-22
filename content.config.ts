import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        date: z.string(),
        featured: z.boolean().optional(),
      })
    })
  }
})
