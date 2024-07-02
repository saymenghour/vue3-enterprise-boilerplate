<template>
  <div class="common-layout">
    <el-container>
      <SiderLayout />
      <el-container class="is-vertical">
        <HeaderLayout />
        <ContentLayout>
          <slot />
        </ContentLayout>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import ContentLayout from './Content/ContentLayout.vue';
import HeaderLayout from './Header/HeaderLayout.vue';
import SiderLayout from './Sider/SiderLayout.vue';

const { fetchCurrentUser } = useCurrentUserStore();
fetchCurrentUser();
</script>

<style scoped></style>
