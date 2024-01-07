import { AppRoute } from "@/constants/Route";
import type { RouteRecordRaw } from "vue-router";

export const userManagementRoutes: RouteRecordRaw[] = [
  {
    path: AppRoute.User.path,
    name: AppRoute.User.name,
    component: () => import("@/modules/user-management/user/UserView.vue"),
  },
  {
    path: AppRoute.Role.path,
    name: AppRoute.Role.name,
    component: () => import("@/modules/user-management/role/RoleView.vue"),
  },
];