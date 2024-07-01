import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'; // type definations for build files
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] }), tsconfigPaths()],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    },
    lib: {
      entry: [resolve(__dirname, 'lib/main.ts'), resolve(__dirname, 'lib/page.ts')],
      formats: ['es'],
      name: 'ui-library'
    }
  }
});
