import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
	const projects = await getCollection("projects");

	return rss({
		title: "gopoma's portfolio",
		description: "Gustavo Ordoño Poma [gopoma]",
		site: context.site,
		items: projects.map((project) => {
			const { title, description } = project.data;

			return {
				title,
				pubDate: new Date("2022-5-13"),
				description,
				link: `/projects/${project.slug}`
			};
		})
	});
}
