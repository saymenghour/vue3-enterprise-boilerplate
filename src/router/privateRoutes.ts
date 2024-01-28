import type { RouteRecordRaw } from 'vue-router';

import { AppRoute } from '@/constants/Route';
import { userManagementRoutes } from '@/modules/user-management/router';

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: AppRoute.Dashboard.path,
    name: AppRoute.Dashboard.name,
    component: () => import('@/modules/dashboard/DashboardView.vue'),
    alias: ['/']
  },
  ...userManagementRoutes
];
