<template>
  <Button
    type="submit"
    :loading
    :label="label ?? t('save')"
    icon="pi pi-save"
  />
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { useTranslation } from '@/composables';

type SaveButtonProps = {
  loading?: boolean;
  label?: string;
};

defineProps<SaveButtonProps>();
const { t } = useTranslation();
</script>

<style scoped></style>
