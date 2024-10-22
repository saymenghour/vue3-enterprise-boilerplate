import type { RouteRecordRaw } from 'vue-router';

import { AppRoute } from '@/constants';
import { getAccessToken } from '@/services/localStorage';

const routes: RouteRecordRaw[] = [
  {
    path: AppRoute.Login.path,
    name: AppRoute.Login.name,
    beforeEnter: (to, from, next) => {
      if (!getAccessToken()) {
        next();
      } else {
        next({ path: from.fullPath, replace: true });
      }
    },
    component: () => import('@/modules/auth/LoginView.vue')
  }
];

export default routes;
