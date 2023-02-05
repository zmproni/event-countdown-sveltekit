import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
<<<<<<< HEAD
	plugins: [sveltekit()]
=======
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
>>>>>>> b853612 (typescript conversion)
};

export default config;
