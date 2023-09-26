import router from ".";

// see more https://router.vuejs.org/guide/advanced/meta.html
// see more https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
  // add your user permissions logic
  const userPermissions: string[] = []; // ["READ:DASHBOARD"]

  const permissions = to.meta?.permissions;
  if (!permissions || !permissions.length) {
    next();
  } else {
    // This logic check only meta.permissions is not empty array and redirect to login if user don't have permission
    permissions.forEach((routePermission) => {
      const hasPermission = userPermissions.includes(routePermission);
      hasPermission ? next() : next({ name: "login" });
    });
  }

});