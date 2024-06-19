<template>
  <Tag
    v-if="state"
    :type="state.type"
    :label="state.label"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Tag } from '@/components';
import type { TagProps } from '@/types';
import { useI18n } from '@/composables';

type RoleStatusProps = {
  status: string | undefined;
}

const { status } = defineProps<RoleStatusProps>();
const { t } = useI18n();

const roleStatus = computed<Record<string, TagProps>>(() => ({
  ACTIVE: {
    label: t('active'),
    type: "success"
  }
}));

const state = computed(() => roleStatus.value[status ?? ""]);
</script>

<style scoped></style>