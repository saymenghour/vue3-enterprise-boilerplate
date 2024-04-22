<template>
  <SkeletonPageListing v-if="isLoading" />
  <template v-else>
    <Breadcrumb :title="t('label.userManagement.title')" />
    <Title :name="t('label.userManagement.user.title')">
      <AddNewButton
        :path="AppRoute.User.addNew.path"
        :label="t('label.userManagement.user.button.addNew')"
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
import { storeToRefs } from 'pinia';
import type { ColumnDef } from '@tanstack/vue-table';

import { Breadcrumb, DataTable, SkeletonPageListing, Title } from '@/components';
import { useFetchUsers } from '../userService';
import { useUserStore } from '../userStore';
import type { User } from '../userTypes';
import UserListingDropdownAction from './UserListingDropdownAction.vue';
import { useI18n } from '@/hooks';
import AddNewButton from '@/components/shared/ActionButton/AddNewButton.vue';
import { AppRoute } from '@/constants';

const { t } = useI18n();
const { isLoading } = useFetchUsers();
const store = useUserStore();
const { users: data } = storeToRefs(store);

const columns= computed((): ColumnDef<User>[]  => [
  {
    accessorKey: 'fullNameEn',
    header: t('label.fullNameEn')
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
