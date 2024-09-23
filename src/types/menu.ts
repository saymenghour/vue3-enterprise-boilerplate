export interface MenuItem {
  key?: string;
  to: string;
  label: string;
  icon?: any;
  authorities?: string[];
  subMenus?: MenuItem[];
  type?: 'group';
}
