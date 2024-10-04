<template>
  <div class="app-layout h-dvh">
    <AppHeader />
    <div class="app-container  grid grid-cols-[auto_1fr]">
      <AppSidebar />
      <AppContent>
        <slot />
      </AppContent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import AppContent from './AppContent.vue';
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';

const { fetchCurrentUser } = useCurrentUserStore();
fetchCurrentUser();
</script>

<style scoped></style>
