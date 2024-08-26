<template>
  <Avatar
    :image="src"
    :label="label"
    :shape="shape ?? 'circle'"
  />
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar';

type AvatarProps = {
  src: string | undefined;
  label?: string | undefined;
  shape?: 'circle' | 'square';
};

defineProps<AvatarProps>();
</script>

<style scoped></style>
