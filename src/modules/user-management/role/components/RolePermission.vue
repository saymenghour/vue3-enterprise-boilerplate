<template>
  <section class="my-4">
    <SectionTitle class="pb-3">
      {{ t('permissions') }}
    </SectionTitle>
    <Loading v-if="isLoading" />
    <div
      v-else
      class="grid grid-cols-3 gap-6"
    >
      <Card
        v-for="resource in resources"
        :key="resource.id"
        class="!round !rounded-2xl !border-white"
      >
        <CheckboxGroupField
          :label="resource.nameEn"
          option-value-key="code"
          option-label-key="nameEn"
          :name="`permission.${resource.code}`" 
          :options="resource.permissions"
        />
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card, CheckboxGroupField, Loading, SectionTitle } from '@/components';
import { useI18n } from '@/composables';
import { useQueryClient } from '@tanstack/vue-query';
import { onUnmounted } from 'vue';
import { getFetchResourceWithPermissionsQueryKey, useFetchResourceWithPermissions } from '../../resource/resourceService';

const queryClient = useQueryClient();
const { t } = useI18n();

const { isLoading, data: resources } = useFetchResourceWithPermissions();

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchResourceWithPermissionsQueryKey() });
});
</script>

<style scoped>

</style>