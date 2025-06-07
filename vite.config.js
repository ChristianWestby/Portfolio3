import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Brukes kun hvis "type": "module" er satt i package.json
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@projects': path.resolve(__dirname, 'src/assets/images/projects'),
    },
  },
});