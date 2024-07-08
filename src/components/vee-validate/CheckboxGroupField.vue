<template>
  <section class="flex justify-between">
    <el-checkbox
      v-model="selectAll"
      :indeterminate="indeterminate"
      class="w-full"
      @change="handleCheckAllChange"
    >
      {{ label ??t('selectAll') }}
    </el-checkbox>
  </section>
  <Divider class="!my-2" />

  <el-checkbox-group
    v-model="value"
    class="grid grid-cols-1"
    @change="handleCheckedChange"
  >
    <Checkbox
      v-for="item in options"
      :key="item[optionValueKey as string]"
      :value="item[optionValueKey as string]"
      :label="item[optionLabelKey as string]"
      class="!mr-0"
    />
  </el-checkbox-group>
</template>

<script setup lang="ts" generic="T extends Record<string, string | number>">
import Divider from '@/components/ui/Divider.vue';
import { useTranslation } from '@/composables';
import { useField } from 'vee-validate';
import { ref, watch } from 'vue';
import Checkbox from '../ui/Checkbox.vue';

type CheckboxGroupFieldProps<T> = {
  optionLabelKey: keyof T;
  optionValueKey: keyof T;
  label?: string | undefined;
  name: string;
  options: T[];
}

const { name, optionValueKey, optionLabelKey, options } = defineProps<CheckboxGroupFieldProps<T>>();

const { t } = useTranslation();
const { value, setValue } = useField<(string | number)[]>(name);

const isCheckAll = (checkedCount: number) => checkedCount === options.length;
const isIndeterminate = (checkedCount: number) => checkedCount > 0 && checkedCount < options.length;

const selectAll = ref(false);
const indeterminate = ref(false);

watch(value, () => {
  const checkedCount = value.value?.length || 0;
  selectAll.value = isCheckAll(checkedCount);
  indeterminate.value = isIndeterminate(checkedCount);
});

const handleCheckAllChange = (val: boolean) => {
  indeterminate.value = false;
  const optionsIds = val ? options.map(item => item[optionValueKey] as string | number) : [];
  setValue(optionsIds);
};

const handleCheckedChange = (values: (string | number)[]) => {
  const checkedCount = values.length;
  selectAll.value = isCheckAll(checkedCount);
  indeterminate.value = isIndeterminate(checkedCount);
  setValue(values);
};
</script>

<style scoped></style>