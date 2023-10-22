<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            {{ t('label.signInToYourAccount') }}
          </h1>
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
                autocomplete="off"
                name="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :placeholder="t('placeholder.login.username')"
              >
              <span class="text-red-500 mt-1 text-xs block">{{
                errors.username
              }}</span>
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
                autocomplete="off"
                type="password"
                name="password"
                :placeholder="t('placeholder.login.password', { passwordLength: 4 })"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
              <span class="text-red-500 mt-1 text-xs block">{{
                errors.password
              }}</span>
              <div class="mt-2 flex items-center justify-end">
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {{ t('button.forgotYourPassword') }}</a>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {{ t('button.signIn') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useI18n } from '@/hooks';

const { t } = useI18n();

const loginSchema = toTypedSchema(
  z.object({
    username: z.string({
      // required_error: "Username is required"
      required_error: t('placeholder.login.username')
    }).min(4).trim(),
    password: z.string({
      // required_error: "Password is required"
      required_error: t('placeholder.login.password', { passwordLength: 4 })
    }).min(4).trim(),
  })
);

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: loginSchema,
});

const { value: username } = useField('username');
const { value: password } = useField('password');

const onSubmit = handleSubmit((values) => {
  console.log(values);
  // mutate({
  //   username: values.username,
  //   password: values.password,
  // });
  resetForm();
});

</script>