<template>
  <Field
    v-slot="{ componentField }"
    :name="name"
  >
    <el-checkbox
      v-bind="componentField"
      :label
    />
  </Field>
</template>

<script setup lang="ts">
type CheckboxProps = {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
};

defineProps<CheckboxProps>();
</script>

<style scoped></style>
