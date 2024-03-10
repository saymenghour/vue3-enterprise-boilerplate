<template>
  <SkeletonPageListing
    v-if="isLoading"
  />
  <template v-else>
    <Breadcrumb />
    <DataTable
      :data="
        data
          ??
          []"
      :columns="columns"
    />
  </template>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { storeToRefs } from 'pinia';
import type { ColumnDef } from '@tanstack/vue-table';

import { Breadcrumb, DataTable, SkeletonPageListing } from '@/components';
import { useFetchUsers } from '../userService';
import { useUserStore } from '../userStore';
import type { User } from "../userTypes";
import UserListingDropdownAction from './UserListingDropdownAction.vue';

const { isLoading } = useFetchUsers();
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
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const user = row.original;
      return h('div', { class: 'relative' }, h(UserListingDropdownAction, { user }));
    },
  },
];
</script>

<style scoped></style>