<template>
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

<script lang="ts" setup>
import { useTranslation } from '@/composables';
import type { MenuItem } from '@/types';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

defineProps<{
  item: MenuItem;
}>();

const { t } = useTranslation();
const route = useRoute();

const activeMenu = ref<string>('');

onMounted(() => {
  activeMenu.value = route.path;
});

function isActive(path: string): string {
  return activeMenu.value == path ? '!text-menu-active-color !bg-menu-active-bg-color' : '';
}
</script>

<style scoped>
</style>
