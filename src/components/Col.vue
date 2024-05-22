<template>
  <el-col
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <slot />
  </el-col>
</template>

<script setup lang="ts">
interface ElColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const props = defineProps<ElColProps>();
</script>

<style scoped>

</style>