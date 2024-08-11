import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import { defineConfig, loadEnv, UserConfig } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: UserConfig) => {
  const env = loadEnv(mode ?? 'development', process.cwd(), '');

  let basePath: string = env.VUE_BASE_PATH;
  if (basePath && basePath.endsWith('/')) {
    basePath = basePath.slice(0, -1);
  }
  const proxy: Record<string, string> = {
    api: basePath + '/api',
  };

  return {
    base: basePath,
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    define: {
      'process.env': env,
    },
    server: {
      host: true,
      proxy: {
        [proxy.api]: {
          target: env.BASE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(basePath, ''),
        },
      },
    },
  };
});
