<template>
  avatar
</template>

<script setup lang="ts">

type AvatarProps = {
  size?: number;
  src: string | undefined;
};

withDefaults(defineProps<AvatarProps>(), {
  size: 38
});
</script>

<style scoped></style>
