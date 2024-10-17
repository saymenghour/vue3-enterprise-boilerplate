<template>
  <main class="app-main bg-white h-full">
    <div class="xs:m-5 px-5 pt-5 h-full bg-slate-50 rounded-tl-3xl">
      <div
        v-if="loading"
        class="flex justify-center"
      >
        Loading...
      </div>
      <UnauthorizeView v-else-if="!isAuthorize" />
      <slot v-else />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { useAuthorization } from '@/composables/useAuthorization';
import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import UnauthorizeView from '@/modules/exception/UnauthorizeView.vue';
import { storeToRefs } from 'pinia';

const route = useRoute();
const store = useCurrentUserStore();
const { loading } = storeToRefs(store);
const { hasAuthority } = useAuthorization();
const isAuthorize = ref<boolean>(true);

watchEffect(() => {
  isAuthorize.value = hasAuthority(route.meta.authorities);
});
</script>

<style scoped></style>
