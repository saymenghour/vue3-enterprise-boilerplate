<template>
  <RouterLink :to="link">
    <Button>
      <Plus class="mr-2 h-4 w-4" />
      <span>{{ label }}</span>
    </Button>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Plus } from 'lucide-vue-next';
import Button from '@/lib/shadcn/ui/button/Button.vue';

type ButtonProps = {
  label: string;
  path: string;
};

const { label, path } = defineProps<ButtonProps>();

const link = computed(() => (path ? { path } : ''));
</script>

<style scoped></style>
