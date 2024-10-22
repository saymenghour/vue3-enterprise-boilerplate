import { Permission } from '@/constants';
import { storeToRefs } from 'pinia';

import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';

export function useAuth() {
  const store = useCurrentUserStore();
  const { authorities } = storeToRefs(store);

  function hasAuthority(menuAuthorities?: string[]): boolean {
    return store.isAuthorize(menuAuthorities);
  }

  function hasPermission(permission: typeof Permission[keyof typeof Permission]): boolean {
    return authorities.value.includes(permission);
  }

  return {
    authorities,
    hasAuthority,
    hasPermission
  };

}