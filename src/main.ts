import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { i18n } from './locales';
import "./services/api/AxiosInterceptor";

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n);

app.mount('#app');
