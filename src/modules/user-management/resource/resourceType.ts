export type Permission = {
  id: number;
  code: string;
  nameEn: string;
  nameKh: string;
  description: string;
};

export type PermissionId = string | number;

export type Resource = {
  id: number;
  code: string;
  nameEn: string;
  nameKh: string;
  permissions: Permission[];
}