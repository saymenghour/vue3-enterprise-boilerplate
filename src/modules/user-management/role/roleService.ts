import { createNewRoleApi, updateRoleApi } from "./roleApi";
import type { CreateRoleForm, EditRoleForm } from "./roleType";

export async function createRole(formValues: CreateRoleForm) {
  return createNewRoleApi(formValues);
}

export async function updateRole(formValues: EditRoleForm, id: string) {
  return updateRoleApi(formValues, id);
}