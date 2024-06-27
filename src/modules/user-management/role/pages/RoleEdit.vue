<template>
  <Breadcrumb :items="breadcrumbItems" />
  <Title
    :name="role?.nameEn"
    :loading="isLoading"
    :show-back-button="true"
  />

  <Form @submit="onSubmit">
    <Section>{{ t('role.info') }}</Section>
    <Box class="mb-5">
      <Row>
        <Col :md="8">
          <InputField
            required
            name="nameEn"
            :label="t('role.nameEn')"
          />
        </Col>
        <Col :md="8">
          <InputField
            required
            name="nameKh"
            :label="t('role.nameKh')"
          />
        </Col>
        <Col :md="8">
          <InputField
            required
            name="type"
            :label="t('role.roleType')"
          />
        </Col>
      </Row>
      <Row>
        <Col :md="24">
          <TextAreaField
            maxlength="255"
            :label="t('description')"
            name="description"
          />
        </Col>
      </Row>
    </Box>

    <RolePermission />

    <div class="flex justify-end mt-4">
      <CancelButton />
      <UpdateButton :loading="isSubmitting" />
    </div>
  </Form>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useQueryClient } from '@tanstack/vue-query';

import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import {
  Breadcrumb,
  InputField,
  Title,
  Row,
  Col,
  Form,
  Box,
  CancelButton,
  UpdateButton,
  Section,
  TextAreaField
} from '@/components';
import type { BreadcrumbItemProps } from '@/types';
import { getFetchRolePermissionIdsById, useFetchRolePermissionIdsById } from '../roleService';
import { useRoleEditForm } from '../composibles/useRoleEditForm';
import RolePermission from '../components/RolePermission.vue';

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
    title: t('edit')
  }
]);

const { isLoading, data: role } = useFetchRolePermissionIdsById(params.id as string);
const { isSubmitting, onSubmit } = useRoleEditForm(params.id as string, role);

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchRolePermissionIdsById(params.id as string) });
});
</script>

<style scoped></style>
