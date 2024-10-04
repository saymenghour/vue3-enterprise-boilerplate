<template>
  <li>
    <RouterLink :to="menu.to ?? ''">
      <div
        class="menu-item flex items-center cursor-pointer rounded-lg hover:rounded-lg p-3"
      >
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

        <span :class="`menu-item--title ml-3 ${collapsed ? 'w-0' : 'w-full'}`">
          <slot
            v-if="$slots.title"
            name="title"
            :item="menu"
          />
          <span v-else>{{ menu.label }}</span>
        </span>
      </div>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import type { MenuItem as MenuItemType } from '@/types';
import { storeToRefs } from 'pinia';
import { useUseLayoutStore } from './useLayout';

type MenuItemProps = {
  menu: MenuItemType;
};

defineProps<MenuItemProps>();

const store = useUseLayoutStore();
const { collapsed } = storeToRefs(store);

</script>

<style scoped>
.menu-item:hover {
  color: var(--menu-hover-color);
  background: var(--menu-hover-background);
}

.menu-item .menu-item--title {
  overflow: hidden;
  transition: 0.2s ease-in-out;
}
</style>