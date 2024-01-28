import { useQuery } from 'vue-query';

import { fetchCurrentUserApi } from './currentUserApi';

export const fetchCurrentUser = () => {
  const { data } = useQuery('currentUser', fetchCurrentUserApi, {
    retry: false
  });
  return data.value?.data;
};
