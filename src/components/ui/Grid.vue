<template>
  <div :class="`grid grid-cols-${col} gap-${gap}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
type GridProps = {
  col?: number;
  gap?: number;
};

withDefaults(defineProps<GridProps>(), {
  col: 2,
  gap: 6
});
</script>

<style scoped></style>
