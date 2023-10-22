import { createRouter, createWebHistory } from 'vue-router';
import { publicRoutes } from './publicRoutes';
import { privateRoutesGuard } from './guards';

const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_PATH),
  routes: [
    ...publicRoutes,
    ...privateRoutesGuard,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import("@/modules/exception/NotFound.vue"),
    }
  ]
});

export default router;
