<template>
  <div class="app-sidebar">
    <div class="h-dvh w-72 sticky top-0 self-start">
      <AppBrand />
      <AppSidebarMenu />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppBrand from './AppBrand.vue';
import AppSidebarMenu from './AppSidebarMenu.vue';
</script>

<style scoped></style>
