<template>
  <SkeletonPageHeader />
  <div>
    <div class="py-2">
      <Skeleton class="h-8 w-full" />
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
    >
      <div
        v-for="i in 5"
        :key="i"
        class="mb-2"
      >
        <p class="text-sm font-semibold mb-1">
          <Skeleton class="h-5 w-[120px]" />
        </p>
        <div><Skeleton class="h-5 w-[200px]" /></div>
      </div>
    </div>

    <div class="py-2">
      <Skeleton class="h-8 w-full" />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
    >
      <div
        v-for="i in 3"
        :key="i"
        class="mb-2"
      >
        <p class="text-sm font-semibold mb-1">
          <Skeleton class="h-5 w-[80px]" />
        </p>
        <div><Skeleton class="h-5 w-[200px]" /></div>
      </div>
    </div>

    <div class="py-2">
      <Skeleton class="h-8 w-full" />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
    >
      <div
        v-for="i in 6"
        :key="i"
        class="mb-2"
      >
        <p class="text-sm font-semibold mb-1">
          <Skeleton class="h-5 w-[150px]" />
        </p>
        <div><Skeleton class="h-5 w-[120px]" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import SkeletonPageHeader from './SkeletonPageHeader.vue';

interface Props {
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  loading: true
});
</script>

<style scoped></style>
