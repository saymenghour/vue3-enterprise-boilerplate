import { Http } from "@/http";
import type { CreateUser, User } from "./userType";

export async function fetchUsersApi() {
  const res = await Http.get<ResponseSuccess<User[]>>('/api/v1/users');
  return res?.data;
}

export async function fetchUsersDetailsApi(id: string) {
  const res = await Http.get<ResponseSuccess<User>>(`/api/v1/users/${id}`);
  return res?.data;
}

export async function createNewUser(values: CreateUser) {
  return await Http.post<ResponseSuccess<String>>(`/api/v1/users`, values);
}
