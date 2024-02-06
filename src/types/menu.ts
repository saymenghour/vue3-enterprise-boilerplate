export interface MenuItem {
  key: string;
  label: string;
  icon?: any;
  authorities?: string[];
  subMenus?: MenuItem[];
  type?: 'group';
}
