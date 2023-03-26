import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/OnlineGrowPro.in-Website/',
  build: {
    outDir: './build',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 2000,
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
  },
  rollupOptions: {
    preserveEntrySignatures: 'allow-extension'
  }
}
});
