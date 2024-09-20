import type { Permission, PermissionId } from '../resource/resourceType';

export type Role = {
  id: number;
  nameEn: string;
  nameKh: string;
  type: string;
  description?: string;
  permissions?: Permission[];
  status: string;
};

export type RoleForm = {
  nameEn: string;
  nameKh: string;
  type: string;
  description?: string;
  permission?: Record<string, PermissionId[]>;
};

export type RoleRequest = {
  nameEn: string;
  nameKh: string;
  type: string;
  description?: string;
  permissionIds?: PermissionId[];
}