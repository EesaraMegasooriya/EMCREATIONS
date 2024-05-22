import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/EMCreations/', // Replace 'EMCreations' with your repo name
  plugins: [react()],
});
