import type { Permission, PermissionId } from './resourceType';

export function getResourcePermissionIds(permissions: Permission[] | undefined) {
  const permission: Record<string, PermissionId[]> = {};
  permissions?.forEach(p => {
    const resource = p.code.split(':')[0].toUpperCase();
    permission[resource] = [...(permission[resource] ?? []), p.code];
  });
  console.log(permissions);
  return permission;
}

export function getPermissionIdsFromValuesToPermissionIds(permissionFormValues: Record<string, PermissionId[]> | undefined) {
  const copy = { ...permissionFormValues };
  const permissionIds: PermissionId[] = [];
  Object.keys(copy).forEach(resource => {
    permissionIds.concat(copy[resource]);
  });
  return permissionIds;
}