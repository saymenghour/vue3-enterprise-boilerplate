<template>
  <SkeletonPageDetails v-if="isLoading" />
  <template v-else>
    <PageBreadcrumb :items="breadcrumbItems" />
    <PageTitle
      :name="data?.fullName"
      :show-back-button="true"
    >
      <template #actionButton>
        <EditButton
          :path="`./${data?.id}/edit`"
          :label="t('user.edit')"
        />
      </template>
    </PageTitle>

    <Box class="mb-5 flex">
      <UserDetailsInfo :user="data" />
    </Box>

    <Box>
      <Descriptions :fields>
        <template #status>
          <UserStatus :status="data?.status" />
        </template>
      </Descriptions>
    </Box>
  </template>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import {
  Box,
  Descriptions,
  EditButton,
  PageBreadcrumb,
  PageTitle,
  SkeletonPageDetails
} from '@/components';
import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import type { BreadcrumbItemProps, DescriptionsFieldProps } from '@/types';
import UserDetailsInfo from '../components/UserDetailsInfo.vue';
import UserStatus from '../components/UserStatus.vue';
import { getFetchUserByIdQueryKey, useFetchUserById } from '../userService';

const queryClient = useQueryClient();
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
    title: t('details')
  }
]);

const { isLoading, data } = useFetchUserById(params.id as string);

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
          slotName: 'status',
          label: t('status')
          // value: user.status
        }
      ]
    }
  ];
});

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchUserByIdQueryKey(params.id as string) });
});
</script>

<style scoped></style>
