import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react() ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.js',
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: [ 'text', 'json', 'html' ],
    },
  }
} );
