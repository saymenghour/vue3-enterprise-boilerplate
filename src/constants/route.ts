export const AppRoute = {
  Unauthorize: {
    name: 'unauthorize',
    path: '/unauthorize'
  },
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
  UserDetails: {
    name: 'user-details',
    path: '/user-management/users/:id'
  },
  Role: {
    name: 'role',
    path: '/user-management/roles'
  }
} as const;
