<template>
  <el-row :gutter="gutter">
    <slot />
  </el-row>
</template>

<script setup lang="ts">
interface ElRowProps {
  gutter?: number;
}

withDefaults(defineProps<ElRowProps>(), {
  gutter: 20
});
</script>

<style scoped></style>
