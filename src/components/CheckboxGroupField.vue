<template>
  <section class="flex justify-between">
    <el-checkbox
      v-model="checkAll"
      :indeterminate="indeterminate"
      @change="handleCheckAllChange"
    >
      <span>Check all</span>
    </el-checkbox>
  </section>
  <Divider class="!my-2" />

  <el-checkbox-group
    v-model="value"
    class="grid grid-cols-1"
    @change="handleCheckedChange"
  >
    <el-checkbox
      v-for="item in options"
      :key="item[valueKey as string]"
      :value="item[valueKey as string]"
      :label="item[labelKey as string]"
    />
  </el-checkbox-group>
</template>

<script setup lang="ts" generic="T extends Record<string, string | number>">
import { ref, watch } from 'vue';
import Divider from './Divider.vue';
import { useField } from 'vee-validate';

type CheckboxGroupFieldProps<T> = {
  labelKey: keyof T;
  valueKey: keyof T;
  name: string;
  options: T[];
}

const { name, valueKey, options } = defineProps<CheckboxGroupFieldProps<T>>();

const { value, setValue } = useField<(string | number)[]>(name);

const isCheckAll = (checkedCount: number) => checkedCount === options.length;
const isIndeterminate = (checkedCount: number) => checkedCount > 0 && checkedCount < options.length;

const checkAll = ref(false);
const indeterminate = ref(false);

watch(value, () => {
  const checkedCount = value.value?.length || 0;
  checkAll.value = isCheckAll(checkedCount);
  indeterminate.value = isIndeterminate(checkedCount);
});

const handleCheckAllChange = (val: boolean) => {
  indeterminate.value = false;
  const optionsIds = val ? options.map(item => item[valueKey] as string | number) : [];
  setValue(optionsIds);
};

const handleCheckedChange = (values: (string | number)[]) => {
  const checkedCount = values.length;
  checkAll.value = isCheckAll(checkedCount);
  indeterminate.value = isIndeterminate(checkedCount);
  setValue(values);
};
</script>

<style scoped></style>