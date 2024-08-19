<template>
  <div class="h-dvh px-4">
    <el-menu
      :default-active="activeMenu"
      :router="true"
    >
      <template
        v-for="item in authorizedMenus"
        :key="item.key"
      >
        <AppMenuItem :item="item" />
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { menus } from '@/constants';
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import type { MenuItem } from '@/types/menu';
import { ArrayUtils } from '@/utils/common';
import AppMenuItem from './AppMenuItem.vue';

const route = useRoute();
const store = useCurrentUserStore();

const activeMenu = ref<string>('');
const authorizedMenus = ref<MenuItem[]>(getAuthorizedMenus(menus));

onMounted(() => {
  activeMenu.value = route.path;
});

watchEffect(() => {
  authorizedMenus.value = getAuthorizedMenus(menus);
  activeMenu.value = route.path;
});

function getAuthorizedMenus(menus: MenuItem[]): MenuItem[] {
  const authorizedMenus: MenuItem[] = [];
  for (const menu of menus) {
    if (store.isAuthorize(menu.authorities) && ArrayUtils.isEmpty(menu.subMenus)) {
      authorizedMenus.push(menu);
    } else if (!ArrayUtils.isEmpty(menu.subMenus)) {
      const subMenus = getAuthorizedMenus(menu.subMenus ?? []);
      if (!ArrayUtils.isEmpty(subMenus)) {
        authorizedMenus.push({ ...menu, subMenus });
      }
    }
  }
  return authorizedMenus;
}
</script>

<style scoped>
</style>
