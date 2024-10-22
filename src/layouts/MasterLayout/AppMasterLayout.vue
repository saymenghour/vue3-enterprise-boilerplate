<template>
  <div class="app-layout h-dvh grid grid-cols-[auto_1fr]">
    <AppSidebar />
    <div class="app-container">
      <AppHeader />
      <AppContent>
        <div
          v-if="isLoading"
          class="flex justify-center"
        >
          Loading...
        </div>
        <UnauthorizeView v-else-if="!isAuthorized" />
        <RouterView v-else />
      </AppContent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useAuth } from '@/modules/auth/useAuth';
import { fetchCurrentUserApi } from '@/modules/current-user/currentUserApi';
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import type { CurrentUser } from '@/modules/current-user/currentUserType';

import UnauthorizeView from '@/modules/exception/UnauthorizeView.vue';
import AppContent from './AppContent.vue';
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';

const { data, isLoading } = useQuery({
  queryKey: ['currentUser'],
  queryFn: fetchCurrentUserApi
});

const route = useRoute();
const { setCurrentUser } = useCurrentUserStore();
const { hasAuthority } = useAuth();

watch(data, () => {
  setCurrentUser(data.value as CurrentUser);
});

const isAuthorized = computed(() => {
  return hasAuthority(route.meta.authorities);
});
</script>

<style scoped></style>
