<template>
  <el-avatar
    :size
    :src
    class="mr-2"
  >
    <el-avatar :icon="UserFilled" />
  </el-avatar>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue';

type AvatarProps = {
  size?: number;
  src: string;
}

withDefaults(defineProps<AvatarProps>(), {
  size: 38
});
</script>

<style scoped>

</style>