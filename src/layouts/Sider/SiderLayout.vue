<template>
  <div class="h-dvh border-r border-muted">
    <el-aside>
      <BrandLogo />
      <el-scrollbar>
        <MenuViewVue :menus="menus" />
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang="ts" setup>
import MenuViewVue from '../Menu/MenuView.vue';

import BrandLogo from '../Brand/BrandLogo.vue';
import { menus } from '@/constants';
</script>

<style scoped></style>
