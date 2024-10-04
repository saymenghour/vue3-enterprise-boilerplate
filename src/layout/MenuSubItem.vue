<template>
  <li>
    <div
      class="menu-item flex items-center cursor-pointer rounded-lg p-3 hover:bg-color-primary"
      @click="toggleSubMenu"
    >
      <div class="flex">
        <span>
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
        </span>
      </div>

      <div :class="`menu-item--title  ml-3 flex items-center justify-between ${collapsed ? 'w-0' : 'w-full'}`">
        <span>
          <slot
            v-if="$slots.title"
            name="title"
            :item="menu"
          />
          <span v-else>{{ menu.label }}</span>
        </span>
        <ChevronDown
          :size="16"
          :class="`${showSubMenu ? '-rotate-180' : ''} duration-200`"
        />
      </div>
    </div>

    <ul :class="`sub-menu ${showSubMenu ? 'show' : ''}`">
      <div class="overflow-hidden">
        <MenuItem
          v-for="subMenu in menu.subMenus ?? []"
          :key="subMenu.key ?? subMenu.to"
          :menu="subMenu"
          class="pl-5"
        >
          <template #title="{ item }">
            <slot
              name="title"
              :item="item"
            />
          </template>
        </MenuItem>
      </div>
    </ul>
  </li>
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
  transition: 0.3s ease-in-out;

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