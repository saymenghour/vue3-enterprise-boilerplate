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
          <UpdateButton />
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
import { useMutation, useQuery } from '@tanstack/vue-query';

import router from '@/router';
import { useFormAsync, useI18n, useNotification } from '@/composables';
import { AppRoute } from '@/constants';
import { Breadcrumb, Input, Title, Row, Col, Form,Box, CancelButton, UpdateButton } from '@/components';
import type { BreadcrumbItemProps } from '@/types';
import { updateRole } from '../roleService';
import { createAndUpdateRoleValidationSchema } from '../roleSchema';
import type { EditRoleForm } from '../roleType';
import { fetchRolesDetailsApi } from '../roleApi';

const { t } = useI18n();
const { success } = useNotification();
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

const { isLoading, data } = useQuery({
  queryKey: ['useFetchRoleById', params.id],
  queryFn: () => fetchRolesDetailsApi(params.id as string)
});

const { handleSubmit, errors } = useFormAsync<EditRoleForm>({
  initialValues: data,
  validationSchema: toTypedSchema(createAndUpdateRoleValidationSchema)
});

const { isPending, mutate } = useMutation({
  mutationFn: (values: EditRoleForm) => updateRole(values, params.id as string),
  onSuccess: (data) => {
    success(data?.message);
    router.push({ name: AppRoute.Role.name });
  }
});

const onSubmit = handleSubmit((values) => {
  mutate(values);
});

watch(errors, (newErrors) => {
  console.log(newErrors);
});
</script>

<style scoped></style>
