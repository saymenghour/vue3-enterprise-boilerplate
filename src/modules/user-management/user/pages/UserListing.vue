<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle
    :name="t('user.list')"
    :show-back-button="false"
  >
    <template
      v-if="hasPermission(Permission.CREATE_USER)"
      #actionButton
    >
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
        :data-source="data"
        :columns
      >
        <template #fullName="{ row: user }">
          <div class="flex items-center">
            <UserAvatar />
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
          <div class="flex gap-2">
            <Button
              v-if="hasPermission(Permission.VIEW_USER_DETAILS)"
              :label="t('view')"
              icon="pi pi-eye"
              as="router-link"
              :to="{ name: AppRoute.User.details.name, params: { id: user.id } }"
            />
            <Button
              v-if="hasPermission(Permission.EDIT_USER)"
              :label="t('edit')"
              icon="pi pi-pen-to-square"
              as="router-link"
              :to="{ name: AppRoute.User.edit.name, params: { id: user.id } }"
            />
          </div>
        </template>
      </DataTable>
    </Card>
  </PageContent>  
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';

import {
    AddNewButton,
    Button,
    Card,
    DataTable,
    PageBreadcrumb,
    PageTitle,
    UserAvatar
} from '@/components';
import PageContent from '@/components/shared/PageContent.vue';
import { useTranslation } from '@/composables';
import { AppRoute, Permission } from '@/constants';
import type { BreadcrumbItemProps, ColumnProps } from '@/types';

import { useAuth } from '@/modules/auth/useAuth';
import UserStatus from '../components/UserStatus.vue';
import { getFetchUsersQueryKey, useFetchUsers } from '../userService';
import type { User } from '../userType';

const queryClient = useQueryClient();
const { t } = useTranslation();
const { hasPermission } = useAuth();

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
    title: '',
    minWidth: 80
  }
]);

const { data, isLoading } = useFetchUsers();

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchUsersQueryKey() });
});
</script>

<style scoped></style>
