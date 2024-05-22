<template>
  <SkeletonPageListing v-if="isLoading" />
  <template v-else>
    <Breadcrumb :title="t('label.userManagement.title')" />
    <Title :name="t('label.userManagement.user.title')">
      <AddNewButton
        :path="AppRoute.User.addNew.path"
        :label="t('label.userManagement.user.addNew.title')"
      />
    </Title>
    <DataTable
      :data="data ?? []"
      :columns="columns"
    />
  </template>
</template>

<script setup lang="ts">
import { computed, h } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import type { ColumnDef } from '@tanstack/vue-table';

import { useI18n } from '@/hooks';
import { AppRoute } from '@/constants';
import { Breadcrumb, DataTable, SkeletonPageListing, Title, AddNewButton } from '@/components';
import UserListingDropdownAction from './UserListingDropdownAction.vue';
import { fetchUsersApi } from '../userApi';
import type { User } from '../userType';

const { t } = useI18n();
const { data, isLoading } = useQuery({
  queryKey: ['fetchUsers'],
  queryFn: fetchUsersApi
});

const columns = computed((): ColumnDef<User>[] => [
  {
    accessorKey: 'fullNameEn',
    header: t('label.fullName')
  },
  {
    accessorKey: 'fullNameKh',
    header: t('label.fullNameKh')
  },
  {
    accessorKey: 'email',
    header: t('label.email'),
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email'))
  },
  {
    accessorKey: 'status',
    header: t('label.status'),
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('status'))
  },
  {
    id: 'actions',
    header: t('label.actions'),
    cell: ({ row }) => {
      const user = row.original;
      return h('div', { class: 'relative' }, h(UserListingDropdownAction, { user }));
    }
  }
]);
</script>

<style scoped></style>
