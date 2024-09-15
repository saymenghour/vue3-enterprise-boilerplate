import { Http } from '@/http';
import type { CreateUserForm, EditUserForm, User } from './userType';

const ENDPOINT = '/api/v1/users';

export async function fetchUsersApi(signal: AbortSignal) {
  const response = await Http.get<SuccessResponse<User[]>>(ENDPOINT, undefined, { signal });
  return response?.data;
}

export async function fetchUserByIdApi(id: string, signal: AbortSignal): Promise<User> {
  const response = await Http.get<SuccessResponse<User>>(`${ENDPOINT}/${id}`, undefined, { signal });
  return response?.data as User;
}

export async function createUserApi(values: CreateUserForm) {
  return await Http.post<SuccessResponse<String>>(`${ENDPOINT}`, values);
}

export async function updateUserApi(values: EditUserForm, id: string) {
  return await Http.put<SuccessResponse<String>>(`${ENDPOINT}/${id}`, values);
}
