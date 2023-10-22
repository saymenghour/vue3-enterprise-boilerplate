import type { RouteRecordRaw } from "vue-router";
import authenticationRoutes from "@/modules/authentication/routes";

export const publicRoutes: RouteRecordRaw[] = [
  ...authenticationRoutes
];