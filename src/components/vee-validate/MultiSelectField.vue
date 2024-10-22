<template>
  <FormItem
    :name
    :label
    :required
    :error-message="errorMessage"
    :extra
  >
    <MultiSelect
      filter
      :display
      :model-value="value"
      :loading="loading"
      :options="options ?? []"
      :option-label="optionLabel"
      :option-value="optionValue"
      :invalid="!!errorMessage"
      :placeholder="loading ? t('loading') : placeholder"
      :disabled
      :size="size"
      @change="onSelectChange"
    />
  </FormItem>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import { useField } from 'vee-validate';

import { useTranslation } from '@/composables';
import MultiSelect from 'primevue/multiselect';
import FormItem from '../ui/FormItem.vue';

type MultiSelectProps = {
  display: 'comma' | 'chip';
  loading?: boolean;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  size?: 'large' | 'small';
  options: T[] | undefined;
  optionLabel: keyof T & string | ((item: T) => string);
  optionValue: keyof T & string | ((item: T) => string);
  extra?: string;
};

const { t } = useTranslation();

const props = withDefaults(defineProps<MultiSelectProps>(), {
  display: 'comma',
  size: 'small',
});
const { value, errorMessage, setValue } = useField(props.name);

function onSelectChange(event: { value: string }) {
  setValue(event.value);
}

</script>

<style scoped></style>
