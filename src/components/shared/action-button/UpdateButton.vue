<template>
  <Button
    type="submit"
    variant="primary"
    :loading
  >
    <Save class="mr-2 h-4 w-4" />
    {{ t('update') }}
  </Button>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables';
import { Save } from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';

const { t } = useI18n();

defineProps<{
  loading?: boolean;
}>();
</script>

<style scoped></style>
