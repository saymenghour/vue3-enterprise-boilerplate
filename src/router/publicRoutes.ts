import type { RouteRecordRaw } from 'vue-router';

import authenticationRoutes from '@/modules/auth/routes';

export const publicRoutes: RouteRecordRaw[] = [...authenticationRoutes];
