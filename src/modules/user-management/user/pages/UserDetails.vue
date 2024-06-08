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
import { useI18n } from '@/hooks';
import { Breadcrumb, Descriptions, Title, SkeletonPageDetails, Box } from '@/components';
import type { DescriptionsField } from '@/components/Descriptions.vue';
import { fetchUsersDetailsApi } from '../userApi';
import type { BreadcrumbItem } from '@/components/Breadcrumb.vue';
import { AppRoute } from '@/constants';

const { t } = useI18n();
const { params } = useRoute();
const { isLoading, data } = useQuery({
  queryKey: ['useFetchUserById', params.id],
  queryFn: () => fetchUsersDetailsApi(params.id as string)
});

const breadcrumbItems = computed<BreadcrumbItem[]>(() => [
  {
    title: t('label.userManagement.title')
  },
  {
    title: t('label.userManagement.user.list'),
    to: AppRoute.User.path
  }
]);

const fields = computed((): DescriptionsField[] => {
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
