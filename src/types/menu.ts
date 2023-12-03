export interface MenuItemType {
	key: string;
	label: string;
	icon?: any;
	authority?: string;
	subMenus?: MenuItemType[];
	type?: "group";
}
