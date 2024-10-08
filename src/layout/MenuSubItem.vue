<template>
  <div
    class="menu-item flex items-center cursor-pointer rounded-lg p-3 hover:bg-color-primary"
    @click="toggleSubMenu"
  >
    <div class="flex">
      <div class="menu-item--icon mr-2">
        <slot
          v-if="$slots.icon"
          name="icon"
          :item="menu"
        />
        <component
          :is="menu.icon"
          v-else
          size="20"
        />
      </div>
    </div>

    <div :class="`menu-item--title flex items-center justify-between ${collapsed ? 'w-0' : 'w-full'}`">
      <div>
        <slot
          v-if="$slots.title"
          name="title"
          :item="menu"
        />
        <span v-else>{{ menu.label }}</span>
      </div>
      <ChevronDown
        :size="16"
        :class="`${showSubMenu ? '-rotate-180' : ''} duration-200`"
      />
    </div>
  </div>

  <ul :class="`sub-menu ${showSubMenu ? 'show' : ''} ml-8`">
    <div class="overflow-hidden">
      <li
        v-for="subMenu in menu.subMenus ?? []"
        :key="subMenu.key ?? subMenu.to"
      >
        <MenuItem
          :menu="subMenu"
          class="p-0"
        >
          <template #title="{ item }">
            <slot
              name="title"
              :item="item"
            />
          </template>
        </MenuItem>
      </li>
    </div>
  </ul>
</template>

<script setup lang="ts">
import type { MenuItem as MenuItemType } from '@/types';
import { ChevronDown } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';
import MenuItem from './MenuItem.vue';
import { useUseLayoutStore } from './useLayout';

type MenuItemProps = {
  menu: MenuItemType;
};

defineProps<MenuItemProps>();

const store = useUseLayoutStore();
const { toggleSubMenu } = store;
const { collapsed, showSubMenu } = storeToRefs(store);
</script>

<style scoped>
.sub-menu {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.2s ease-in-out;

  >div {
    overflow: hidden;
  }
}

.sub-menu.show {
  grid-template-rows: 1fr;
}

.menu-item:hover {
  color: var(--menu-hover-color);
  background: var(--menu-hover-background);
}

.menu-item .menu-item--title {
  overflow: hidden;
  transition: 0.2s ease-in-out;
}
</style>