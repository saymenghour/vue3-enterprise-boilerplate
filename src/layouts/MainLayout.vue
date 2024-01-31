<template>
  <div class="common-layout">
    <el-container>
      <Sider />
      <el-container class="is-vertical">
        <Header />
        <Content>
          <slot />
        </Content>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import Content from './Content/ContentLayout.vue';
import Header from './Header/HeaderLayout.vue';
import Sider from './Sider/SiderLayout.vue';
import { fetchCurrentUser } from '@/modules/current-user/currentUserService';

onMounted(() => {
  fetchCurrentUser();
});
</script>

<style scoped></style>
