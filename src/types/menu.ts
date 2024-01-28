export interface MenuItem {
  key: string;
  label: string;
  icon?: any;
  authority?: string;
  subMenus?: MenuItem[];
  type?: 'group';
}
