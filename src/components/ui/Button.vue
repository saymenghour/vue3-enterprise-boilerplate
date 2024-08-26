<template>
  <Button
    :type="type ?? 'button'"
    :label="label"
    :loading
    :size="size ?? 'small'"
    :severity="severity ?? 'secondary'"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | 'help' | undefined;
  loading?: boolean;
  size?: 'large' | 'small';
}

defineProps<ButtonProps>();
</script>

<style scoped></style>
