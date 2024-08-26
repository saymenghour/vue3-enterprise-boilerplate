<template>
  <Button
    :label="label ?? t('cancel')"
    icon="pi pi-times"
    @click="goBack()"
  />
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { useTranslation } from '@/composables';
import router from '@/router';

type CancelButtonProps = {
  label?: string;
};

defineProps<CancelButtonProps>();
const { t } = useTranslation();

const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
