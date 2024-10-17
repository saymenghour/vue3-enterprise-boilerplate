import { useQuery } from '@tanstack/vue-query';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { watch } from 'vue';
import { fetchCurrentUserApi } from './currentUserApi';
import type { CurrentUser } from './currentUserType';

export const useCurrentUserStore = defineStore('currentUser', {
  state: (): CurrentUser => ({
    loading: false,
    user: undefined,
    authorities: []
  }),
  getters: {
    isAuthorize: (state) => (menuAuthorities?: string[]) => {
      const authoritiesSet = new Set(state.authorities);
      return menuAuthorities == null || menuAuthorities.some((authority) => authoritiesSet.has(authority));
    }
  },
  actions: {
    async fetchCurrentUser() {
      this.loading = true;
      const { data } = useQuery({
        queryKey: ['currentUser'],
        queryFn: fetchCurrentUserApi
      });
      watch(data, (data) => {
        this.loading = false;
        this.user = data?.user ?? undefined;
        this.authorities = data?.authorities ?? [];
      });
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrentUserStore, import.meta.hot));
}
