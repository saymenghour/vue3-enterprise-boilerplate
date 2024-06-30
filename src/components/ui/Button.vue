<template>
  <el-button
    :native-type="type"
    :type="variant"
    :loading
  >
    <slot />
  </el-button>
</template>

<script setup lang="ts">
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  loading?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: undefined,
  loading: false
});
</script>

<style scoped></style>
