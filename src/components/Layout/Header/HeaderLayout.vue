<template>
  <el-header>
    <!-- ========== HEADER ========== -->
    <header class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full border-b border-color-border text-sm py-2.5 sm:py-4 dark:color-background">
      <nav
        class="flex basis-full items-center w-full mx-auto"
        aria-label="Global"
      >
        <div class="me-5 lg:me-0 lg:hidden">
          <a
            class="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >Brand</a>
        </div>

        <div class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div class="sm:hidden">
            <button
              type="button"
              class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:color-background"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><circle
                cx="11"
                cy="11"
                r="8"
              /><path d="m21 21-4.3-4.3" /></svg>
            </button>
          </div>

          <div class="hidden sm:block">
            <label
              for="icon"
              class="sr-only"
            >Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg
                  class="flex-shrink-0 h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><circle
                  cx="11"
                  cy="11"
                  r="8"
                /><path d="m21 21-4.3-4.3" /></svg>
              </div>
              <input
                id="icon"
                type="text"
                name="icon"
                class="py-2 px-4 ps-11 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Search"
              >
            </div>
          </div>

          <div class="flex flex-row items-center justify-end gap-2">
            <el-switch
              v-model="theme"
              :active-action-icon="Moon"
              :inactive-action-icon="Sunny"
            />
            <button
              type="button"
              class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 dark:text-white hover:bg-menu-active-color disabled:opacity-50 disabled:pointer-events-none dark:color-background"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  <!-- ========== END HEADER ========== -->
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
import { Moon, Sunny } from '@element-plus/icons-vue';

const isDark = useDark();
const theme = ref(isDark);
</script>

<style scoped>

</style>