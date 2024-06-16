<template>
  <el-button
    :native-type="type"
    :type="variant"
    :loading
    class="mt-3"
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

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: undefined,
  loading: false
});
</script>

<style scoped></style>
