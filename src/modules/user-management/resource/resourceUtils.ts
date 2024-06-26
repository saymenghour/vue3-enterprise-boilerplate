import type { Permission, PermissionId } from './resourceType';

export function getResourcePermissionIds(permissions: Permission[] | undefined): Record<string, PermissionId[]> {
  const permission: Record<string, PermissionId[]> = {};
  permissions?.forEach(p => {
    const resource = p.code.split(':')[0].toUpperCase();
    permission[resource] = [...(permission[resource] ?? []), p.code];
  });
  return permission;
}

export function getPermissionIdsFromValuesToPermissionIds(permissionFormValues: Record<string, PermissionId[]> | undefined): PermissionId[] {
  const copy = { ...permissionFormValues };
  let permissionIds: PermissionId[] = [];
  Object.keys(copy).forEach(resource => {
    permissionIds = [...permissionIds, ...copy[resource]];
  });
  return permissionIds;
}