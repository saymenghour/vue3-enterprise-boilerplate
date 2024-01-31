import { acceptHMRUpdate, defineStore } from 'pinia';
import type { CurrentUser } from './currentUserType';

export const useCurrentUserStore = defineStore('currentUser', {
  state: (): CurrentUser => ({
    user: null,
    authorities: []
  }),
  getters: {},
  actions: {
    setCurrentUser(currentUser?: CurrentUser) {
      this.user = currentUser?.user ?? null;
      this.authorities = currentUser?.authorities ?? [];
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrentUserStore, import.meta.hot));
}
