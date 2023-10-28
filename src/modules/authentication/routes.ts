import { RouteName } from "@/constants/Route";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: RouteName.Login,
    component: () => import("@/modules/authentication/LoginView.vue"),
  }
];

export default routes;