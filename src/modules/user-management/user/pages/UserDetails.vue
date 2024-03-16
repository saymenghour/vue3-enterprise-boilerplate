<template>
  <SkeletonPageDetails v-if="isLoading" />
  <template v-else>
    <Breadcrumb title="User Management" />
    <Title :name="t('label.userManagement.user.title')" />
    <Descriptions :fields />
  </template>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useFetchUserById } from '@/modules/user-management/user/userService';
import { SkeletonPageDetails } from '@/components/ui/skeleton';
import { Breadcrumb, Descriptions, Title } from '@/components';
import type { DescriptionsField } from '@/components/shared/Descriptions.vue';
import { useI18n } from '@/hooks';

const { t } = useI18n();
const { params } = useRoute();
const { isLoading, data } = useFetchUserById(params.id as string);

const fields = ref<DescriptionsField[]>([]);

watchEffect(() => {
  fields.value = [
    {
      label: 'User Information',
      type: 'section',
      fields: [
        {
          label: 'Full Name (EN)',
          value: data.value?.fullNameEn
        },
        {
          label: 'Full Name (KH)',
          value: data.value?.fullNameKh
        },
        {
          label: 'Username',
          value: data.value?.username
        },
        {
          label: 'Email',
          value: data.value?.email
        },
        {
          label: 'Status',
          value: data.value?.status
        },
      ]
    }
  ];
});
</script>

<style scoped></style>