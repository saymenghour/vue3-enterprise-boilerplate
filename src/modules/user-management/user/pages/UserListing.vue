<template>
  <SkeletonPageListing v-if="isLoading" />
  <template v-else>
    <PageBreadcrumb :items="breadcrumbItems" />
    <PageTitle
      :name="t('user.list')"
      :show-back-button="false"
    >
      <template #actionButton>
        <AddNewButton
          :path="AppRoute.User.addNew.path"
          :label="t('user.addNew')"
        />
      </template>
    </PageTitle>

    <PageContent>
      <Card>
        <DataTable
          :loading="isLoading"
          :data
          :columns
        >
          <template #fullName="{ row: user }">
            <div class="flex items-center">
              <Avatar :src="user.profileImageUrl" />
              <div class="flex flex-col">
                <span class="font-medium">{{ user.fullName }}</span>
                <span class="text-xs">@{{ user.username }}</span>
              </div>
            </div>
          </template>
        
          <template #status="{ row: user }">
            <UserStatus :status="user.status" />
          </template>
        
          <template #actions="{ row: user }">
            <UserListingDropdownAction :user />
          </template>
        </DataTable>
      </Card>
    </PageContent>
  </template>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';

import {
  AddNewButton,
  Avatar,
  Card,
  DataTable,
  PageBreadcrumb,
  PageTitle,
  SkeletonPageListing
} from '@/components';
import PageContent from '@/components/shared/PageContent.vue';
import { useTranslation } from '@/composables';
import { AppRoute } from '@/constants';
import type { BreadcrumbItemProps, ColumnProps } from '@/types';
import UserListingDropdownAction from '../components/UserListingDropdownAction.vue';
import UserStatus from '../components/UserStatus.vue';
import { getFetchUsersQueryKey, useFetchUsers } from '../userService';
import type { User } from '../userType';

const queryClient = useQueryClient();
const { t } = useTranslation();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  }
]);

const columns = computed<ColumnProps<User>[]>(() => [
  {
    key: 'fullName',
    title: t('fullName'),
    minWidth: 150
  },
  {
    title: t('email'),
    dataIndex: 'email',
    displayDashIfValueIsNull: true,
    minWidth: 150
  },
  {
    title: t('phoneNumber'),
    dataIndex: 'phoneNumber',
    displayDashIfValueIsNull: true,
    minWidth: 150
  },
  {
    key: 'status',
    title: t('status'),
    minWidth: 120
  },
  {
    key: 'actions',
    title: t('actions'),
    minWidth: 80
  }
]);

const { data, isLoading } = useFetchUsers();

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchUsersQueryKey() });
});
</script>

<style scoped></style>
