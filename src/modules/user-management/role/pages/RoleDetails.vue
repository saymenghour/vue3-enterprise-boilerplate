<template>
  <SkeletonPageDetails v-if="isLoading" />
  <template v-else>
    <Breadcrumb :items="breadcrumbItems" />
    <Title
      :name="data?.nameEn"
      :show-back-button="true"
    >
      <EditButton
        :path="`./${data?.id}/edit`"
        :label="t('role.edit')"
      />
    </Title>

    <Box>
      <Descriptions :fields>
        <template #status>
          <RoleStatus :status="data?.status" />
        </template>
      </Descriptions>
    </Box>
  </template>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useQueryClient } from '@tanstack/vue-query';

import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import {
  Breadcrumb,
  Descriptions,
  Title,
  SkeletonPageDetails,
  Box,
  EditButton
} from '@/components';
import type { BreadcrumbItemProps, DescriptionsFieldProps } from '@/types';
import RoleStatus from '../components/RoleStatus.vue';
import { getFetchRoleByIdQueryKey, useFetchRoleById } from '../roleService';

const queryClient = useQueryClient();
const { t } = useI18n();
const { params } = useRoute();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  },
  {
    title: t('role.list'),
    to: AppRoute.Role.path
  },
  {
    title: t('details')
  }
]);

const { isLoading, data } = useFetchRoleById(params.id as string);

const fields = computed((): DescriptionsFieldProps[] => {
  const role = data.value;
  if (!role) {
    return [];
  }

  return [
    {
      label: t('role.info'),
      type: 'section',
      fields: [
        {
          label: t('role.nameEn'),
          value: role.nameEn
        },
        {
          label: t('role.nameKh'),
          value: role.nameKh
        },
        {
          label: t('description'),
          value: role.description
        },
        {
          slotName: 'status',
          label: t('status')
        }
      ]
    }
  ];
});

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchRoleByIdQueryKey(params.id as string) });
});
</script>

<style scoped></style>
