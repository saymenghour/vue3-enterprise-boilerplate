<script setup lang="ts">
import UserAvatar from '@/components/shared/UserAvatar.vue';
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import { storeToRefs } from 'pinia';
import Menu from 'primevue/menu';
import { ref } from 'vue';

const store = useCurrentUserStore();
const { user } = storeToRefs(store);

const menu = ref();
const items = ref([
    {
        separator: true
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                shortcut: '⌘+Q'
            }
        ]
    },
]);

const toggle = (event: any) => {
    menu.value.toggle(event);
};
</script>

<template>
  <div class="flex flex-row items-center justify-end gap-2">
    <UserAvatar
      class="mr-0"
      @click="toggle"
    />
    <Menu
      id="overlay_menu"
      ref="menu"
      :model="items"
      :popup="true"
      class="w-full md:w-60"
    >
      <template #start>
        <span class="inline-flex items-center gap-1 px-3 py-4">
          <UserAvatar />
          <div class="flex flex-col space-y-2">
            <p class="font-medium leading-none">
              {{ user?.displayName }}
            </p>
            <p class="leading-none text-muted-foreground">
              @{{ user?.username }}
            </p>
          </div>
        </span>
      </template>
      <template #submenulabel="{ item }">
        <span class="text-primary">{{ item.label }}</span>
      </template>
      <template #item="{ item, props }">
        <a
          class="flex items-center"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >
            {{ item.shortcut }}
          </span>
        </a>
      </template>
    </Menu>
  </div>
</template>