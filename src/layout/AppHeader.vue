<template>
  <div class="flex justify-between items-center">
    <div class="flex justify-between items-center h-16 w-72 px-6">
      <div class="inline-flex">
        <Shapes :size="24" />
        <h1 class="font-medium text-lg ml-2 text-primary">
          Menghour.
        </h1>
      </div>

      <div
        :class="`cursor-pointer ${collapsed ? 'rotate-180' : ''}`"
        @click="toggleCollapsed"
      >
        <ChevronsLeft :size="24" />
      </div>
    </div>
    <div class="flex justify-end items-center px-5 h-16">
      <AppHeaderUserNav />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChevronsLeft, Shapes } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';
import AppHeaderUserNav from './AppHeaderUserNav.vue';
import { useUseLayoutStore } from './useLayout';

const store = useUseLayoutStore();
const { toggleCollapsed } = store;
const { collapsed } = storeToRefs(store);
</script>

<style scoped></style>
