import { useQuery } from 'vue-query';
import { fetchCurrentUserApi } from './currentUserApi';
import { useCurrentUserStore } from './currentUserStore';
import type { CurrentUser } from './currentUserType';

export function fetchCurrentUser() {
  const { setCurrentUser } = useCurrentUserStore();
  return useQuery('currentUser', fetchCurrentUserApi, {
    retry: false,
    onSuccess(data: CurrentUser) {
      setCurrentUser(data);
    }
  });
}
