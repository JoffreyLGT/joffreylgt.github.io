import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			categories: z.array(z.string()),
			tags: z.array(z.string()).optional(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	blog: defineCollection({
		schema: ({ image }) => z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			categories: z.array(z.string()),
			tags:z.array(z.string()).optional(),
			img: image().refine((img) => img.width >= 1080, {
				message: "Cover image must be at least 1080 pixels wide!",
			}),
			img_alt: z.string(),
		}),
	})
};
