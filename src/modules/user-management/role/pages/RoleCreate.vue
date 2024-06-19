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
          <SaveButton />
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
import router from '@/router';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { useMutation } from '@tanstack/vue-query';

import { useI18n, useNotification } from '@/composables';
import { AppRoute } from '@/constants';
import { Breadcrumb,Input, Title, Row, Col, Form, Section, Content, Box, SaveButton, CancelButton } from '@/components';
import type { BreadcrumbItemProps } from '@/types';
import { createRole } from '../roleService';
import { createAndUpdateRoleValidationSchema } from '../roleSchema';
import type { CreateRoleForm } from '../roleType';

const { t } = useI18n();
const { success } = useNotification();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  },
  {
    title: t('role.list'),
    to: AppRoute.Role.path
  },
  {
    title: t('create'),
  },
]);

const { handleSubmit } = useForm<CreateRoleForm>({
  validationSchema: toTypedSchema(createAndUpdateRoleValidationSchema)
});

const { isPending, mutate } = useMutation({
  mutationFn: (values: CreateRoleForm) => createRole(values),
  onSuccess: (data) => {
    success(data?.message);
    router.push({ name: AppRoute.Role.name });
  }
});

const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<style scoped></style>
