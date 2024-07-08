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

type UserStatusProps = {
  status: string | undefined;
};

const { status } = defineProps<UserStatusProps>();
const { t } = useTranslation();

const userStatus = computed<Record<string, TagProps>>(() => ({
  ACTIVE: {
    label: t('active'),
    type: 'success'
  }
}));

const state = computed(() => userStatus.value[status ?? '']);
</script>

<style scoped></style>
