<template>
  <Tag
    v-if="state"
    :type="state.type"
    :label="state.label"
  />
</template>

<script setup lang="ts">
import { Tag } from '@/components';
import { useTranslation } from '@/composables';
import type { TagProps } from '@/types';
import { computed } from 'vue';

type RoleStatusProps = {
  status: string | undefined;
};

const { status } = defineProps<RoleStatusProps>();
const { t } = useTranslation();

const roleStatus = computed<Record<string, TagProps>>(() => ({
  ACTIVE: {
    label: t('active'),
    type: 'success'
  }
}));

const state = computed(() => roleStatus.value[status ?? '']);
</script>

<style scoped></style>
