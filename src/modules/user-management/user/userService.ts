import { useQuery } from 'vue-query';
import { fetchUsersApi } from './userApi';
import { useUserStore } from './userStore';
import type { User } from "./userTypes";

export function useFetchCurrentUser() {
  const { setUsers } = useUserStore();
  return useQuery('fetchUsers', fetchUsersApi, {
    retry: false,
    onSuccess(data: User[]) {
      setUsers(data);
    }
  });
}
