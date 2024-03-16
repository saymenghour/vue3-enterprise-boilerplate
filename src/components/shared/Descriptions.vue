<template>
  <div
    v-for="field in props.fields"
    :key="field.label"
  >
    <div
      v-if="field.type === 'section'"
      class="text-base font-semibold my-2 rounded-md bg-accent"
    >
      <div class="pl-4 py-2">
        {{ field.label }}
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
      :class="{ 'px-4 py-2': field.type === 'section' }"
    >
      <div
        v-for="item in field.fields ?? [field]"
        :key="item.label"
        class="mb-2"
      >
        <p class="text-sm font-semibold mb-1">
          {{ item.label }}
        </p>
        <div>{{ item.value ?? '-' }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

export type DescriptionsField =
  | {
      label: string;
      value?: never;
      type?: 'section';
      fields: DescriptionsField[];
    }
  | {
      label: string;
      value?: string;
      type?: never;
      fields?: never;
    };

const props = defineProps<{
  fields: DescriptionsField[];
}>();
</script>

<style scoped></style>
