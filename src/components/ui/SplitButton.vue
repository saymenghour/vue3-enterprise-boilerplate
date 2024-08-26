<template>
  <SplitButton
    :label
    :model="items"
    :size="size ?? 'small'"
    :severity="severity ?? 'secondary'"
    @click="click"
  />
</template>

<script setup lang="ts">
import SplitButton from 'primevue/splitbutton';

type SplitButtonProps = {
  label: string;
  items: any[];
  size?: 'large' | 'small';
  severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | 'help';
}

defineProps<SplitButtonProps>();

const emit = defineEmits<{
  (e: 'onClick'): void;
}>();

const click = () => {
  emit('onClick');
};
</script>

<style scoped>

</style>