import { AppRoute, Permission } from '@/constants';
import type { MenuItem } from '@/types/menu';

export const menus: MenuItem[] = [
  {
    key: AppRoute.Dashboard.path,
    label: 'label.dashboard.title'
  },
  {
    key: '/user-management',
    label: 'label.userManagement.title',
    subMenus: [
      {
        key: AppRoute.User.path,
        label: 'label.userManagement.user.title',
        authorities: [Permission.CREATE_USER, Permission.EDIT_USER, Permission.VIEW_USER_LISTING, Permission.VIEW_USER_DETAILS]
      },
      {
        key: AppRoute.Role.path,
        label: 'label.userManagement.role.title',
        authorities: [Permission.CREATE_ROLE, Permission.EDIT_ROLE, Permission.VIEW_ROLE_LISTING, Permission.VIEW_ROLE_DETAILS]
      }
    ]
  }
];
