<template>
  <div class="font-medium pb-3 text-[#303133] dark:text-[#E5EAF3]">
    <slot />
  </div>
</template>

<script setup lang="ts">
type PageContentSectionProps = {
  title?: string;
};

defineProps<PageContentSectionProps>();
</script>

<style scoped>

</style>