import { createRouter, createWebHistory } from 'vue-router';
import { VUE_BASE_PATH } from '@/constants';
import { publicRoutes } from './publicRoutes';
import { privateRoutesGuard } from './guards';

const router = createRouter({
  history: createWebHistory(VUE_BASE_PATH),
  routes: [
    ...publicRoutes,
    ...privateRoutesGuard,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/exception/NotFound.vue')
    }
  ]
});

export default router;
