import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // custom domain (mindsmithconsulting.org) serves from root
  server: { host: true, port: 5173 },
});
