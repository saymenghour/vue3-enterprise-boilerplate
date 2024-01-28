import { createRouter, createWebHistory } from 'vue-router';

import { privateRoutesGuard } from './guards';
import { publicRoutes } from './publicRoutes';

import { VUE_BASE_PATH } from '@/constants';

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
