<template>
  <Button
    :type
    :loading
    :size="size ?? 'small'"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button';


interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | 'help';
  loading?: boolean;
  size?: 'large' | 'small';
}

defineProps<ButtonProps>();
</script>

<style scoped></style>
