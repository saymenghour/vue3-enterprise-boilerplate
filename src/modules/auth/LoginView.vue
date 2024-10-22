<template>
  <section class="h-full bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-8 md:space-y-8 sm:p-8">
          <div class="flex flex-col items-center justify-center">
            <h1 class="text-2xl xl:text-2xl font-extrabold">
              Welcome back!
            </h1>
            {{ t('signInToYourAccount') }}
          </div>

          <div>
            <Message
              v-if="isError"
              severity="error"
              class="mb-3"
            >
              {{ error?.message }}
            </Message>
            <Form @submit="onSubmit">
              <InputField
                required
                name="username"
                :label="t('username')"
                :placeholder="t('login.placeholder.username')"
              />
              <PasswordField
                required,
                name="password"
                :label="t('password')"
                :placeholder="t('login.placeholder.password')"
              />
              <Button
                type="submit"
                class="w-full mt-4"
                :loading="loading"
              >
                {{ t('signIn') }}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { useRoute } from 'vue-router';

import { AppRoute } from '@/constants';
import router from '@/router';

import { Button, Form, InputField, PasswordField } from '@/components';
import { useTranslation } from '@/composables';
import Message from 'primevue/message';
import { loginWithCredential } from './authenticationService';
import type { LoginForm } from './authenticationType';
import { loginSchema } from './loginSchema';

const { t } = useTranslation();
const route = useRoute();

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(loginSchema)
});

const { isPending: loading, isError, error, mutate } = useMutation({
  mutationFn: (credential: LoginForm) => loginWithCredential(credential),
  onSuccess: (response) => {
    if (response) {
      resetForm();
      if (route.query?.redirect) {
        router.push({ path: route.query.redirect as string, replace: true });
      } else {
        router.push({ name: AppRoute.Dashboard.name, replace: true });
      }
    }
  }
});

const onSubmit = handleSubmit(({ username, password }) => {
  mutate({ username, password });
});
</script>
