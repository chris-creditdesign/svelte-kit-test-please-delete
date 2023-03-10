import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/svelte-kit-test-please-delete'
		}
	}
};

export default config;
