import { resolve } from 'path';
import { defineConfig } from 'vite';
import injectVersion from './RollupPluginInjectVersion';
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'configcat-vue-ts',
      fileName: 'configcat-vue-ts',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      }
    }
  },
  plugins: [injectVersion(), vue(), dts()],
});
