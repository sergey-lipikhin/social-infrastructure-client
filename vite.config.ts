import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
  base: '/social-infrastructure-client/',
  plugins: [
    react(),
    checker({
      typescript: true,
      // eslint: {
      //   lintCommand: 'eslint . --ext ts,tsx',
      // },
    })
  ],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  }
})
