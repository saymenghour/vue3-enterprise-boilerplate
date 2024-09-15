<template>
  <MultiSelectField
    :name
    display="chip"
    :required
    :loading="isLoading"
    :label="t('role.label')"
    :options="data"
    option-label="nameEn"
    option-value="id"
  />
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { onUnmounted } from 'vue';

import { MultiSelectField } from '@/components';
import { useTranslation } from '@/composables';
import { getFetchRoleAutocompleteQueryKey, useFetchRoleAutocomplete } from '../roleService';

interface BranchAutocompleteProps {
  name?: string;
  required?: boolean;
}

withDefaults(defineProps<BranchAutocompleteProps>(), {
  name: 'roleIds',
  required: true
});

const queryClient = useQueryClient();
const { t } = useTranslation();
const { data, isLoading } = useFetchRoleAutocomplete();

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchRoleAutocompleteQueryKey() });
});
</script>

<style scoped></style>