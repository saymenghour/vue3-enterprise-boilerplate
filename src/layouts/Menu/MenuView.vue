<template>
  <el-menu
    :default-active="activeMenu"
    :router="true"
  >
    <template v-for="item in authorizedMenus">
      <el-menu-item
        v-if="!item.subMenus"
        :key="item.label"
        :class="[isActive(item.key)]"
        :index="item.key"
      >
        {{ t(item.label) }}
      </el-menu-item>

      <el-sub-menu
        v-else
        :key="item.key"
        :index="item.key"
      >
        <template #title>
          {{ t(item.label) }}
        </template>
        <el-menu-item
          v-for="subMenu in item.subMenus"
          :key="subMenu.key"
          :class="isActive(subMenu.key)"
          :index="subMenu.key"
          :label="subMenu.label"
        >
          {{ t(subMenu.label) }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { menus } from '@/constants';
import { useI18n } from '@/hooks';
import type { MenuItem } from '@/types/menu';
import { ArrayUtils } from '@/utils/common';
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';

const { t } = useI18n();
const route = useRoute();
const store = useCurrentUserStore();
const { authorities } = storeToRefs(store);

const activeMenu = ref<string>('');

onMounted(() => {
  activeMenu.value = route.path;
});

watch(
  () => route.path,
  (path: string) => {
    activeMenu.value = path;
  }
);

function isActive(path: string): string {
  return activeMenu.value == path ? '!text-menu-active-color !bg-menu-active-bg-color' : '';
}

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

const authorizedMenus = ref<MenuItem[]>(getAuthorizedMenus(menus));
watch(
  () => authorities.value,
  () => {
    authorizedMenus.value = getAuthorizedMenus(menus);
  }
);
</script>

<style scoped></style>
