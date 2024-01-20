<template>
  <el-menu
    :default-active="activeMenu"
    :router="true"
  >
    <template v-for="item in menus">
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
          @click="console.log('a')"
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
import type { MenuItem } from '@/types/menu';
import { useI18n } from '@/hooks';

defineProps<{
  menus: MenuItem[]
}>();

const { t } = useI18n();
const route = useRoute();

const activeMenu = ref<string>('');

onMounted(() => {
  activeMenu.value = route.path;
});

watch(() => route.path, (path: string) => {
  activeMenu.value = path;
});

const isActive = (path: string): string => {
  return activeMenu.value == path ? '!text-menu-active-color bg-menu-active-bg-color' : '';
};

</script>

<style scoped></style>