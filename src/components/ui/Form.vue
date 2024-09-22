<template>
  <form novalidate>
    <slot />
  </form>
</template>

<script setup lang="ts">
interface ElFormProps {
  labelPosition?: 'top' | 'left';
  statusIcon?: boolean;
  scrollToError?: boolean;
  requireAsteriskPosition?: 'right' | 'left';
}

withDefaults(defineProps<ElFormProps>(), {
  labelPosition: 'top',
  statusIcon: true,
  scrollToError: true,
  requireAsteriskPosition: 'right'
});
</script>

<style scoped></style>
