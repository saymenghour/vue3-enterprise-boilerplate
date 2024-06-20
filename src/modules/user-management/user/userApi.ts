import { Http } from "@/http";
import type { CreateUserForm, EditUserForm, User } from "./userType";

const ENDPOINT = '/api/v1/users';

export async function fetchUsersApi() {
  const res = await Http.get<ResponseSuccess<User[]>>(ENDPOINT);
  return res?.data;
}

export async function fetchUsersDetailsApi(id: string) {
  const res = await Http.get<ResponseSuccess<User>>(`${ENDPOINT}/${id}`);
  return res?.data;
}

export async function createNewUserApi(values: CreateUserForm) {
  return await Http.post<ResponseSuccess<String>>(`${ENDPOINT}`, values);
}

export async function updateUserApi(values: EditUserForm, id: string) {
  return await Http.put<ResponseSuccess<String>>(`${ENDPOINT}/${id}`, values);
}
