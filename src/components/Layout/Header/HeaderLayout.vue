<template>
  <el-header>
    <div class="sticky top-0 py-2.5 sm:py-4 border-b border-muted">
      <nav
        aria-label="Global"
        class="flex basis-full items-center w-full mx-auto"
      >
        <div class="me-5 lg:me-0 lg:hidden">
          <a
            aria-label="Brand"
            class="flex-none text-xl font-semibold dark:text-white"
            href="#"
          >Brand</a>
        </div>

        <div
          class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3"
        >
          <div class="sm:hidden">
            <button
              class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:color-background"
              type="button"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          <div class="hidden sm:block">
            <label
              class="sr-only"
              for="icon"
            >Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
              >
                <svg
                  class="flex-shrink-0 h-4 w-4 text-gray-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                  />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <input
                id="icon"
                class="py-2 px-4 ps-11 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                name="icon"
                placeholder="Search"
                type="text"
              >
            </div>
          </div>

          <div class="flex flex-row items-center justify-end gap-2">
            <ThemeSwitcher />
            <UserNav />
          </div>
        </div>
      </nav>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import UserNav from '@/components/Layout/Header/UserNav.vue';
import ThemeSwitcher from '@/components/ThemeSwticher/ThemeSwitcher.vue';
</script>

<style scoped></style>
