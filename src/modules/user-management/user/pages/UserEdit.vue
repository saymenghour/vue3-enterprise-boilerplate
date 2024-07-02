<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle
    :name="data?.fullName"
    :loading="isLoading"
    :show-back-button="true"
  />

  <div class="flex">
    <Box class="xl:w-9/12 md:w-full">
      <Form @submit="onSubmit">
        <PageContentSection :title="t('personalInfo')">
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
        </PageContentSection>
      
        <PageContentSection :title="t('loginInfo')">
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
        </PageContentSection>

        <div class="flex justify-end">
          <CancelButton />
          <UpdateButton :loading="isPending" />
        </div>
      </Form>
    </Box>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import {
  Box,
  CancelButton,
  Col,
  Form,
  InputField,
  PageBreadcrumb,
  PageContentSection,
  PageTitle,
  Row,
  UpdateButton
} from '@/components';
import { useFormAsync, useI18n } from '@/composables';
import { AppRoute } from '@/constants';
import type { BreadcrumbItemProps } from '@/types';
import { updateUserValidationSchema } from '../userSchema';
import { useFetchUserById, useUpdateUser } from '../userService';
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
