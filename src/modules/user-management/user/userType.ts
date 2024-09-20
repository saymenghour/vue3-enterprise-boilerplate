import type { Role } from '../role/roleType';

export type User = {
  recordState: string;
  version: number;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  firstNameKh: string;
  lastNameKh: string;
  fullName: string;
  fullNameKh: string;
  phoneNumber: string;
  email: string;
  profileImageUrl: string;
  status: string;
  branch: Branch;
  departmentId: string;
  positionId: string;
  roles: Role[];
};

type UserForm = {
  firstNameKh?: string;
  lastNameKh?: string;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber?: string;
  email?: string;
  branchCode: string;
  roleIds: number[];
}

export type CreateUserForm = UserForm & {
  password: string;
  confirmPassword: string;
};

export type EditUserForm = UserForm;

export type Branch = {
  id: number;
  code: string;
  nameEn: string;
  nameKh: string;
};
