<template>
  <ul class="min-w-11">
    <template
      v-for="menu in menus"
      :key="menu.key ?? menu.to"
    >
      <li>
        <MenuSubItem
          v-if="menu.subMenus?.length"
          :menu="menu"
        >
          <template #title="{ item }">
            <slot
              name="title"
              :item="item"
            />
          </template>
        </MenuSubItem>
    
        <MenuItem
          v-else
          :menu="menu"
        >
          <template #title="{ item }">
            <slot
              name="title"
              :item="item"
            />
          </template>
        </MenuItem>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { MenuItem as MenuItemType } from '@/types';
import MenuItem from './MenuItem.vue';
import MenuSubItem from './MenuSubItem.vue';

type MenuProps = {
  menus: MenuItemType[];
};

defineProps<MenuProps>();
</script>

<style scoped></style>