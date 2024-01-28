import { defineStore, acceptHMRUpdate } from 'pinia';

import { fetchCurrentUserApi } from './currentUserApi';
import type { CurrentUser } from './currentUserType';

export const useCurrentUserStore = defineStore('currentUser', {
  state: (): CurrentUser => ({
    user: null,
    authorities: []
  }),
  getters: {},
  actions: {
    async fetchCurrentUser() {
      const { data } = await fetchCurrentUserApi();
      this.user = data?.user;
      this.authorities = data?.authorities;
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrentUserStore, import.meta.hot));
}
