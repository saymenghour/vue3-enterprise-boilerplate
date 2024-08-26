<template>
  <Tag
    v-if="label"
    :severity
    :round
    :effect
    :icon="icon"
  >
    <span class="text-sm font-medium">{{ label }}</span>
  </Tag>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag';

export type TagProps = {
  severity: 'primary' | 'success' | 'info' | 'warning' | 'danger' | undefined;
  label: string | undefined;
  round?: boolean;
  icon?: string | undefined;
  effect?: 'dark' | 'light' | 'plain';
};

withDefaults(defineProps<TagProps>(), {
  effect: 'light'
});
</script>

<style scoped></style>
