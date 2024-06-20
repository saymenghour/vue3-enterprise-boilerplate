import { useMutation, useQuery } from '@tanstack/vue-query';
import router from '@/router';
import { AppRoute } from '@/constants';
import { useNotification } from '@/composables';
import { createUserApi, fetchUserByIdApi, fetchUsersApi, updateUserApi } from './userApi';
import type { CreateUserForm, EditUserForm } from './userType';

export function useFetchUsers() {
  return useQuery({
    queryKey: ['fetchUsers'],
    queryFn: fetchUsersApi
  });
}

export function useFetchUserById(id: string) {
  return useQuery({
    queryKey: ['fetchUserById', id],
    queryFn: () => fetchUserByIdApi(id)
  });
}

export function useCreateUser() {
  const { success } = useNotification();
  return useMutation({
    mutationFn: (values: CreateUserForm) => createUserApi(values),
    onSuccess: (data) => {
      success(data?.message);
      router.push({ name: AppRoute.User.name });
    }
  });
}

export function useUpdateUser(id: string) {
  const { success } = useNotification();
  return useMutation({
    mutationFn: (values: EditUserForm) => updateUserApi(values, id),
    onSuccess: (data) => {
      success(data?.message);
      router.push({ name: AppRoute.User.name });
    }
  });
}
