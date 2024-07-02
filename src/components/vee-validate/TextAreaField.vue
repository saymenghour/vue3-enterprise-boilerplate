<template>
  <Field
    v-slot="{ componentField, errorMessage }"
    :name
  >
    <el-form-item
      :label
      :required
      :error="errorMessage"
    >
      <el-input
        v-bind="componentField"
        type="textarea"
        :placeholder
        :autosize="{ minRows: 4 }"
        :maxlength
        :show-word-limit="!!maxlength"
      />
    </el-form-item>
  </Field>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';

type TextAreaProps = {
  name: string;
  label: string;
  maxlength?: string | number;
  required?: boolean;
  placeholder?: string;
};

defineProps<TextAreaProps>();
</script>

<style scoped>

</style>