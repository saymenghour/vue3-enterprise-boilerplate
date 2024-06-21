import type { RouteRecordRaw } from 'vue-router';

import { AppRoute } from '@/constants';
import { userManagementRoutes } from '@/modules/user-management/router';

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/PrivateOutlet.vue'),
    children: [
      {
        path: AppRoute.Dashboard.path,
        name: AppRoute.Dashboard.name,
        component: () => import('@/modules/dashboard/DashboardView.vue'),
        alias: ['/'],
        meta: { requiresAuth: true }
      },
      ...userManagementRoutes
    ]
  }
];
