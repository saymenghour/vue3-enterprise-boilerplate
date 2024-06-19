export type Permission = {
  id: string;
  code: string;
  nameEn: string;
  nameKh: string;
  description: string;
}

export type Role = {
  id: string;
  nameEn: string;
  nameKh: string;
  type: string;
  description?: string;
  permissions?: Permission[];
  status: string;
}

export type CreateRoleForm = {
  nameEn: string;
  nameKh: string;
  type: string;
  description?: string;
  permissions?: number[];
}

export type EditRoleForm = CreateRoleForm;