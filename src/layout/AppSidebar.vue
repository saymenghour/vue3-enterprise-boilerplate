<template>
  <div :class="`app-sidebar h-dvh ${collapsed ? 'w-16' : 'w-72'} mt-2`">
    <div class="sticky top-0 self-start overflow-hidden text-nowrap">
      <AppSidebarMenu />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import AppSidebarMenu from './AppSidebarMenu.vue';
import { useUseLayoutStore } from './useLayout';

const store = useUseLayoutStore();
const { collapsed } = storeToRefs(store);
</script>

<style scoped>
.app-sidebar {
  transition: width 0.3s ease-in-out;
}
</style>
