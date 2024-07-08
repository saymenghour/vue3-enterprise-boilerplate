<template>
  <Button @click="goBack()">
    {{ t('cancel') }}
  </Button>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { useTranslation } from '@/composables';
import router from '@/router';

const { t } = useTranslation();

const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
