<template>
  <SkeletonPageDetails v-if="isLoading" />
  <template v-else>
    <Breadcrumb :title="t('label.userManagement.title')" />
    <Title :name="t('label.userManagement.user.title')" />
    <Descriptions :fields />
  </template>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useFetchUserById } from '@/modules/user-management/user/userService';
import { SkeletonPageDetails } from '@/lib/shadcn/ui/skeleton';
import { Breadcrumb, Descriptions, Title } from '@/components';
import type { DescriptionsField } from '@/components/shared/Descriptions.vue';
import { useI18n } from '@/hooks';

const { t } = useI18n();
const { params } = useRoute();
const { isLoading, data } = useFetchUserById(params.id as string);

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