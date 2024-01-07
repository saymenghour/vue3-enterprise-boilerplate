<template>
  <div class="common-layout">
    <el-container>
      <Sider /> 
      <el-container :class="'is-vertical dark:text-slate-400 dark:bg-slate-900'">
        <Header />
        <Content>
          <slot />
        </Content>
      </el-container> 
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header/HeaderLayout.vue";
import Sider from "./Sider/SiderLayout.vue";
import Content from "./Content/ContentLayout.vue";
</script>

<style scoped></style>