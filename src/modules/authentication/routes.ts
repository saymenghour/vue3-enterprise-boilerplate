import { AppRoute } from "@/constants/Route";
import { getAccessToken } from "@/services/LocalStorage";
import type { RouteRecordRaw } from "vue-router";

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
    component: () => import("@/modules/authentication/LoginView.vue"),
  }
];

export default routes;