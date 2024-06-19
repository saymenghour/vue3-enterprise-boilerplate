import { Http } from "@/http";
import type { CreateUserForm, EditUserForm, User } from "./userType";

const userApi = '/api/v1/users';

export async function fetchUsersApi() {
  const res = await Http.get<ResponseSuccess<User[]>>(userApi);
  return res?.data;
}

export async function fetchUsersDetailsApi(id: string) {
  const res = await Http.get<ResponseSuccess<User>>(`${userApi}/${id}`);
  return res?.data;
}

export async function createNewUserApi(values: CreateUserForm) {
  return await Http.post<ResponseSuccess<String>>(`${userApi}`, values);
}

export async function updateUserApi(values: EditUserForm, id: string) {
  return await Http.put<ResponseSuccess<String>>(`${userApi}/${id}`, values);
}
