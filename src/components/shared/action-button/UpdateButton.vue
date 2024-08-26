<template>
  <Button
    type="submit"
    :loading
    :label="label ?? t('update')"
    icon="pi pi-save"
  />
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { useTranslation } from '@/composables';

type UpdateButtonProps = {
  loading?: boolean;
  label?: string;
};

defineProps<UpdateButtonProps>();
const { t } = useTranslation();
</script>

<style scoped></style>
