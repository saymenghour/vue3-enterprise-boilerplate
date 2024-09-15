<template>
  <SelectField
    :required
    name="branchCode"
    :loading="isLoading"
    :label="t('branch.label')"
    :options="data"
    option-label="nameEn"
    option-value="code"
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

withDefaults(defineProps<BranchAutocompleteProps>(), {
  required: true
});

const queryClient = useQueryClient();
const { t } = useTranslation();
const { data, isLoading } = useFetchMasterDataByDataTypeQuery();

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchBranchAutocompleteApiQueryKey() });
});
</script>

<style scoped></style>