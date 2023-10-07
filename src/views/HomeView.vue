<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import BaseService from '@/services/BaseService';

const controller = new AbortController();
const signal = controller.signal;

type Photo  = {
  id: number,
  title: string,
  url: string,
};

onMounted(async () => {
  const req = await BaseService.get<Photo[]>("https://jsonplaceholder.typicode.com/photos", undefined, undefined, { signal });
  console.log("photos", req);
});

onUnmounted(() => {
  controller.abort();
});

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
