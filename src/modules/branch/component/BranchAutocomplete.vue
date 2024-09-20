<template>
  <SelectField
    :required
    name="branchCode"
    :loading="isLoading"
    :label="t('branch.label')"
    :options="data"
    option-label="nameEn"
    option-value="code"
    @on-change="onChange"
  />
</template>

<script setup lang="ts">
import { SelectField } from '@/components';
import { useTranslation } from '@/composables';
import { useQueryClient } from '@tanstack/vue-query';
import { onUnmounted } from 'vue';
import { getFetchBranchAutocompleteApiQueryKey, useFetchMasterDataByDataTypeQuery } from '../branchService';

interface BranchAutocompleteProps {
  required?: boolean;
}

const emit = defineEmits<{
  onChange: [id: string];
}>();

withDefaults(defineProps<BranchAutocompleteProps>(), {
  required: true
});

const queryClient = useQueryClient();
const { t } = useTranslation();
const { data, isLoading } = useFetchMasterDataByDataTypeQuery();

function onChange(id: string) {
  emit('onChange', id);
}

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchBranchAutocompleteApiQueryKey() });
});
</script>

<style scoped></style>