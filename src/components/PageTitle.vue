<template>
  <section class="flex justify-between text-[#303133] dark:text-[#E5EAF3]">
    <section class="w-3/6">
      <div class="flex items-center">
        <div
          v-if="showBackButton"
          class="flex items-center"
        >
          <div
            class="flex"
            @click="goBack()"
          >
            <ChevronLeft
              class="w-5 h-6 cursor-pointer"
            />
            <span class="ml-1">{{ t('back') }}</span>
          </div>
        
          <el-divider
            direction="vertical"
            class="!mx-4"
          />
        </div>

        <span class="text-lg font-medium">
          {{ name }}
        </span>
      </div>

      <p><slot name="description" /></p>
    </section>

    <section>
      <slot name="actionButton" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables';
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

withDefaults(defineProps<PageProps>(), {
  showBackButton: true,
});

const { t } = useI18n();

const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
