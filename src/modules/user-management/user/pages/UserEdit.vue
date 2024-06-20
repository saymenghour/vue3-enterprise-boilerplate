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
          <UpdateButton :loading="isPending" />
        </div>
      </Form>
    </Box>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
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
  Section,
  Box,
  CancelButton,
  UpdateButton
} from '@/components';
import type { BreadcrumbItemProps } from '@/types';
import { useFetchUserById, useUpdateUser } from '../userService';
import { updateUserValidationSchema } from '../userSchema';
import type { EditUserForm } from '../userType';

const { t } = useI18n();
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

const { isLoading, data } = useFetchUserById(params.id as string);

const { handleSubmit } = useFormAsync<EditUserForm>({
  initialValues: data,
  validationSchema: toTypedSchema(updateUserValidationSchema)
});

const { isPending, mutate } = useUpdateUser(params.id as string);

const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<style scoped></style>
