import type { RouteRecordRaw } from "vue-router";
import { getAccessToken } from "@/services/LocalStorage";
import { AppRoute } from "@/constants/Route";
import { privateRoutes } from "./privateRoutes";
import PrivateOutlet from "@/components/PrivateOutlet/PrivateOutlet.vue";

export const privateRoutesGuard: RouteRecordRaw[] = [
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      // // see more https://router.vuejs.org/guide/advanced/meta.html
      // // see more https://router.vuejs.org/guide/advanced/navigation-guards.html
      const login = { name: AppRoute.Login.name, query: { redirect: to.fullPath } };
      if (!getAccessToken()) {
        next(login);
      } else {
        const userPermissions: string[] = []; // ["READ:DASHBOARD"]

        const permissions = to.meta?.permissions;
        if (!permissions || !permissions.length) {
          next();
        } else {
          // This logic check only meta.permissions is not empty array and redirect to login if user don't have permission
          permissions.forEach((routePermission) => {
            const hasPermission = userPermissions.includes(routePermission);
            hasPermission ? next() : next(login);
          });
        }
      }
    },
    component: PrivateOutlet,
    children: privateRoutes
  },
];