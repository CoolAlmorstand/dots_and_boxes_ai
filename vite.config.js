import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  logLevel: 'warn',
  resolve: {
    alias: [
      { find: '$styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '$algorithm', replacement: path.resolve(__dirname, 'src/algorithm') }
    ]
  },
  server: {
    hmr: {
      overlay: true
    }
  },
  plugins: [sveltekit()]
});
