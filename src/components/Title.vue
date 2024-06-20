<template>
  <div class="mb-3">
    <div class="flex items-center justify-between min-h-10 text-[#303133] dark:text-[#E5EAF3]">
      <div class="flex items-center">
        <ChevronLeft
          v-if="showBackButton"
          class="w-6 h-6 cursor-pointer"
          @click="goBack()"
        />
        <el-divider
          v-if="showBackButton"
          direction="vertical"
        />
        <span class="text-lg font-medium">
          {{ name }}
        </span>
      </div>
      <p
        v-if="!!description"
        class="w-3/5"
      >
        {{ description }}
      </p>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ChevronLeft } from 'lucide-vue-next';

type ActionButtonProps = {
  label: string;
};

type PageProps = {
  showBackButton?: boolean;
  loading?: boolean;
  name: string | undefined;
  description?: string;
  actionButton?: ActionButtonProps[];
};

defineProps<PageProps>();

const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
