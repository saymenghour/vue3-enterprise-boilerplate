<template>
  <FormField
    v-slot="{ componentField }"
    :name="name"
  >
    <FormItem>
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <Input
          type="text"
          :placeholder="placeholder"
          v-bind="componentField"
        />
      </FormControl>
      
      <FormDescription v-if="!!description">
        <p>{{ description }}</p>
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<script setup lang="ts">
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/lib/shadcn/ui/form';
import { Input } from '@/lib/shadcn/ui/input';

type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
}

const {
  name,
  label,
  ...rest
} = defineProps<InputProps>();
</script>

<style scoped>

</style>