<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle
    :name="t('role.addNew')"
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
            name="description"
            :label="t('description')"
          />
        </Col>
      </Row>
    </Box>

    <RolePermission />

    <div class="flex justify-end mt-4">
      <CancelButton />
      <SaveButton :loading="isSubmitting" />
    </div>
  </Form>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import {
  Box,
  CancelButton,
  Col,
  Form,
  InputField,
  PageBreadcrumb,
  PageTitle,
  Row,
  SaveButton,
  Section,
  TextAreaField
} from '@/components';
import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import type { BreadcrumbItemProps } from '@/types';
import RolePermission from '../components/RolePermission.vue';
import { useRoleCreateForm } from '../composibles/useRoleCreateForm';

const { t } = useI18n();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  },
  {
    title: t('role.list'),
    to: AppRoute.Role.path
  },
  {
    title: t('create')
  }
]);

const { onSubmit, isSubmitting } = useRoleCreateForm();
</script>

<style scoped></style>
