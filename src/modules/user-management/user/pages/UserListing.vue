<template>
  <SkeletonPageListing v-if="isLoading" />
  <template v-else>
    <Breadcrumb :items="breadcrumbItems" />
    <Title :name="t('label.userManagement.user.list')">
      <AddNewButton
        :path="AppRoute.User.addNew.path"
        :label="t('label.userManagement.user.addNew.title')"
      />
    </Title>
    <Box>
      <DataTable
        :data
        :columns
      />
    </Box>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { useI18n } from '@/hooks';
import { AppRoute } from '@/constants';
import { Breadcrumb, DataTable, SkeletonPageListing, Title, AddNewButton, Box } from '@/components';
import { fetchUsersApi } from '../userApi';
import type { User } from '../userType';
import type { Column } from '@/components/DataTable.vue';
import type { BreadcrumbItem } from '@/components/Breadcrumb.vue';

const { t } = useI18n();
const { data, isLoading } = useQuery({
  queryKey: ['fetchUsers'],
  queryFn: fetchUsersApi
});

const breadcrumbItems = computed<BreadcrumbItem[]>(() => [
  {
    title: t('label.userManagement.title')
  }
]);

const columns = computed<Column<User>[]>(() => [
  {
    title: t('label.fullName'),
    dataIndex: 'fullName'
  },
  {
    title: t('label.fullNameKh'),
    dataIndex: 'fullNameKh'
  },
  {
    title: t('label.email'),
    dataIndex: 'email'
  },
  {
    title: t('label.status'),
    dataIndex: 'status'
  },
  {
    title: t('label.actions'),
    dataIndex: 'status'
  }
]);
</script>

<style scoped></style>
