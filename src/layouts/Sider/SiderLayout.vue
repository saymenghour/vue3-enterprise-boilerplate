<template>
  <div class="h-dvh">
    <el-aside>
      <BrandLogo />
      <el-scrollbar>
        <MenuView />
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang="ts" setup>
import BrandLogo from '../Brand/BrandLogo.vue';
import MenuView from '../Menu/MenuView.vue';
</script>

<style scoped></style>
