<template>
  <div class="p-5">
    <UnauthorizeView v-if="!isAuthorize" />
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import UnauthorizeView from '@/modules/exceptions/UnauthorizeView.vue';

const route = useRoute();
const store = useCurrentUserStore();
const { authorities } = storeToRefs(store);
const isAuthorize = ref<boolean>(true);

watch(
  () => authorities.value,
  () => {
    isAuthorize.value = store.isAuthorize(route.meta.authorities);
  }
);
</script>

<style scoped></style>
