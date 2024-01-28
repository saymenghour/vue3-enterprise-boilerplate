<template>
  <section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight">
            {{ t('label.signInToYourAccount') }}
          </h1>
          <div
            v-if="error"
            class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
              />
            </svg>
            <span class="sr-only">Info</span>
          </div>
          <form
            class="space-y-4 md:space-y-6"
            autocomplete="off"
            @submit="onSubmit"
          >
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {{ t('label.username') }}</label>
              <input
                id="username"
                v-model="username"
                :disabled="isLoading"
                autocomplete="off"
                name="username"
                class="border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :placeholder="t('placeholder.login.username')"
              >
              <span class="text-red-500 mt-1 text-xs block"> {{ errors.username }}</span>
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {{ t('label.password') }}</label>
              <input
                id="password"
                v-model="password"
                :disabled="isLoading"
                autocomplete="off"
                type="password"
                name="password"
                :placeholder="t('placeholder.login.password', { passwordLength: 4 })"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
              <span class="text-red-500 mt-1 text-xs block"> {{ errors.password }}</span>
              <div class="mt-2 flex items-center justify-end">
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {{ t('button.forgotYourPassword') }}</a>
              </div>
            </div>
            <button
              :disabled="isLoading"
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                v-if="isLoading"
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              {{ t('button.signIn') }}
            </button>
          </form>
        </div>
      </div>
      <div class="flex items-center justify-center mt-4">
        <span class="mr-2"> Theme: </span>
        <ThemeSwitcher />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useField, useForm } from 'vee-validate';
import { useMutation } from 'vue-query';
import { useRoute } from 'vue-router';

import { loginWithCredential } from './authenticationService';
import type { LoginForm } from './authenticationType';
import { loginSchema } from './loginSchema';

import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue';
import { AppRoute } from '@/constants';
import { useI18n } from '@/hooks';
import router from '@/router';
import { saveToken } from '@/services/localStorage';

const { t } = useI18n();
const route = useRoute();

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: toTypedSchema(loginSchema)
});

const { value: username } = useField('username');
const { value: password } = useField('password');

const { isLoading, error, mutate } = useMutation((credential: LoginForm) => loginWithCredential(credential), {
  onSuccess: (response) => {
    if (response) {
      const { accessToken, refreshToken, expiresAt, deviceId } = response.data;
      saveToken(accessToken, refreshToken, expiresAt, deviceId);
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
@/services/localStorage
