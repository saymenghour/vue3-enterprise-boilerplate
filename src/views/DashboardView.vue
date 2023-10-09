<script setup lang="ts">
import BaseService from '@/services/BaseService';
import { onMounted, onUnmounted } from 'vue';
import { createAsyncAction } from "../utils/actionCreator";

type Photo  = {
  id: number,
  title: string,
  url: string,
};

// Solution 1 - Recommended
// /**
const getPhotos = createAsyncAction<Photo[] | undefined>(async (_, { signal }) => {
  const req = await BaseService.get<Photo[]>("https://jsonplaceholder.typicode.com/photos", undefined, undefined, { signal });
  return req;
});

onMounted(async () => {
  const req = await getPhotos();
  console.log("photos", req);
});

onUnmounted(() => {
  getPhotos.abort();
});
//  */

// Solution 2
/**
const controller = new AbortController();
const signal = controller.signal;

const getPhotos = async () => {
  const req = await BaseService.get<Photo[]>("https://jsonplaceholder.typicode.com/photos", undefined, undefined, { signal });
  return req;
};

onMounted(async () => {
  const req = await getPhotos();
  console.log("photos", req);
});

onUnmounted(() => {
  controller.abort();
});
 */

</script>

<template>
  <div class="dashboard">
    <h1>This is an dashboard page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .dashboard {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
