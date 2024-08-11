<template>
  <Field
    v-slot="{ componentField, errorMessage }"
    :name
  >
    <FormItem
      :name
      :label
      :required
      :error-message="errorMessage"
      :extra
    >
      <Password
        v-bind="componentField"
        :aria-labelledby="name"
        :invalid="!!errorMessage"
        :placeholder
        :disabled
        :size="size ?? 'small'"
        toggle-mask
        fluid
        class="text-sm"
      />
    </FormItem>
  </Field>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';

import Password from 'primevue/password';
import FormItem from '../ui/FormItem.vue';

type InputProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  size?: 'large' | 'small';
  extra?: string;
};

defineProps<InputProps>();
</script>

<style scoped></style>
