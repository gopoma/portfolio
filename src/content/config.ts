import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		banner: z.string(),
		description: z.string(),
		link: z.string().optional(),
		video: z.string().optional(),
		repository: z.string().optional(),
		skills: z.array(z.string())
	})
});

export const collections = { projects };
