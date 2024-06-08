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
        :type
        :show-password="type === 'password'"
        :placeholder
      />
    </el-form-item>
  </Field>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';

type InputProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

defineProps<InputProps>();
</script>

<style scoped>

</style>