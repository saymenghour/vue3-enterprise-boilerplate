import { Http } from '@/http';
import type { CreateRoleForm, EditRoleForm, Role } from './roleType';

const ENDPOINT = '/api/v1/roles';

export async function fetchRolesApi(signal: AbortSignal) {
  const response = await Http.get<ResponseSuccess<Role[]>>(ENDPOINT, undefined, { signal });
  return response?.data;
}

export async function fetchRoleByIdApi(id: string, signal: AbortSignal) {
  const response = await Http.get<ResponseSuccess<Role>>(`${ENDPOINT}/${id}`, undefined, { signal });
  return response?.data;
}

export async function createRoleApi(values: CreateRoleForm) {
  return await Http.post<ResponseSuccess<String>>(`${ENDPOINT}`, values);
}

export async function updateRoleApi(values: EditRoleForm, id: string) {
  return await Http.put<ResponseSuccess<String>>(`${ENDPOINT}/${id}`, values);
}
