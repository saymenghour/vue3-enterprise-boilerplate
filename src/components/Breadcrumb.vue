<template>
  <nav
    class="flex mb-2 text-sm"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-[#303133] dark:text-[#E5EAF3]">
      <li class="inline-flex items-center">
        <RouterLink
          to="/"
          class="inline-flex items-center"
        >
          {{ t('label.dashboard.title') }}
        </RouterLink>
      </li>
      <li>
        <div class="flex items-center">
          <svg
            class="rtl:rotate-180 w-3 h-3 text-gray-400 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          {{ title }}
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from '@/hooks';
import { RouterLink } from 'vue-router';

interface BreadcrumbProps {
  title: string
}

const { title }= defineProps<BreadcrumbProps>();

const { t } = useI18n();
</script>

<style scoped>

</style>