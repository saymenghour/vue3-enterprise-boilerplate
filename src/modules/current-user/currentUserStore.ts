import { acceptHMRUpdate, defineStore } from 'pinia';
import { useQuery } from '@tanstack/vue-query';
import { fetchCurrentUserApi } from './currentUserApi';
import type { CurrentUser } from './currentUserType';
import { watch } from 'vue';

export const useCurrentUserStore = defineStore('currentUserStore', {
  state: (): CurrentUser => ({
    user: undefined,
    authorities: []
  }),
  getters: {
    isAuthorize: (state) => (menuAuthorities?: string[]) => {
      const authoritiesSet = new Set(state.authorities);
      return (
        menuAuthorities == null ||
        menuAuthorities.some((authority) => authoritiesSet.has(authority))
      );
    }
  },
  actions: {
    async fetchCurrentUser() {
      const { data } = useQuery({
        queryKey: ['currentUser'],
        queryFn: fetchCurrentUserApi
      });
      watch(data, (data) => {
        this.user = data?.user ?? undefined;
        this.authorities = data?.authorities ?? [];
      });
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrentUserStore, import.meta.hot));
}
