import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/api': {
        target: 'http://test-three.linkon.me:8080',
        // target: 'http://139.9.239.118:9997',
        changeOrigin: true,
        pathRewrite: { "^/api": "/api" }//将/api开头替换为/api

      }
    },
  },
  plugins: [vue()]
})
