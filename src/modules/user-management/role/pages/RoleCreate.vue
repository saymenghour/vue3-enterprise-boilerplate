<template>
  <Breadcrumb :items="breadcrumbItems" />
  <Title
    :name="t('role.addNew')"
    :show-back-button="true"
  />

  <div class="">
    <Form @submit="onSubmit">
      <Box class="mb-5">
        <Row>
          <Col :md="8">
            <Input
              required
              name="nameEn"
              :label="t('role.nameEn')"
            />
          </Col>
          <Col :md="8">
            <Input
              required
              name="nameKh"
              :label="t('role.nameKh')"
            />
          </Col>
          <Col :md="8">
            <Input
              required
              name="type"
              :label="t('role.roleType')"
            />
          </Col>
        </Row>
        <Row>
          <Col :md="24">
            <Input
              name="description"
              :label="t('description')"
            />
          </Col>
        </Row>

        <div class="flex justify-end">
          <CancelButton />
          <SaveButton :loading="isPending" />
        </div>
      </Box>

      <!-- <Box>
        <Section>{{ t('permissions') }}</Section>

        <div class="flex justify-end">
          <CancelButton />
          <SaveButton />
        </div>
      </Box> -->
    </Form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import {
  Breadcrumb,
  Input,
  Title,
  Row,
  Col,
  Form,
  Box,
  SaveButton,
  CancelButton
} from '@/components';
import type { BreadcrumbItemProps } from '@/types';
import { roleValidationSchema } from '../roleSchema';
import { useCreateRole } from '../roleService';
import type { RoleForm } from '../roleType';

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

const { handleSubmit } = useForm<RoleForm>({
  validationSchema: toTypedSchema(roleValidationSchema)
});

const { isPending, mutate } = useCreateRole();

const onSubmit = handleSubmit((formValues) => {
  mutate(formValues);
});
</script>

<style scoped></style>
