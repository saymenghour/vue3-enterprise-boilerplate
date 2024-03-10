import { useQuery } from 'vue-query';
import { fetchUsersApi, fetchUsersDetailsApi } from './userApi';
import { useUserStore } from './userStore';
import type { User } from './userTypes';

export function useFetchUsers() {
  const { setUsers } = useUserStore();
  return useQuery('fetchUsers', fetchUsersApi, {
    retry: false,
    onSuccess(data: User[]) {
      setUsers(data);
    }
  });
}

export function useFetchUserById(id: string) {
  return useQuery(['useFetchUserById', id], () => fetchUsersDetailsApi(id), {
    retry: false
  });
}
