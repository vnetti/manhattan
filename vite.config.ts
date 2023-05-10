import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		exclude: ['js-big-decimal']
	},
	resolve: {
		alias: {
			'~@assets': '/src/assets',
			'~@components': '/src/components',
			'~@configs': '/src/configs',
			'~@hooks': '/src/hooks',
			'~@screens': '/src/components/screens',
			'~@services': '/src/services',
			'~@store': '/src/store',
			'~@styles': '/src/assets/styles',
			'~@types': '/src/types',
			'~@ui': '/src/components/ui'
		}
	}
});
