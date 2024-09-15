<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle
    :name="t('role.list')"
    :show-back-button="false"
  >
    <template #actionButton>
      <AddNewButton
        :path="AppRoute.Role.addNew.path"
        :label="t('role.addNew')"
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
        <template #status="{ row: role }">
          <RoleStatus :status="role.status" />
        </template>
        
        <template #actions="{ row: role }">
          <div class="flex gap-2">
            <Button
              :label="t('view')"
              icon="pi pi-eye"
              as="router-link"
              :to="{ name: AppRoute.Role.details.name, params: { id: role.id } }"
            />
            <Button
              label="Edit"
              icon="pi pi-pen-to-square"
              as="router-link"
              :to="{ name: AppRoute.Role.edit.name, params: { id: role.id } }"
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

import { AddNewButton, Button, Card, DataTable, PageBreadcrumb, PageContent, PageTitle } from '@/components';
import { useTranslation } from '@/composables';
import { AppRoute } from '@/constants';
import type { BreadcrumbItemProps, ColumnProps } from '@/types';
import RoleStatus from '../components/RoleStatus.vue';
import { getFetchRolesQueryKey, useFetchRoles } from '../roleService';
import type { Role } from '../roleType';

const queryClient = useQueryClient();
const { t } = useTranslation();
const { data, isLoading } = useFetchRoles();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  }
]);

const columns = computed<ColumnProps<Role>[]>(() => [
  {
    title: t('role.nameEn'),
    dataIndex: 'nameEn'
  },
  {
    title: t('role.nameKh'),
    dataIndex: 'nameKh'
  },
  {
    title: t('role.roleType'),
    dataIndex: 'type'
  },
  {
    key: 'status',
    title: t('status')
  },
  {
    key: 'actions',
    title: ''
  }
]);

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchRolesQueryKey() });
});
</script>

<style scoped></style>
