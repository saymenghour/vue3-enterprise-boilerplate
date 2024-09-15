import { AppRoute } from '@/constants';
import router from '@/router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { getPermissionIdsFromValuesToPermissionIds, getResourcePermissionIds } from '../resource/resourceUtils';
import { createRoleApi, fetchRoleAutocompleteApi, fetchRoleByIdApi, fetchRolesApi, updateRoleApi } from './roleApi';
import type { RoleForm } from './roleType';

export function getFetchRolesQueryKey() {
  return ['fetchRoles'];
}

export function getFetchRoleAutocompleteQueryKey() {
  return ['fetchRoleAutocomplete'];
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

export function useFetchRoleAutocomplete() {
  return useQuery({
    queryKey: getFetchRoleAutocompleteQueryKey(),
    queryFn: ({ signal }) => fetchRoleAutocompleteApi(signal)
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
    onSuccess: () => {
      router.push({ name: AppRoute.Role.name });
    }
  });
}

export function useUpdateRole(id: string) {
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
    onSuccess: () => {
      router.push({ name: AppRoute.Role.name });
    }
  });
}
