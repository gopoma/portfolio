import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	site: "https://www.gopomaagosto2022.cf",
	integrations: [
		mdx(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp"
		})
	]
});
