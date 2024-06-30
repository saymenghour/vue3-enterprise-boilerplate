<template>
  <el-divider
    :direction
  />
</template>

<script setup lang="ts">
type DividerProps = {
  direction?: 'horizontal' | 'vertical';
}

withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal'
});
</script>

<style scoped>

</style>