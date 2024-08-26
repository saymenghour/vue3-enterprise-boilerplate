<template>
  <Tag
    v-if="state"
    :severity="state.severity"
    :label="state.label"
    :icon="state.icon"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Tag } from '@/components';
import { useTranslation } from '@/composables';
import type { TagProps } from '@/types';

type UserStatusProps = {
  status: string | undefined;
};

const { status } = defineProps<UserStatusProps>();
const { t } = useTranslation();

const userStatus = computed<Record<string, TagProps>>(() => ({
  ACTIVE: {
    label: t('active'),
    icon: 'pi pi-check',
    severity: 'success'
  },
  DEACTIVATED: {
    label: t('deactivated'),
    icon: 'pi pi-times',
    severity: 'danger'
  }
}));

const state = computed(() => userStatus.value[status ?? '']);
</script>

<style scoped></style>
