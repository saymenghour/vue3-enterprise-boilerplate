import { useMutation, useQuery } from "@tanstack/vue-query";
import router from "@/router";
import { useNotification } from "@/composables";
import { AppRoute } from "@/constants";
import { createRoleApi, fetchRolesApi, fetchRoleByIdApi, updateRoleApi } from "./roleApi";
import type { CreateRoleForm, EditRoleForm } from "./roleType";

export function useFetchRoles() {
  return useQuery({
    queryKey: ['fetchRoles'],
    queryFn: fetchRolesApi
  });
}

export function useFetchRoleById(id: string) {
  return useQuery({
    queryKey: ['fetchRoleById', id],
    queryFn: () => fetchRoleByIdApi(id)
  });
}

export function useFetchRolePermissionIdsById(id: string) {
  return useQuery({
    queryKey: ['fetchRolePermissionIdsById', id],
    queryFn: () => fetchRoleByIdApi(id),
    select(data) {
      const { permissions, ...rest } = data ?? {};
      return {
        ...rest,
        permissionIds: permissions?.map((p) => p.id) ?? []
      } as EditRoleForm;
    },
  });
}

export function useCreateRole() {
  const { success } = useNotification();
  return useMutation({
    mutationFn: (values: CreateRoleForm) => createRoleApi(values),
    onSuccess: (data) => {
      success(data?.message);
      router.push({ name: AppRoute.Role.name });
    }
  });
}

export function useUpdateRole(id: string) {
  const { success } = useNotification();
  return useMutation({
    mutationFn: (values: EditRoleForm) => updateRoleApi(values, id),
    onSuccess: (data) => {
      success(data?.message);
      router.push({ name: AppRoute.Role.name });
    }
  });
}