<template>
  <SkeletonPageDetails v-if="isLoading" />
  <template v-else>
    <Breadcrumb :items="breadcrumbItems" />
    <Title
      :name="data?.fullName"
      :show-back-button="true"
    >
      <EditButton
        :path="`./${data?.id}/edit`"
        :label="t('user.edit')"
      />
    </Title>
      
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
import { Breadcrumb, Descriptions, Title, SkeletonPageDetails, Box, EditButton } from '@/components';
import type { BreadcrumbItemProps, DescriptionsFieldProps } from '@/types';
import { fetchUsersDetailsApi } from '../userApi';

const { t } = useI18n();
const { params } = useRoute();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  },
  {
    title: t('user.list'),
    to: AppRoute.User.path
  },
  {
    title: t('details'),
  },
]);

const { isLoading, data } = useQuery({
  queryKey: ['useFetchUserById', params.id],
  queryFn: () => fetchUsersDetailsApi(params.id as string)
});

const fields = computed((): DescriptionsFieldProps[] => {
  const user = data.value;
  if (!user) {
    return [];
  }

  return [
    {
      label: t('personalInfo'),
      type: 'section',
      fields: [
        {
          label: t('fullName'),
          value: user.fullName
        },
        {
          label: t('fullNameKh'),
          value: user.fullNameKh
        },
        {
          label: t('username'),
          value: user.username
        },
        {
          label: t('email'),
          value: user.email
        },
        {
          label: t('status'),
          value: user.status
        }
      ]
    }
  ];
});
</script>

<style scoped></style>
