<template>
  <el-tag
    v-if="label"
    :type
    :round
    :effect
  >
    {{ label }}
  </el-tag>
</template>

<script setup lang="ts">
export type TagProps = {
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger' | undefined
  label: string | undefined
  round?: boolean
  effect?: 'dark' | 'light' | 'plain'
}

withDefaults(defineProps<TagProps>(), {
  effect: "dark"
});
</script>

<style scoped></style>