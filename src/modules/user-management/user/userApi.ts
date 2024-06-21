import { Http } from '@/http';
import type { CreateUserForm, EditUserForm, User } from './userType';

const ENDPOINT = '/api/v1/users';

export async function fetchUsersApi(signal: AbortSignal) {
  const response = await Http.get<ResponseSuccess<User[]>>(ENDPOINT, undefined, { signal });
  return response?.data;
}

export async function fetchUserByIdApi(id: string, signal: AbortSignal) {
  const response = await Http.get<ResponseSuccess<User>>(`${ENDPOINT}/${id}`, undefined, { signal });
  return response?.data;
}

export async function createUserApi(values: CreateUserForm) {
  return await Http.post<ResponseSuccess<String>>(`${ENDPOINT}`, values);
}

export async function updateUserApi(values: EditUserForm, id: string) {
  return await Http.put<ResponseSuccess<String>>(`${ENDPOINT}/${id}`, values);
}
