<template>
  <SkeletonPageHeader />
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[240px]">
          <Skeleton class="h-6 w-full" />
        </TableHead>
        <TableHead><Skeleton class="h-6 w-full" /></TableHead>
        <TableHead><Skeleton class="h-6 w-full" /></TableHead>
        <TableHead>
          <Skeleton class="h-6 w-full" />
        </TableHead>
        <TableHead class="w-[150px]">
          <Skeleton class="h-6 w-full" />
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="i in 10"
        :key="i"
      >
        <TableCell><Skeleton class="h-6 w-full" /></TableCell>
        <TableCell><Skeleton class="h-6 w-full" /></TableCell>
        <TableCell><Skeleton class="h-6 w-full" /></TableCell>
        <TableCell><Skeleton class="h-6 w-full" /></TableCell>
        <TableCell><Skeleton class="h-6 w-full" /></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import Skeleton from '@/lib/shadcn/ui/skeleton/Skeleton.vue';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/lib/shadcn/ui/table';
import SkeletonPageHeader from './SkeletonPageHeader.vue';

interface Props {
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  loading: true
});
</script>

<style scoped></style>
