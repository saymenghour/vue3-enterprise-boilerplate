import { defineStore, acceptHMRUpdate } from 'pinia';
import type { User } from './userTypes';

export const useUserStore = defineStore('userStore', {
  state: (): { users: User[] } => ({
    users: []
  }),
  getters: {},
  actions: {
    setUsers(users: User[]) {
      this.users = users ?? [];
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
