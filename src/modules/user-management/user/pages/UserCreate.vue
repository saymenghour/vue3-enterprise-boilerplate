<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle
    :name="t('user.addNew')"
  />

  <PageContent>
    <Form
      class="grid gap-4"
      @submit="onSubmit"
    >
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

      <PageContentSection :title="t('additionalInfo')">
        <Row>
          <Col :md="8">
            <BranchAutocomplete
              required
              name="branchCode"
              @change="onBranchChange"
            />
          </Col>
          <Col :md="8">
            <RoleAutocomplete
              required
              name="roleIds"
              :branch-code="values.branchCode"
            />
          </Col>
        </Row>
      </PageContentSection>

      <PageContentSection :title="t('loginInfo')">
        <Row>
          <Col :md="8">
            <InputField
              required
              name="username"
              :label="t('username')"
            />
          </Col>
          <Col :md="8">
            <InputField
              required
              type="password"
              name="password"
              :label="t('password')"
            />
          </Col>
          <Col :md="8">
            <InputField
              required
              type="password"
              name="confirmPassword"
              :label="t('confirmPassword')"
            />
          </Col>
        </Row>
      </PageContentSection>

      <div class="flex justify-end gap-2">
        <CancelButton />
        <SaveButton :loading="isPending" />
      </div>
    </Form>
  </PageContent>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { computed } from 'vue';

import {
  CancelButton,
  Col,
  Form,
  InputField,
  PageBreadcrumb,
  PageContent,
  PageContentSection,
  PageTitle,
  Row,
  SaveButton
} from '@/components';
import { useFormAsync, useTranslation } from '@/composables';
import { AppRoute } from '@/constants';
import BranchAutocomplete from '@/modules/branch/component/BranchAutocomplete.vue';
import type { BreadcrumbItemProps } from '@/types';
import RoleAutocomplete from '../../role/components/RoleAutocomplete.vue';
import { createUserValidationSchema } from '../userSchema';
import { useCreateUser } from '../userService';
import type { CreateUserForm } from '../userType';

const { t } = useTranslation();

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

const { handleSubmit, values, setFieldValue } = useFormAsync<CreateUserForm>({
  validationSchema: toTypedSchema(createUserValidationSchema)
});

const { isPending, mutate } = useCreateUser();

const onSubmit = handleSubmit((values) => {
  mutate(values);
});

function onBranchChange() {
  setFieldValue('roleIds', [], false);
}
</script>

<style scoped></style>
