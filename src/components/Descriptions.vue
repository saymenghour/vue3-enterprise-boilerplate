<template>
  <div
    v-for="field in fields"
    :key="field.label"
  >
    <div
      v-if="field.type === 'section'"
      class="text-base font-semibold my-2 rounded-md bg-accent text-[#303133] dark:text-[#E5EAF3]"
    >
      <div class="pl-4 py-2">
        {{ field.label }}
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 text-[#303133] dark:text-[#E5EAF3]"
      :class="{ 'px-4 py-2': field.type === 'section' }"
    >
      <div
        v-for="item in field.fields ?? [field]"
        :key="item.label"
        class="mb-2 flex flex-col"
      >
        <span>{{ item.label }}</span>

        <span v-if="item.slotName">
          <slot :name="item.slotName" />
        </span>
        <span
          v-else
          class="font-medium"
        >
          {{ item.value ?? (displayDashIfValueIsNull ? '-' : '') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type DescriptionsFieldProps = {
  label: string;
  slotName?: string;
} & (
  | {
      value?: never;
      type?: 'section';
      fields: DescriptionsFieldProps[];
    }
  | {
      value?: string;
      type?: never;
      fields?: never;
    }
);

type DescriptionsProps = {
  fields: DescriptionsFieldProps[];
  displayDashIfValueIsNull?: boolean;
};

withDefaults(defineProps<DescriptionsProps>(), {
  displayDashIfValueIsNull: true
});
</script>

<style scoped></style>
