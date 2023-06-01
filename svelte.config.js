import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: `@import 'src/lib/styles/globals.scss'`,
			outFile: {
				outFile: 'dist/styles/sveler.css'
			}
		},
		globalStyle: {
			prependData: `@import 'src/lib/styles/globals.scss'`
		},

	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
