import type { RouteRecordRaw } from "vue-router";
// import { Permission } from "@/constants/Permission";

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashboardView.vue"),
    meta: {
      // permissions: [Permission.VIEW_DASHBOARD]
    }
  }
];