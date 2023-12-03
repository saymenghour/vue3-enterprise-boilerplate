<template>
  <div class="h-screen border-r dark:text-slate-400 bg-white dark:bg-slate-900 dark:border-r-gray-700">
    <el-aside>
      <el-scrollbar>
        <el-menu>
          <template v-for="item in menus">
            <el-menu-item
              v-if="!item.subMenus"
              :key="item.key"
            >
              {{ t(item.label) }}
            </el-menu-item>

            <el-sub-menu
              v-else
              :key="item.label"
              :index="item.label"
            >
              <template #title>
                {{ t(item.label) }}
              </template>
              <el-menu-item
                v-for="child in item.subMenus"
                :key="child.key"
                :label="child.label"
              >
                {{ t(child.label) }}
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>


<script setup lang="ts">
import { useI18n } from "@/hooks";
import { menus } from "@/resources/Menu";

const { t } = useI18n();
</script>

<style scoped>
.el-aside {
  padding: 1rem;
}

.el-menu {
  border: unset;
}

.el-menu-item,
.el-sub-menu {
  border-radius: 0.5rem !important;
}
</style>