<template>
  <main class="app-main bg-white h-full">
    <div class="xs:m-5 px-5 pt-5 h-full bg-slate-50 rounded-tl-3xl">
      <UnauthorizeView v-if="!isAuthorize" />
      <slot v-else />
    </div>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import UnauthorizeView from '@/modules/exception/UnauthorizeView.vue';

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
