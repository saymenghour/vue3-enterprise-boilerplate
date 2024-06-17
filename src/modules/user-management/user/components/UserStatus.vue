<template>
  <Tag
    v-if="status"
    :type="status.type"
    :label="status.label"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Tag } from '@/components';
import type { TagProps } from '@/types';
import { useI18n } from '@/composables';
import type { User } from '../userType';

type UserStatusProps = {
  user: User
}

const { user } = defineProps<UserStatusProps>();
const { t } = useI18n();

const userStatus = computed<Record<string, TagProps>>(() => ({
  ACTIVE: {
    label: t('active'),
    type: "success"
  }
}));

const status = computed(() => userStatus.value[user.status]);
</script>

<style scoped></style>