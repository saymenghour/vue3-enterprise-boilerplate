import { AppRoute } from '@/constants';
import router from '@/router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { createUserApi, fetchUserByIdApi, fetchUsersApi, updateUserApi } from './userApi';
import type { CreateUserForm, EditUserForm } from './userType';

export function getFetchUsersQueryKey() {
  return ['fetchUsers'];
}

export function getFetchUserByIdQueryKey(id: string) {
  if (!id) return ['fetchUserById'];
  return ['fetchUserById', id];
}

export function useFetchUsers() {
  return useQuery({
    queryKey: getFetchUsersQueryKey(),
    queryFn: ({ signal }) => fetchUsersApi(signal)
  });
}

export function useFetchUserById(id: string) {
  return useQuery({
    queryKey: getFetchUserByIdQueryKey(id),
    queryFn: ({ signal }) => fetchUserByIdApi(id, signal)
  });
}

export function useCreateUser() {
  // const { success } = useNotification();
  return useMutation({
    mutationFn: (values: CreateUserForm) => createUserApi(values),
    onSuccess: (data) => {
      // success(data?.message);
      router.push({ name: AppRoute.User.name });
    }
  });
}

export function useUpdateUser(id: string) {
  // const { success } = useNotification();
  return useMutation({
    mutationFn: (values: EditUserForm) => updateUserApi(values, id),
    onSuccess: (data) => {
      // success(data?.message);
      router.push({ name: AppRoute.User.name });
    }
  });
}
