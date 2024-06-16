import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';

import '@/assets/styles/main.css';

import '@/http/axios/interceptor';
import App from './App.vue';
import { i18n } from './locales';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
};

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(VueQueryPlugin, vueQueryPluginOptions);
app.use(ElementPlus);
app.mount('#app');
