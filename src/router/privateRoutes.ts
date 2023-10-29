import { RouteName } from "@/constants/Route";
import type { RouteRecordRaw } from "vue-router";

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: RouteName.Dashboard,
    component: () => import("@/modules/dashboard/DashboardView.vue"),
    alias: ["dashboard"]
  },
];