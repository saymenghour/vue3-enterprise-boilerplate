<template>
  <SkeletonPageListing v-if="isLoading" />
  <template v-else>
    <Breadcrumb :items="breadcrumbItems" />
    <Title :name="t('label.userManagement.user.list')">
      <AddNewButton
        :path="AppRoute.User.addNew.path"
        :label="t('label.userManagement.user.addNew')"
      />
    </Title>
    <Box>
      <DataTable
        :loading="isLoading"
        :data
        :columns
      >
        <template #status="{ row: user }">
          <UserStatus :user />
        </template>
        
        <template #actions="{ row: user }">
          <UserListingDropdownAction :user />
        </template>
      </DataTable>
    </Box>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { useI18n } from '@/hooks';
import { AppRoute } from '@/constants';
import { Breadcrumb, DataTable, SkeletonPageListing, Title, AddNewButton, Box, Tag } from '@/components';
import type { BreadcrumbItemProps, ColumnProps } from '@/types';
import { fetchUsersApi } from '../userApi';
import type { User } from '../userType';
import UserListingDropdownAction from '../components/UserListingDropdownAction.vue';
import UserStatus from '../components/UserStatus.vue';

const { t } = useI18n();
const { data, isLoading } = useQuery({
  queryKey: ['fetchUsers'],
  queryFn: fetchUsersApi
});

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('label.userManagement.title')
  }
]);

const columns = computed<ColumnProps<User>[]>(() => [
  {
    title: t('label.fullName'),
    dataIndex: 'fullName',
  },
  {
    title: t('label.fullNameKh'),
    dataIndex: 'fullNameKh',
  },
  {
    title: t('label.email'),
    dataIndex: 'email',
  },
  {
    key: 'status',
    title: t('label.status'),
  },
  {
    key: 'actions',
    title: t('label.actions')
  }
]);
</script>

<style scoped></style>
