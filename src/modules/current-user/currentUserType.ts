export type CurrentUser = {
  user: {
    firstName: string;
    lastName: string;
    firstNameKh: string;
    lastNameKh: string;
    username: string;
    fullName: string;
    fullNameKh: string;
    email: string;
    profileImageUrl: string;
  } | undefined;
  authorities: string[];
};
