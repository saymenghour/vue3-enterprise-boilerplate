import { defineStore, acceptHMRUpdate } from 'pinia';
import type { Role } from './roleType';

export const useRoleStore = defineStore('roleStore', {
  state: (): { roles: Role[] } => ({
    roles: []
  }),
  getters: {},
  actions: {
    setRoles(roles: Role[]) {
      this.roles = roles ?? [];
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRoleStore, import.meta.hot));
}
