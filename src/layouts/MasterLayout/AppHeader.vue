<template>
  <div class="flex justify-between items-center">
    <div class="flex justify-between items-center h-16 w-72 px-6">
      <!-- <div class="inline-flex">
        <img
          :src="logo"
          alt="logo"
        >
      </div> -->

      <!-- <div
        :class="`cursor-pointer ${collapsed ? 'rotate-180' : ''}`"
        @click="toggleCollapsed"
      >
        <ChevronsLeft :size="24" />
      </div> -->
    </div>
    <div class="flex justify-end items-center px-5 h-16">
      <!-- <LocaleSwitcher /> -->
      <AppHeaderUserNav />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import logo from '@/assets/images/logo.svg';
import AppHeaderUserNav from './AppHeaderUserNav.vue';
</script>

<style scoped></style>
