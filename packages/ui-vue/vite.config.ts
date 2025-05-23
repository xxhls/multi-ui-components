import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';


const externals = ['vue'];

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './components/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: [...externals],
      output: {
        globals: {
          'vue': 'Vue',
        },
      },
    },
    outDir: 'dist',
  },
  resolve: {
    alias: {
      "types": resolve(__dirname, './_types'),
      "utils": resolve(__dirname, './_utils'),
    },
    dedupe: ['vue'],
  },
  optimizeDeps: {
    include: [...externals],
  },
});
