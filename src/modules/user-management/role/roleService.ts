import { useNotification } from '@/composables';
import { AppRoute } from '@/constants';
import router from '@/router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { getPermissionIdsFromValuesToPermissionIds, getResourcePermissionIds } from '../resource/resourceUtils';
import { createRoleApi, fetchRoleByIdApi, fetchRolesApi, updateRoleApi } from './roleApi';
import type { RoleForm } from './roleType';

export function getFetchRolesQueryKey() {
  return ['fetchRoles'];
}

export function getFetchRoleByIdQueryKey(id: string) {
  if (!id) return ['fetchRoleById'];
  return ['fetchRoleById', id];
}

export function getFetchRolePermissionIdsById(id: string) {
  if (!id) return ['fetchRolePermissionIdsById'];
  return ['fetchRolePermissionIdsById', id];
}

export function useFetchRoles() {
  return useQuery({
    queryKey: getFetchRolesQueryKey(),
    queryFn: ({ signal }) => fetchRolesApi(signal)
  });
}

export function useFetchRoleById(id: string) {
  return useQuery({
    queryKey: getFetchRoleByIdQueryKey(id),
    queryFn: ({ signal }) => fetchRoleByIdApi(id, signal)
  });
}

export function useFetchRolePermissionIdsById(id: string) {
  return useQuery({
    queryKey: getFetchRolePermissionIdsById(id),
    queryFn: ({ signal }) => fetchRoleByIdApi(id, signal),
    select(data): RoleForm {
      return {
        nameEn: data?.nameEn ?? '',
        nameKh: data?.nameKh ?? '',
        type: data?.type ?? '',
        description: data?.description,
        permission: getResourcePermissionIds(data?.permissions)
      };
    }
  });
}

export function useCreateRole() {
  const { success } = useNotification();
  return useMutation({
    mutationFn: (formValues: RoleForm) => {
      return createRoleApi({
        nameEn: formValues.nameEn,
        nameKh: formValues.nameKh,
        type: formValues.type,
        description: formValues.description,
        permissionIds: getPermissionIdsFromValuesToPermissionIds(formValues.permission)
      });
    },
    onSuccess: (data) => {
      success(data?.message);
      router.push({ name: AppRoute.Role.name });
    }
  });
}

export function useUpdateRole(id: string) {
  const { success } = useNotification();
  return useMutation({
    mutationFn: (formValues: RoleForm) => {
      return updateRoleApi({
        nameEn: formValues.nameEn,
        nameKh: formValues.nameKh,
        type: formValues.type,
        description: formValues.description,
        permissionIds: getPermissionIdsFromValuesToPermissionIds(formValues.permission)
      }, id);
    },
    onSuccess: (data) => {
      success(data?.message);
      router.push({ name: AppRoute.Role.name });
    }
  });
}
