<template>
  <Breadcrumb :items="breadcrumbItems" />
  <Title
    :name="data?.nameEn"
    :loading="isLoading"
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
          <UpdateButton :loading="isPending" />
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
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { toTypedSchema } from '@vee-validate/zod';

import { useFormAsync, useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import {
  Breadcrumb,
  Input,
  Title,
  Row,
  Col,
  Form,
  Box,
  CancelButton,
  UpdateButton
} from '@/components';
import type { BreadcrumbItemProps } from '@/types';
import { useFetchRolePermissionIdsById, useUpdateRole } from '../roleService';
import { createAndUpdateRoleValidationSchema } from '../roleSchema';
import type { EditRoleForm } from '../roleType';

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

const { isLoading, data } = useFetchRolePermissionIdsById(params.id as string);

const { handleSubmit } = useFormAsync<EditRoleForm>({
  initialValues: data,
  validationSchema: toTypedSchema(createAndUpdateRoleValidationSchema)
});

const { isPending, mutate } = useUpdateRole(params.id as string);

const onSubmit = handleSubmit((values) => {
  mutate(values);
});

watch(data, (newData) => {
  console.log(newData);
});
</script>

<style scoped></style>
