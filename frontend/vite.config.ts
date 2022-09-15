import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"

const config: UserConfig = {
	plugins: [sveltekit()],
	optimizeDeps: {
		esbuildOptions: {
			define: {
				global: 'globalThis'
			},
			plugins: [
				NodeGlobalsPolyfillPlugin({
                    buffer: true
                })
			]
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
};

export default config;
