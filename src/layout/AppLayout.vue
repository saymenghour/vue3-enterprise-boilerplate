<template>
  <div class="common-layout">
    <el-container>
      <AppSidebar />
      <el-container class="is-vertical">
        <AppHeader />
        <AppContent>
          <slot />
        </AppContent>
      </el-container>
    </el-container>
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
