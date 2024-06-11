<template>
  <SkeletonPageDetails v-if="isLoading" />
  <template v-else>
    <Breadcrumb :items="breadcrumbItems" />
    <Title :name="data?.fullName" />
    <Box>
      <Descriptions :fields />
    </Box>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';

import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import { Breadcrumb, Descriptions, Title, SkeletonPageDetails, Box } from '@/components';
import type { BreadcrumbItemProps, DescriptionsFieldProps } from '@/types';
import { fetchUsersDetailsApi } from '../userApi';

const { t } = useI18n();
const { params } = useRoute();
const { isLoading, data } = useQuery({
  queryKey: ['useFetchUserById', params.id],
  queryFn: () => fetchUsersDetailsApi(params.id as string)
});

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('label.userManagement.title')
  },
  {
    title: t('label.userManagement.user.list'),
    to: AppRoute.User.path
  }
]);

const fields = computed((): DescriptionsFieldProps[] => {
  const user = data.value;
  if (!user) {
    return [];
  }

  return [
    {
      label: t('label.personalInfo'),
      type: 'section',
      fields: [
        {
          label: t('label.fullName'),
          value: user.fullName
        },
        {
          label: t('label.fullNameKh'),
          value: user.fullNameKh
        },
        {
          label: t('label.username'),
          value: user.username
        },
        {
          label: t('label.email'),
          value: user.email
        },
        {
          label: t('label.status'),
          value: user.status
        }
      ]
    }
  ];
});
</script>

<style scoped></style>
