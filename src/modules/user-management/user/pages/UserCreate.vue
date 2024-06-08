<template>
  <Breadcrumb :items="breadcrumbItems" />
  <Title :name="t('label.userManagement.user.addNew.title')" />

  <div class="flex">
    <Box class="xl:w-9/12 md:w-full">
      <Form @submit="onSubmit">
        <Section>{{ t('label.personalInfo') }}</Section>
        <Row>
          <Col :md="12">
            <Input
              required
              name="lastName"
              :label="t('label.lastName')"
            />
          </Col>
          <Col :md="12">
            <Input
              required
              name="firstName"
              :label="t('label.firstName')"
            />
          </Col>
          <Col :md="12">
            <Input
              name="lastNameKh"
              :label="t('label.lastNameKh')"
            />
          </Col>
          <Col :md="12">
            <Input
              name="firstNameKh"
              :label="t('label.firstNameKh')"
            />
          </Col>
          <Col :md="12">
            <Input
              name="phoneNumber"
              :label="t('label.phoneNumber')"
            />
          </Col>
          <Col :md="12">
            <Input
              name="email"
              :label="t('label.email')"
            />
          </Col>
        </Row>

        <Section>{{ t('label.loginInfo') }}</Section>
        <Row>
          <!-- <Col :md="12"> -->
          <Col>
            <Input
              required
              name="username"
              :label="t('label.username')"
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
              :label="t('label.password')"
            />
          </Col>
          <Col :md="12">
            <Input
              required
              type="password"
              name="confirmPassword"
              :label="t('label.confirmPassword')"
            />
          </Col>
        </Row>

        <Button
          type="submit"
          :loading="isPending"
        >
          {{ t('button.submit') }}
        </Button>
      </Form>
    </Box>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { useMutation } from '@tanstack/vue-query';
import { Breadcrumb, Button, Input, Title, Row, Col, Form, Section, Content, Box } from '@/components';
import { useI18n, useNotification } from '@/hooks';
import { AppRoute } from '@/constants';
import { createUser } from '../userService';
import { createUserValidationSchema } from '../userSchema';
import type { CreateUser } from '../userType';
import { computed } from 'vue';
import type { BreadcrumbItem } from '@/components/Breadcrumb.vue';

const { t } = useI18n();
const { success } = useNotification();

const breadcrumbItems = computed<BreadcrumbItem[]>(() => [
  {
    title: t('label.userManagement.title')
  },
  {
    title: t('label.userManagement.user.list'),
    to: AppRoute.User.path
  }
]);

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(createUserValidationSchema)
});

const { isPending, mutate } = useMutation({
  mutationFn: (values: CreateUser) => createUser(values),
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
