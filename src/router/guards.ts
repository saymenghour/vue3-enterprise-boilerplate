import { AppRoute } from '@/constants';
import { getAccessToken } from '@/services/localStorage';
import type { RouteLocationNormalized } from 'vue-router';

export function requiresAuth(to: RouteLocationNormalized) {
  if (to.meta.requiresAuth) {
    // see more https://router.vuejs.org/guide/advanced/meta.html
    // see more https://router.vuejs.org/guide/advanced/navigation-guards.html
    if (!getAccessToken()) {
      return { name: AppRoute.Login.name, query: { redirect: to.fullPath } };
    }
  }
}
