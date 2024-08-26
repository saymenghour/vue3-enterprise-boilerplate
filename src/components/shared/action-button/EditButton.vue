<template>
  <Button
    :label="label ?? t('edit')"
    icon="pi pi-pen-to-square"
    as="router-link"
    :to="link"
  />
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { useTranslation } from '@/composables';
import { computed } from 'vue';

type ButtonProps = {
  label: string;
  path: string;
};

const { label, path } = defineProps<ButtonProps>();
const { t } = useTranslation();

const link = computed(() => (path ? { path } : ''));
</script>

<style scoped></style>
