<template>
  <div class="h-screen border-r dark:text-slate-400 bg-white dark:bg-slate-900 dark:border-r-gray-700">
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