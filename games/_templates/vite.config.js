import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: '.',
    emptyOutDir: false,
    rollupOptions: {
      input: 'index.html'
    }
  }
});