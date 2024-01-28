<template>
  <MasterLayout>
    <RouterView />
  </MasterLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MasterLayout from '@/layouts/MainLayout.vue';
</script>

<style scoped></style>
