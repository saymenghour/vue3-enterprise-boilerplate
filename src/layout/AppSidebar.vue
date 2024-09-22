<template>
  <div class="app-sidebar">
    <div class="h-dvh w-72 sticky top-0 self-start">
      <BrandLogo />
      <div class="h-full overflow-auto">
        <AppMenu />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BrandLogo from './AppBrand.vue';
import AppMenu from './AppMenu.vue';
</script>

<style scoped></style>
