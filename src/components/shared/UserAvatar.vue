<template>
  <Avatar
    :src
    :label="src ? undefined : getInitials(user?.displayName)"
    style="background-color: #ece9fc; color: #2a1261"
    shape="circle"
    class="!h-10 !w-10 mr-2"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import { getInitials } from '@/utils/common';
import Avatar from '../ui/Avatar.vue';

const store = useCurrentUserStore();
const { user } = storeToRefs(store);

const src = computed(() => user?.value?.profileImageUrl);
</script>

<style scoped>

</style>