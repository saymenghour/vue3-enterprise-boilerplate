import { AppRoute } from '@/constants/Route';
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
        label: 'label.userManagement.user.title'
      },
      {
        key: AppRoute.Role.path,
        label: 'label.userManagement.role.title'
      }
    ]
  }
];
