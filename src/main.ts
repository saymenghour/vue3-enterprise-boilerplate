import '@/assets/styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from "vue-query";

import App from './App.vue';
import router from './router';
import { i18n } from './locales';
import "./services/api/AxiosInterceptor";

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import 'element-plus/theme-chalk/dark/css-vars.css';

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(VueQueryPlugin)
  .use(ElementPlus);

app.mount('#app');
