<template>
  <SkeletonPageListing v-if="isLoading" />
  <template v-else>
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

    <Box>
      <DataTable
        :loading="isLoading"
        :data
        :columns
      >
        <template #status="{ row: role }">
          <RoleStatus :status="role.status" />
        </template>

        <template #actions="{ row: role }">
          <RoleListingDropdownAction :role />
        </template>
      </DataTable>
    </Box>
  </template>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';

import { AddNewButton, Box, DataTable, PageBreadcrumb, PageTitle, SkeletonPageListing } from '@/components';
import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import type { BreadcrumbItemProps, ColumnProps } from '@/types';
import RoleListingDropdownAction from '../components/RoleListingDropdownAction.vue';
import RoleStatus from '../components/RoleStatus.vue';
import { getFetchRolesQueryKey, useFetchRoles } from '../roleService';
import type { Role } from '../roleType';

const queryClient = useQueryClient();
const { t } = useI18n();
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
    title: t('actions')
  }
]);

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchRolesQueryKey() });
});
</script>

<style scoped></style>
