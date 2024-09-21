<template>
  <FormItem
    :name
    :label
    :required
    :error-message="errorMessage"
    :extra
  >
    <Select
      :model-value="value"
      :loading="loading"
      :options="options ?? []"
      :option-label="optionLabel"
      :option-value="optionValue"
      :invalid="!!errorMessage"
      :placeholder="loading ? t('loading') : placeholder"
      :disabled
      :size="size ?? 'small'"
      @change="onChange"
    />
  </FormItem>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import Select from 'primevue/select';
import { useField } from 'vee-validate';

import { useTranslation } from '@/composables';
import FormItem from '../ui/FormItem.vue';

type SelectProps = {
  loading?: boolean;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  size?: 'large' | 'small';
  options: T[] | undefined;
  optionLabel: keyof T | ((item: T) => string);
  optionValue: keyof T | ((item: T) => string);
  extra?: string;
};

const emit = defineEmits<{
  change: [id: string];
}>();

const props = defineProps<SelectProps>();

const { t } = useTranslation();
const { value, errorMessage, setValue } = useField(props.name);

function onChange(event: { value: string }) {
  setValue(event.value);
  emit('change', event.value);
}

</script>

<style scoped></style>
