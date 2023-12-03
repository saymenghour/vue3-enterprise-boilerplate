import type { MenuItemType } from "@/types/menu";

export const menus: MenuItemType[] = [
  {
    key: "/dashboard",
    label: "label.dashboard.title"
  },
  {
    key: "/user-management",
    label: "label.userManagement.title",
    subMenus: [
      {
        key: "/user-management/user",
        label: "label.userManagement.user.title"
      },
      {
        key: "/user-management/role",
        label: "label.userManagement.role.title"
      }
    ]
  }
];
