<template>
  <el-avatar
    :size
    :src
    class="mr-2"
    fit="fit"
  >
    <el-avatar :icon="UserFilled" />
  </el-avatar>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue';

type AvatarProps = {
  size?: number;
  src: string | undefined;
};

withDefaults(defineProps<AvatarProps>(), {
  size: 38
});
</script>

<style scoped></style>
