<template>
  <SkeletonPageDetails v-if="isLoading" />
  <template v-else>
    <Breadcrumb :title="t('label.userManagement.title')" />
    <Title :name="t('label.userManagement.user.title')" />
    <Descriptions :fields />
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import { useI18n } from '@/hooks';
import { Breadcrumb, Descriptions, Title, SkeletonPageDetails } from '@/components';
import type { DescriptionsField } from '@/components/Descriptions.vue';
import { fetchUsersDetailsApi } from '../userApi';

const { t } = useI18n();
const { params } = useRoute();
const { isLoading, data } = useQuery({
    queryKey: ['useFetchUserById', params.id],
    queryFn: () => fetchUsersDetailsApi(params.id as string)
  });

const fields = computed((): DescriptionsField[] => {
  const user = data.value;
  if (!user) {
    return [];
  }

  return [
    {
      label: 'User Information',
      type: 'section',
      fields: [
        {
          label: t('label.fullNameEn'),
          value: user.fullNameEn,
        },
        {
          label: t('label.fullNameKh'),
          value: user.fullNameKh,
        },
        {
          label: t('label.username'),
          value: user.username,
        },
        {
          label: t('label.email'),
          value: user.email,
        },
        {
          label: t('label.status'),
          value: user.status,
        },
      ],
    },
  ];
});
</script>

<style scoped></style>