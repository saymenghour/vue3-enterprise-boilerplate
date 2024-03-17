<template>
  <nav
    class="flex mb-2 text-sm"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <Skeleton class="h-5 w-[200px]" />
      </li>
    </ol>
  </nav>
  <div class="mb-3">
    <Skeleton class="h-7 w-[100px]" />
    <p class="mt-2 w-3/5">
      <Skeleton class="h-12 w-full" />
    </p>
  </div>
</template>

<script setup lang="ts">
import Skeleton from './Skeleton.vue';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  loading?: boolean;
}

const { loading } = withDefaults(defineProps<Props>(), {
  loading: true
});
</script>

<style scoped>

</style>