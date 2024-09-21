<template>
  <SelectField
    :required
    :name
    :loading="isLoading"
    :label="t('branch.label')"
    :options="data"
    option-label="nameEn"
    option-value="code"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { onUnmounted } from 'vue';

import { SelectField } from '@/components';
import { useTranslation } from '@/composables';
import { getFetchBranchAutocompleteApiQueryKey, useFetchMasterDataByDataTypeQuery } from '../branchService';

interface BranchAutocompleteProps {
  name: string;
  required?: boolean;
}

const emit = defineEmits<{
  change: [id: string];
}>();

defineProps<BranchAutocompleteProps>();

const queryClient = useQueryClient();
const { t } = useTranslation();
const { data, isLoading } = useFetchMasterDataByDataTypeQuery();

function onChange(id: string) {
  emit('change', id);
}

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchBranchAutocompleteApiQueryKey() });
});
</script>

<style scoped></style>