<template>
  <div>
    <div class="flex flex-col gap-1 min-h-[88px] app-form-item">
      <label
        v-if="hasLabel"
        :for="name"
        :class="required ? 'app-form-item-required' : undefined"
      >
        {{ currentLabel }}
      </label>

      <slot />

      <small
        v-if="errorMessage"
        class="app-form-item-error"
      >
        {{ errorMessage }}
      </small>

      <slot name="extra" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name: string;
  required?: boolean;
  label: string;
  errorMessage?: string;
}>();

const hasLabel = computed(() => !!props.label);
const errorMessage = computed(() => props.errorMessage);

const currentLabel = computed(
  () => `${props.label || ''}`
);

</script>

<style scoped>
.app-form-item>.app-form-item-required::after {
  content: '*';
  color: var(--color-danger);
  margin-left: 4px;
}

.app-form-item>.app-form-item-error {
  color: var(--color-danger);
}
</style>