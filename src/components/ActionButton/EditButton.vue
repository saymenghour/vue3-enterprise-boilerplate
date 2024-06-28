<template>
  <RouterLink :to="link">
    <Button variant="primary">
      <SquarePen class="mr-2 h-4 w-4" />
      {{ label }}
    </Button>
  </RouterLink>
</template>

<script setup lang="ts">
import { SquarePen } from 'lucide-vue-next';
import { computed } from 'vue';
import Button from '../Button.vue';

type ButtonProps = {
  label: string;
  path: string;
};

const { label, path } = defineProps<ButtonProps>();

const link = computed(() => (path ? { path } : ''));
</script>

<style scoped></style>
