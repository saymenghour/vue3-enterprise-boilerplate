import { Http } from "@/http";
import type { CreateRoleForm, EditRoleForm, Role } from "./roleType";

const ENDPOINT = '/api/v1/roles';

export async function fetchRolesApi() {
  return (await Http.get<ResponseSuccess<Role[]>>(ENDPOINT))?.data;
}

export async function fetchRolesDetailsApi(id: string) {
  return (await Http.get<ResponseSuccess<Role>>(`${ENDPOINT}/${id}`))?.data;
}

export async function fetchRolesEditApi(id: string): Promise<EditRoleForm | undefined> {
  const response = await Http.get<ResponseSuccess<Role>>(`${ENDPOINT}/${id}`);
  const { permissions, ...data } = response?.data ?? {};
  return {
    ...data,
    permissionIds: permissions?.map((p) => p.id) ?? []
  } as EditRoleForm;
}

export async function createRoleApi(values: CreateRoleForm) {
  return await Http.post<ResponseSuccess<String>>(`${ENDPOINT}`, values);
}

export async function updateRoleApi(values: EditRoleForm, id: string) {
  return await Http.put<ResponseSuccess<String>>(`${ENDPOINT}/${id}`, values);
}
