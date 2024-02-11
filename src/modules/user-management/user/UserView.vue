<template>
  <div v-if="isLoading">
    Loading..
  </div>
  <DataTable
    v-else
    :data="data ?? []"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import { h } from 'vue';
import { storeToRefs } from 'pinia';
import type { ColumnDef } from '@tanstack/vue-table';

import { DataTable } from '@/components';
import { useFetchCurrentUser } from './userService';
import { useUserStore } from './userStore';
import type { User } from "./userTypes";

const { isLoading } = useFetchCurrentUser();
const store = useUserStore();
const { users: data } = storeToRefs(store);

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'fullNameEn',
    header: 'Full Name (EN)',
  },
  {
    accessorKey: 'fullNameKh',
    header: 'Full Name (KH)',
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('status')),
  },
];
</script>

<style scoped>

</style>