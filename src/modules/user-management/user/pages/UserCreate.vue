<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle
    :name="t('user.addNew')"
    :show-back-button="true"
  />

  <div class="flex">
    <Box class="xl:w-9/12 md:w-full">
      <Form @submit="onSubmit">
        <Section>{{ t('personalInfo') }}</Section>
        <Row>
          <Col :md="12">
            <InputField
              required
              name="lastName"
              :label="t('lastName')"
            />
          </Col>
          <Col :md="12">
            <InputField
              required
              name="firstName"
              :label="t('firstName')"
            />
          </Col>
          <Col :md="12">
            <InputField
              name="lastNameKh"
              :label="t('lastNameKh')"
            />
          </Col>
          <Col :md="12">
            <InputField
              name="firstNameKh"
              :label="t('firstNameKh')"
            />
          </Col>
          <Col :md="12">
            <InputField
              name="phoneNumber"
              :label="t('phoneNumber')"
            />
          </Col>
          <Col :md="12">
            <InputField
              name="email"
              :label="t('email')"
            />
          </Col>
        </Row>

        <Section>{{ t('loginInfo') }}</Section>
        <Row>
          <!-- <Col :md="12"> -->
          <Col>
            <InputField
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
        <Row>
          <Col :md="12">
            <InputField
              required
              type="password"
              name="password"
              :label="t('password')"
            />
          </Col>
          <Col :md="12">
            <InputField
              required
              type="password"
              name="confirmPassword"
              :label="t('confirmPassword')"
            />
          </Col>
        </Row>

        <div class="flex justify-end">
          <CancelButton />
          <SaveButton :loading="isPending" />
        </div>
      </Form>
    </Box>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
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
  Section
} from '@/components';
import { useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import type { BreadcrumbItemProps } from '@/types';
import { createUserValidationSchema } from '../userSchema';
import { useCreateUser } from '../userService';
import type { CreateUserForm } from '../userType';

const { t } = useI18n();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  },
  {
    title: t('user.list'),
    to: AppRoute.User.path
  },
  {
    title: t('create')
  }
]);

const { handleSubmit } = useForm<CreateUserForm>({
  validationSchema: toTypedSchema(createUserValidationSchema)
});

const { isPending, mutate } = useCreateUser();

const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<style scoped></style>
