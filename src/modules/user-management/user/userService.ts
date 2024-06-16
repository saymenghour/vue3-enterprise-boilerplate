import { createNewUserApi, updateUserApi } from "./userApi";
import type { CreateUserFrom, EditUserForm } from "./userType";

export async function createUser(formValues: CreateUserFrom) {
  return createNewUserApi(formValues);
}

export async function updateUser(formValues: EditUserForm, id: string) {
  return updateUserApi(formValues, id);
}