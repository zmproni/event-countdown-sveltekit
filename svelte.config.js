<<<<<<< HEAD
import adapter from '@sveltejs/adapter-node';
=======
import adapter from '@sveltejs/adapter-auto';
>>>>>>> b853612 (typescript conversion)
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
<<<<<<< HEAD
		adapter: adapter({ out: 'build' }),
		alias: {
			'$db': './src/db'
		},
	},
	preprocess: vitePreprocess()
=======
		adapter: adapter(),
		alias: {
			'$db': './src/db',
			'$types': './src/types',
			'$stores': './src/stores',
		}
	},
	preprocess: vitePreprocess(),
>>>>>>> b853612 (typescript conversion)
};

export default config;
