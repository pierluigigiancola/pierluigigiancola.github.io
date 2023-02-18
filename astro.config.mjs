import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import AutoImport from 'astro-auto-import';
import { astroCodeSnippets, codeSnippetAutoImport } from './src/integrations/CodeSnippet'
// https://astro.build/config
export default defineConfig({
	site: 'https://pierluigigiancola.github.io',
	integrations: [
		AutoImport({
			imports: [
				codeSnippetAutoImport,
			],
		}),
		astroCodeSnippets(),
		mdx(),
		sitemap()],
});
