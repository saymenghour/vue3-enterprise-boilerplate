<template>
  <el-form
    label-width="auto"
    :label-position="labelPosition"
    :status-icon="statusIcon"
    :scroll-to-error="scrollToError"
    :require-asterisk-position="requireAsteriskPosition"
  >
    <slot />
  </el-form>
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
