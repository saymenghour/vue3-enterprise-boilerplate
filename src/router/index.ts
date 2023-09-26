import { createRouter, createWebHistory } from 'vue-router';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';

const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_PATH),
  routes: [
    ...publicRoutes,
    ...privateRoutes
  ]
});

export default router;
