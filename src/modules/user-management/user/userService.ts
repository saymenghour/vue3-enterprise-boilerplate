import { AppRoute } from '@/constants';
import router from '@/router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { createUserApi, fetchUserByIdApi, fetchUsersApi, updateUserApi } from './userApi';
import type { CreateUserForm, EditUserForm } from './userType';

export function getFetchUsersQueryKey() {
  return ['fetchUsers'];
}

export function useFetchUsers() {
  return useQuery({
    queryKey: getFetchUsersQueryKey(),
    queryFn: ({ signal }) => fetchUsersApi(signal)
  });
}

export function getFetchUserByIdQueryKey(id: string) {
  if (!id) return ['fetchUserById'];
  return ['fetchUserById', id];
}

export function useFetchUserById(id: string) {
  return useQuery({
    queryKey: getFetchUserByIdQueryKey(id),
    queryFn: ({ signal }) => fetchUserByIdApi(id, signal),
  });
}

export function useFetchFormUserById(id: string) {
  return useQuery({
    queryKey: getFetchUserByIdQueryKey(id),
    queryFn: ({ signal }) => fetchUserByIdApi(id, signal),
    select: (data) => {
      const { branch, roles, ...rest } = data;
      return {
        ...rest,
        branchCode: branch.code,
        roleIds: roles.map(role => role.id)
      };
    },
  });
}

export function useCreateUser() {
  return useMutation({
    mutationFn: (values: CreateUserForm) => createUserApi(values),
    onSuccess: () => {
      router.push({ name: AppRoute.User.name });
    }
  });
}

export function useUpdateUser(id: string) {
  return useMutation({
    mutationFn: (values: EditUserForm) => updateUserApi(values, id),
    onSuccess: () => {
      router.push({ name: AppRoute.User.name });
    }
  });
}
