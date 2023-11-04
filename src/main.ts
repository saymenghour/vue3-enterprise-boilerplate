import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from "vue-query";

import App from './App.vue';
import router from './router';
import { i18n } from './locales';
import "./services/api/AxiosInterceptor";

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(VueQueryPlugin);

app.mount('#app');
