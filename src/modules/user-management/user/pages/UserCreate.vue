<template>
  <Breadcrumb :items="breadcrumbItems" />
  <Title
    :name="t('user.addNew')"
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
        <Row>
          <Col :md="12">
            <Input
              required
              type="password"
              name="password"
              :label="t('password')"
            />
          </Col>
          <Col :md="12">
            <Input
              required
              type="password"
              name="confirmPassword"
              :label="t('confirmPassword')"
            />
          </Col>
        </Row>

        <div class="flex justify-end">
          <CancelButton />
          <SaveButton />
        </div>
      </Form>
    </Box>
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
import { createUser } from '../userService';
import { createUserValidationSchema } from '../userSchema';
import type { CreateUserForm } from '../userType';

const { t } = useI18n();
const { success } = useNotification();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  },
  {
    title: t('user.list'),
    to: AppRoute.User.path
  },
  {
    title: t('create'),
  },
]);

const { handleSubmit } = useForm<CreateUserForm>({
  validationSchema: toTypedSchema(createUserValidationSchema)
});

const { isPending, mutate } = useMutation({
  mutationFn: (values: CreateUserForm) => createUser(values),
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
