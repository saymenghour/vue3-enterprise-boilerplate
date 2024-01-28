export const AppRoute = {
  Login: {
    name: 'login',
    path: '/login'
  },
  Dashboard: {
    name: 'dashboard',
    path: '/'
  },
  User: {
    name: 'user',
    path: '/user-management/users'
  },
  Role: {
    name: 'role',
    path: '/user-management/roles'
  }
} as const;
