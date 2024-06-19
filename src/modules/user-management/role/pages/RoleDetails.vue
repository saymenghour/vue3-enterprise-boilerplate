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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';

import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import { Breadcrumb, Descriptions, Title, SkeletonPageDetails, Box, EditButton, Avatar } from '@/components';
import type { BreadcrumbItemProps, DescriptionsFieldProps } from '@/types';
import { fetchRolesDetailsApi } from '../roleApi';
import RoleStatus from '../components/RoleStatus.vue';

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
    title: t('details'),
  },
]);

const { isLoading, data } = useQuery({
  queryKey: ['useFetchRoleById', params.id],
  queryFn: () => fetchRolesDetailsApi(params.id as string)
});

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
          slotName: "status",
          label: t('status'),
        }
      ]
    }
  ];
});
</script>

<style scoped></style>
