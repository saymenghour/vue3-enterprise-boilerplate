<template>
  <Breadcrumb :items="breadcrumbItems" />
  <Title
    :name="data?.fullName"
    :loading="isLoading"
    :show-back-button="true"
  />

  <div class="flex">
    <Box class="xl:w-9/12 md:w-full">
      <Form @submit="onSubmit">
        <Section>{{ t('personalInfo') }}</Section>
        <Row>
          <Col :md="12">
            <Input
              required
              name="lastName"
              :label="t('lastName')"
            />
          </Col>
          <Col :md="12">
            <Input
              required
              name="firstName"
              :label="t('firstName')"
            />
          </Col>
          <Col :md="12">
            <Input
              name="lastNameKh"
              :label="t('lastNameKh')"
            />
          </Col>
          <Col :md="12">
            <Input
              name="firstNameKh"
              :label="t('firstNameKh')"
            />
          </Col>
          <Col :md="12">
            <Input
              name="phoneNumber"
              :label="t('phoneNumber')"
            />
          </Col>
          <Col :md="12">
            <Input
              name="email"
              :label="t('email')"
            />
          </Col>
        </Row>

        <Section>{{ t('loginInfo') }}</Section>
        <Row>
          <!-- <Col :md="12"> -->
          <Col>
            <Input
              required
              name="username"
              :label="t('username')"
            />
          </Col>
          <!-- <Col
          :md="12"
        >
          <div class="flex items-center h-full">
            <el-checkbox
              label="Use email as a username"
              class="mt-2"
            />
          </div>
        </Col> -->
        </Row>

        <div class="flex justify-end">
          <CancelButton />
          <UpdateButton />
        </div>
      </Form>
    </Box>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { toTypedSchema } from '@vee-validate/zod';
import { useMutation, useQuery } from '@tanstack/vue-query';

import router from '@/router';
import { useFormAsync, useI18n, useNotification } from '@/composables';
import { AppRoute } from '@/constants';
import { Breadcrumb, Input, Title, Row, Col, Form, Section, Box, CancelButton, UpdateButton } from '@/components';
import type { BreadcrumbItemProps } from '@/types';
import { updateUser } from '../userService';
import { updateUserValidationSchema } from '../userSchema';
import type { EditUserForm } from '../userType';
import { fetchUsersDetailsApi } from '../userApi';

const { t } = useI18n();
const { success } = useNotification();
const { params } = useRoute();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  },
  {
    title: t('user.list'),
    to: AppRoute.User.path
  },
  {
    title: t('edit')
  }
]);

const { isLoading, data } = useQuery({
  queryKey: ['useFetchUserById', params.id],
  queryFn: () => fetchUsersDetailsApi(params.id as string)
});

const { handleSubmit } = useFormAsync<EditUserForm>({
  initialValues: data,
  validationSchema: toTypedSchema(updateUserValidationSchema)
});

const { isPending, mutate } = useMutation({
  mutationFn: (values: EditUserForm) => updateUser(values, params.id as string),
  onSuccess: (data) => {
    success(data?.message);
    router.push({ name: AppRoute.User.name });
  }
});

const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<style scoped></style>
