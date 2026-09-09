import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  logLevel: 'warn',
  resolve: {
    alias: [
      { find: '$algorithm', replacement: path.resolve(__dirname, 'src/algorithm') }
    ]
  },
  server: {
    hmr: {
      overlay: true
    }
  },
  plugins: [sveltekit(), tailwindcss()]
});
