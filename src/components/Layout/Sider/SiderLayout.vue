<template>
  <div class="h-screen border-r border-color-border">
    <el-aside>
      <el-scrollbar>
        <MenuViewVue :menus="menus" />
      </el-scrollbar>
    </el-aside>
  </div>
</template>


<script setup lang="ts">
import MenuViewVue from "../Menu/MenuView.vue";
import { menus } from "@/resources/menu";
</script>

<style scoped>
</style>