import { AppRoute, Permission } from '@/constants';
import type { MenuItem } from '@/types/menu';

export const menus: MenuItem[] = [
  {
    key: AppRoute.Dashboard.path,
    label: 'dashboard'
  },
  {
    key: '/user-management',
    label: 'userManagement',
    subMenus: [
      {
        key: AppRoute.User.path,
        label: 'user.label',
        authorities: [
          Permission.CREATE_USER,
          Permission.EDIT_USER,
          Permission.VIEW_USER_LISTING,
          Permission.VIEW_USER_DETAILS
        ]
      },
      {
        key: AppRoute.Role.path,
        label: 'role.label',
        authorities: [
          Permission.CREATE_ROLE,
          Permission.EDIT_ROLE,
          Permission.VIEW_ROLE_LISTING,
          Permission.VIEW_ROLE_DETAILS
        ]
      }
    ]
  }
];
