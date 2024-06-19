import { createNewUserApi, updateUserApi } from "./userApi";
import type { CreateUserForm, EditUserForm } from "./userType";

export async function createUser(formValues: CreateUserForm) {
  return createNewUserApi(formValues);
}

export async function updateUser(formValues: EditUserForm, id: string) {
  return updateUserApi(formValues, id);
}