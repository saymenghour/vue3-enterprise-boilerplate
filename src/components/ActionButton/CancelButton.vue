<template>
  <Button @click="goBack()">
    {{ t('cancel') }}
  </Button>
</template>

<script setup lang="ts">
import router from '@/router';
import { useI18n } from '@/composables';
import Button from '../Button.vue';

const { t } = useI18n();

const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
