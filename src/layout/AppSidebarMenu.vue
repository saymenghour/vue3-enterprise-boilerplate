<template>
  <div class="h-full overflow-auto px-3">
    <Menu :menus="authorizedMenus">
      <template #title="{ item }">
        {{ t(item.label) }}
      </template>
    </Menu>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { useTranslation } from '@/composables';
import { menus } from '@/constants';
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import type { MenuItem } from '@/types/menu';
import { ArrayUtils } from '@/utils/common';
import Menu from './Menu.vue';

const { t } = useTranslation();
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

<style scoped></style>
