<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle :name="data?.fullName">
    <template
      v-if="hasPermission(Permission.EDIT_USER)"
      #actionButton
    >
      <EditButton
        :path="`./${data?.id}/edit`"
        :label="t('user.edit')"
      />
    </template>
  </PageTitle>

  <PageContent>
    <UserDetailsInfo :user="data" />

    <PageContentSection :title="t('personalInfo')">
      <Descriptions :fields>
        <template #status>
          <UserStatus :status="data?.status" />
        </template>
      </Descriptions>
    </PageContentSection>

    <PageContentSection :title="t('loginInfo')">
      <Descriptions :fields="[{ label: t('username'), value: data?.username }]" />
    </PageContentSection>
  </PageContent>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import {
  Descriptions,
  EditButton,
  PageBreadcrumb,
  PageContent,
  PageContentSection,
  PageTitle
} from '@/components';
import { useTranslation } from '@/composables';
import { useAuthorization } from '@/composables/useAuthorization';
import { AppRoute, Permission } from '@/constants';
import type { BreadcrumbItemProps, DescriptionsFieldProps } from '@/types';
import UserDetailsInfo from '../components/UserDetailsInfo.vue';
import UserStatus from '../components/UserStatus.vue';
import { getFetchUserByIdQueryKey, useFetchUserById } from '../userService';

const queryClient = useQueryClient();
const { t } = useTranslation();
const { params } = useRoute();
const { hasPermission } = useAuthorization();

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

const { data } = useFetchUserById(params.id as string);

const fields = computed((): DescriptionsFieldProps[] => {
  const user = data.value;
  if (!user) {
    return [];
  }

  return [
    {
      label: t('personalInfo'),
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
    },
  ];
});

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchUserByIdQueryKey(params.id as string) });
});
</script>

<style scoped></style>
