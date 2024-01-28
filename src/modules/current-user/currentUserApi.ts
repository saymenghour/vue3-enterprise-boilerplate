import type { CurrentUser } from './currentUserType';

import BaseService from '@/services/BaseService';

export const fetchCurrentUserApi = async () => {
  return await BaseService.get<ResponseSuccess<CurrentUser>>('/api/v1/users/me');
};
