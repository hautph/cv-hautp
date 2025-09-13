import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import vercelStatic from '@astrojs/vercel';

// Dynamic adapter selection based on environment
const getAdapter = () => {
	const deployTarget = process.env.DEPLOY_TARGET;

	switch (deployTarget) {
		case 'vercel':
			return vercelStatic();
		case 'netlify':
			return netlify();
		default:
			// Default to netlify if no target specified
			return netlify();
	}
};

// https://astro.build/config
export default defineConfig({
	site: 'https://cv.cungnhauhoc.net',
	integrations: [mdx(), partytown(), robotsTxt()],

	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: 'cv.cungnhauhoc.net'
				}
			]
		]
	},

	vite: {
		plugins: [tailwindcss()]
	},
	output: 'static',
	adapter: getAdapter()
});
