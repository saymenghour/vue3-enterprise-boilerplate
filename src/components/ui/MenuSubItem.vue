<template>
  <li class="grid gap-0.5">
    <div
      class="menu-item flex items-center cursor-pointer rounded-lg p-3 hover:bg-color-primary"
      @click="toggleSubMenu"
    >
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

        <slot
          v-if="$slots.title"
          name="title"
          :item="menu"
        />
        <span v-else>{{ menu.label }}</span>
      </div>

      <div>
        <ChevronDown
          :size="16"
          :class="`${show ? '-rotate-180' : ''} duration-200`"
        />
      </div>
    </div>

    <ul :class="`sub-menu ${show ? 'show' : ''}`">
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
import { ref } from 'vue';
import MenuItem from './MenuItem.vue';

type MenuItemProps = {
  menu: MenuItemType;
};

defineProps<MenuItemProps>();
const show = ref<boolean>(false);

function toggleSubMenu() {
  show.value = !show.value;
}
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
</style>