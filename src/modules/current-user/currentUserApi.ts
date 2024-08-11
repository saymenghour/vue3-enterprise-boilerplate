import { Http } from '@/http';
import type { CurrentUser } from './currentUserType';

export const fetchCurrentUserApi = async () => {
  const res = await Http.get<SuccessResponse<CurrentUser>>('/api/v1/users/me');
  return res?.data;
};
