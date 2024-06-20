import { reactive, watch } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import router from "@/router";
import { useNotification } from "@/composables";
import { AppRoute } from "@/constants";
import { createRoleApi, fetchRolesApi, fetchRolesDetailsApi, fetchRolesEditApi, updateRoleApi } from "./roleApi";
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
    queryFn: () => fetchRolesDetailsApi(id)
  });
}

export function useFetchRoleEditById(id: string) {
  return useQuery({
    queryKey: ['fetchRoleEditById', id],
    queryFn: () => fetchRolesEditApi(id)
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