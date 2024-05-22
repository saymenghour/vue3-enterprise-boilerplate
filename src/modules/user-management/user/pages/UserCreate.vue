<template>
  <Breadcrumb :title="t('label.userManagement.title')" />
  <Title :name="t('label.userManagement.user.addNew.title')" />

  <div class="flex items-center justify-center">
    <Form
      class="lg:w-3/4 md:w-full"
      @submit="onSubmit"
    >
      <Section>{{ t('label.personalInfo') }}</Section>
      <Row>
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
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useMutation } from '@tanstack/vue-query';
import { z } from 'zod';
import { useForm } from 'vee-validate';
import { Breadcrumb, Button, Input, Title, Row, Col, Form, Section } from '@/components';
import { useI18n } from '@/hooks';
import { createUser } from "../userService";
import type { CreateUser } from "../userType";

const { t } = useI18n();

const formSchema = toTypedSchema(z
    .object({
      lastNameKh: z.string().max(50).trim(),
      firstNameKh: z.string().max(50).trim(),
      lastName: z.string().max(35).trim(),
      firstName: z.string().max(35).trim(),
      phoneNumber: z.string().max(15).trim().optional(),
      email: z.string().email().max(50).trim().optional(),
      username: z
        .string()
        .min(4, { message: 'Username must be at least 4 characters long.' })
        .max(35, { message: 'Username must be no more than 35 characters long.' })
        .refine((value) => !value.includes(' '), { message: 'Username cannot contain spaces.' })
        .refine((value) => /^[a-zA-Z0-9.]+$/.test(value), { message: 'Username can only contain letters, numbers, and dots.' }),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .max(50, 'Password must be no more than 50 characters long.')
        .regex(/[a-zA-Z]/, 'Password must contain at least one letter.')
        .regex(/\d/, 'Password must contain at least one number.')
        .trim(),
      confirmPassword: z
        .string()
        .min(8, 'Confirm password must be at least 8 characters long.')
        .max(50, 'Confirm password must be no more than 50 characters long.')
        .regex(/[a-zA-Z]/, 'Confirm password must contain at least one letter.')
        .regex(/\d/, 'Confirm password must contain at least one number.')
        .trim()
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match.",
      path: ['confirmPassword']
    })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema
});

const { isPending, mutate } = useMutation({
  mutationFn: (values: CreateUser) => createUser(values),
});

const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<style scoped></style>
