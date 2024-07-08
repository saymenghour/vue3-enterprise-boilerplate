<template>
  <nav
    class="flex text-sm"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center text-[#303133] dark:text-[#E5EAF3]">
      <li class="inline-flex items-center">
        <RouterLink
          to="/"
          class="inline-flex items-center"
        >
          {{ t('dashboard') }}
        </RouterLink>
      </li>
      <li
        v-for="{ title, to } in items"
        :key="title"
      >
        <div class="flex items-center">
          <ChevronRight class="w-4 h-4 m-1" />
          <RouterLink
            v-if="to"
            :to="to"
            class="inline-flex items-center"
          >
            {{ title }}
          </RouterLink>
          <template v-else>
            {{ title }}
          </template>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next';
import { RouterLink, type RouteLocationRaw } from 'vue-router';

import { useTranslation } from '@/composables';

export interface BreadcrumbItemProps {
  title: string;
  to?: RouteLocationRaw;
}

interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
}

const { t } = useTranslation();
defineProps<BreadcrumbProps>();
</script>

<style scoped></style>
