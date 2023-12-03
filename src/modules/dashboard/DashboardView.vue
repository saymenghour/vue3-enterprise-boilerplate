<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import BaseService from '@/services/BaseService';
import { createAsyncAction } from "@/utils/actionCreator";
import { MasterLayout } from "@/components";

type Photo = {
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
  <MasterLayout>
    <div class="dashboard">
      <h1>This is an dashboard page</h1>
    </div>
  </MasterLayout>
</template>

<style>
.dashboard {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
