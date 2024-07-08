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
import Button from '@/components/ui/Button.vue';
import { useTranslation } from '@/composables';
import { Save } from 'lucide-vue-next';

const { t } = useTranslation();

defineProps<{
  loading?: boolean;
}>();
</script>

<style scoped></style>
