import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$db': './src/db',
			'$types': './src/types',
			'$stores': './src/stores',
		}
	},
	preprocess: vitePreprocess(),
};

export default config;
