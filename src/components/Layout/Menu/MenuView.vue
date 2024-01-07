<template>
  <el-menu
    :router="true"
    :default-active="activeMenu"
  >
    <template v-for="item in menus">
      <el-menu-item
        v-if="!item.subMenus"
        :key="item.label"
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
          :label="subMenu.label"
          :index="subMenu.key"
        >
          {{ t(subMenu.label) }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { MenuItem } from '@/types/menu';
import { useI18n } from '@/hooks';

defineProps<{
  menus: MenuItem[]
}>();

const { t } = useI18n();
const route = useRoute();

const activeMenu = ref<string>("");

onMounted(() => {
  activeMenu.value = route.path;
}),

watch(() => route.path, (path: string) => {
  activeMenu.value = path;
});

</script>

<style scoped></style>