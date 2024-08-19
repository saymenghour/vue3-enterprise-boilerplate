<template>
  <div class="h-dvh">
    <el-aside>
      <BrandLogo />
      <el-scrollbar>
        <AppMenu />
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang="ts" setup>
import BrandLogo from './AppBrand.vue';
import AppMenu from './AppMenu.vue';
</script>

<style scoped></style>
