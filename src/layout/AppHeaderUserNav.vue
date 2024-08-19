<script setup lang="ts">
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import { getInitials } from '@/utils/common';
import { storeToRefs } from 'pinia';
import Avatar from 'primevue/avatar';
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
  <Avatar
    :label="getInitials(user?.displayName)"
    style="background-color: #ece9fc; color: #2a1261"
    shape="circle"
    aria-haspopup="true"
    aria-controls="overlay_menu"
    class="!h-10 !w-10"
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
        <Avatar
          :image="user?.profileImageUrl"
          :label="user?.profileImageUrl ? undefined : getInitials(user?.displayName)"
          style="background-color: #ece9fc; color: #2a1261"
          shape="circle"
          class="!h-10 !w-10 mr-2"
        />
        <div class="flex flex-col space-y-2">
          <p class="font-medium leading-none">
            {{ user?.displayName }}
          </p>
          <p class="leading-none text-muted-foreground">
            {{ user?.email }}
          </p>
        </div>
      </span>
    </template>
    <template #submenulabel="{ item }">
      <span class="text-primary">{{ item.label }}</span>
    </template>
    <template #item="{ item, props }">
      <a
        v-ripple
        class="flex items-center"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <Badge
          v-if="item.badge"
          class="ml-auto"
          :value="item.badge"
        />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
        >{{ item.shortcut }}</span>
      </a>
    </template>
  </Menu>
</template>