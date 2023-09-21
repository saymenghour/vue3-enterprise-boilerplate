import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: UserConfig) => {
  const env = loadEnv(mode ?? "development", process.cwd(), "");

  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    define: {
      "process.env": env,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
