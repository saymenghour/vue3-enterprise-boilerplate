import { createNewUser } from "./userApi";
import type { CreateUser } from "./userType";

export async function createUser(formValues: CreateUser) {
  return createNewUser(formValues);
}