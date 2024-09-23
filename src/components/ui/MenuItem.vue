<template>
  <li>
    <RouterLink :to="menu.to ?? ''">
      <div class="menu-item flex items-center cursor-pointer rounded-lg p-3">
        <div class="flex grow">
          <span class="mr-3">
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

          <span>
            <slot
              v-if="$slots.title"
              name="title"
              :item="menu"
            />
            <span v-else>{{ menu.label }}</span>
          </span>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import type { MenuItem as MenuItemType } from '@/types';

type MenuItemProps = {
  menu: MenuItemType;
};

defineProps<MenuItemProps>();
</script>

<style scoped>
.menu-item:hover {
  color: var(--menu-hover-color);
  background: var(--menu-hover-background);
}
</style>