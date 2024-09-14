<template>
  <SelectField
    :loading="isLoading"
    name="type"
    :label="t('role.roleType')"
    :options="data"
    option-label="name"
    option-value="value"
  />
</template>

<script setup lang="ts">
import { SelectField } from '@/components';
import { useTranslation } from '@/composables';
import { getFetchMasterDataByDataTypeQuery, getFetchMasterDataByDataTypeQueryKey } from '@/modules/master-data/MasterDataService';
import { useQueryClient } from '@tanstack/vue-query';
import { onUnmounted } from 'vue';

const queryClient = useQueryClient();

const { t } = useTranslation();
const { data, isLoading } = getFetchMasterDataByDataTypeQuery({ type: 'ROLE_TYPE' });


onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchMasterDataByDataTypeQueryKey() });
});
</script>

<style scoped></style>