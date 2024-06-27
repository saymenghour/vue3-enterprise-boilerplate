<template>
  <Section>{{ t('permissions') }}</Section>
  <Box>
    <Transition name="fade">
      <Loading v-if="isLoading" />
      <div
        v-else
        class="grid grid-cols-3 gap-6"
      >
        <Card
          v-for="resource in resources"
          :key="resource.id"
        >
          <CheckboxGroupField
            value-key="code"
            label-key="nameEn"
            :name="`permission.${resource.code}`" 
            :options="resource.permissions"
          />
        </Card>
      </div>
    </Transition>
  </Box>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useQueryClient } from '@tanstack/vue-query';
import { Box, Card, CheckboxGroupField, Loading, Section } from '@/components';
import { getFetchResourceWithPermissionsQueryKey, useFetchResourceWithPermissions } from '../../resource/resourceService';
import { useI18n } from '@/composables';

const queryClient = useQueryClient();
const { t } = useI18n();

const { isLoading, data: resources } = useFetchResourceWithPermissions();

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: getFetchResourceWithPermissionsQueryKey() });
});
</script>

<style scoped>

</style>