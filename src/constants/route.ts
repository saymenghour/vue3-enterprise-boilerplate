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
    path: '/dashboard'
  },
  User: {
    name: 'user',
    path: '/user-management/users',
    addNew: {
      name: 'user-create',
      path: '/user-management/users/create'
    },
    details: {
      name: 'user-details',
      path: '/user-management/users/:id'
    },
    edit: {
      name: 'user-edit',
      path: '/user-management/users/:id/edit'
    }
  },
  Role: {
    name: 'role',
    path: '/user-management/roles',
    addNew: {
      name: 'role-create',
      path: '/user-management/roles/create'
    },
    details: {
      name: 'user-details',
      path: '/user-management/roles/:id'
    },
    edit: {
      name: 'user-edit',
      path: '/user-management/roles/:id/edit'
    }
  }
} as const;
