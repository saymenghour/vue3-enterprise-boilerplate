<template>
  <SkeletonPageListing v-if="isLoading" />
  <template v-else>
    <Breadcrumb :items="breadcrumbItems" />
    <Title :name="t('role.list')">
      <AddNewButton
        :path="AppRoute.Role.addNew.path"
        :label="t('role.addNew')"
      />
    </Title>

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
import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import { Breadcrumb, DataTable, SkeletonPageListing, Title, AddNewButton, Box, Avatar } from '@/components';
import type { BreadcrumbItemProps, ColumnProps } from '@/types';
import { fetchRolesApi } from '../roleApi';
import type { Role } from '../roleType';
import RoleListingDropdownAction from '../components/RoleListingDropdownAction.vue';
import RoleStatus from '../components/RoleStatus.vue';

const { t } = useI18n();
const { data, isLoading } = useQuery({
  queryKey: ['fetchRoles'],
  queryFn: fetchRolesApi
});

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  }
]);

const columns = computed<ColumnProps<Role>[]>(() => [
  {
    title: t('role.nameEn'),
    dataIndex: 'nameEn',
  },
  {
    title: t('role.nameKh'),
    dataIndex: 'nameKh',
  },
  {
    title: t('role.roleType'),
    dataIndex: 'type',
  },
  {
    key: 'status',
    title: t('status'),
  },
  {
    key: 'actions',
    title: t('actions'),
  }
]);
</script>

<style scoped></style>
