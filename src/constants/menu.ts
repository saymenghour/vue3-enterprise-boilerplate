import { AppRoute, Permission } from '@/constants';
import type { MenuItem } from '@/types/menu';
import { LayoutDashboard, UserCog } from 'lucide-vue-next';

export const menus: MenuItem[] = [
  {
    to: AppRoute.Dashboard.path,
    label: 'dashboard',
    icon: LayoutDashboard
  },
  {
    to: '/user-management',
    label: 'userManagement',
    icon: UserCog,
    subMenus: [
      {
        to: AppRoute.User.path,
        label: 'user.label',
        authorities: [
          Permission.CREATE_USER,
          Permission.EDIT_USER,
          Permission.VIEW_USER_LISTING,
          Permission.VIEW_USER_DETAILS
        ]
      },
      {
        to: AppRoute.Role.path,
        label: 'role.label',
        authorities: [
          Permission.CREATE_ROLE,
          Permission.EDIT_ROLE,
          Permission.VIEW_ROLE_LISTING,
          Permission.VIEW_ROLE_DETAILS
        ]
      }
    ]
  },
];
