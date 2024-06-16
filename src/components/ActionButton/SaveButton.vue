<template>
  <Button
    type="submit"
    variant="primary"
    :loading
  >
    <Save class="mr-2 h-4 w-4" />
    {{ t('button.save') }}
  </Button>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables';
import Button from '../Button.vue';
import { Save } from 'lucide-vue-next';

const { t } = useI18n();

defineProps<{
  loading?: boolean;
}>();
</script>

<style scoped>

</style>