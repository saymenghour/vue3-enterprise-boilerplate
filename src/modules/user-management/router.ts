import { AppRoute, Permission } from '@/constants';
import type { RouteRecordRaw } from 'vue-router';

export const userManagementRoutes: RouteRecordRaw[] = [
  {
    path: AppRoute.User.path,
    name: AppRoute.User.name,
    component: () => import('@/modules/user-management/user/pages/UserListing.vue'),
    meta: {
      requiresAuth: true,
      authorities: [
        Permission.VIEW_USER_LISTING,
      ]
    }
  },
  {
    path: AppRoute.User.addNew.path,
    name: AppRoute.User.addNew.name,
    component: () => import('@/modules/user-management/user/pages/UserCreate.vue'),
    meta: {
      requiresAuth: true,
      authorities: [
        Permission.CREATE_USER
      ]
    }
  },
  {
    path: AppRoute.User.details.path,
    name: AppRoute.User.details.name,
    component: () => import('@/modules/user-management/user/pages/UserDetails.vue'),
    meta: {
      requiresAuth: true,
      authorities: [
        Permission.VIEW_USER_DETAILS
      ]
    }
  },
  {
    path: AppRoute.User.edit.path,
    name: AppRoute.User.edit.name,
    component: () => import('@/modules/user-management/user/pages/UserEdit.vue'),
    meta: {
      requiresAuth: true,
      authorities: [
        Permission.EDIT_USER,
      ]
    }
  },
  {
    path: AppRoute.Role.path,
    name: AppRoute.Role.name,
    component: () => import('@/modules/user-management/role/pages/RoleListing.vue'),
    meta: {
      requiresAuth: true,
      authorities: [
        Permission.VIEW_ROLE_LISTING,
      ]
    }
  },
  {
    path: AppRoute.Role.addNew.path,
    name: AppRoute.Role.addNew.name,
    component: () => import('@/modules/user-management/role/pages/RoleCreate.vue'),
    meta: {
      requiresAuth: true,
      authorities: [
        Permission.CREATE_ROLE
      ]
    }
  },
  {
    path: AppRoute.Role.details.path,
    name: AppRoute.Role.details.name,
    component: () => import('@/modules/user-management/role/pages/RoleDetails.vue'),
    meta: {
      requiresAuth: true,
      authorities: [
        Permission.VIEW_ROLE_DETAILS
      ]
    }
  },
  {
    path: AppRoute.Role.edit.path,
    name: AppRoute.Role.edit.name,
    component: () => import('@/modules/user-management/role/pages/RoleEdit.vue'),
    meta: {
      requiresAuth: true,
      authorities: [
        Permission.EDIT_ROLE
      ]
    }
  }
];
