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
        <template #fullName="{ row: user }">
          <div class="flex items-center">
            <Avatar :src="user.profileImageUrl" />
            <div class="flex flex-col">
              <span>{{ user.fullName }}</span>
              <span class="text-xs">@{{ user.username }}</span>
            </div>
          </div>
        </template>
      
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

import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import { Breadcrumb, DataTable, SkeletonPageListing, Title, AddNewButton, Box, Avatar } from '@/components';
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
    key: 'fullName',
    title: t('label.fullName'),
    minWidth: 150,
  },
  {
    title: t('label.email'),
    dataIndex: 'email',
    displayDashIfValueIsEmpty: true,
    minWidth: 150,
  },
  {
    title: t('label.phoneNumber'),
    dataIndex: 'phoneNumber',
    displayDashIfValueIsEmpty: true,
    minWidth: 150,
  },
  {
    key: 'status',
    title: t('label.status'),
    minWidth: 120,
  },
  {
    key: 'actions',
    title: t('label.actions'),
    minWidth: 80,
  }
]);
</script>

<style scoped></style>
