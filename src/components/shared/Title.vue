<template>
  <div class="mb-3">
    <div class="flex items-center justify-between">
      <span class="text-lg font-medium">
        {{ name }}
      </span>
      <p
        v-if="!!description"
        class="w-3/5"
      >
        {{ description }}
      </p>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

type ActionButtonProps = {
  label: string;
  
}

type PageProps = {
  name: string;
  description?: string;
  actionButton?: ActionButtonProps[];
}

const { name } = defineProps<PageProps>();

</script>

<style scoped></style>