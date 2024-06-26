<template>
  <Section
    class="my-2 rounded-md bg-accent"
  >
    <div class="pl-4 py-2">
      <slot />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue';
</script>

<style scoped></style>
