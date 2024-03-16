<template>
  <div class="mb-3">
    <span class="text-lg font-medium">
      {{ name }}
    </span>
    <p
      v-if="!!description"
      class="w-3/5"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">

type PageProps = {
  name: string;
  description?: string;
}

const { name } = defineProps<PageProps>();

</script>

<style scoped></style>