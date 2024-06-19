import { Http } from "@/http";
import type { CreateRoleForm, EditRoleForm, Role } from "./roleType";

const roleApi = '/api/v1/roles';

export async function fetchRolesApi() {
  const res = await Http.get<ResponseSuccess<Role[]>>(roleApi);
  return res?.data;
}

export async function fetchRolesDetailsApi(id: string) {
  const res = await Http.get<ResponseSuccess<Role>>(`${roleApi}/${id}`);
  return res?.data;
}

export async function createNewRoleApi(values: CreateRoleForm) {
  return await Http.post<ResponseSuccess<String>>(`${roleApi}`, values);
}

export async function updateRoleApi(values: EditRoleForm, id: string) {
  return await Http.put<ResponseSuccess<String>>(`${roleApi}/${id}`, values);
}
