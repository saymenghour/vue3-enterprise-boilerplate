<template>
  <RouterLink :to="link">
    <Button>
      <Plus class="mr-1 h-4 w-4" />
      <span>{{ label }}</span>
    </Button>
  </RouterLink>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import Button from '../../ui/button/Button.vue';
import { computed } from 'vue';

type ButtonProps = {
  label: string;
  path: string;
}

const { label, path } = defineProps<ButtonProps>();

const link = computed(() => path ? { path } : "");
</script>

<style scoped>

</style>