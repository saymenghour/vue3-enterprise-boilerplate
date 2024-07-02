<template>
  <el-checkbox
    :value
    :label
    :disabled
    class="!mr-0"
  />
</template>

<script setup lang="ts">
type CheckboxProps = {
  value?: string | number | undefined;
  label?: string | number | undefined;
  disabled?: boolean;
}

defineProps<CheckboxProps>();
</script>

<style scoped>

</style>