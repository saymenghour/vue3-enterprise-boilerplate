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
import { menus } from '@/resources/menu';
import BrandLogo from '@/components/Layout/Brand/BrandLogo.vue';
</script>

<style scoped></style>
