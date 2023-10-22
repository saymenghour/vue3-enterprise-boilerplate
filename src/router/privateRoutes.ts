import type { RouteRecordRaw } from "vue-router";

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/modules/dashboard/DashboardView.vue"),
  },
];