import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      'import.meta.env.PHONE_EMAIL_PHONE_CLIENT_ID': JSON.stringify(env.PHONE_EMAIL_PHONE_CLIENT_ID || ''),
      'import.meta.env.PHONE_EMAIL_EMAIL_CLIENT_ID': JSON.stringify(env.PHONE_EMAIL_EMAIL_CLIENT_ID || '')
    },
    assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg'],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api')
        }
      }
    },
    build: {
      // Optimize production build using esbuild so the build works without optional terser dependency
      minify: 'esbuild',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'icons': ['lucide-react']
          }
        }
      }
    }
  }
})
