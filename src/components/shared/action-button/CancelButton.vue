<template>
  <Button @click="goBack()">
    {{ t('cancel') }}
  </Button>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables';
import router from '@/router';
import Button from '@/components/ui/Button.vue';

const { t } = useI18n();

const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
