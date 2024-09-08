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
    >
      <Textarea
        v-bind="componentField"
        :rows="rows ?? 3"
        :placeholder
        :maxlength
        :show-word-limit="!!maxlength"
      />
    </FormItem>
  </Field>
</template>

<script setup lang="ts">
import Textarea from 'primevue/textarea';
import { Field } from 'vee-validate';
import FormItem from '../ui/FormItem.vue';

type TextAreaProps = {
  name: string;
  label: string;
  maxlength?: string | number;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

defineProps<TextAreaProps>();
</script>

<style scoped>

</style>